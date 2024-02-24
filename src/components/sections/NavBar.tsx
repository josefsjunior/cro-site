import { useState } from 'react'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const NAV_BAR_OPTIONS = [
        { name: "Corpo Clínico", route: "/corpo-clinico" },
        { name: "Blog", route: "/blog" },
        { name: "Contato", route: "/contato" }
    ]

    return (
        <nav className="px-8 py-4 lg:px-16 lg:py-4 fixed top-0 w-full z-10 bg-white">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <a href='/'>
                        <img src="/cro-logo.webp" alt="Clínica de Reumatologia de Osasco" className="w-10 h-10" />
                    </a>
                </div>
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 fill-indigo-900"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-gen lg:items-center lg:w-auto">
                    <div className="flex gap-8 lg:flex-grow">
                        {NAV_BAR_OPTIONS.map((navbarOption) => (
                            <a
                                key={navbarOption.route}
                                href={navbarOption.route}
                                className="block text-indigo-900 mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4"
                            >
                                {navbarOption.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden mt-4">
                    <div className="text-sm">
                        {NAV_BAR_OPTIONS.map((navbarOption) => (
                            <a
                                key={navbarOption.route}
                                href={navbarOption.route}
                                className="block mt-4 hover:text-gray-300"
                            >
                                {navbarOption.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar
