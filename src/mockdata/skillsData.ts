export interface SkillSetDataToolType {
    toolIcon?: string;
    toolname: string;
};

export interface SkillSetDataType {
    title: string;
    toolslist: SkillSetDataToolType[];
};

export interface SkillsDataType {
    title: string;
    skillsets: SkillSetDataType[];
};

export const skillsData: SkillsDataType = {
    title: "TECHNICAL SKILLS",
    skillsets: [
        {
            title: "Test Automation Tools",
            toolslist: [
                {
                    toolIcon: "Xcode.svg",
                    toolname: "XCUITest",
                },
                {
                    toolIcon: "Android.svg",
                    toolname: "Expresso",
                },
                {
                    toolIcon: "appium.svg",
                    toolname: "Appium",
                },
                {
                    toolIcon: "appiumstudio.png",
                    toolname: "Experitest Appium Studio",
                },
                {
                    toolIcon: "appiumstudio.png",
                    toolname: "Experitest SeeTest",
                },
                {
                    toolIcon: "Playwrite.svg",
                    toolname: "Playwright",
                },
                {
                    toolIcon: "Cypress.svg",
                    toolname: "Cypress",
                },
                {
                    toolIcon: "Selenium.svg",
                    toolname: "Selenium",
                },
                {
                    toolIcon: "React.svg",
                    toolname: "React Testing Library",
                },
                {
                    toolIcon: "WebdriverIO.png",
                    toolname: "WebdriverIO",
                },
                {
                    toolIcon: "restassure.png",
                    toolname: "REST Assured",
                },
                {
                    toolIcon: "Postman.svg",
                    toolname: "Postman",
                },
                {
                    toolIcon: "Insomnia.svg",
                    toolname: "Insomnia",
                },
                {
                    toolIcon: "Spring.svg",
                    toolname: "Spring Boot",
                },
                {
                    toolIcon: "Karate-Labs.svg",
                    toolname: "Karate",
                },
                {
                    toolIcon: "soapui.jpeg",
                    toolname: "SoapUI",
                },
                {
                    toolIcon: "readyapi.png",
                    toolname: "ReadyAPI",
                },
                {
                    toolIcon: "",
                    toolname: "SuperTest",
                },
            ],
        },
        {
            title: "DevOps & Cloud",
            toolslist: [
                {
                    toolIcon: "GitHub.svg",
                    toolname: "GitHub",
                },{
                    toolIcon: "GitHub-Actions.svg",
                    toolname: "GitHub Actions",
                },
                {
                    toolIcon: "Azure-Devops.svg",
                    toolname: "Azure DevOps",
                },
                {
                    toolIcon: "AWS.svg",
                    toolname: "AWS",
                },
                {
                    toolIcon: "Firebase.svg",
                    toolname: "Firebase",
                },
                {
                    toolIcon: "Docker.svg",
                    toolname: "Docker",
                },
                {
                    toolIcon: "Linux.svg",
                    toolname: "Linux",
                },
                {
                    toolIcon: "Jenkins.svg",
                    toolname: "Jenkins",
                }
            ]
        },
        {
            title: "Testing Frameworks",
            toolslist: [
                {
                    toolIcon: "Jest.svg",
                    toolname: "Jest",
                },
                {
                    toolIcon: "Mocha.svg",
                    toolname: "Mocha",
                },
                {
                    toolIcon: "Cucumber.svg",
                    toolname: "Cucumber",
                },
                {
                    toolIcon: "TestNG.png",
                    toolname: "TestNG",
                },
                {
                    toolIcon: "JUnit.svg",
                    toolname: "Junit",
                },
                {
                    toolIcon: "pytest.svg",
                    toolname: "PyTest",
                },
                {
                    toolIcon: "Chai.png",
                    toolname: "Chai",
                },
                {
                    toolIcon: "",
                    toolname: "Concordian",
                },
            ],
        },
        {
            title: "Coding",
            toolslist: [
                {
                    toolIcon: "TypeScript.svg",
                    toolname: "TypeScript",
                },
                {
                    toolIcon: "Kotlin.svg",
                    toolname: "Kotlin",
                },
                {
                    toolIcon: "Java.svg",
                    toolname: "Java",
                },
                {
                    toolIcon: "JavaScript.svg",
                    toolname: "JavaScript",
                },
                {
                    toolIcon: "Swift.svg",
                    toolname: "Swift",
                },
                {
                    toolIcon: "Java.svg",
                    toolname: "Java",
                },
                {
                    toolIcon: "Python.svg",
                    toolname: "Python",
                },
                {
                    toolIcon: "VBScript.png",
                    toolname: "VBScript",
                },
                {
                    toolIcon: "CSharp.svg",
                    toolname: "C#",
                },
                {
                    toolIcon: "vbnet.png",
                    toolname: "VB.NET",
                },
            ]
        },
        {
            title: "Database",
            toolslist: [
                {
                    toolIcon: "aws-dynamodb-icon.png",
                    toolname: "AWS Dynamo DB",
                },
                {
                    toolIcon: "postgres.png",
                    toolname: "Postgre",
                },
                {
                    toolIcon: "oracle.svg",
                    toolname: "Oracle",
                },
            ]
        },
    ]
};