export interface ExperienceItemType {
    id: number,
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
            id: 16,
            company: "Land Information New Zealand",
            date: "November 2022 - Till Date",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Front-End Development and Testing using React and React Testing Library with TypeScript, ensuring high-quality and robust user interfaces. Back-End Development and Testing with Spring Framework and Kotlin, delivering reliable and scalable backend solutions. Performed End-to-End Testing using Playwright and TypeScript for comprehensive application validation. CI/CD pipelines  and version control with Git, GitHub, GitHub Actions, Docker & AWS. Followed SAFe Agile and used tools like JIRA, Confluence, Miro, InVision."
        },
        {
            id: 15,
            company: "New Zealand Customs Service",
            date: "July 2022 - November 2022",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Developed and maintained automation frameworks and scripts using Cypress with Typescript for comprehensive testing. Utilising REST Assured developed a Java-based command-line tool for bulk API data creation, enhancing data management efficiency. CI/CD pipelines  and version control with Git, GitLab, Jenkins. Followed SAFe Agile and used tools like JIRA, Confluence, Miro."
        },
        {
            id: 14,
            company: "Bank of New Zealand",
            date: "December 2021 - July 2022",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Development and maintenance of Automation Framework and scripts for API testing using Typescript, Jest, Supertest, AWS SDK, AWS DynamoDB, and Postman. Version control using Git, BitBucket, Stash. CI/CD pipeline setup in Jenkins. Followed SAFe Agile and used tools like JIRA, Confluence, Miro."
        },
        {
            id: 13,
            company: "Land Information New Zealand",
            date: "April 2021 - December 2021",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Testing React components using React Testing Library with TypeScript. End-to-End Testing using Playwright, TypeScript. Spring Framework with Kotlin for API testing. Version control using Git & GitHub. CI/CD pipeline in Jenkins. Agile & Design Tools JIRA, Confluence, Miro, InVision."
        },
        {
            id: 12,
            company: "Bank of New Zealand",
            date: "August 2019 - April 2021",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Development and maintenance of Automation Framework and scripts using . XCode, XCUITest using Swift for iOS Mobile App. Android Studio, Espresso using Kotlin for Android Mobile App. Postman, Jest, and Supertest for API testing. Selenium Webdriver and Cypress for web application. Version control using Git, BitBucket, Stash. CI/CD pipeline setup in Jenkins. Followed SAFe Agile and used tools like JIRA, Confluence, Miro. Agile & Design Tools JIRA, Confluence, Miro, InVision. iOS Development using UIKit, SwiftUI, and Combine Framework."
        },
        {
            id: 11,
            company: "Westpac Bank",
            date: "September 2017 - August 2019",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Development and maintenance of Automation framework and scripts using. Java, Appium, Selenium Webdriver, Cucumber, TestNG. Seetest Automation Studio, Seetest Appium Studio. XCUITest, Swift, XCode. Version control using Git, BitBucket, Stash. CI/CD pipeline in Jenkins. SAFe Agile & Design Tools JIRA, Confluence, InVision."
        },
        {
            id: 10,
            company: "ANZ Bank (Client of Capgemini)",
            date: "July 2015 - September 2017",
            title: "Business & Technology Test Manager",
            area: "Wellington, New Zealand",
            desc:"Overseeing comprehensive testing strategies. Designed and developed a custom VB.NET-based web services data extraction and comparison tool, resulting in a 30% reduction in testing time. Automated web application testing using Selenium Basic (Selenium plugin for Excel Macro). Effectively Managed client relationships, ensuring the successful delivery of projects and maintaining high levels of customer satisfaction. Led and managed multiple Agile and Waterfall projects from initiation to successful completion. Managed the UPI Cards program and STP Loans program from inception through to go-live. Authored and executed production deployment plans and conducted thorough post-implementation verification. Oversaw performance appraisals, identified training needs, set goals, and developed high-performance teams, fostering growth and achievement."
        },
        {
            id: 9,
            company: "Capgemini Australia Pyt Ltd.",
            date: "June 2015 - September 2017",
            title: "Manager Testing Services",
            area: "Wellington, New Zealand",
            desc: "Working for client ANZ Bank."
        },
        {
            id: 8,
            company: "Westpac Bank (Client of Tech Mahindra)",
            date: "September 2014 - June 2015",
            title: "Project Manager",
            area: "Wellington, New Zealand",
            desc: "Project Manager for Westpac Bank, leading critical initiatives and driving project success. Spearheaded the development and implementation of enterprise-wide automation strategies for mobile application, achieving a 40% reduction in testing time and a 40% increase in test coverage. Successfully managed client relationships, consistently delivering projects on time and exceeding customer satisfaction goals."
        },
        {
            id: 7,
            company: "Tech Mahindra",
            date: "September 2014 - June 2015",
            title: "Project Manager",
            area: "Wellington, New Zealand",
            desc: "Working onsite for client Westpac Bank."
        },
        {
            id: 6,
            company: "Tech Mahindra",
            date: "June 2014 - September 2014",
            title: "Manager Testing",
            area: "Noida, India",
            desc: "Led multiple client engagements and projects, ensuring successful delivery and client satisfaction. Managed the response process for RFPs and RFIs, showcasing tailored automation solutions and technical designs to potential clients. Designed and presented advanced automation solutions for mobile applications, demonstrating technical expertise and innovation. Directed the Mobile Application Test Automation Competency team, driving excellence in automation practices. Conducted feasibility analysis, effort estimation, cost-benefit analysis, ROI assessments, and proof of concepts (POCs) to guide project decisions. Oversaw performance appraisals, identified training needs, set goals, and developed high-performance teams, fostering growth and achievement"
        },
        {
            id: 5,
            company: "UnitedHealth Group",
            date: "May 2008 - June 2014",
            title: "IT Quality Consultant",
            area: "Gurgaon, India",
            desc: "Led feasibility analysis and the design of automation solutions, including proof of concepts (POCs), ensuring alignment with project goals and client expectations. Designed and developed VB.NET-based utilities for HIPAA EDI file to database comparison, enhancing data integrity and compliance. Performed detailed automation effort estimation, cost-benefit analysis, and ROI assessments to optimize resource allocation and project outcomes. Presented and demonstrated tailored automation solutions and technical designs to clients, effectively communicating value propositions and technical expertise. Managed multiple complex projects within a matrix organization, ensuring seamless coordination and delivery across cross-functional teams. Directed performance appraisals, identified training needs, set strategic goals, and cultivated high-performance teams to achieve organizational excellence. Managed internal and external stakeholder relationships, providing transparent reporting and maintaining alignment with project objectives."
        },
        {
            id: 4,
            company: "Sapient Corporation",
            date: "September 2009 - January 2010",
            title: "Senior Associate QA L1",
            area: "Gurgaon, India",
            desc: "Conducted comprehensive analysis of project management reports, leading to actionable insights and enhanced decision-making. Designed and developed an automated report generation system, streamlining the reporting process and improving efficiency. Achieved a 75% reduction in report generation effort, significantly decreasing manual effort and error rates."
        },
        {
            id: 3,
            company: "UnitedHealth Group",
            date: "May 2008 - September 2009",
            title: "Senior Test Engineer",
            area: "Gurgaon, India",
            desc: "Designed and developed a Three-Tier Architecture-based automation framework, comprising a Front-End UI in VB.NET, a Middle Layer Database for scenario data and object information, and a Back-End automation framework using QTP. Created a user-friendly Front-End UI in VB.NET for managing automation scenarios, ensuring seamless interaction and ease of use. Implemented and integrated the automation framework across multiple projects, including facilitating demos and presentations to stakeholders."
        },
        {
            id: 2,
            company: "Sapient Corporation",
            date: "June 2005 - May 2008",
            title: "Associate QA L2",
            area: "Gurgaon, India",
            desc: "Designed and developed a QTP-based keyword-driven automation framework for web applications, enhancing test efficiency and accuracy. Demonstrated the automation framework to external clients, showcasing its capabilities and benefits, and implemented it across multiple projects. Mentored and managed team members, providing guidance and support, and prepared detailed client reports to communicate progress and outcomes effectively"
        },
        {
            id: 1,
            company: "Uttar Pradesh Technical University",
            date: "2000 - 2004",
            title: "Bachelor of Technology",
            desc: "Computer Science & Engineering",
            area: "Ghaziabad, India",
        },
    ]
}