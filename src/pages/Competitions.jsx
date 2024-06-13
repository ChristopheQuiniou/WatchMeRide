import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card_compete from '../composants/Card_compete';

const Competitions = () => {
    const [competitions, setCompetitions] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await axios.get('http://89.81.6.81:5000//competitions');
                setCompetitions(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            };

            fetchData();
        }, []);

        const navigate = useNavigate();

        const handleClick = (id) => {
            navigate(`/DetailCompetition/${id}`);
            console.log(`${id}`);
        };

    return (
        <div className='p-8'>
            <div className='grid grid-cols-2 gap-1'>
                    <form className="w-full py-auto">   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Chercher</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Compétition, Lieu..." required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Chercher</button>
                        </div>
                    </form>
                    <div className='my-auto flex flex-row-reverse '>
                        <a  href="/AjouterCompetition" className="focus:outline-none text-white bg-yellow-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Créer une nouvelle compétion
                        </a>
                    </div>
            </div>

            

            <ul className='grid grid-cols-3 gap-3 mt-5  '>
                {competitions.map((competition) => (
                    <Card_compete key={competition.id} competition={competition} handleClick={handleClick} />
                ))}
            </ul>

        </div>
    );
};

export default Competitions;