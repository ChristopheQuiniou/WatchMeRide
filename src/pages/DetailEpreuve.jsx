import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card_participant from '../composants/Card_participant';

const DetailEpreuve = () => {

    const { id } = useParams();
    const [epreuve, setEpreuve] = useState([]);
    const [participants,setParticipants] = useState([]);

    useEffect(() => {
        const fetchEpreuve = async () => {
        try {
            const responseEp = await axios.get(`http://89.81.6.81:5000/epreuves/${id}`);
            setEpreuve(responseEp.data);
            const response = await axios.get(`http://89.81.6.81:5000/ParticipantsByEpreuve/${id}`);
            const participantsData = await Promise.all(
            response.data.map(async (participant) => {
            const cavalierResponse = await axios.get(
              `http://89.81.6.81:5000/cavaliers/${participant.id_cavalier}`
            );
            const chevalReponse = await axios.get(
                `http://89.81.6.81:5000/chevaux/${participant.id_cheval}`
              );
            const coachReponse = await axios.get(
                `http://89.81.6.81:5000/coach/${participant.id_coach}`
              );
            return { ...participant, cavalier: cavalierResponse.data, cheval: chevalReponse.data, coach: coachReponse.data };
          })
        );
        setParticipants(participantsData);
        } catch (error) {
            console.error('Error fetching epreuve:', error);
        }
        };

        fetchEpreuve();
    }, [id]);

    const navigate = useNavigate();
    const handleRetour = () => {
        navigate(-1);
      };

    
    const handleClick = (id) => {
        navigate(`/AjouterParticipant/${epreuve.id}`);
        console.log('ID:', `${epreuve.id}` );
    };

    
    
    return (
        <div className=''>
            <div className='p-8 '>
                <div>
                    <h1 className='text-3xl text-black font-bold pt-8 mb-2 '>
                                Epreuve n°{epreuve.id} : {epreuve.nom}
                    </h1>
                    <div  className="flex items-center gap-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clip-rule="evenodd"/></svg>
                        <button onClick={handleRetour} >Retour à la compétition</button>
                    </div>

                    <div className='grid grid-cols-2 my-8'>
                        <form className="w-full py-auto">   
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Chercher</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Rechercher un cavalier..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Chercher</button>
                            </div>
                        </form>
                        <div className='my-auto flex flex-row-reverse '>
                        <button  
                        onClick={handleClick}
                        className="focus:outline-none text-white bg-yellow-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Ajouter un participant
                        </button>
                    </div>
                        
                    </div>
                </div>

                <ul>
                    {
                    
                        participants.map((participant,index)=> (
                        <Card_participant key={index} participant={participant}/> 
                        ))

                    } 
                </ul>
            </div>
        </div>
        
    );
};

export default DetailEpreuve;