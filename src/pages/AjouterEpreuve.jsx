import React from 'react';
import Card_compete from '../composants/Card_compete';
import Cav from '../assets/Cavalier.png';

const AjouterEpreuve = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='p-8 text-black'>
                        <h1 className='text-3xl font-bold pt-8'>
                            Ajouter une nouvelle épreuve à la compétition EQUIPOLE 
                            LANDIVISIAU ECUR
                        </h1>
                        <form action="#" method="POST" className='grid grid-rows-6 grid-flow-col gap-4 pt-8 '>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Dénomination de l'épreuve</label>
                                <input required id="nom" name="nom" className='bg-white border border-gray-300 rounded-lg' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Cavalier</label>
                                <input required id="cavalier" name="cavalier" className='bg-white border border-gray-300 rounded-lg' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Coach</label>
                                <input required id="coach" name="coach" className='bg-white border border-gray-300 rounded-lg' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Cheval</label>
                                <input required id="cheval" name="cheval" className='bg-white border border-gray-300 rounded-lg ' type='input' />
                            </div>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Race</label>
                                <input required id="race" name="race" className='bg-white border border-gray-300 rounded-lg ' type='input' />
                            </div>
                            <div className="w-full grid grid-cols-2 gap-4">
                                <input
                                type='submit'
                                value='Ajouter une épreuve'
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
                <img class="w-full h-full " src={Cav} alt="" />
            </div>
            
        </div>
    );
};

export default AjouterEpreuve;