
export default function Skills() {
  return (
    
    <div id="skills" className="flex flex-col items-center justify-center text-gray-800 pt-40 w-full">
      <h1 className="font-bold text-7xl drop-shadow-sm">SKILLS</h1>
      
      <div className="flex flex-col 2xl:flex-row w-full px-12 md:px-24">

        <div className="bar-collection flex flex-col items-center content-center">
        <h1 className="mt-20 mb-10 text-4xl lg:text-5xl">Languages</h1>
          <div className="bar">
            <div className="full bg-orange-400">
              <p className="ml-6">C++</p>
            </div>
          </div>
          <div className="bar">
            <div className="ninety bg-orange-400">
              <p className="ml-6">Typescript/Javascript</p>
            </div>
          </div>
          <div className="bar">
            <div className="ninety bg-orange-400">
              <p className="ml-6">Golang</p>
            </div>
          </div>
          <div className="bar">
            <div className="eighty bg-orange-400">
              <p className="ml-6">Python</p>
            </div>
          </div>
          <div className="bar">
            <div className="fifty bg-orange-400">
              <p className="ml-6">Lua</p>
            </div>
          </div>
          <div className="bar">
            <div className="full bg-orange-400">
              <p className="ml-6">HTML/CSS</p>
            </div>
          </div>
        </div>

        <div className="bar-collection flex flex-col items-center content-center">
          <h1 className="mt-32 md:mt-20 mb-10 text-4xl lg:text-5xl">Tools</h1>
          <div className="bar">
            <div className="full bg-forest-green">
              <p className="ml-6">Git</p>
            </div>
          </div>
          <div className="bar">
            <div className="full bg-forest-green">
              <p className="ml-6">VIM</p>
            </div>
          </div>
          <div className="bar">
            <div className="full bg-forest-green">
              <p className="ml-6">Webpack</p>
            </div>
          </div>
          <div className="bar">
            <div className="ninety bg-forest-green">
              <p className="ml-6">GDB, Valgrind, Gtest</p>
            </div>
          </div>
        </div>

        <div className="bar-collection flex flex-col items-center content-center">
        <h1 className="mt-32 md:mt-20 mb-10 text-4xl lg:text-5xl 2xl:hidden">Other</h1>
        <h1 className="mt-32 md:mt-20 mb-10 text-4xl lg:text-5xl hidden 2xl:flex">Frameworks & More</h1>
          <div className="bar">
            <div className="full bg-sky-500">
              <p className="ml-6">React</p>
            </div>
          </div>
          <div className="bar">
            <div className="full bg-sky-500">
              <p className="ml-6">SDL2</p>
            </div>
          </div>
          <div className="bar">
            <div className="full bg-sky-500">
              <p className="ml-6">Tailwind</p>
            </div>
          </div>
          <div className="bar">
            <div className="eighty bg-sky-500">
              <p className="ml-6">Bash</p>
            </div>
          </div>
          <div className="bar">
            <div className="sixty bg-sky-500">
              <p className="ml-6">NodeJS</p>
            </div>
          </div>
        </div>

      </div>

      <svg className="relative bg-sky-700 mt-20" width="100%" height="170" preserveAspectRatio="none" viewBox="0 0 461 93" fill="none">
        <rect id="Rectangle 1" width="461" height="51" fill="#ffffff"/>
        <rect id="Rectangle 2" y="51.4807" width="45.3084" height="233.882" transform="rotate(-80 0 51.4807)" fill="#ffffff"/>
        <rect id="Rectangle 3" x="452.451" y="4.8927" width="47.3067" height="233.889" transform="rotate(80 452.451 4.8927)" fill="#ffffff"/>
      </svg>
    </div> 
  )
}
