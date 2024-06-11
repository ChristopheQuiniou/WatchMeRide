import React from 'react';
import Home from '../assets/Home.gif';
import Pic1 from '../assets/Pic.png';
import SecondPic from '../assets/SecondPic.png';



const Accueil = () => {
    
    return (
        <div className=''>
            <div className='w-full h-[600px] relative'>
                <img className='w-full h-[600px] object-cover blur-sm ' src={Home} alt="Cover" />
                <div className='absolute p-40 top-0 left-0 w-full h-full bg-gradient-to-b from-[#000F05]  to-[#000F05] opacity-90 grid grid-cols-2'>
                    <div className=' justify-end items-center'>
                        <h1 className=' text-white text-7xl font-bold place-items-center'>Watch me ride</h1>
                        <p className='text-white text-xl leading-9'>
                        Découvrez une nouvelle façon révolutionnaire de capturer et d'immortaliser les moments magiques de l'équitation avec notre système de captation automatique innovant!
                        </p>
                        <button
                                    type='button'
                                    className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-500  hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
                                    >
                                    Demander un devis
                        </button>

                    </div>
                </div>



            </div>
            
            <div class="grid grid-cols-2 grid-flow-col gap-12 p-40 item-center">
                <div className=''>               
                    <h1 className='text-black'>Lorem ipsum dolor </h1>
                    <p className='py-8 text-black'>
                    Lorem ipsum dolor sit amet consectetur. Sed enim justo ut morbi magna. Vitae lobortis nunc consectetur accumsan aliquam amet odio tempor in. Integer mauris tristique lectus amet. Etiam diam ornare phasellus volutpat augue. Et rutrum augue dui ut eu elementum dictum. Feugiat nec magnis in dignissim aliquam. Porta aliquam nisl ut rhoncus.

                    Bibendum senectus ac amet etiam urna.
                    Nec egestas lectus velit amet hendrerit elit sed purus. A id sociis id id quisque arcu venenatis. Lectus condimentum blandit arcu aliquet morbi. 
                    Pharetra id quisque mus elit dolor id.
                    </p>

                    <div class="flex flex-col space-y-4 sm:flex-row  sm:space-y-0">
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Demander un devis
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div>
                    
                    <img className="h-auto max-w-full" src={Pic1} alt="image description" />

                </div>
            </div>

            <div class="grid grid-cols-2 grid-flow-col gap-12 px-40">


                <div>
                    
                    <img className="h-auto max-w-full" src={SecondPic} alt="image description" />

                </div>

                <div className=''>               
                    <h1 className='text-black'>Lorem ipsum dolor </h1>
                    <p className='py-8 text-black'>
                    Lorem ipsum dolor sit amet consectetur. Sed enim justo ut morbi magna. Vitae lobortis nunc consectetur accumsan aliquam amet odio tempor in. Integer mauris tristique lectus amet. Etiam diam ornare phasellus volutpat augue. Et rutrum augue dui ut eu elementum dictum. Feugiat nec magnis in dignissim aliquam. Porta aliquam nisl ut rhoncus.

                    Bibendum senectus ac amet etiam urna.
                    Nec egestas lectus velit amet hendrerit elit sed purus. A id sociis id id quisque arcu venenatis. Lectus condimentum blandit arcu aliquet morbi. 
                    Pharetra id quisque mus elit dolor id.
                    </p>

                    <div class="flex flex-col space-y-4 sm:flex-row  sm:space-y-0">
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Demander un devis
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>



        </div>
        
    );
};

export default Accueil;