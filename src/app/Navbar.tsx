import Link from 'next/link'

export default function Navbar() {
  return (
    <div id='navbar' className="text-mint-cream text-2xl font-medium bg-sky-800 h-20 items-center text-center flex px-6 shadow-lg">
      <div>
        <Link href='/'>LUCAS OTAÑEZ</Link>
      </div>
      <div id="space" className="text-left ml-0 mr-auto align-right"></div>
      <div id="otherlinks" className="">
        <Link href='/'>EXPERIENCE</Link>
        <Link href='/'>SKILLS</Link>
        <Link href='/' className="text-green">RESUME</Link>
      </div>


    </div>
  )
}
