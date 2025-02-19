(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6946:(e,t,r)=>{Promise.resolve().then(r.bind(r,4863))},4863:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(5155),a=r(1536),l=r(2115);function i(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=localStorage.getItem("theme"),r=window.matchMedia("(prefers-color-scheme: dark)").matches;"dark"===e||!e&&r?(t(!0),document.documentElement.classList.add("dark")):(t(!1),document.documentElement.classList.remove("dark"));let s=window.matchMedia("(prefers-color-scheme: dark)"),a=e=>{localStorage.getItem("theme")||(t(e.matches),e.matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))};return s.addEventListener("change",a),()=>s.removeEventListener("change",a)},[]),(0,s.jsx)("button",{onClick:()=>{t(!e),e?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"))},className:"h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors","aria-label":"Toggle theme",children:e?(0,s.jsx)(a.wQq,{size:20}):(0,s.jsx)(a.V6H,{size:20})})}let n="ws://ec2-13-51-171-195.eu-north-1.compute.amazonaws.com:3001",c=()=>{let[e,t]=(0,l.useState)(!1),[r,s]=(0,l.useState)(0),a=(0,l.useRef)(null),i=(0,l.useRef)(null),c=(0,l.useRef)(!0),o=(0,l.useCallback)(()=>{c.current=!1,i.current&&(clearTimeout(i.current),i.current=null),a.current&&(a.current.close(),a.current=null)},[]),d=(0,l.useCallback)(()=>{var e;if(c.current&&(null===(e=a.current)||void 0===e?void 0:e.readyState)!==WebSocket.OPEN){console.log("Connecting to WebSocket:",n);try{a.current=new WebSocket(n),a.current.onopen=()=>{t(!0),console.log("WebSocket connected")},a.current.onmessage=e=>{try{let t=JSON.parse(e.data);"viewerCount"===t.type&&"number"==typeof t.count&&s(t.count)}catch(e){console.error("Error parsing message:",e)}},a.current.onerror=e=>{console.error("WebSocket error:",e)},a.current.onclose=e=>{t(!1),console.log("WebSocket disconnected:",e.reason),c.current&&(i.current=setTimeout(()=>{console.log("Attempting to reconnect..."),d()},5e3))}}catch(e){console.error("Error creating WebSocket:",e),c.current&&(i.current=setTimeout(d,5e3))}}},[]);return(0,l.useEffect)(()=>(c.current=!0,d(),()=>{o()}),[d,o]),{isConnected:e,viewerCount:r}};function o(){let{isConnected:e,viewerCount:t}=c();return(0,s.jsxs)("div",{className:"flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-2 rounded-full",children:[(0,s.jsx)(a.Ny1,{}),(0,s.jsxs)("span",{children:[t," viewing"]}),!e&&(0,s.jsx)("span",{className:"w-2 h-2 rounded-full bg-red-500",title:"Disconnected"})]})}let d={"Frontend Development":["ReactJS","NextJS","Redux","Redux-sagas","Context API","Mobx","Zustand","Axios"],"Backend Development":["NodeJS","ExpressJS","NestJS","GraphQL","REST"],"Programming Languages":["JavaScript","TypeScript"],Databases:["MongoDB","PostgreSQL","MySQL","DynamoDB"],"Cloud & DevOps":["AWS","S3","Lambda","EC2","GCP","Azure","Elastic Search"],Testing:["Automation Testing","Unit testing","Jest","React Testing Library","Cypress"],"Mobile Development":["React Native"],"Project Management":["Git","Jira","Trello","TFS","CodeBeamer","Notion"]};function x(){let e=(0,l.useRef)(null);return(0,s.jsxs)("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors",children:[(0,s.jsx)("div",{className:"fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsx)(o,{})}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("button",{onClick:()=>{let e=document.createElement("a");e.href="/resume/resume_pdf.pdf",e.download="jaydev-thomke-resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)},className:"flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap",children:[(0,s.jsx)(a.WCW,{})," Download PDF"]}),(0,s.jsx)("div",{className:"ml-2",children:(0,s.jsx)(i,{})})]})]})}),(0,s.jsx)("div",{ref:e,className:"pt-24 pb-10 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{id:"resume-content",className:"max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-colors",children:[(0,s.jsx)("div",{className:"bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white p-8",children:(0,s.jsxs)("div",{className:"flex justify-between items-start",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-4xl font-bold",children:"Jaydev Manohar Thomke"}),(0,s.jsx)("h2",{className:"text-2xl mt-2",children:"Full Stack Developer"})]}),(0,s.jsxs)("div",{className:"mt-4 flex flex-wrap gap-4",children:[(0,s.jsxs)("a",{href:"mailto:jaydevthomke.dev@gmail.com",className:"flex items-center gap-2 hover:text-blue-200 transition-colors",children:[(0,s.jsx)(a.maD,{})," jaydevthomke.dev@gmail.com"]}),(0,s.jsxs)("a",{href:"tel:7020808023",className:"flex items-center gap-2 hover:text-blue-200 transition-colors",children:[(0,s.jsx)(a.Cab,{})," 7020808023"]}),(0,s.jsxs)("span",{className:"flex items-center gap-2",children:[(0,s.jsx)(a.vq8,{})," Pune, Maharashtra"]}),(0,s.jsxs)("a",{href:"https://www.linkedin.com/in/jaydev-thomke-730924136/",className:"flex items-center gap-2 hover:text-blue-200 transition-colors",children:[(0,s.jsx)(a.QEs,{})," LinkedIn"]}),(0,s.jsxs)("a",{href:"https://github.com/jaydev25",className:"flex items-center gap-2 hover:text-blue-200 transition-colors",children:[(0,s.jsx)(a.hL4,{})," GitHub"]}),(0,s.jsxs)("a",{href:"https://jaydev25.github.io/resume/",className:"flex items-center gap-2 hover:text-blue-200 transition-colors",children:[(0,s.jsx)(a.f35,{})," Website"]})]})]})}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,s.jsxs)("div",{style:{flex:"3",padding:"20px"},children:[(0,s.jsxs)("section",{className:"mb-8",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2",children:"Objective"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Highly skilled MERN Stack Developer with 7.8+ years of experience in designing, developing, and deploying full-stack web applications. Proficient in MongoDB/SQL, Express.js, React, and Node.js, with a strong background in JavaScript, Typescript, HTML, and CSS."})]}),(0,s.jsxs)("section",{className:"mb-8 grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2 col-span-1 md:col-span-2",children:"Skills"}),Object.entries(d).map(e=>{let[t,r]=e;return(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h4",{className:"text-lg font-semibold text-gray-700 dark:text-gray-300",children:t}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:r.map((e,t)=>(0,s.jsx)("span",{className:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm transition-colors",children:e},t))})]},t)})]}),(0,s.jsxs)("section",{className:"mb-8",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2",children:"Education"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:"BE CSE"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Shivaji University, Miraj"}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"2014 – 2017"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:"Diploma"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"MSBTE, Jaysingpur"}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"2011 – 2014"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:"SSC"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Shivaji University, Sangli"}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"2009"})]})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2",children:"Personal Details"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-semibold",children:"Date of Birth:"})," ","25.06.1994"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-semibold",children:"Gender:"})," Male"]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-semibold",children:"Languages Known:"})," ","Marathi, English, Hindi"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-semibold",children:"Hobbies:"})," Gaming, Dance, Gym"]})]})]})]})]}),(0,s.jsxs)("div",{style:{flex:"4",padding:"20px"},children:[(0,s.jsxs)("section",{className:"mb-8",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2",children:"Summary"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2",children:[(0,s.jsx)("li",{children:"Bachelor of Engineering in Computer Science (Shivaji University)"}),(0,s.jsx)("li",{children:"Excellent logical, analytical skills"}),(0,s.jsx)("li",{children:"Sound knowledge of Software Development"}),(0,s.jsx)("li",{children:"Full Stack Developer"}),(0,s.jsx)("li",{children:"Proficient in leveraging AI tools like ChatGPT and GitHub Copilot"})]})]}),(0,s.jsxs)("section",{className:"mb-8",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2",children:"Work Experience"}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h4",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Senior Software Engineer at Emerson Automation Solutions"}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400 italic",children:"April 2022 - Current"}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("p",{className:"font-semibold text-gray-800 dark:text-white",children:"Products:"}),(0,s.jsxs)("div",{className:"ml-4",children:[(0,s.jsx)("h5",{className:"font-semibold mt-2 text-gray-800 dark:text-white",children:"ValveLink Pro"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,s.jsx)("li",{children:"Stack: ReactJS, Redux, Redux-sagas, Websockets (react-use-websocket), .Net"}),(0,s.jsx)("li",{children:"Working on a product called Valve Link Pro"}),(0,s.jsx)("li",{children:"Current role is more of a Frontend where we consume .Net APIs to communicate with live devices"})]}),(0,s.jsx)("h5",{className:"font-semibold mt-2 text-gray-800 dark:text-white",children:"ValveLink gen-z"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,s.jsx)("li",{children:"Stack: Nodejs, Electron, ReactJS"}),(0,s.jsx)("li",{children:"Building a backend/libraries using Nodejs to communicate with HART Modem using HART Protocol"})]})]})]})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h4",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Full Stack Developer at Spak Engineering"}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400 italic",children:"June 2020 - March 2022"}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("p",{className:"font-semibold text-gray-800 dark:text-white",children:"Products:"}),(0,s.jsxs)("div",{className:"ml-4",children:[(0,s.jsx)("h5",{className:"font-semibold mt-2 text-gray-800 dark:text-white",children:"Telemed"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,s.jsx)("li",{children:"Stack: React, NodeJS, Express, MSSQL, MongoDB, Websockets"}),(0,s.jsx)("li",{children:"Worked on a web application for managing healthcare ecosystem"}),(0,s.jsx)("li",{children:"Implemented real-time features using websockets for live chat and HLS video streaming"})]}),(0,s.jsx)("h5",{className:"font-semibold mt-2 text-gray-800 dark:text-white",children:"RE: Instrument Monitoring System"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,s.jsx)("li",{children:"Stack: React, NodeJS, MSSQL, MongoDB"}),(0,s.jsx)("li",{children:"Built and delivered an Electron-based tool"}),(0,s.jsx)("li",{children:"Hosting: AWS EC2, S3 for storage, DynamoDB"})]})]})]})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h4",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Full Stack Developer at Firstcry.com"}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400 italic",children:"Nov 2017 - June 2020"}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("p",{className:"font-semibold text-gray-800 dark:text-white",children:"Products:"}),(0,s.jsxs)("div",{className:"ml-4",children:[(0,s.jsx)("h5",{className:"font-semibold mt-2 text-gray-800 dark:text-white",children:"B2B Application"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,s.jsx)("li",{children:"Stack: AngularJS 1.5, Angular 6, NodeJS (Restify), PostgreSQL, MYSQL, MSSQL"}),(0,s.jsx)("li",{children:"Developed major business driving features for franchisees"}),(0,s.jsx)("li",{children:"Implemented Auto Replenishment System for fast-selling products"}),(0,s.jsx)("li",{children:"Hosting: AWS EC2, S3, ElasticSearch, AWS lambda"})]}),(0,s.jsx)("h5",{className:"font-semibold mt-2 text-gray-800 dark:text-white",children:"Feedback Kiosk"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,s.jsx)("li",{children:"Stack: Nodejs, Arduino, ESP32/ESP WIFI"}),(0,s.jsx)("li",{children:"Developed a windows service for POS machines to record customer feedback"})]})]})]})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h4",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Magento Developer at Allure INC"}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400 italic",children:"July 2017 - Oct 2017"}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,s.jsx)("li",{children:"Stack: PHP Magento, MYSQL, JavaScript, JQuery"}),(0,s.jsx)("li",{children:"Worked on Ecommerce website"}),(0,s.jsx)("li",{children:"Worked directly with Client"})]})})]})]})]})]})]})})]})}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>d});var s=r(2115),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=s.createContext&&s.createContext(a),i=["attr","size","title"];function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var s,a;s=t,a=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(s))in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>s.createElement(x,n({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,r)=>s.createElement(t.tag,o({key:r},t.attr),e(t.child)))}(e.child))}function x(e){var t=t=>{var r,{attr:a,size:l,title:c}=e,d=function(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,i),x=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,d,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),c&&s.createElement("title",null,c),e.children)};return void 0!==l?s.createElement(l.Consumer,null,e=>t(e)):t(a)}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,441,517,358],()=>t(6946)),_N_E=e.O()}]);