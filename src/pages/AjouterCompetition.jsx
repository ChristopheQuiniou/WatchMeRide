import React from 'react';
import Card_compete from '../composants/Card_compete';
import Image from '../assets/ImageAjoutP.png';

const AjouterCompetition = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='p-8 text-black '>
                        <h1 className='text-3xl font-bold pt-8'>
                            Ajouter une compétition
                        </h1>
                        <form className='grid grid-rows-6 grid-flow-col gap-4 pt-8 '>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Dénomination</label>
                                <input className='bg-white border border-gray-300 rounded-lg' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Localisation</label>
                                <input className='bg-white border border-gray-300 rounded-lg' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Image de couverture</label>
                                <input className='bg-white border border-gray-300 rounded-lg ' type='file' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Liste des participants</label>
                                <input className='bg-white border border-gray-300 rounded-lg ' type='file' />
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
                <img class="w-full" src={Image} alt="" />
            </div>
            
        </div>
    );
};

export default AjouterCompetition;