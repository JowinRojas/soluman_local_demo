import Image from "next/image"
import Link from "next/link"

const links = [
  {
    name: 'Servicios',
    href: '/servicios'
  },
  {
    name: 'Reservas',
    href: '/reservas'
  }
]

export default function Navbar() {
  return (
    <nav className="border border-red-500">
      <div className="flex max-w-screen-xl items-center p-4 border border-sky-500 justify-between mx-auto">

        <Link href={'/'}>
          <span className="flex items-center">
            <Image src="https://flowbite.com/docs/images/logo.svg" className="" alt="Flowbite Logo" width={32} height={33} style={{ width: 32, height: 33 }}></Image>
            <span className="p-4">Soluman</span>
          </span>
        </Link>

        <button data-collapse-toggle="navbar-default" type="button" id="btn_menu" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">

          <ul className="flex">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    key={link.name}
                    href={link.href}
                    className={``}>
                    <p className="p-4">{link.name}</p>
                  </Link>
                </li>
              )
            })}
          </ul>

        </div>

      </div>
    </nav>
  )
}