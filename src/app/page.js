"use client"
import Image from 'next/image'
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import code from "../../public/code.png"
import monitor from "../../public/monitor.png"
import search_engine from "../../public/search_engine.jpg"
import creeper from "../../public/creeper.png"
import portrait from "../../public/portrait.png"
import network_connection from "../../public/network_compression.jpg"
import gpu_viz1 from "../../public/gpu_viz1.jpg"
import gpu_viz2 from "../../public/gpu_viz2.jpg"
import gpu_viz3 from "../../public/gpu_viz3.jpg"
import football from "../../public/football.jpg"
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Terence Lin Portfolio</title>
        <meta name="description" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">developed by Terence</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://resumeterencelin.tiiny.site/" target="_blank" rel="noopener">
                Resume
              </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Terence Lin</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-xl mx-auto">
              Software Engineer looking for roles involving web development or backend development.
              I have a voracious approach to learning and am always looking to improve my skills.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/tlin41390" target="_blank" rel="noopener"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/terence-lin-22b023197/" target="_blank" rel="noopener"><AiFillLinkedin /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={portrait} layout="fill" objectFit="cover" />
          </div>
        </section>
        <br className="m-20"></br>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <br className="m-2"></br>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
              I recently graduated from the <span className="text-teal-500">University of San Francisco</span>(with honors :D ) with a B.S. in Computer Science.
              I am passionate about software engineering and am always looking to improve my skills. I have collaborated with many different clients and professors
              in creating scripts for <span className="text-teal-500">data processing</span> and <span className="text-teal-500">software development</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I have experience with full stack web development, backend development,data structures and algorithms, and processing large datasets.
              Hopefully I have the skills you are looking for!
            </p>
          </div>
          <br className="m-5"></br>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Langauges</h3>
              <p className="py-2">
                The languages I use to create scripts and projects.
              </p>
              <h4 className="py-4 text-teal-600">Languages</h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">C</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">SQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
              <Image src={monitor} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Systems</h3>
              <p className="py-2">
                Various operating systems and terminals I have used
              </p>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">Linux</p>
              <p className="text-gray-800 py-1">Windows</p>
              <p className="text-gray-800 py-1">Bash</p>
              <p className="text-gray-800 py-1">Git</p>
              <p className="text-gray-800 py-1">Zsh</p>
              <p className="text-gray-800 py-1">Powershell</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
              <Image src={creeper} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Software</h3>
              <p className="py-2">
                Software that I have worked with and am familiar with.
              </p>
              <h4 className="py-4 text-teal-600">Software</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">VirtualBox</p>
              <p className="text-gray-800 py-1">Tableau</p>
              <p className="text-gray-800 py-1">Jupyter</p>
              <p className="text-gray-800 py-1">Excel</p>
            </div>
          </div>
        </section>
        <br className="m-20"></br>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Work Experience</h3>
            <br className="m-2"></br>
            <div className="shadow-2xl p-10 rounded-xl my-10 dark: bg-white justify-center">
              <h3 className="text-2xl font-bold pb-10">SolarFi</h3>
              <h4 className="py4 text-teal-600">Web Developer Intern</h4>
              <div className=" text-lg pt-8 pb-4">
                <p>I designed an emergency web application that encompasses disaster alerts, emergency pereperation, and shelter location. I worked with my group to initially create a mockup with Figma,
                  where after the prototype was approved, I built the web application UI from scratch using React and Talwind for styling. As a result, my group and I constructed an application that works for mobile and web.</p>
              </div>
            </div>
            <div className="shadow-2xl p-10 rounded-xl my-10 dark: bg-white justify-center">
              <h3 className="text-2xl font-bold pb-10">University of San Francisco MAGICS Lab</h3>
              <h4 className="py4 text-teal-600">Data Engineer Intern</h4>
              <ul className=" text-lg pt-8 pb-4">
                <p>As a member of my schools data engineer club, or as it is called MAGICS Lab, our group worked on creating a machine learning model for a smart watch company. My tasks involve generating the pictures for the
                  data visualizatons for the PPG data, and learning how to create a machine learning model that will learn the demographic(gender, age) for who is wearing the smart watches. Through this organization, I learned how to adapt on the spot to learn material
                  that will help me understand my work, despite initially having no knowledge of the source material and concept.</p>
              </ul>
            </div>
            <div className="shadow-2xl p-10 rounded-xl my-10 dark: bg-white justify-center">
              <h3 className="text-2xl font-bold pb-10">University of San Francisco</h3>
              <h4 className="py4 text-teal-600">Computer Science Tutor</h4>
              <ul className=" text-lg pt-8 pb-4">
                <p>I was a computer science tutor at the University of San Francisco. I hosted office hours for students to come in and ask questions regarding their wor, or if they simply want clarification on a concept. I guided students with what type of logic they can use to
                  start on their work, I made sure students are on the right track in terms of debugging code, and I even helped fix hardware and software issues for the students.</p>
              </ul>
            </div>
          </div>
        </section>
        <br className="m-20"></br>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <br className="m-2"></br>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I have created multiple projects with different languages and frameworks. Most of(if not all) my projects are on Github.
              These projects involve full stack projects, web applications, data visualizations, and many more!
            </p>
          </div>
          <div className="flex-wrap gap-5 mr-4">
            <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white justify-center">
              <h3 className="text-2xl font-bold pb-10">Full Stack Search Engine</h3>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/tlin41390/SearchEngine" target="_blank" rel="noopener">
                Link to Project
              </a>
              <p className=" text-lg pt-8 pb-4">
                Full stack search engine created with Java. Project utilizes Jetty and Servlets to create a web application and multithreading to speed up the search process. For the UI, users can search up queries look up their history as well as delete it, and perform an "Im Feeling Lucky" search
              </p>
              <h4 className="py-2 text-teal-600">Software Used</h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Jetty</p>
              <p className="text-gray-800 py-1">Servlets</p>
              <br></br>
              <Image src={search_engine} width={750} height={450} />
            </div>
            <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white justify-center">
              <h3 className="text-2xl font-bold pb-10">React Chat App</h3>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/tlin41390/KapyChat" target="_blank" rel="noopener">
                Link to Project
              </a>
              <p className=" text-lg pt-8 pb-4">
                React messaging app with user authentication. Connects to firebase database for storing users and their chat history. Users can talk to other users and they can login with either their names or their email address
              </p>
              <h4 className="py-2 text-teal-600">Software Used</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">SCSS</p>
              <p className="text-gray-800 py-1">Firebase</p>
            </div>
            <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white justify-center">
              <h3 className="text-2xl font-bold pb-10">Memory Allocator</h3>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/USF-CS326-S23/project01-tlin41390" target="_blank" rel="noopener">
                Link to Project
              </a>
              <p className=" text-lg pt-8 pb-4">
                Reimplementation of the C malloc() and free() functions
              </p>
              <h4 className="py-2 text-teal-600">Software Used</h4>
              <p className="text-gray-800 py-1">C</p>
              <p className="text-gray-800 py-1">xv6</p>
            </div>
            <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white justify-center">
              <h3 className="text-2xl font-bold pb-10">GPU Viz</h3>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/tlin41390/GPU_Visualizations" target="_blank" rel="noopener">
                Link to Project
              </a>
              <p className=" text-lg pt-8 pb-4">
                Data visualization of GPU shortage during the pandemic Provides several different ways to visualize the stock, the amount bought, as well as the price of etherium relative to the GPUs.
              </p>
              <h4 className="py-2 text-teal-600">Software Used</h4>
              <p className="text-gray-800 py-1">D3.js</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <div className="flex">
                <div className="mr-4">
                  <Image src={gpu_viz1} width={750} height={450} />
                </div>
                <div className="mr-4">
                  <Image src={gpu_viz2} width={750} height={450} />
                </div>
                <div>
                  <Image src={gpu_viz3} width={750} height={450} />
                </div>
              </div>
            </div>
            <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white">
              <h3 className="text-2xl font-bold pb-10">Detection of Network Compression</h3>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/Justigo/Compression-Detection" target="_blank" rel="noopener">
                Link to Project
              </a>
              <p className=" text-lg pt-8 pb-4">
                Send packets from server to client and detect if packets are compressed or not. The program uses 2 virtual machines to send packets to each other and the client will detect if the packets are compressed or not. Program uses default and raw sockets.
              </p>

              <h4 className="py-2 text-teal-600">Software Used</h4>
              <p className="text-gray-800 py-1">C</p>
              <p className="text-gray-800 py-1">CJson</p>
              <p className="text-gray-800 py-1">VirtualBox</p>
              <p className="text-gray-800 py-1"></p>
              <br></br>
            </div>
            <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white">
              <h3 className="text-2xl font-bold pb-10">FootBall Studs and Duds</h3>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/tlin41390/Football_Analysis_2023" target="_blank" rel="noopener">
                Link to Project
              </a>
              <p className=" text-lg pt-8 pb-4">
                Web App that will scrape the footbal stats from the Football Reference website, store it in a MongoDB database, and display it on a web page. The program scrapes weekly after every game for the 2023 season to determine the studs and duds so far.
              </p>

              <h4 className="py-2 text-teal-600">Software Used</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">BeautifulSoup</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <br></br>
              <Image src={football} width={750} height={450} />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-900">
        <div className="flex justify-center py-10">
          <p className="text-gray-800 dark:text-white">© 2023 Terence Lin</p>
        </div>
      </footer>
    </div>
  )
}
