"use client"
import Image from 'next/image'
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import {useState} from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className = {darkMode ? "dark" : ""}>
      <Head>
        <title>Terence Lin Portfolio</title>
        <meta name="description" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developed by Terence</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick = {()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                Resume
              </a>
              </li>
            </ul>
          </nav>
          <div className = "text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Terence Lin</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
            <p className = "text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Software Engineer looking for roles involving web development or backend development.
              I have a voracious approach to learning and am always looking to improve my skills.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
           <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit = "cover"/>
           </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              I recently graduated from the <span className= "text-teal-500">University of San Francisco</span>(with honors :D ) with a B.S. in Computer Science.
              I am passionate about software engineering and am always looking to improve my skills. I have collaborated with many different clients and professors
              in creating scripts for <span className= "text-teal-500">data processing</span> and <span className = "text-teal-500">software development</span>. 
            </p>
            <p className = "text-md py-2 leading-8 text-gray-800">
              I have experience with full stack web development, backend development,data structures and algorithms, and processing large datasets.
              Hopefully I have the skills you are looking for!
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} className = "mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beatiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className = "text-gray-800 py-1">Figma</p>
              <p className = "text-gray-800 py-1">Photoshop</p>
              <p className = "text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} className = "mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beatiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className = "text-gray-800 py-1">Figma</p>
              <p className = "text-gray-800 py-1">Photoshop</p>
              <p className = "text-gray-800 py-1">Adobe XD</p>
            </div>
          </div>
        </section>
          <section>
            <div>
              <h3 className="text-3xl py-1">Portfolio</h3>
            </div>
          </section>
      </main>
    </div>
  )
}
