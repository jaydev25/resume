"use client";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaGlobe
} from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";
import { useRef } from "react";
import ViewerCount from "@/components/ViewerCount";

const skillCategories = {
  "AI Tools": [
    "GitHub Copilot (Agentic Version)",
    "ChatGPT",
  ],
  Frontend: [
    "React",
    "NextJS",
    "Redux",
    "Redux-sagas",
    "Context API",
    "Hooks",
    "Zustand",
    "Mobx",
    "React Native",
    "Angular",
  ],
  Backend: [
    "NodeJS",
    "ExpressJS",
    "GraphQL",
    "REST",
    "Websockets",
    "Serverless",
    "NestJS",
  ],
  "Programming Languages": ["JavaScript", "TypeScript"],
  Databases: ["MongoDB", "PostgreSQL", "MYSQL", "DynamoDB"],
  "Cloud & DevOps": [
    "AWS",
    "S3",
    "EC2",
    "Elastic Search",
    "GitHub Actions",
    "Jenkins",
  ],
  "Automation Testing": [
    "Unit Testing",
    "Jest",
    "React Testing Library",
    "Cypress",
    "Playwright",
    "Cucumber",
  ],
  "Project Management": [
    "Git",
    "Jira",
    "Trello",
    "TFS",
    "CodeBeamer",
    "Notion",
  ],
  "Communication Languages": ["English", "Hindi", "Marathi"],
};

export default function Home() {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/resume/resume.pdf";
    link.download = "Jaydev_Thomke_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const contentRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <ViewerCount />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              <FaDownload /> Download PDF
            </button>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with top padding for fixed header */}
      <div ref={contentRef} className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div
          id="resume-content"
          className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-colors"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold">Jaydev Manohar Thomke</h1>
                <h2 className="text-2xl mt-2">Full Stack Developer</h2>
                <p className="mt-2">Dubai, UAE</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="mailto:jaydevthomke.dev@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaEnvelope /> jaydevthomke.dev@gmail.com
                </a>
                <a
                  href="tel:+971525708023"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaPhone /> (+971) 525708023
                </a>
                <a
                  href="tel:+917020808023"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaPhone /> (+91) 7020808023
                </a>
                <a
                  href="https://www.linkedin.com/in/jaydev-thomke-730924136/"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/jaydev25"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://jaydev25.github.io/resume/"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaGlobe /> Website
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "3", padding: "20px"}}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: "3", padding: "20px"}}>
                  {/* Summary Section */}
                  <section className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                      Summary
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Full Stack MERN Developer with excellent logical and analytical skills, and extensive experience using AI tools like GitHub Copilot and ChatGPT for development.
                    </p>
                  </section>
                  {/* Skills Section */}
                  <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2 col-span-1 md:col-span-2">
                      Skills
                    </h3>
                    {Object.entries(skillCategories).map(([category, skills]) => (
                      <div key={category} className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, subIndex) => (
                            <span
                              key={subIndex}
                              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </section>
                  {/* Education Section */}
                  <section className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                      Education
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          Shivaji University, Kolhapur
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Bachelor of Engineering (Computer Science)
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          2014 – 2017
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          JJ Magdum Polytechnic, Jaysingpur
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Diploma (Computer Science)
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          2011 – 2014
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                <div style={{ flex: "4", padding: "20px" }}>
                  {/* Experience Section */}
                  <section className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                      Experience
                    </h3>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Emirates NBD, Dubai — Software Consultant
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 italic">May 2025 - PRESENT</p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                        <li>
                          <strong>ENBD X, Insurance</strong><br />
                          Stack: Nodejs, Typescript, Expressjs, MongoDB.<br />
                          Worked on product that allows end users to buy insurance using a mobile app.<br />
                          Responsible for delivering REST APIS, that are consumed by mobile team.
                        </li>
                        <li>
                          <strong>Wealth Connect Corporate Actions</strong><br />
                          Stack: Nodejs, Typescript, Reactjs, MongoDB<br />
                          A web application for wealth advisors to handle their clients. Different features sending bulk notifications, consents.<br />
                          Currently building this app from scratch, heavily using github copilot agentic mode for development.
                        </li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Emerson Automation Solutions, Pune — Senior Software Engineer
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 italic">APRIL 2022 – April 2025</p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                        <li>
                          <strong>ValveLink Pro</strong><br />
                          Stack: ReactJS, Redux, Redux-sagas, Websockets (react-use-websocket), Nodejs, Express.<br />
                          Working on a product called Valve Link Pro.<br />
                          Current role is more of a Frontend where we consume APIs to communicate with live devices.
                        </li>
                        <li>
                          <strong>RTM (Tank Monitoring)</strong><br />
                          Stack: Nodejs, Graphql, Nextjs/Reactjs, MSSQL<br />
                          A multi-tenant system for real time tank monitoring.<br />
                          My role here was to review and improve backend architecture for this multi-tenant system.
                        </li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Spak Engineering, Bangalore — Full Stack Developer
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 italic">JUNE 2020 - MARCH 2022</p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                        <li>
                          <strong>Telemed</strong><br />
                          Stack: React, NodeJS, Express, MSSQL, MongoDB, Websockets (socket.io-client).<br />
                          Worked on a web application which manages the ecosystem for Doctors, Patients, Nurses and Treatments with the help of recording devices (Video/Audio). (For Example for disease like Parkinsons)<br />
                          Made use of websockets for real time data like live chat and HLS video streaming.<br />
                          My role here was to design and develop features as per Product Owner Requirements.
                        </li>
                        <li>
                          <strong>RE: Instrument Monitoring System</strong><br />
                          Stack: React, NodeJS, MSSQL, MongoDB.<br />
                          Successfully delivered a tool which is built using Electron (React/redux/sagas, Nodejs, Mongodb, MSSQL).<br />
                          Hosting: AWS EC2, S3 for storage, DynamoDB.<br />
                          My role here was to design, architect and develop a hybrid app using electron and backend using Node.js and Express.js
                        </li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Firstcry.com, Pune — Full Stack Developer
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 italic">NOV 2017 - JUNE 2020</p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                        <li>
                          <strong>B2B Application</strong><br />
                          Stack: AngularJS 1.5, Angular 6, NodeJS (Restify), PostgreSQL, MYSQL, MSSQL.<br />
                          Working on a Business to Business (B2B) Project.<br />
                          Working on some major business driving features.<br />
                          Hosting: AWS EC2, S3 for storage, ElasticSearch, AWS lambda<br />
                          This App was used by Frenchiees to order product in bulk<br />
                          Auto Replenishment System was a feature which helped Franchise owners to order fast selling products in their region.<br />
                          My role here was to design and develop features for  frontend and backend as per Merchandising Team and Business analysts.
                        </li>
                        <li>
                          <strong>Feedback Kiosk</strong><br />
                          Stack: Nodejs, Arduino.<br />
                          Hardware: ESP32/ESP WIFI<br />
                          Successfully delivered a tool which ran as a windows service on POS machines which recorded customer feedback via a Kiosk like touch panel device.<br />
                          My role here designed and developed a windows service using Node.js for this plug and play device.
                        </li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Allure INC, Pune — Magento Developer
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 italic">JULY 2017 - OCT 2017</p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                        <li>PHP Magento, MYSQL, JavaScript, JQuery.</li>
                        <li>Worked on Ecommerce website.</li>
                        <li>Worked directly with Client.</li>
                        <li>My role here was to develop features as per client needs.</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
