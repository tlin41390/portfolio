"use client"
import Image from 'next/image'
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import code from "../../public/code.png"
import monitor from "../../public/monitor.png"
import creeper from "../../public/creeper.png"
import portrait from "../../public/portrait.png"
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
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://resume_terence_lin.tiiny.site/" target="_blank" rel="noopener">
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

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
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
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I have created multiple projects with different languages and frameworks. Most of(if not all) my projects are on Github.
              These projects involve full stack projects, web applications, data visualizations, and many more!
            </p>
          </div>
            <div className = "lg:flex lg:flex-wrap gap-5">
              <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white">
                <h3 className="text-2xl font-bold pb-10">Full Stack Search Engine</h3>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/tlin41390/SearchEngine" target="_blank" rel="noopener">
                  Link to Project
                </a>
                <p className=" text-lg pt-8 pb-4">
                  Full stack search engine created with Java.
                </p>
                <h4 className="py-2 text-teal-600">Software Used</h4>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Jetty</p>
                <p className="text-gray-800 py-1">Servlets</p>
              </div>
              <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white">
                <h3 className="text-2xl font-bold pb-10">React Chat App</h3>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/tlin41390/KapyChat" target="_blank" rel="noopener">
                  Link to Project
                </a>
                <p className=" text-lg pt-8 pb-4">
                  React messaging app with user authentication. Connects to firebase database for storing users and their chat history
                </p>
                <h4 className="py-2 text-teal-600">Software Used</h4>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">SCSS</p>
                <p className="text-gray-800 py-1">Firebase</p>
              </div>
              <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white">
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
               <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white">
                <h3 className="text-2xl font-bold pb-10">GPU Viz</h3>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/tlin41390/GPU_Visualizations" target="_blank" rel="noopener">
                  Link to Project
                </a>
                <p className=" text-lg pt-8 pb-4">
                  Data visualization of GPU shortage during the pandemic
                </p>
                <h4 className="py-2 text-teal-600">Software Used</h4>
                <p className="text-gray-800 py-1">D3.js</p>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">HTML</p>
                <p className="text-gray-800 py-1">CSS</p>
              </div>
              <div className="shadow-lg p-10 rounded-xl my-10 dark: bg-white">
                <h3 className="text-2xl font-bold pb-10">Detection of Network Compression</h3>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/Justigo/Compression-Detection" target="_blank" rel="noopener">
                  Link to Project
                </a>
                <p className=" text-lg pt-8 pb-4">
                  Send packets from server to client and detect if packets are compressed or not
                </p>
                <h4 className="py-2 text-teal-600">Software Used</h4>
                <p className="text-gray-800 py-1">C</p>
                <p className="text-gray-800 py-1">CJson</p>
                <p className="text-gray-800 py-1">VirtualBox</p>
                <p className="text-gray-800 py-1"></p>
              </div>
            </div>
        </section>
      </main>
    </div>
  )
}
