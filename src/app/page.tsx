"use client";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaGlobe
} from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";
import ViewerCount from "@/components/ViewerCount";
import { useRef } from "react";

const skillCategories = {
  "Frontend Development": [
    "ReactJS",
    "NextJS",
    "Redux",
    "Redux-sagas",
    "Context API",
    "Mobx",
    "Zustand",
    "Axios",
  ],
  "Backend Development": ["NodeJS", "ExpressJS", "NestJS", "GraphQL", "REST"],
  "Programming Languages": ["JavaScript", "TypeScript"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB"],
  "Cloud & DevOps": [
    "AWS",
    "S3",
    "Lambda",
    "EC2",
    "GCP",
    "Azure",
    "Elastic Search",
  ],
  Testing: [
    "Automation Testing",
    "Unit testing",
    "Jest",
    "React Testing Library",
    "Cypress",
  ],
  "Mobile Development": ["React Native"],
  "Project Management": [
    "Git",
    "Jira",
    "Trello",
    "TFS",
    "CodeBeamer",
    "Notion",
  ],
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
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="mailto:jaydevthomke.dev@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaEnvelope /> jaydevthomke.dev@gmail.com
                </a>
                <a
                  href="tel:7020808023"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaPhone /> 7020808023
                </a>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Pune, Maharashtra
                </span>
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
              {/* Objective Section */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Objective
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Highly skilled MERN Stack Developer with 7.8+ years of
                  experience in designing, developing, and deploying full-stack
                  web applications. Proficient in MongoDB/SQL, Express.js,
                  React, and Node.js, with a strong background in JavaScript,
                  Typescript, HTML, and CSS.
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
                      BE CSE
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Shivaji University, Miraj
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      2014 – 2017
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Diploma
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      MSBTE, Jaysingpur
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      2011 – 2014
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      SSC
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Shivaji University, Sangli
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">2009</p>
                  </div>
                </div>
              </section>

              {/* Personal Details Section */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p>
                      <span className="font-semibold">Date of Birth:</span>{" "}
                      25.06.1994
                    </p>
                    <p>
                      <span className="font-semibold">Gender:</span> Male
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">Languages Known:</span>{" "}
                      Marathi, English, Hindi
                    </p>
                    <p>
                      <span className="font-semibold">Hobbies:</span> Gaming,
                      Dance, Gym
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div
              style={{ flex: "4", padding: "20px" }}
            >
              {/* Summary Section */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Summary
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    Bachelor of Engineering in Computer Science (Shivaji
                    University)
                  </li>
                  <li>Excellent logical, analytical skills</li>
                  <li>Sound knowledge of Software Development</li>
                  <li>Full Stack Developer</li>
                  <li>
                    Proficient in leveraging AI tools like ChatGPT and GitHub
                    Copilot
                  </li>
                </ul>
              </section>
              {/* Work Experience Section */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Work Experience
                </h3>

                {/* Emerson */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Senior Software Engineer at Emerson Automation Solutions
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    April 2022 - Current
                  </p>
                  <div className="mt-2">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Products:
                    </p>
                    <div className="ml-4">
                      <h5 className="font-semibold mt-2 text-gray-800 dark:text-white">
                        ValveLink Pro
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>
                          Stack: ReactJS, Redux, Redux-sagas, Websockets
                          (react-use-websocket), Nodejs
                        </li>
                        <li>Working on a product called Valve Link Pro</li>
                        <li>
                          Current role is more of a Frontend where we consume APIs to communicate with live devices
                        </li>
                      </ul>
                      <h5 className="font-semibold mt-2 text-gray-800 dark:text-white">
                        RTM (Tank Monitoring)
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Stack: Nodejs, Graphql, Nextjs/Reactjs, MSSQL</li>
                        <li>
                          A multi-tenant system for real time tank monitoring.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spak Engineering */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Full Stack Developer at Spak Engineering
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    June 2020 - March 2022
                  </p>
                  <div className="mt-2">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Products:
                    </p>
                    <div className="ml-4">
                      <h5 className="font-semibold mt-2 text-gray-800 dark:text-white">
                        Telemed
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>
                          Stack: React, NodeJS, Express, MSSQL, MongoDB,
                          Websockets
                        </li>
                        <li>
                          Worked on a web application for managing healthcare
                          ecosystem
                        </li>
                        <li>
                          Implemented real-time features using websockets for
                          live chat and HLS video streaming
                        </li>
                      </ul>

                      <h5 className="font-semibold mt-2 text-gray-800 dark:text-white">
                        RE: Instrument Monitoring System
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Stack: React, NodeJS, MSSQL, MongoDB</li>
                        <li>Built and delivered an Electron-based tool</li>
                        <li>Hosting: AWS EC2, S3 for storage, DynamoDB</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FirstCry */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Full Stack Developer at Firstcry.com
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    Nov 2017 - June 2020
                  </p>
                  <div className="mt-2">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Products:
                    </p>
                    <div className="ml-4">
                      <h5 className="font-semibold mt-2 text-gray-800 dark:text-white">
                        B2B Application
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>
                          Stack: AngularJS 1.5, Angular 6, NodeJS (Restify),
                          PostgreSQL, MYSQL, MSSQL
                        </li>
                        <li>
                          Developed major business driving features for
                          franchisees
                        </li>
                        <li>
                          Implemented Auto Replenishment System for fast-selling
                          products
                        </li>
                        <li>Hosting: AWS EC2, S3, ElasticSearch, AWS lambda</li>
                      </ul>

                      <h5 className="font-semibold mt-2 text-gray-800 dark:text-white">
                        Feedback Kiosk
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Stack: Nodejs, Arduino, ESP32/ESP WIFI</li>
                        <li>
                          Developed a windows service for POS machines to record
                          customer feedback
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Allure INC */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Magento Developer at Allure INC
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    July 2017 - Oct 2017
                  </p>
                  <div className="mt-2">
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>Stack: PHP Magento, MYSQL, JavaScript, JQuery</li>
                      <li>Worked on Ecommerce website</li>
                      <li>Worked directly with Client</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
