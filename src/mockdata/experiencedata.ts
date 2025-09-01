export interface ExperienceItemType {
    company: string,
    date: string,
    title: string,
    area: string,
    desc: string
}

export interface ExperienceDataType {
    title: string,
    workexp: ExperienceItemType[],
}

export const experiencedata: ExperienceDataType = {
    title: "JOURNEY SO FAR...",
    workexp: [
        {
            company: "Bank of New Zealand",
            date: "July 2022 - Present",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "•    Developing and testing front-end applications using React, React Testing Library, and TypeScript enhancing user experience and functionality." +
            "\n•    Implementing and testing back-end solutions using Spring boot and Java, ensuring seamless system integrations and scalability." +
            "\n•    Leveraged Swagger and OpenAPI Specifications for API design & documentation." +
            "\n•    Conducted end-to-end testing leveraging Cypress/Playwright to ensure comprehensive application quality and minimize defects in production." +
            "\n•    Managed CI/CD pipelines and version control with Git, Bitbucket, and Jenkins , driving faster delivery and reliable delivery cycles." + 
            "\n•    Applied SAFe Agile methodologies using Jira, Confluence, Miro, and Figma, fostering collaboration and alignment across teams."
        },
        {
            company: "Reserve Bank of New Zealand",
            date: "April 2025 - June 2025",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "•    Leading the design and development of scalable API test automation frameworks, seamlessly integrating them into Azure DevOps CI/CD pipelines to support continuous testing and early defect detection." +
            "\n•    Defining and implementing a comprehensive test data management strategy, including data provisioning and masking, to ensure consistent, reusable, and secure test data across multiple test environments."
        },
        {
            company: "Land Information New Zealand",
            date: "November 2022 - March 2025",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "•    Developing and testing front-end applications using React, React Testing Library, and TypeScript enhancing user experience and functionality." +
            "\n•    Implementing and testing back-end solutions using Spring boot and Kotlin, ensuring seamless system integrations and scalability." +
            "\n•    Leveraged Swagger and OpenAPI Specifications for API design & documentation." +
            "\n•    Conducted end-to-end testing leveraging Playwright to ensure comprehensive application quality and minimize defects in production." +
            "\n•    Managed CI/CD pipelines and version control with Git, GitHub, GitHub Actions, Docker, and AWS, driving faster delivery and reliable delivery cycles." + 
            "\n•    Applied SAFe Agile methodologies using Jira, Confluence, Miro, and Figma, fostering collaboration and alignment across teams."
        },
        {
            company: "New Zealand Customs Service",
            date: "July 2022 - November 2022",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "•    Led test automation activities, including designing, developing, and maintaining automation frameworks and scripts." +
            "\n     •   Web Applications using Selenium, Cucumber, Cypress." +
            "\n     •    API Testing using REST Assured." +
            "\n•    Building Postman collections to use in manual testing." +
            "\n•    Implemented Java-based tool for bulk API data creation, achieving a 60% reduction in effort." +
            "\n•    Integrated with CI/CD pipelines using Jenkins, Git." +
            "\n•    Applied SAFe Agile methodologies using Jira, Confluence, fostering collaboration and alignment across teams."
        },
        {
            company: "Bank of New Zealand",
            date: "December 2021 - July 2022",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "•    Led test automation activities, including designing, developing, and maintaining automation frameworks and scripts for API testing using TypeScript, Jest, Supertest, AWS SDK, AWS DynamoDB, Kafka.\n•    Utilized Swagger and OpenAPI Specifications for API design & documentation\n•    Building Postman collections to use in manual testing.\n•    Integrated with CI/CD pipelines using Jenkins, Git.\n•    Applied SAFe Agile methodologies using Jira, Confluence."
        },
        {
            company: "Land Information New Zealand",
            date: "April 2021 - December 2021",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "•    Performed component testing of React front-end applications using React Testing Library.\n•    Developed and executed unit and integration tests for backend APIs with Spring Boot and Kotlin.\n•    Leveraged Swagger and OpenAPI Specifications for API design & documentation.\n•    Conducted end-to-end testing using Playwright and Cypress.\n•    Managed CI/CD pipelines and version control with Git, GitHub, Jenkins.\n•    Applied SAFe Agile methodologies using Jira, Confluence, Miro, and Figma, fostering collaboration and alignment across teams."
        },
        {
            company: "Bank of New Zealand",
            date: "August 2019 - April 2021",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "•    Led test automation activities, including designing, developing, and maintaining automation frameworks and scripts.\n       •    Mobile Application Test Automation using XCUITest, Espresso.\n       •    Web Applications using Selenium, Cypress.\n       •    API Testing using REST Assured, Supertest, Jest.\n       •    Building Postman collections to use in manual testing.\n•    Integrated with CI/CD pipelines using Jenkins, Git.\n•    Applied SAFe Agile methodologies using Jira, Confluence, InVision, fostering collaboration and alignment across teams."
        },
        {
            company: "Westpac Bank",
            date: "September 2017 - August 2019",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "•    Led test automation activities, including designing, developing, and maintaining automation frameworks and scripts.\n       •    Mobile Application Test Automation using XCUITest, Espresso.\n       •    Web Applications using Selenium, Cypress.\n       •    API Testing using REST Assured, Supertest, Jest.\n•    Integrated with CI/CD pipelines using Jenkins, Git.\n•    Applied SAFe Agile methodologies using Jira, Confluence, InVision, fostering collaboration and alignment across teams."
        },
        {
            company: "Capgemini Australia Pyt Ltd.",
            date: "June 2015 - September 2017",
            title: "Manager Testing Services",
            area: "Wellington, New Zealand",
            desc: "\n•    Business & Technology Test Manager for client ANZ Bank" +
            "\n•    Led testing across multiple concurrent Agile and Waterfall projects, managing end-to-end test planning, execution, and reporting to ensure alignment with project objectives, quality standards, and deadlines." +
            "\n•    Demonstrated strong test leadership by defining and executing robust testing strategies, coordinating cross-functional teams, and driving quality assurance to achieve successful project outcomes." +
            "\n•    Developed a web services data extraction and comparison utility, achieving a 30% reduction in effort." +
            "\n•    Managed client relationships effectively, ensuring timely delivery and high client satisfaction for all projects." +
            "\n•    Directed performance appraisals, identified team training needs, set goals, and developed high-performing teams, promoting professional growth and team achievement for a team of 20." +
            "\n•    Client ANZ:" +
            "\n•    Led and managed end-to-end testing for the implementation of a new card payment scheme (UPI China), ensuring seamless integration with issuer/acquirer systems, payment gateways, and core banking systems." +
            "\n•    Defined the overall test strategy covering functional, integration, regression, certification, and performance testing across multiple workstreams." +
            "\n•    Collaborated with cross-functional teams including business analysts, developers, third-party vendors to validate end-to-end payment flows and transaction lifecycle." +
            "\n•    Oversaw validation of EMV chip, contactless, and e-commerce transaction scenarios, including authorization, clearing, settlement, chargebacks, and dispute processes." +
            "\n•    Managed defect triage, reporting of test metrics, and go-live readiness sign-off with key stakeholders." +
            "\n•    Created and implemented detailed deployment plans, performing rigorous post-implementation verification to ensure seamless integration and optimal system performance."
        },
        {
            company: "Tech Mahindra",
            date: "June 2014 - June 2015",
            title: "Project Manager",
            area: "Wellington, New Zealand / Noida, India",
            desc: "•    Developed and implemented mobile automation strategies, reducing testing time by 50% and increasing test coverage by 40%." +
            "\n•    Strengthened client relationships, consistently delivering projects on schedule, exceeding client expectations, and ensuring high levels of customer satisfaction." +
            "\n•    Led multiple client engagements and projects, managing resources effectively to achieve on-time, high-quality project delivery." +
            "\n•    Headed the Mobile Application Test Automation Competency team, establishing standards for automation excellence." +
            "\n•    Designed and implemented custom automation solutions for mobile platforms in response to RFPs/RFIs, aligning with client needs and business goals." +
            "\n•    Conducted feasibility analyses, cost-benefit assessments, ROI analyses, and proof of concepts (POCs) to facilitate data-driven decision-making and strategic planning." +
            "\n•    Led recruitment efforts, identifying and onboarding top talent to build a high-performing team aligned with project and organizational goals." +
            "\n•    Managed team performance appraisals, set strategic goals, identified training needs, and developed high-performance teams focused on continuous improvement for a team of 15." +
            "\n•    Successfully managed complex projects in a matrix environment, driving cross-functional collaboration and ensuring timely delivery of project objectives."
        },
        {
            company: "UnitedHealth Group",
            date: "May 2010 - June 2014",
            title: "IT Quality Consultant (Project Lead)",
            area: "Gurgaon, India",
            desc: ""
        },
        {
            company: "UnitedHealth Group",
            date: "May 2008 - September 2009",
            title: "Senior Test Engineer",
            area: "Gurgaon, India",
            desc: "•    Led feasibility analysis and designed automation solutions, including proof of concepts (POCs), aligning with project objectives." +
            "\n•    HIPAA EDI files are standardized formats used in the healthcare industry to electronically exchange administrative and financial data between providers, payers, and clearinghouses — in compliance with HIPAA regulations." +
            "\n•    Saved $0.5 million by developing HIPAA EDI file-to-database comparison utilities, improving data integrity and ensuring compliance with industry standards." +
            "\n•    Conducted automation effort estimation, cost-benefit analysis, and ROI assessments, optimizing resource allocation and improving project efficiency." +
            "\n•    Managed complex projects in a matrix environment, driving cross-functional collaboration and ensuring timely delivery of objectives." +
            "\n•    Led recruitment efforts, performance appraisals, set strategic goals, identified training needs, and fostered high-performance teams committed to continuous improvement for a team of 20+." +
            "\n•    Built a three-tier automation framework to streamline test automation across multiple environments, covering scripting, data management, and execution." +
            "\n•    Led the adoption of automation frameworks across multiple projects by facilitating demos and stakeholder presentations, showcasing functionality and highlighting the benefits for improved testing efficiency and quality." +
            "\n•    Conducted training sessions and workshops to upskill team members on automation tools and best practices, enhancing overall team capabilities and performance."
        },
        {
            company: "Sapient Corporation",
            date: "September 2009 - January 2010",
            title: "Senior Associate QA L1",
            area: "Gurgaon, India",
            desc: ""
        },
        {
            company: "Sapient Corporation",
            date: "June 2005 - May 2008",
            title: "Associate QA L2",
            area: "Gurgaon, India",
            desc: "•    Automated report generation, reducing effort by 75%, minimizing manual tasks, and enhancing accuracy by lowering error rates." +
            "\n•    Designed and implemented a QTP-based keyword-driven automation framework for web applications, increasing test efficiency and accuracy." +
            "\n•    Presented the automation framework to clients, highlighting its capabilities and benefits, and successfully integrated it across multiple projects." +
            "\n•    Mentored and managed team members, providing guidance, support, and fostering team development."
        },
        {
            company: "Dr. A.P.J. Abdul Kalam Technical University",
            date: "2000 - 2004",
            title: "Bachelor of Technology",
            desc: "Computer Science & Engineering",
            area: "Uttar Pradesh, India"
        },
    ]
};


interface TimelineItem {
  role: string;
  company: string;
  period: string;
  highlight: string;
}

export const timelineData: TimelineItem[] = [
  {
    role: "Senior Test Automation Engineer (Contract)",
    company: "Reserve Bank of New Zealand (RBNZ)",
    period: "Apr 2025 – Present",
    highlight:
      "Leading API automation framework design, integrated into Azure DevOps CI/CD."
  },
  {
    role: "Senior Test Automation Engineer (Contract)",
    company: "Land Information New Zealand (LINZ)",
    period: "Nov 2022 – Mar 2025",
    highlight:
      "Built scalable test solutions with React, Spring Boot, and Playwright."
  },
  {
    role: "Senior Test Automation Engineer (Contract)",
    company: "New Zealand Customs Service",
    period: "Jul 2022 – Nov 2022",
    highlight:
      "Cut API data creation effort by 60% with a custom Java automation tool."
  },
  {
    role: "Senior Test Automation Engineer (Contract)",
    company: "Bank of New Zealand",
    period: "Dec 2021 – Jul 2022",
    highlight:
      "Delivered API automation using TypeScript, Jest, AWS SDK, and Kafka."
  },
  {
    role: "Senior Test Automation Engineer (Contract)",
    company: "LINZ",
    period: "Apr 2021 – Dec 2021",
    highlight:
      "Developed React front-end and backend Kotlin API test automation."
  },
  {
    role: "Senior Test Automation Engineer (Contract)",
    company: "Bank of New Zealand",
    period: "Aug 2019 – Apr 2021",
    highlight:
      "Led automation for mobile, web, and APIs, integrated with CI/CD pipelines."
  },
  {
    role: "Senior Test Automation Engineer (Contract)",
    company: "Westpac New Zealand",
    period: "Oct 2017 – Aug 2019",
    highlight:
      "Built test frameworks for mobile, web, and APIs with Appium and Selenium."
  },
  {
    role: "Manager",
    company: "Capgemini Australia (Client: ANZ Bank)",
    period: "Jun 2015 – Oct 2017",
    highlight:
      "Directed large-scale testing across Agile & Waterfall, managing 20+ staff."
  },
  {
    role: "Project Manager",
    company: "Tech Mahindra",
    period: "Jun 2014 – Jun 2015",
    highlight:
      "Established Mobile Test Automation Competency; cut test time by 50%."
  },
  {
    role: "IT Quality Consultant (Project Lead)",
    company: "United Health Group, India",
    period: "2010 – 2014",
    highlight:
      "Saved $0.5M by developing HIPAA EDI automation utilities."
  },
  {
    role: "Senior Associate QA",
    company: "Sapient Corporation, India",
    period: "2005 – 2010",
    highlight:
      "Created keyword-driven frameworks; automated reporting (75% effort saved)."
  }
];