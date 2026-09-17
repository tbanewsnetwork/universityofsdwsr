/* University of SDWSR — site behaviour
   No build step, no dependencies. Works on GitHub Pages as-is. */

(function () {
  "use strict";

  /* ---- mobile navigation ---------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.textContent = !open ? "Close" : "Menu";
    });
  }

  /* ---- mark the current page in the nav -------------------------------- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a[href]").forEach(function (link) {
    var target = link.getAttribute("href").split("/").pop();
    if (target === here) link.setAttribute("aria-current", "page");
  });

  /* ---- current year in the footer -------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- course catalogue: search + filter ------------------------------- */
  var list = document.getElementById("course-list");

  if (list && window.SDWSR_COURSES) {
    var search = document.getElementById("course-search");
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var empty = document.getElementById("course-empty");
    var count = document.getElementById("course-count");
    var activeTrack = "all";

    function render() {
      var q = (search ? search.value : "").trim().toLowerCase();

      var matches = window.SDWSR_COURSES.filter(function (c) {
        var inTrack = activeTrack === "all" || c.track === activeTrack;
        var haystack = (c.code + " " + c.title + " " + c.summary + " " + c.track).toLowerCase();
        return inTrack && (q === "" || haystack.indexOf(q) !== -1);
      });

      list.innerHTML = matches.map(function (c) {
        return (
          '<article class="course" data-level="' + c.level + '">' +
          '<div class="course__code">' + c.code + "</div>" +
          "<div><h3>" + c.title + "</h3><p>" + c.summary + "</p></div>" +
          '<div class="course__meta">' + c.level + "<br>" + c.weeks + " weeks<br>" + c.track + "</div>" +
          "</article>"
        );
      }).join("");

      if (empty) empty.hidden = matches.length !== 0;
      if (count) {
        count.textContent =
          matches.length + (matches.length === 1 ? " course" : " courses");
      }
    }

    if (search) search.addEventListener("input", render);

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
        activeTrack = chip.getAttribute("data-track");
        render();
      });
    });

    render();
  }

  /* ---- forms ------------------------------------------------------------
     Static hosting cannot process a form on its own. Point the form's
     action= at a form service (Formspree, Getform, Netlify Forms, Google
     Forms) and this handler posts it without leaving the page. Until an
     action is set, it shows the applicant what would be submitted.
  ------------------------------------------------------------------------ */
  document.querySelectorAll("form[data-remote]").forEach(function (form) {
    var status = form.querySelector(".form-status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var action = form.getAttribute("action") || "";

      function say(state, message) {
        if (!status) return;
        status.setAttribute("data-state", state);
        status.textContent = message;
      }

      if (action.indexOf("REPLACE_ME") !== -1 || action === "") {
        say(
          "error",
          "This form is not connected yet. Add your form endpoint to the action attribute in the HTML, then submissions will reach the admissions inbox."
        );
        return;
      }

      say("ok", "Sending…");

      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.reset();
          say("ok", "Received. Admissions replies to every application within five working days.");
        })
        .catch(function () {
          say("error", "That did not send. Email admissions@sdwsr.edu.lr and we will process it manually.");
        });
    });
  });
})();
