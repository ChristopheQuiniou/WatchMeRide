import React from 'react';
import Card_compete from '../composants/Card_compete';
import Image from '../assets/ImageAjoutP.png';

const AjouterParticipant = () => {
    return (
        <div className='flex justify-between gap-4'>
            <div className='p-8'>
                        <h1 className='text-3xl font-bold pt-8'>
                            Ajouter un  participant à EQUIPOLE 
                            LANDIVISIAU ECUR
                        </h1>
                        <form className='grid grid-rows-6 grid-flow-col gap-4 pt-8 '>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Club</label>
                                <input className=' ' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Cavalier</label>
                                <input className=' ' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Coach</label>
                                <input className=' ' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Cheval</label>
                                <input className=' ' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Race</label>
                                <input className=' ' type='input' />
                            </div>
                            <div className="w-full grid grid-cols-2 gap-4">
                                <input
                                type='submit'
                                value='Ajouter le participant'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                                />
                                <button
                                type='button'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                                >
                                Annuler
                                </button>
                            </div>
                        </form>


                        
                    
                    </div>  
            <div>
                <img class="" src={Image} alt="" />
            </div>
            
        </div>
    );
};

export default AjouterParticipant;