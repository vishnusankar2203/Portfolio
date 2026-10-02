// All content below comes from the resume. Placeholders are marked in [BRACKETS].
export const profile = {
  name: "M. Vishnusankar",
  role: "BIM Automation Engineer",
  headline: "Automating BIM workflows with software, APIs and AI.",
  sub: "I build Python and C# automation for Autodesk Revit and AutoCAD, covering MEP and Civil documentation, pyRevit routes, and AI-driven Revit control through Model Context Protocol.",
  email: "raj08vishnu@gmail.com",
  phone: "9791766926",
  github: "https://github.com/vishnusankar2203",
  linkedin: "https://www.linkedin.com/in/vishnusankar2203/",
  resume: `${import.meta.env.BASE_URL}resume/Vishnusankar_Resume.pdf`,
  summary:
    "BIM Automation Engineer with 10 months of experience building Python and C#-based automation for Autodesk Revit and AutoCAD workflows. Skilled in Revit API, pyRevit, and add-in development to streamline MEP and Civil documentation. Experienced integrating AI with BIM platforms via Model Context Protocol (MCP), combining engineering fundamentals with strong programming and data analysis skills.",
  languages: "English (Medium), Tamil (Native)",
  heroTags: ["Revit", "pyRevit", "Python", "C#", "AI / MCP"]
};

export const skills: { title: string; items: string[] }[] = [
  { title: "Programming & Development", items: ["Python", "C# (.NET)", "OOP", "SQL", "JSON"] },
  { title: "BIM & CAD Automation", items: ["Autodesk Revit", "Revit API", "pyRevit", "Revit Add-in Development", "AutoCAD Automation", "BIM Modeling", "Engineering Drawing Interpretation"] },
  { title: "AI & Data", items: ["Model Context Protocol (MCP)", "Artificial Intelligence", "Machine Learning", "Data Science", "Data Analysis", "Prompt Engineering", "REST API Integration"] },
  { title: "Engineering", items: ["Mechanical Engineering Fundamentals", "Automation Workflow Development", "Problem Solving", "Analytical Thinking"] },
  { title: "Development Tools", items: ["Git & GitHub", "Visual Studio", "VS Code", "Debugging & Troubleshooting"] }
];

export const showcase = [
  { t: "Revit automation", d: "Python and C# automation on top of the Revit API and pyRevit." },
  { t: "MEP automation", d: "Add-ins for repetitive MEP modeling and drafting tasks." },
  { t: "Civil automation", d: "Add-ins for repetitive Civil modeling and drafting tasks." },
  { t: "Data extraction", d: "Modeling and drawing data pulled out through structured payloads." },
  { t: "Payload automation", d: "pyRevit routes that receive structured payloads and drive Revit." },
  { t: "AI + BIM", d: "Claude AI connected to Revit for natural-language-driven workflows." },
  { t: "MCP integration", d: "Model Context Protocol as the bridge between AI and Revit." },
  { t: "API integration", d: "REST API integration and JSON payloads between systems and Revit." }
];

export const pipeline = ["Engineering problem", "BIM data", "Automation logic", "Revit / AutoCAD", "Automated modeling / documentation"];

export const experience = {
  company: "Innowell Engineering International Pvt Ltd",
  location: "India",
  role: "BIM Automation Engineer",
  period: "Jan 2025 – Present",
  points: [
    "Developed custom Revit and AutoCAD add-ins for MEP and Civil disciplines, automating repetitive modeling and drafting tasks and reducing manual processing time.",
    "Built a Revit MCP integration that connects Revit with Claude AI for natural-language-driven automation of modeling workflows.",
    "Designed a standalone server-client MCP architecture that connects Revit without relying on an LLM, improving flexibility and reliability.",
    "Created pyRevit routes that pass structured payloads to automate modeling and drawing data extraction.",
    "Tested and debugged Python and C# scripts for production readiness."
  ]
};

export type Project = {
  title: string; short: string; problem: string; approach: string;
  tech: string[]; contribution: string; outcome: string; flow: string[];
};

export const projects: Project[] = [
  {
    title: "Revit & AutoCAD MEP/Civil Automation Add-ins",
    short: "Add-ins that automate repetitive MEP and Civil modeling tasks.",
    problem: "Repetitive modeling and drafting work in MEP and Civil disciplines was done by hand.",
    approach: "Custom add-ins for Revit and AutoCAD built on the Revit API with Python and C#.",
    tech: ["Revit API", "C# (.NET)", "Python", "AutoCAD Automation"],
    contribution: "Developed the add-ins, then tested and debugged the Python and C# code for production readiness.",
    outcome: "Reduced manual processing time and improved team productivity, as stated in my resume.",
    flow: ["Revit / AutoCAD", "Revit API", "Python / C#", "Automation layer", "BIM model / documentation"]
  },
  {
    title: "Revit–Claude MCP Integration",
    short: "Revit connected to Claude AI through Model Context Protocol.",
    problem: "Modeling workflows needed a way to be driven by plain-language requests instead of manual steps.",
    approach: "An MCP integration that links Claude AI to Revit so natural-language requests trigger automation.",
    tech: ["MCP", "Claude AI", "Revit API", "Python", "Prompt Engineering"],
    contribution: "Built the Revit MCP integration.",
    outcome: "Enabled natural-language-driven automation of modeling workflows and introduced a new automation approach at the organization.",
    flow: ["User", "Claude AI", "MCP", "Revit", "BIM automation"]
  },
  {
    title: "Standalone MCP Server-Client Architecture",
    short: "A lightweight Revit connection that does not depend on any LLM.",
    problem: "Automation should keep working without relying on an LLM being in the loop.",
    approach: "A standalone server-client MCP architecture that connects to Revit directly.",
    tech: ["MCP", "Server-client architecture", "REST API Integration", "JSON", "Revit API"],
    contribution: "Designed and built the architecture.",
    outcome: "Improved system flexibility and reliability, as stated in my resume.",
    flow: ["Client / Revit", "Automation layer", "Server", "Structured payload", "Revit workflow"]
  },
  {
    title: "pyRevit Payload Automation Routes",
    short: "pyRevit routes that automate modeling and drawing data extraction.",
    problem: "Modeling actions and drawing data needed to be triggered and extracted in a structured, repeatable way.",
    approach: "pyRevit routes that accept structured payloads and run the matching Revit operations.",
    tech: ["pyRevit", "Python", "JSON", "Revit API"],
    contribution: "Created the routes and tested and debugged the scripts.",
    outcome: "Automated modeling and drawing data extraction through structured payloads.",
    flow: ["Payload", "pyRevit route", "Python", "Revit API", "Model / drawing data"]
  }
];

export const education = [
  { degree: "B.Tech, Artificial Intelligence and Data Science", school: "Ramco Institute of Technology", year: "2025", score: "CGPA: 7.67 / 10" },
  { degree: "Diploma, Mechanical Engineering", school: "PACR Polytechnic College", year: "2022", score: "85%" }
];

export const achievements = [
  "Automated repetitive MEP and Civil modeling tasks via custom add-ins, improving team productivity.",
  "Integrated AI into BIM workflows via MCP, introducing a novel automation approach at the organization."
];
