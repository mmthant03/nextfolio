import { useState } from 'react'
import ActiveLink from './activelink'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    const [isOpen, toggleOpen] = useState(false)
    const handleToggle = () => {
        toggleOpen(!isOpen)
    }
    return (
        <nav className="relative z-50">
            <div className="container max-w-8xl mx-auto px-2 sm:px-4">
                <div className="relative flex items-center justify-center mt-4 h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>

                            {/* Icon when menu is closed.

                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block" */}

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open.

                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden" */}

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                                <img className="block h-16 w-auto cursor-pointer" src="/assets/img/marcus.svg" alt="Marcus" />
                            </Link>
                        </div>
                        <div className="hidden sm:my-auto sm:block">
                            <div className="flex space-x-4">
                                <Link href="/blogs">
                                    <a className="text-black text-medium hover:bg-green-700 hover:text-white px-3 py-2 rounded-xl text-sm font-mono font-semibold">Blogs</a>
                                </Link>
                                <Link href="/contact">
                                    <a className="text-black text-medium bg-green-400 hover:bg-green-700 hover:text-white px-3 py-2 rounded-xl text-sm font-mono font-semibold">Contact me!</a>
                                </Link>

                                {/* <ActiveLink href="/">
                                    <a className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</a>
                                </ActiveLink>
                                <ActiveLink href="/experience">
                                    <a className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                                </ActiveLink>
                                <ActiveLink href="/projects">
                                    <a className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                </ActiveLink> */}

                            </div>
                        </div>
                    </div>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    </div>
                </div>
            </div>
            <div
                className={`${isOpen ? "block" : "hidden"}`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About Me</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Experience</a> */}

                    <a href="#" className="text-black hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</a>

                    <a href="#" className="text-black hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav