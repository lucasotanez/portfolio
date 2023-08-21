import Image from 'next/image'
import Frog from './Frog'
import Skills from './Skills'
import Projects from './Projects'

export default function Home() {
  return (
    <main>
      <div id='top' className="md:pt-40 pt-24 bg-sky-700 text-mint-cream pb-6 sm:pb-24">
        <div className="flex flex-col items-center justify-center pt-12">

          <div id='intro-wrapper' className="relative scale-50 sm:scale-75 md:scale-100">
            <div id='intro' className="peer flex flex-col h-72 w-144 items-center justify-center
                text-center rounded-lg bg-gray-200 relative z-20">
              <h1 className="text-blue-900 font-bold text-7xl mb-4">Lucas Otañez</h1>
              <p className="text-black text-2xl">Full Stack Software Engineer</p>
            </div>
            <div className="duration-100 bg-black h-72 w-144 rounded-lg absolute peer-hover:top-5 rotate-6 peer-hover:rotate-0 top-7 peer-hover:left-5 left-10 z-10">
            </div>
            <div className="duration-100 bg-blue-900 h-72 w-144 rounded-lg absolute peer-hover:-top-5 -rotate-6 peer-hover:rotate-0 -top-12 peer-hover:-left-5 -left-10 z-10">
            </div>
          </div>

          <p className="sm:mt-28 mt-8 mb-0 mx-12 text-2xl md:text-3xl text-center">Engineering lightning fast and elegant software solutions.</p>

        </div>

      </div>
      
      <div className="relative group flex flex-col items-center justify-center pb-32">
        <svg className="relative" width="100%" height="170" preserveAspectRatio="none" viewBox="0 0 461 93" fill="none">
          <rect id="Rectangle 1" width="461" height="51" fill="#0369a1"/>
          <rect id="Rectangle 2" y="51.4807" width="45.3084" height="233.882" transform="rotate(-80 0 51.4807)" fill="#0369a1"/>
          <rect id="Rectangle 3" x="452.451" y="4.8927" width="47.3067" height="233.889" transform="rotate(80 452.451 4.8927)" fill="#0369a1"/>
        </svg>

        <svg className="-m-32 animate-bounce" width="104" height="89" viewBox="0 0 184 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M92 39L184 0.865234V50.8652L92 89L0 50.8652V0.865234L92 39Z" fill="#ffe66d"/>
        </svg>
         {/* <p className="absolute text-align-center mt-64 text-white">Scroll for more...</p> */}
      </div>

      <Skills/>

      <Projects/>


    </main>
  )
}
