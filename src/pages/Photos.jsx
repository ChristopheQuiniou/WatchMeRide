import React, { useEffect } from 'react';
import Card_compete from '../composants/Card_compete';
import 'flowbite'; // Import Flowbite CSS
import datepicker from 'flowbite/dist/datepicker';

const Photos = () => {
    return (
        <div className='p-8'>
                <div className='grid grid-cols-2 grid-flow-col gap-12 items-start  py-8'>

                
                                
                                        
                                        
                    <div className=''>
                        <h2 className='grid grid-rows-2 grid-flow-col gap-1 font-bold text-black text-xl pt-8'>
                            Filtres
                        </h2>
                        <form className='grid grid-rows-6 grid-flow-col gap-4 text-black '>
                            <div  className='grid grid-rows-2 grid-flow-col '>
                                <label>Date</label>
                                <input className='rounded-lg ' type='date' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>De</label>
                                <input className='rounded-lg ' type='time' />
                            </div><div  className='grid grid-rows-2 grid-flow-col'>
                                <label>À</label>
                                <input className='rounded-lg ' type='time' />
                            </div>
                            <div className="w-full grid grid-cols-2 gap-4">
                                <input
                                type='submit'
                                value='Appliquer un filtre'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                                />
                                <button
                                type='button'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                                >
                                Annuler
                                </button>
                            </div>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                                <button
                                    type='button'
                                    className='inline-flex justify-center items-center  px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-500  hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full h-3/5'
                                    >
                                    Télécharger les photos
                                </button>
                            </div>
                        </form>


                        
                    
                    </div>                    
                    





                    <div className='col-span-10'>
                        <form class="w-full py-auto my-8">   
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
                        <div className='flex flex-wrap justify-stretch grid grid-cols-2 gap-3 '>
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
            

            </div>

            

           

        </div>
    );
};

export default Photos;