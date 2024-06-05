import React from 'react';
import Hero from '../composants/Hero';


const Accueil = () => {
    
    return (
        <div className=''>
            <Hero />
            
            <div class="grid grid-cols-2 grid-flow-col gap-12 p-40">
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
                    
                    <img className="h-auto max-w-full" src="https://www.roscoff-tourisme.com/uploads/2019/05/equipole-pays-landivisiau-1.jpg" alt="image description" />

                </div>
            </div>

            <div class="grid grid-cols-2 grid-flow-col gap-12 px-40">


                <div>
                    
                    <img className="h-auto max-w-full" src="https://www.roscoff-tourisme.com/uploads/2019/05/equipole-pays-landivisiau-1.jpg" alt="image description" />

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