import { Fragment, React } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  LifebuoyIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsTriangleFill } from 'react-icons/bs';

const resources = [
  {
    name: 'FastOrder',
    description: "A Restaurant's digital food menu with a management website.",
    href: '/Projects/FastOrder',
    icon: LifebuoyIcon,
  }
]

const socialMedias = [
  { id: 1, name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/dpaulos6/' },
  { id: 2, name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/dpaulos6/' },
  { id: 3, name: 'Github', icon: FaGithub, href: 'https://github.com/dpaulos6' },
  { id: 4, name: 'Vercel', icon: BsTriangleFill, href: 'https://github.com/dpaulos6' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () =>{

  return(
    <Popover className="relative bg-white">
      <div className="mx-auto px-6 border-b-2 border-gray-100">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="inline-flex hover:scale-110 transition ease-in-out duration-300">
              <a href='/'>
                <img src='/dp6/dp6-logo.svg' className="max-h-16" alt='dp6 Logo'/>
                <span className="sr-only text-lg font-medium text-gray-800 mx-3 my-auto">Diogo Paulos Portfolio</span>  
              </a>
            </div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-6 md:flex hover-effects">
            <a href="/" className="text-lg font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-b-gray-300 duration-300 py-4 px-2">
              Home
            </a>
            <a href="/AboutMe" className="text-lg font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-b-gray-300 duration-300 py-4 px-2">
              About Me
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900 border-b-gray-300' : 'text-gray-500',
                      'group inline-flex items-center bg-white text-lg font-medium hover:text-gray-900 focus:outline-none border-b-2 border-transparent hover:border-b-gray-300 duration-300 py-4 px-2'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <h3 className="text-base font-medium text-gray-700">My Projects</h3>
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-red-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">Social Medias</h3>
                            <ul className="mt-4 space-y-1">
                              {socialMedias.map((item) => (
                                <a href={item.href} className="font-medium">
                                  <li key={item.id} className="truncate text-base">
                                    <div className="inline-flex text-gray-700 hover:text-gray-900">
                                      <item.icon className="my-auto"/>
                                      <span className="mx-2 my-0">{item.name}</span>
                                    </div>
                                  </li>
                                </a>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0"></div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex hover:scale-110 transition ease-in-out">
                  <a href='/'>
                    <img src='/dp6/dp6-logo.svg' className="max-h-12" alt='dp6 Logo'/>
                    <span className="sr-only text-lg font-medium text-gray-800 mx-3 my-auto">Diogo Paulos Portfolio</span>  
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Home
                </a>
                <a href="/AboutMe" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  About Me
                </a>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-5 sm:px-5 sm:py-5">
              <span className="text-base font-medium text-gray-900 hover:text-gray-700">
                My Projects
              </span>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-4">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar;