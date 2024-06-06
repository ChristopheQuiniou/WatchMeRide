import React from 'react';
import Card_compete from '../composants/Card_compete';

const Competitions = () => {
    return (
        <div className='p-8'>


<div className='flex pb-8 justify-between grid grid-cols-2 gap-1'>
            <form class="w-full py-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Chercher</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Club, Lieu..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Chercher</button>
                </div>
            </form>
            <div className='my-auto flex flex-row-reverse '>
                <a  href="/AjouterCompetition" class="focus:outline-none text-white bg-yellow-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Créer une nouvelle compétion
                </a>
            </div>
            

            </div>

            

            <div className='flex flex-wrap justify-stretch grid grid-cols-3 gap-3  '>
                <Card_compete/> 
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
            </div>

        </div>
    );
};

export default Competitions;