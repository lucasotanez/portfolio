import Link from 'next/link'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'

export default function Home() {
  return (
    <main>
      <div id='top' className="md:pt-40 sm:pt-24 pt-12 bg-sky-700 text-mint-cream pb-6 sm:pb-12">
        <div className="flex flex-col items-center justify-center pt-12">

          <div id='intro-wrapper' className="relative scale-45 sm:scale-75 md:scale-100">
            <div id='intro' className="peer flex flex-col h-72 w-144 items-center justify-center
                text-center rounded-lg bg-gray-200 relative z-20">
              <h1 className="text-blue-900 font-bold text-7.5xl mb-4">Lucas Otañez</h1>
              <p className="text-better-black sm:text-2xl text-3xl drop-shadow-lg font-medium">Full Stack Software Engineer</p>
            </div>
            <div className="animate-cardRight sm:peer-hover:animate-none duration-300
              bg-better-black h-72 w-144 rounded-lg absolute sm:peer-hover:top-5 rotate-6
              sm:peer-hover:rotate-0 top-7 sm:peer-hover:left-5 left-10 z-10
              drop-shadow-cardRight sm:peer-hover:drop-shadow-none">
            </div>
            <div className="animate-cardLeft sm:peer-hover:animate-none duration-300
              bg-blue-900 h-72 w-144 rounded-lg absolute sm:peer-hover:-top-5 -rotate-6
              sm:peer-hover:rotate-0 -top-12 sm:peer-hover:-left-5 -left-10 z-10
              drop-shadow-cardLeft sm:peer-hover:drop-shadow-none">
            </div>
          </div>

          <p className="md:mt-28 sm:mt-16 mt-2 mb-0 mx-12 text-2xl md:text-3xl text-center drop-shadow-lg">Engineering lightning fast and elegant software solutions.</p>

        </div>

        <div className="flex flex-row items-center justify-center mt-12">
          <Link href="https://github.com/lucasotanez" target="_blank" title="Github">
            <svg className="icon-link scale-50" width="98" height="96" fill="ffffff" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff"/></svg>
          </Link>

          <Link href="https://www.linkedin.com/in/lucas-otanez/" target="_blank" title="Linkedin">
            <svg className="icon-link scale-50" xmlns="http://www.w3.org/2000/svg" width="98" height="96" fill="#ffffff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </Link>

          <Link href="https://devpost.com/lucasotanez?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" title="Devpost">
            <svg className="icon-link scale-55" fill="#ffffff" width="98" height="96" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/></svg>
          </Link>
        </div>

      </div>

      
      <div className="relative group flex flex-col items-center justify-center pb-32">
        <svg className="relative" width="100%" height="170" preserveAspectRatio="none" viewBox="0 0 461 93" fill="none">
          <rect id="Rectangle 1" width="461" height="51" fill="#0369a1"/>
          <rect id="Rectangle 2" y="51.4807" width="45.3084" height="233.882" transform="rotate(-80 0 51.4807)" fill="#0369a1"/>
          <rect id="Rectangle 3" x="452.451" y="4.8927" width="47.3067" height="233.889" transform="rotate(80 452.451 4.8927)" fill="#0369a1"/>
        </svg>

        <svg className="-m-32 animate-bounce" width="64" height="89" viewBox="0 0 184 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M92 39L184 0.865234V50.8652L92 89L0 50.8652V0.865234L92 39Z" fill="#ffe66d"/>
        </svg>
         {/* <p className="absolute text-align-center mt-64 text-white">Scroll for more...</p> */}
      </div>

      <Skills/>

      <Experience/>

      <Projects/>


    </main>
  )
}
