import Link from 'next/link'

export default function Navbar() {
  return (
    <div id='navbar' className="fixed z-50 w-full text-mint-cream text-2xl font-medium bg-sky-800 h-20 items-center text-center flex px-6 shadow-lg">
      <div>
        <Link href='/'>LUCAS OTAÑEZ</Link>
      </div>
      <div id="space" className="text-left ml-0 mr-auto align-right"></div>
      <div id="otherlinks" className="">
        <Link href='#projects'>PROJECTS</Link>
        <Link href='#skills'>SKILLS</Link>
        <Link href='/' className="text-naples-yellow">RESUME</Link>
      </div>


    </div>
  )
}
