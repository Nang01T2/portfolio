import { Fragment } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "./navigation";
import { ContentSearch } from "@/components/search";
import DarkModeButton from "../darkModeButton";

const Navbar = () => {
  return (
    <>
      <svg
        className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      {/* NAVIGATION START */}
      <Popover>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link legacyBehavior href="/">
                  <a>
                    <svg
                      className="h-6 w-auto"
                      aria-hidden="true"
                      viewBox="0 0 40 24"
                      fill="none"
                    >
                      <path
                        d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                        className="fill-sky-400"
                      ></path>
                    </svg>
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
              {navigation.map((item) => (
                <Link legacyBehavior key={item.name} href={item.href}>
                  <a className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="hidden md:block">
              <ContentSearch />
            </div>
            {/* <DarkModeButton /> */}
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <a>
                    <svg
                      className="h-6 w-auto"
                      aria-hidden="true"
                      viewBox="0 0 40 24"
                      fill="none"
                    >
                      <path
                        d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                        className="fill-sky-400"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="-mr-2">
                  <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link legacyBehavior key={item.name} href={item.href}>
                    <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="px-4">
                <ContentSearch />
              </div>
              <a
                href="#"
                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
              >
                Log in
              </a>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
      {/* NAVIGATION END */}
    </>
  );
};

export default Navbar;
