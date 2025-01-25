import React, { useState, useEffect } from 'react';
import { Moon, Sun } from "lucide-react";
import logo from '../assets/logo.png';
import BlurText from '../utils/BlurText';
import DecryptedText from '../utils/DecryptedText';

const Landing: React.FC = () => {
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setIsDark(theme === 'dark');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img 
                  className=" h-16" 
                  src={logo} 
                  alt="Logo" 
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button 
                type="button" 
                className="text-gray-900 dark:text-gray-100" 
                onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
                aria-expanded={mobileMenuExpanded}
              >
                {!mobileMenuExpanded ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16 ">
              {['Features', 'Pricing', 'Automation'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-base font-medium dark:text-gray-100 text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {item}
                </a>
              ))}
            </div>
            

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-100" />
              ) : (
                <Moon className="h-5 w-5 text-gray-900" />
              )}
            </button>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-full hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Sign up
              </a>
            </div>
          </div>

          {mobileMenuExpanded && (
            <nav>
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  {['Features', 'Pricing', 'Automation', 'Customer Login'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      {item}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="pt-12 bg-gray-50 dark:bg-gray-900 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className='text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl lg:text-3xl font-pj'>
            <DecryptedText
              text="Stackguild"
              speed={100}
              maxIterations={40}
              animateOn="view"
              revealDirection="center"
            />
            </div>
            <p className="mt-5 text-xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              <BlurText text="Where Developers"/>
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> <BlurText text="Unite for Innovation"/> </span>
                
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a href="#" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-full font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Join the Network
              </a>
              <a href="#" className="mt-4 sm:mt-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 dark:text-white transition-all duration-200 border-2 border-gray-900 dark:border-white sm:w-auto rounded-full font-pj hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900">
                Learn More
              </a>
            </div>
            <div className="lg:max-w-6xl lg:mx-auto">
                <img 
                  className="transform scale-110" 
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" 
                  alt="Illustration" 
                />
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;