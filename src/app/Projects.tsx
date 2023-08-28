'use client'
import { useEffect } from 'react';
import Link from 'next/link'

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
      <h1 className="font-bold text-7xl mb-20 drop-shadow-lg">PROJECTS</h1>

      <p className="text-xl italic mb-12 mx-8 text-center">*Click on any image to read a description!</p>

      <div id="projects-list" className="max-w-4xl sm:w-2/3 lg:w-1/2 w-80 flex flex-col items-center justify-center text-center m-auto">

        <div className="project m-auto flex flex-col items-center justify-center text-center mb-20">
          <div className="flex flex-row items-center justify-center">
            <p className="text-4xl drop-shadow-lg">PAYWALL SENTRY</p>
            <Link href="https://github.com/lucasotanez/paywall-sentry" target="_blank">
              <svg className="icon-link scale-40" width="98" height="96" fill="ffffff" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff"/></svg>
            </Link>
          </div>
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
          <div className="mt-4 mb-10 text-lg flex flex-row items-center justify-center">
            <p>Paywall Flagging Chrome Extension</p>
            <Link href="https://chrome.google.com/webstore/detail/paywall-sentry/felglaliecfphggeffmjejkejgdoabgh" target="_blank">
              <svg className="icon-link scale-30 -ml-6 -my-8 mr-0" xmlns="http://www.w3.org/2000/svg" width="98" height="96" viewBox="0 0 512 512"><path d="M188.8,255.93A67.2,67.2,0,1,0,256,188.75,67.38,67.38,0,0,0,188.8,255.93Z" fill="#ffffff"/><path fill="#ffffff" d="M476.75,217.79s0,0,0,.05a206.63,206.63,0,0,0-7-28.84h-.11a202.16,202.16,0,0,1,7.07,29h0a203.5,203.5,0,0,0-7.07-29H314.24c19.05,17,31.36,40.17,31.36,67.05a86.55,86.55,0,0,1-12.31,44.73L231,478.45a2.44,2.44,0,0,1,0,.27V479h0v-.26A224,224,0,0,0,256,480c6.84,0,13.61-.39,20.3-1a222.91,222.91,0,0,0,29.78-4.74C405.68,451.52,480,362.4,480,255.94A225.25,225.25,0,0,0,476.75,217.79Z"/><path fill="#ffffff" d="M256,345.5c-33.6,0-61.6-17.91-77.29-44.79L76,123.05l-.14-.24A224,224,0,0,0,207.4,474.55l0-.05,77.69-134.6A84.13,84.13,0,0,1,256,345.5Z"/><path fill="#ffffff" d="M91.29,104.57l77.35,133.25A89.19,89.19,0,0,1,256,166H461.17a246.51,246.51,0,0,0-25.78-43.94l.12.08A245.26,245.26,0,0,1,461.17,166h.17a245.91,245.91,0,0,0-25.66-44,2.63,2.63,0,0,1-.35-.26A223.93,223.93,0,0,0,91.14,104.34l.14.24Z"/></svg>
            </Link>
          </div>
        </div>

        <div className="project m-auto flex flex-col items-center justify-center text-center mb-20">
          <div className="flex flex-row items-center justify-center">
            <p className="text-4xl drop-shadow-lg">LINTERVIEW</p>
            <Link href="https://github.com/linterview-project" target="_blank">
              <svg className="icon-link scale-40" width="98" height="96" fill="ffffff" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff"/></svg>
            </Link>
          </div>
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
          <div className="mt-4 mb-10 text-lg flex flex-row items-center justify-center">
            <p>Mock Behavioral Interview Practice Web Application</p>
            <Link href="https://www.linterview.net/" target="_blank">
              <svg className="icon-link scale-30 -ml-6 -my-8 mr-0" width="98" height="96" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="li" d="M80.84 142.28C75.2933 142.195 70.7707 141.597 67.272 140.488C63.8587 139.379 61.128 137.843 59.08 135.88C57.1173 133.832 55.752 131.4 54.984 128.584C54.3013 125.683 53.96 122.44 53.96 118.856V44.744L73.032 41.672V115.016C73.032 116.723 73.16 118.259 73.416 119.624C73.672 120.989 74.1413 122.141 74.824 123.08C75.592 124.019 76.6587 124.787 78.024 125.384C79.3893 125.981 81.224 126.365 83.528 126.536L80.84 142.28ZM113.532 141H94.46V73.672H113.532V141ZM115.324 54.216C115.324 57.7147 114.172 60.488 111.868 62.536C109.649 64.4987 107.004 65.48 103.932 65.48C100.86 65.48 98.172 64.4987 95.868 62.536C93.6493 60.488 92.54 57.7147 92.54 54.216C92.54 50.7173 93.6493 47.9867 95.868 46.024C98.172 43.976 100.86 42.952 103.932 42.952C107.004 42.952 109.649 43.976 111.868 46.024C114.172 47.9867 115.324 50.7173 115.324 54.216Z" fill="white"/>
                <path id="Ellipse 1" d="M87 168H87.4019C105.812 168 120.144 168 131.022 166.791C141.935 165.579 150.693 163.042 156.868 156.868C163.042 150.693 165.579 141.935 166.791 131.022C168 120.144 168 105.812 168 87.4026V87V86.5974C168 68.1878 168 53.8561 166.791 42.978C165.579 32.065 163.042 23.3068 156.868 17.1324C150.693 10.9579 141.935 8.42113 131.022 7.20857C120.144 5.99989 105.812 5.99994 87.4022 6L87 6L86.5978 6C68.188 5.99994 53.8562 5.99989 42.978 7.20857C32.065 8.42113 23.3068 10.9579 17.1324 17.1324C10.9579 23.3068 8.42113 32.065 7.20857 42.978C5.99989 53.8562 5.99994 68.188 6 86.5978L6 87L6 87.4022C5.99994 105.812 5.99989 120.144 7.20857 131.022C8.42113 141.935 10.9579 150.693 17.1324 156.868C23.3068 163.042 32.065 165.579 42.978 166.791C53.8563 168 68.1882 168 86.5981 168H87Z" stroke="white" strokeWidth="12"/>
              </svg>            
            </Link>
          </div>
        </div>

        <div className="project m-auto flex flex-col items-center justify-center text-center mb-20">
          <div className="flex flex-row items-center justify-center">
            <p className="text-4xl drop-shadow-lg">ICARUS FREESTYLE</p>
            <Link href="https://github.com/lucasotanez/icarus-freestyle" target="_blank">
              <svg className="icon-link scale-40" width="98" height="96" fill="ffffff" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff"/></svg>
            </Link>
          </div>
          <div className="group">
            <img className="z-20 duration-300" onClick={toggleInfo} src="/img/icarus.gif"/>
            <div className="z-10 top-0 translate-y-2 group-hover:rotate-3 
                group-hover:translate-x-12 backdrop" onClick={toggleInfo}>
              <p className="pointer-events-none mx-8 my-4 sm:text-md md:text-xl text-sm">
                Icarus Freestyle is a side-scrolling game where you play as Icarus flying
                freestyle through a laser maze. All of the sprites were made custom and 
                all gameplay logic was programmed in <span className="text-naples-yellow">C++</span> from
                scratch using the <span className="text-naples-yellow">SDL</span> desktop application library.
                Instructions to build using the Makefile can be found on Github.
              </p>
            </div>
          </div>
          <div className="mt-4 mb-10 text-lg flex flex-row items-center justify-center">
            <p>C++ Game</p>
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
          <div className="flex flex-row items-center justify-center">
            <p className="text-4xl drop-shadow-lg">DIGIT OCR</p>
            <Link href="https://github.com/lucasotanez" target="_blank">
              <svg className="icon-link scale-40" width="98" height="96" fill="ffffff" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff"/></svg>
            </Link>
          </div>
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
