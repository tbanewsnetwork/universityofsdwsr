/* ---------------------------------------------------------------------------
   Course catalogue.

   To add a course, copy one block and change the values.
   track  : "Frontend" | "Software Engineering" | "Data & Databases" |
            "Artificial Intelligence" | "Agentic Systems" | "Documentation & Media"
   level  : "Foundation" | "Intermediate" | "Advanced"   (this colours the card)
   weeks  : number of weeks the course runs

   Nothing else needs to change — courses.html builds itself from this array.
--------------------------------------------------------------------------- */

window.SDWSR_COURSES = [
  {
    code: "FE-101",
    title: "HTML and CSS from zero",
    track: "Frontend",
    level: "Foundation",
    weeks: 6,
    summary: "Structure a page, style it, and make it work on a low-cost Android phone before it works on a laptop."
  },
  {
    code: "FE-140",
    title: "JavaScript for the browser",
    track: "Frontend",
    level: "Foundation",
    weeks: 8,
    summary: "Variables, functions, the DOM, events and fetch — taught by rebuilding parts of this university site."
  },
  {
    code: "FE-220",
    title: "Responsive interfaces and accessibility",
    track: "Frontend",
    level: "Intermediate",
    weeks: 6,
    summary: "Layout with flexbox and grid, keyboard navigation, screen-reader semantics, and testing on slow networks."
  },
  {
    code: "FE-260",
    title: "React and component thinking",
    track: "Frontend",
    level: "Intermediate",
    weeks: 8,
    summary: "State, props, hooks and routing. Ends with a deployed single-page application in your own repository."
  },
  {
    code: "SE-130",
    title: "Git, GitHub and working in the open",
    track: "Software Engineering",
    level: "Foundation",
    weeks: 4,
    summary: "Branches, pull requests, code review and issues. Every SDWSR student finishes this before anything else."
  },
  {
    code: "SE-210",
    title: "Software modelling and system design",
    track: "Software Engineering",
    level: "Intermediate",
    weeks: 8,
    summary: "Turn a requirement into diagrams, data models and an architecture a team can actually build."
  },
  {
    code: "SE-280",
    title: "Mobile app development",
    track: "Software Engineering",
    level: "Intermediate",
    weeks: 10,
    summary: "Build, test and publish a cross-platform app, with offline-first patterns for intermittent connectivity."
  },
  {
    code: "SE-340",
    title: "Testing, CI and deployment",
    track: "Software Engineering",
    level: "Advanced",
    weeks: 6,
    summary: "Automated tests, GitHub Actions pipelines, environments and releases that do not break on Friday."
  },
  {
    code: "DB-120",
    title: "Databases and SQL",
    track: "Data & Databases",
    level: "Foundation",
    weeks: 8,
    summary: "Tables, keys, joins and normalisation, practised on a real records system for a small clinic."
  },
  {
    code: "DB-250",
    title: "Backend APIs and data services",
    track: "Data & Databases",
    level: "Intermediate",
    weeks: 8,
    summary: "Design REST endpoints, handle authentication, and connect an application to a live database."
  },
  {
    code: "DB-310",
    title: "Data analysis and reporting",
    track: "Data & Databases",
    level: "Advanced",
    weeks: 6,
    summary: "Clean messy data, query it at scale, and produce reports decision-makers can read."
  },
  {
    code: "AI-150",
    title: "Foundations of artificial intelligence",
    track: "Artificial Intelligence",
    level: "Foundation",
    weeks: 6,
    summary: "What models are, how they learn, where they fail, and the ethics of deploying them in your community."
  },
  {
    code: "AI-240",
    title: "Python for machine learning",
    track: "Artificial Intelligence",
    level: "Intermediate",
    weeks: 10,
    summary: "Python, notebooks, numpy and pandas, then training and evaluating your first supervised models."
  },
  {
    code: "AI-320",
    title: "Building with large language models",
    track: "Artificial Intelligence",
    level: "Advanced",
    weeks: 8,
    summary: "Prompting, retrieval, evaluation and cost control for applications built on hosted models."
  },
  {
    code: "AG-300",
    title: "Agentic systems and tool use",
    track: "Agentic Systems",
    level: "Advanced",
    weeks: 8,
    summary: "Design agents that plan, call tools, and hand work back to a human safely. Capstone project included."
  },
  {
    code: "AG-360",
    title: "Automating real workflows",
    track: "Agentic Systems",
    level: "Advanced",
    weeks: 6,
    summary: "Take one slow process in a real organisation and rebuild it as a supervised automated workflow."
  },
  {
    code: "DM-110",
    title: "Technical writing and documentation",
    track: "Documentation & Media",
    level: "Foundation",
    weeks: 4,
    summary: "READMEs, guides and release notes. If nobody can read it, the software does not exist."
  },
  {
    code: "DM-210",
    title: "Video tutorials and documentary learning",
    track: "Documentation & Media",
    level: "Intermediate",
    weeks: 6,
    summary: "Script, record, edit and publish a teaching video on a phone, at a file size students can actually download."
  }
];
