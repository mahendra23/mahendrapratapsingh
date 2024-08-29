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
                    toolIcon: "xcode.svg",
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
                    toolIcon: "",
                    toolname: "SuperTest",
                },
                {
                    toolIcon: "soapui.jpeg",
                    toolname: "SoapUI",
                },
                {
                    toolIcon: "readyapi.png",
                    toolname: "ReadyAPI",
                },
            ],
        },
        {
            title: "DevOps & Cloud",
            toolslist: [
                {
                    toolIcon: "github.svg",
                    toolname: "GitHub Actions",
                },
                {
                    toolIcon: "aws.svg",
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
                    toolIcon: "jenkins.svg",
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
                    toolIcon: "junit.svg",
                    toolname: "Junit",
                },
                {
                    toolIcon: "",
                    toolname: "Concordian",
                },
                {
                    toolIcon: "Chai.png",
                    toolname: "Chai",
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
                    toolIcon: "kotlin.svg",
                    toolname: "Kotlin",
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
                    toolIcon: "java.svg",
                    toolname: "Java",
                },
                {
                    toolIcon: "JavaScript.svg",
                    toolname: "JavaScript",
                },
                {
                    toolIcon: "swift.svg",
                    toolname: "Swift",
                },
                {
                    toolIcon: "vbnet.png",
                    toolname: "VB.NET",
                },
            ]
        },
    ]
};