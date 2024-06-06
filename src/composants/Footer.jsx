import React from 'react';
import logoWMR from '../assets/logoWMR.svg';

const Footer = () => {
    return (
        <div className='grid grid-rows-2 mt-20 p-20 bg-[#F9FAFB]'>
            <div className='flex justify-between'>
                    <nav className="w-full border-gray-200 dark:bg-gray-900">
                        <div className="flex flex-wrap items-center justify-between mx-auto px-4">
                            
                            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <img src={logoWMR} className="h-24" alt="WMR" />
                            </a>
                            <div className="flex hidden md:block md:w-auto" id="navbar-default">
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="../Accueil" className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-900" aria-current="page">
                                            Accueil
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../Competitions" className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-900" aria-current="page">
                                        Compétitions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Photos" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-900" aria-current="page">
                                            Photos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-900" aria-current="page">
                                            Tarif
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-900" aria-current="page">
                                            Équipe
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            
                        </div>
                        
                    </nav>
            </div>
            
        </div>
    );
};

export default Footer;