import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Image from '../assets/ImageAjoutP.png';

const AjouterParticipant = () => {

    const { id } = useParams();
    const [epreuve,setEpreuve]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://89.81.6.81:5000/epreuves/${id}`);
            setEpreuve(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

    const navigate = useNavigate();
    const handleRetour = () => {
        navigate(-1);
      };

    
    console.log(`${id}`);





    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='p-8 text-black'>
                        <h1 className='text-3xl font-bold pt-8'>
                            Ajouter un participant à l'épreuve: <br/>{epreuve.nom}
                        </h1>
                        <div  className="flex items-center gap-2" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clip-rule="evenodd"/></svg>
                            <button onClick={handleRetour} >Retour à l'épreuve'</button>
                        </div>
                        <form action="#" method="POST" className='grid grid-rows-6 grid-flow-col gap-4 pt-8 '>
                            <div  className='grid grid-rows-2 grid-flow-col'>
                                <label>Club</label>
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
                                value='Ajouter le participant'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                                />
                                <button
                                type='button'
                                onClick={handleRetour}
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                                >
                                Retour à la l'épreuve
                                </button>
                            </div>
                        </form>


                        
                    
                    </div>  
            <div>
                <img className="" src={Image} alt="" />
            </div>
            
        </div>
    );
};

export default AjouterParticipant;