import {
  LanguageProficiency,
  type Company,
  type Education,
  type Language,
  type Project,
  type SkillCategory,
} from "@/types"

export const companies: Company[] = [
  
  {
    name: "BairesDev",
    logo: "/BairesDev.jpg",
    positions: [
      {
        title: "Senior Full Stack Developer",
        duration: "02/2022 - 07/2025",
        description: [
          "Developed full-stack applications using Django, FastAPI, and PostgreSQL to support high-traffic, multi-tenant SaaS platforms",
          "Designed modular Jinja2 frontends with reusable components to streamline feature delivery and improve UI consistency",
          "Customized and extended Odoo modules across Sales, Inventory, and Invoicing, including backend logic and QWeb templates",
          "Integrated Odoo with third-party systems via XML-RPC and REST APIs to enable real-time sync with CRMs and e-commerce tools",
          "Built intelligent assistants and RAG chatbots using OpenAI, Azure OpenAI, and Claude to automate document search and Q&A flows",
          "Configured Datadog monitoring and custom dashboards to improve observability and reduce incident response times"
        ],
      },
    ],
    technologies: ["Python", "Django", "FastAPI", "Odoo", "PostgreSQL", "SQLite", "Jinja2", "Celery", "Pandas", "Redis", "Docker", "Playwright", "Pytest", "Datadog", "OpenAI", "Azure OpenAI", "Claude", "XML-RPC", "REST APIs", "QWeb"],
  },
  
  {
    name: "HTEC Group",
    logo: "/HTEC.png",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "02/2020 - 01/2022",
        description: [
          "Developed real-time analytics dashboards using Flask and Plotly Dash to support data-driven decision making",
          "Built and maintained GraphQL APIs over SQLAlchemy and PostgreSQL to streamline backend data access",
          "Migrated legacy services from Node.js to FastAPI, improving performance and maintainability across the backend",
          "Designed and deployed AWS pipelines to process large-scale video data efficiently and cost-effectively",
          "Integrated Firebase Dynamic Links into mobile flows to enhance onboarding and referral tracking",
          "Implemented automated testing with Pytest and Selenium, improving deployment confidence and code reliability"
        ],
      }
    ],
    technologies: ["Python", "FastAPI", "Flask", "SQLAlchemy", "GraphQL", "PostgreSQL", "AWS", "Firebase", "Selenium", "Pytest", "Docker", "GitHub Actions", "CI/CD", "Plotly Dash"],
  },
  {
    name: "Quantox Technology",
    logo: "/Quantox.jpg",
    positions: [
      {
        title: "Junior Full Stack Developer",
        duration: "08/2018 - 01/2020",
        description: [
          "Built full-stack SaaS applications using the MERN stack, delivering solutions for clients in fintech, e-commerce, and media",
          "Developed multilingual e-commerce platforms with scalable MongoDB backends and efficient GraphQL APIs",
          "Dockerized Node.js microservices and implemented CI/CD workflows to support smooth and reliable deployments",
          "Integrated third-party APIs and SDKs, including payment processors and shipping services, to extend product functionality",
          "Created responsive React and TypeScript dashboards to improve internal visibility and team productivity",
          "Created responsive React and TypeScript dashboards to improve internal visibility and team productivity",
          "Worked directly with international clients to define technical requirements, iterate on features, and deliver high-quality outcomes"
        ],
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "GraphQL", "Redis", "Docker", "Jest", "JavaScript", "Git", "CI/CD"],
  }
]

export const education: Education[] = [
  {
    degree: "Bachelor's degree in Computer Science",
    institution: "University of Belgrade",
    location: "Belgrade, Serbia",
    duration: "2014 - 2018",
    description:
      "Graduated with 3.65 GPA and Dean's List for 4 semesters. Concentrations in software engineering, web development and full-stack development.",
    logo: "/Universify of Belgrade.png",
  }
]

export const projects: Project[] = [
  {
    title: "Bitcoin Node Server",
    description:
      "A TypeScript-based Express server that interfaces with a self-hosted Bitcoin node, providing blockchain data via a RESTful API. Utilizes TSOA for API documentation and adheres to separation of concerns principles.",
    thumbnail: "/btc-server.png",
    skills: ["TypeScript", "Express", "TSOA", "bitcoin-cli", "REST API", "Ngrok", "PostgreSQL", "Swagger"],
    link: "https://bitcoin-node-server.onrender.com/docs/",
    github: "https://github.com/maxxdevnova-bit/bitcoin-node-server",
    duration: "Mar 2025 – Present",
  },
  {
    title: "BTC Dashboard",
    description:
      "A frontend dashboard built with Next.js and Tailwind CSS that displays real-time Bitcoin blockchain data fetched from the Bitcoin Node Server.",
    thumbnail: "/btc-frontend.png",
    skills: ["Next.js", "Tailwind", "REST API", "Vercel", "DNS", "V0", "Server Actions",],
    link: "https://btc.j3g.dev/",
    github: "https://github.com/maxxdevnova-bit/btc_dashboard",
    duration: "Mar 2025 – Present",
  },
  {
    title: "VIUS Built – Estimating & Project Management Web App",
    description:
      "Developed a full-stack construction management platform using Next.js with server components, server actions, and SWR. Built backend features with Express and integrated OpenAI/Gemini APIs for document parsing and automation. Managed data with Supabase (Postgres, RPCs, RLS) and Docker, enabling accurate estimate generation and streamlined subcontractor workflows.",
    thumbnail: "/estimating.png",
    skills: ["Next.js", "Tailwind", "Server Actions", "Supabase", "PostgreSQL", "RPCs", "RLS", "OpenAI API", "Gemini API", "Express", "Docker"],
    link: "https://app.viusbuilt.com/",
    github: null,
    duration: "March 2024 – May 2025",
  },
  {
    title: "1440 – Multi-Channel Messaging App",
    description:
      "A cross-platform mobile app built with Flutter that unifies messaging from platforms like WhatsApp, Facebook Messenger, and Twitter for organizations using Salesforce. Integrated Salesforce GraphQL and REST APIs, implemented SOQL queries, and managed app state with Provider to enable seamless, real-time communication within a single app interface.",
    thumbnail: "/1440_appstore.png",
    skills: ["Flutter", "Dart", "Salesforce", "GraphQL", "REST APIs", "SOQL", "Provider", "State Management", "iOS", "Android"],
    link: "https://apps.apple.com/us/app/1440-mobile/id6468288380",
    github: null,
    duration: "May 2023 – Feb 2024",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Flutter", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "Supabase", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "RPCs/RLS", level: 4 },
      { name: "Salesforce", level: 3 },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "SQL", level: 4 },
      { name: "Dart", level: 3 },
      { name: "Python", level: 3 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 5 },
      { name: "AI APIs (OpenAI, Gemini)", level: 4 },
      { name: "REST/GraphQL", level: 4 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 3 },
    ],
  },
]

export const languages: Language[] = [
  { name: "English", proficiency: LanguageProficiency.Fluent, level: 5 },
  { name: "Spanish", proficiency: LanguageProficiency.Native, level: 5 },
]
