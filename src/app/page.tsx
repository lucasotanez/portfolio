import Image from 'next/image'
import Frog from './Frog'
import Skills from './Skills'
import Projects from './Projects'

export default function Home() {
  return (
    <main>
      <div id='top' className="pt-40 bg-sky-700 text-mint-cream py-16 pb-24">
        <div className="flex flex-col items-center justify-center pt-12">
          { /*
          <div id='cup' className="mr-20 relative">
            <Frog/>
            <svg className="z--1 m-auto justify-center w-96" width="612" height="367" viewBox="0 0 408 245" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle 1" x="119.878" width="227" height="245" fill="#D9D9D9"/>
              <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M80.9984 205C121.867 205 154.998 171.153 154.998 122C154.998 72.8467 121.867 33 80.9984 33C40.1293 33 -4.57695 67.5 0.377661 122C5.33227 176.5 40.1293 205 80.9984 205ZM73.5853 163C97.1947 163 123.878 152.376 123.878 122C123.878 91.6243 97.1947 83 73.5853 83C57.4917 83 37.8777 94 37.8777 116.5C37.8777 139 49.9759 163 73.5853 163Z" fill="#D9D9D9"/>
              <path id="Subtract_2" fill-rule="evenodd" clip-rule="evenodd" d="M59.8777 7.39929C63.6628 141.381 89.2648 245 120.285 245C151.873 245 177.843 137.546 180.878 0H68.077C67.1956 0.0762841 66.3302 0.261153 65.5085 0.54994C64.4004 0.939414 63.3936 1.51027 62.5455 2.22993C61.6973 2.94958 61.0246 3.80394 60.5656 4.74421C60.1534 5.58868 59.9208 6.4876 59.8777 7.39929Z" fill="#D9D9D9"/>
              <path id="Subtract_3" fill-rule="evenodd" clip-rule="evenodd" d="M399.049 0H286.878C289.912 137.546 315.882 245 347.471 245C378.488 245 404.089 141.402 407.878 7.44015C407.869 6.4756 407.641 5.52138 407.206 4.62988C406.762 3.71993 406.112 2.89314 405.292 2.1967C404.472 1.50026 403.499 0.947814 402.428 0.570904C401.356 0.193994 400.208 0 399.049 0Z" fill="#D9D9D9"/>
            </svg>
          </div>
          */}

          <div id='intro-wrapper' className="relative">
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

          <p className="mt-28 mb-0 text-3xl text-center">Engineering lightning fast and elegant software solutions.</p>

        </div>

      </div>
      
      <div className="relative group flex flex-col items-center justify-center pb-64">
        <svg className="relative" width="100%" height="170" preserveAspectRatio="none" viewBox="0 0 461 93" fill="none">
          <rect id="Rectangle 1" width="461" height="51" fill="#0369a1"/>
          <rect id="Rectangle 2" y="51.4807" width="45.3084" height="233.882" transform="rotate(-80 0 51.4807)" fill="#0369a1"/>
          <rect id="Rectangle 3" x="452.451" y="4.8927" width="47.3067" height="233.889" transform="rotate(80 452.451 4.8927)" fill="#0369a1"/>
        </svg>

        <svg className="-m-32 animate-bounce" width="104" height="89" viewBox="0 0 184 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M92 39L184 0.865234V50.8652L92 89L0 50.8652V0.865234L92 39Z" fill="#ffe66d"/>
        </svg>
         {/* <p className="absolute text-align-center mt-64 text-white">Scroll for more...</p> */}
      </div>

      <Skills/>

      <Projects/>


    </main>
  )
}
