import React, { ReactElement } from 'react'
import CardComponent from '../../Card/CardComponent';

const cardata = {
    title: "Career Overview",
    description: [" Seasoned Testing Professional with more than 17 years of experience",
    "	14+ years of experience in Automation testing (Design, Development, and maintenance of Automation Frameworks) ",
    "o	Web Applications using Playwright/Puppeteer, Cypress, React Testing Library, Jest, Chai, Mocha, Selenium Webdriver, Cucumber, Concordian, TestNG",
    "o	Mobile Applications using XCUITest, Espresso, Seetest, Appium",
    "o	Mobile iOS Development using UIKit, SwiftUI, Combine framework",
    "o	API using Postman, Supertest, RestAssure, Springframework, SoapUI, Excel Macro",
    "o	CI/CD - Jenkins",
    "o	Desktop applications using UFT (formerly QTP) with VB.net & VBScript",
    "o	In-house Automation utilities using VB.net for database and web services testing.",
    "	Experitest Seetest Certified Professional, Experitest License 201406231849",
    "	7+ years of experience in Banking domain (Digital Apps & Mobile, Payments & Cards, Retail Tools)\n",
    "	6+ years of experience in Managing AGILE and Waterfall projects\n",
    "	4+ years of experience in Leading Automation Centre of Excellence Team\n",
    "	5+ years of experience in Health Insurance domain"]
  } 

export default function CareerOverviewComponent(): ReactElement {
    return (
        <CardComponent title={cardata.title} children={CareerOverviewDetail()} />
    )
}

function CareerOverviewDetail(): ReactElement {
    return (
        <div data-testid="career-details">
            {cardata.description.map((repo) => (<p>{repo}</p> ))}
        </div>
    )
}

