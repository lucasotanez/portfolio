'use client'
import { useEffect } from 'react';

export default function Projects() {

  useEffect( () => {

    resizeBackdrop()
    window.addEventListener('resize', resizeBackdrop)

  })

  let resizeBackdrop = () => {
    let backdrops : any = document.getElementById('projects-list')?.getElementsByClassName('backdrop');

    for (let i = 0; i < backdrops.length; i++) {
      let imgSib = backdrops[i].previousSibling;
      backdrops[i].style.height = imgSib.offsetHeight.toString() + 'px';
    }
  }

  let toggleInfo = (e : any) => {

    let target = e.target;
    let behind;
    if (target.classList.contains('backdrop')) {
      behind = e.target.previousSibling;
      behind.classList.toggle('z-20')
      behind.classList.toggle('z-10')
      target.classList.toggle('group-hover:rotate-3')
      target.classList.toggle('group-hover:translate-x-12')
      behind.classList.toggle('group-hover:-rotate-3')
      behind.classList.toggle('group-hover:-translate-x-12')
    } 
    else {
      behind = e.target.nextSibling;
      target.classList.toggle('z-10')
      target.classList.toggle('z-20')
      behind.classList.toggle('group-hover:rotate-3')
      behind.classList.toggle('group-hover:translate-x-12')
      target.classList.toggle('group-hover:-rotate-3')
      target.classList.toggle('group-hover:-translate-x-12')
    }
  }

  return (
    <div id="projects" className="pt-32 w-full flex flex-col items-center justify-center text-mint-cream bg-sky-700">
      <h1 className="font-bold text-7xl mb-32 drop-shadow-lg">PROJECTS</h1>

      <div id="projects-list" className="max-w-4xl sm:w-2/3 lg:w-1/2 w-80 flex flex-col items-center justify-center text-center m-auto">

        <div className="project m-auto flex flex-col items-center justify-center text-center mb-20">
          <p className="text-4xl mb-8 drop-shadow-lg">PAYWALL SENTRY</p>
          <div className="group">
            <img className="z-20 duration-300" onClick={toggleInfo} src="/img/paywallsentry.png"/>
            <div className="z-10 top-0 overflow-auto translate-y-2 group-hover:rotate-3 
                group-hover:translate-x-12 backdrop" onClick={toggleInfo}>
              <p className="pointer-events-none mx-8 my-4 sm:text-md md:text-xl text-sm">This Google Chrome extension
              was created in <span className="text-naples-yellow">Typescript</span> and 
              compiled with <span className="text-naples-yellow">Webpack</span>. It supports
              flagging on both hard and soft paywalls, differentiating 
              between the two with different colors and icons. Users can configure options 
              to include subscriptions they already own to disable flags on those sites.</p>
            </div>
          </div>
          <div className="mt-4 mb-10 text-lg">
            <p>Paywall Flagging Chrome Extension</p>
          </div>
        </div>

        <div className="project m-auto flex flex-col items-center justify-center text-center mb-20">
          <p className="text-4xl mb-8 drop-shadow-lg">LINTERVIEW</p>
          <div className="group">
            <img className="z-20 duration-300" onClick={toggleInfo} src="/img/linterview.png"/>
            <div className="z-10 top-0 translate-y-2 group-hover:rotate-3 
                group-hover:translate-x-12 backdrop" onClick={toggleInfo}>
              <p className="pointer-events-none mx-8 my-4 sm:text-md md:text-xl text-sm">
                This web application allows users to practice their behavioral interview
                answers and techniques. You can think of LinterView as <span className="italic">LeetCode for 
                behavioral interviews.</span> The app supports user accounts and uses
                AI to parse and give feedback on user responses. The frontend was built
                with <span className="text-naples-yellow">Next.js</span> and <span className="text-naples-yellow">TailwindCSS</span>.
                The backend is written in <span className="text-naples-yellow">Golang</span> and 
                communicates with a <span className="text-naples-yellow">Google Cloud</span> database.
              </p>
            </div>
          </div>
          <div className="mt-4 mb-10 text-lg">
            <p>Mock Behavioral Interview Practice Web Application</p>
          </div>
        </div>

{/*
        <div className="project m-auto flex flex-col items-center justify-center text-center mb-20">
          <p className="text-4xl mb-8">Icarus Freestyle</p>
          <div className="group">
            <img className="z-20 duration-300" onClick={toggleInfo} src="/img/linterview.png"/>
            <div className="z-10 top-0 translate-y-2 group-hover:rotate-3 
                group-hover:translate-x-12 backdrop" onClick={toggleInfo}>
              <p className="pointer-events-none mx-8 my-4 sm:text-md lg:text-lg xl:text-xl text-sm">
                Icarus Freestyle is a side-scrolling game where you play as Icarus flying
                freestyle through a laser maze. All of the sprites were made custom and 
                all gameplay logic was programmed in <span className="text-naples-yellow">C++</span> from
                scratch using the <span className="text-naples-yellow">SDL</span> desktop application library.
                Instructions to build using the Makefile can be found on Github.
              </p>
            </div>
          </div>
          <div className="mt-4 mb-10 text-lg">
            <p>Custom C++ SDL Game</p>
          </div>
        </div>
*/}

        <div className="project m-auto flex flex-col items-center justify-center text-center mb-20">
          <p className="text-4xl mb-8 drop-shadow-lg">DIGIT OCR</p>
          <div className="group">
            <img className="z-20 duration-300" onClick={toggleInfo} src="/img/ocr.png"/>
            <div className="z-10 top-0 translate-y-2 group-hover:rotate-3 
                group-hover:translate-x-12 backdrop" onClick={toggleInfo}>
              <p className="pointer-events-none mx-8 my-4 sm:text-md md:text-xl text-sm">
                This is a command line utility I made for a school project. The script is
                capable of transcribing any bitmap image containing digits. The project also
                required me to create a "big int" class (and operations) 
                in <span className="text-naples-yellow">C++</span> so that 
                the number transcribed can be infinitely big. Identifying correct digits
                involved using breadth-first search and calculating different values
                for key features of each digit. These values can be seen in the bottom 2/3
                of the terminal in this image.
              </p>
            </div>
          </div>
          <div className="mt-4 mb-10 text-lg">
            <p>Optical Character Recognition for Sequences of Numbers</p>
          </div>
        </div>

      </div>

    </div>
  )
}
