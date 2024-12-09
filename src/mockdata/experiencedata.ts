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
            company: "Land Information New Zealand",
            date: "November 2022 - Till Date",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Front-End Development and Testing using React and React Testing Library with TypeScript, ensuring high-quality and robust user interfaces. Back-End Development and Testing with Spring Framework and Kotlin, delivering reliable and scalable backend solutions. Performed End-to-End Testing using Playwright and TypeScript for comprehensive application validation. CI/CD pipelines  and version control with Git, GitHub, GitHub Actions, Docker & AWS. Followed SAFe Agile and used tools like JIRA, Confluence, Miro, InVision."
        },
        {
            company: "New Zealand Customs Service",
            date: "July 2022 - November 2022",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Developed and maintained automation frameworks and scripts using Cypress with Typescript for comprehensive testing. Utilising REST Assured developed a Java-based command-line tool for bulk API data creation, enhancing data management efficiency. CI/CD pipelines  and version control with Git, GitLab, Jenkins. Followed SAFe Agile and used tools like JIRA, Confluence, Miro."
        },
        {
            company: "Bank of New Zealand",
            date: "December 2021 - July 2022",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Development and maintenance of Automation Framework and scripts for API testing using Typescript, Jest, Supertest, AWS SDK, AWS DynamoDB, Postman and Karate. Version control using Git, BitBucket, Stash. CI/CD pipeline setup in Jenkins. Followed SAFe Agile and used tools like JIRA, Confluence, Miro."
        },
        {
            company: "Land Information New Zealand",
            date: "April 2021 - December 2021",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Testing React components using React Testing Library with TypeScript. End-to-End Testing using Playwright, TypeScript. Spring Framework with Kotlin for API testing. Version control using Git & GitHub. CI/CD pipeline in Jenkins. Agile & Design Tools JIRA, Confluence, Miro, InVision."
        },
        {
            company: "Bank of New Zealand",
            date: "August 2019 - April 2021",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Development and maintenance of Automation Framework and scripts using . XCode, XCUITest using Swift for iOS Mobile App. Android Studio, Espresso using Kotlin for Android Mobile App. Postman, Jest, Supertest and Karate for API testing. Selenium Webdriver and Cypress for web application. Version control using Git, BitBucket, Stash. CI/CD pipeline setup in Jenkins. Followed SAFe Agile and used tools like JIRA, Confluence, Miro. Agile & Design Tools JIRA, Confluence, Miro, InVision. iOS Development using UIKit, SwiftUI, and Combine Framework."
        },
        {
            company: "Westpac Bank",
            date: "September 2017 - August 2019",
            title: "Senior Test Automation Engineer (Contract)",
            area: "Wellington, New Zealand",
            desc: "Development and maintenance of Automation framework and scripts using. Java, Appium, Selenium Webdriver, Cucumber, TestNG. Seetest Automation Studio, Seetest Appium Studio. XCUITest, Swift, XCode. Version control using Git, BitBucket, Stash. CI/CD pipeline in Jenkins. SAFe Agile & Design Tools JIRA, Confluence, InVision."
        },
        {
            company: "Capgemini Australia Pyt Ltd.",
            date: "June 2015 - September 2017",
            title: "Manager Testing Services",
            area: "Wellington, New Zealand",
            desc: "Business & Technology Test Manager for client ANZ Bank." + 
            "\nLed testing across multiple concurrent Agile and Waterfall projects, managing end-to-end test planning, execution, and reporting to ensure alignment with project objectives, quality standards, and deadlines." + 
            "\nDemonstrated strong test leadership by defining and executing robust testing strategies, coordinating cross-functional teams, and driving quality assurance to achieve successful project outcomes." + 
            "\nDeveloped a web services data extraction and comparison utility, achieving a 30% reduction in effort." + 
            "\nManaged client relationships effectively, ensuring timely delivery and high client satisfaction for all projects." + 
            "\nCreated and implemented detailed deployment plans, performing rigorous post-implementation verification to ensure seamless integration and optimal system performance." + 
            "\nDirected performance appraisals, identified team training needs, set goals, and developed high-performing teams, promoting professional growth and team achievement for a team of 20."
        },
        {
            company: "Tech Mahindra",
            date: "June 2014 - June 2015",
            title: "Project Manager",
            area: "Wellington, New Zealand / Noida, India",
            desc: "Developed and implemented mobile automation strategies, reducing testing time by 50% and increasing test coverage by 40%." + 
            "\nStrengthened client relationships, consistently delivering projects on schedule, exceeding client expectations, and ensuring high levels of customer satisfaction." + 
            "\nLed multiple client engagements and projects, managing resources effectively to achieve on-time, high-quality project delivery." + 
            "\nHeaded the Mobile Application Test Automation Competency team, establishing standards for automation excellence." + 
            "\nDesigned and implemented custom automation solutions for mobile platforms in response to RFPs/RFIs, aligning with client needs and business goals." + 
            "\nConducted feasibility analyses, cost-benefit assessments, ROI analyses, and proof of concepts (POCs) to facilitate data-driven decision-making and strategic planning." + 
            "\nLed recruitment efforts, identifying and onboarding top talent to build a high-performing team aligned with project and organizational goals." + 
            "\nManaged team performance appraisals, set strategic goals, identified training needs, and developed high-performance teams focused on continuous improvement for a team of 15."
        },
        {
            company: "UnitedHealth Group",
            date: "May 2008 - June 2014",
            title: "IT Quality Consultant",
            area: "Gurgaon, India",
            desc: ""
        },
        {
            company: "UnitedHealth Group",
            date: "May 2008 - September 2009",
            title: "Senior Test Engineer",
            area: "Gurgaon, India",
            desc: "Led feasibility analysis and designed automation solutions, including proof of concepts (POCs), aligning with project objectives." + 
            "\nSaved $0.5 million by developing HIPAA EDI file-to-database comparison utilities, improving data integrity and ensuring compliance with industry standards." + 
            "\nConducted automation effort estimation, cost-benefit analysis, and ROI assessments, optimizing resource allocation and improving project efficiency." + 
            "\nManaged complex projects in a matrix environment, driving cross-functional collaboration and ensuring timely delivery of objectives." + 
            "\nLed recruitment efforts, performance appraisals, set strategic goals, identified training needs, and fostered high-performance teams committed to continuous improvement for a team of 20+." + 
            "\nDesigned and developed a Three-Tier Architecture automation framework, consisting of Front-End for test scripting, Middle Layer for data management, and Back-End for script execution, streamlining test automation across multiple environments." + 
            "\nLed the adoption of automation frameworks across multiple projects by facilitating demos and stakeholder presentations, showcasing functionality and highlighting the benefits for improved testing efficiency and quality."
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
            desc: "Automated report generation, reducing effort by 75%, minimizing manual tasks, and enhancing accuracy by lowering error rates." + 
            "\nDesigned and implemented a QTP-based keyword-driven automation framework for web applications, increasing test efficiency and accuracy." + 
            "\nPresented the automation framework to clients, highlighting its capabilities and benefits, and successfully integrated it across multiple projects." + 
            "\nMentored and managed team members, providing guidance, support, and fostering team development."
        },
        {
            company: "Uttar Pradesh Technical University",
            date: "2000 - 2004",
            title: "Bachelor of Technology",
            desc: "Computer Science & Engineering",
            area: "Ghaziabad, India",
        },
    ]
}