import React, {useEffect, useState} from 'react';
import Card_photo from '../composants/Card_photo';
import 'flowbite'; // Import Flowbite CSS
import datepicker from 'flowbite/dist/datepicker';
import Loading from "../composants/Loading.jsx";

const Photos = () => {
    const [loadingMessage, setLoadingMessage] = useState('');
    const [photos, setPhotos] = useState([]);

    const [formData, setFormData] = useState({
        cavalier: '',
        date: '',
        heure: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingMessage('Récupération des photos ...');

        // Constructing the request body
        let requestBody = {};
        if (formData.cavalier) requestBody.cavalier = formData.cavalier;
        if (formData.date) requestBody.date = formData.date;
        if (formData.heure) requestBody.heure = formData.heure;

        const response = await fetch('http://89.81.6.81:5000/photosFilter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            const data = await response.json();
            setPhotos(data);
            setLoadingMessage('Photos récupérées.');
        } else {
            setLoadingMessage('Une erreur a eu lieu lors du traitement !');
            console.error('Error:', response.statusText);
        }
    };

    const handleReset = () => {
        setFormData({
            cavalier: '',
            date: '',
            heure: ''
        });
        setPhotos([]);
        setLoadingMessage('Les champs ont été vidés.');
    };

    return (
        <div className='p-8'>
            <div className='grid grid-cols-2 grid-flow-col gap-12 items-start py-8'>
                <div className=''>
                    <h2 className='grid grid-rows-2 grid-flow-col gap-1 font-bold text-black text-xl pt-8'>
                        Filtres
                    </h2>
                    <form className='grid grid-rows-6 grid-flow-col gap-4 text-black' onSubmit={handleSubmit}>
                        <div className='grid grid-rows-2 grid-flow-col'>
                            <label>Cavalier</label>
                            <input className='rounded-lg' type='text' name='cavalier' value={formData.cavalier} onChange={handleChange} />
                        </div>
                        <div className='grid grid-rows-2 grid-flow-col'>
                            <label>Le jour</label>
                            <input className='rounded-lg' type='date' name='date' value={formData.date} onChange={handleChange} />
                        </div>
                        <div className='grid grid-rows-2 grid-flow-col'>
                            <label>Heure</label>
                            <input className='rounded-lg' type='time' name='heure' value={formData.heure} onChange={handleChange} />
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                            <Loading msg={loadingMessage}></Loading>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                            <input
                                type='submit'
                                value='Appliquer les filtres'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                            />
                            <button
                                onClick={handleReset}
                                type='button'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                            >
                                Effacer les champs
                            </button>
                        </div>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <button
                                type='button'
                                className='inline-flex justify-center items-center px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full h-3/5'
                            >
                                Télécharger les photos
                            </button>
                        </div>
                    </form>
                </div>

                <div className='col-span-10'>
                    <form className="w-full py-auto my-8">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Chercher</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Club, Lieu..." required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Chercher</button>
                        </div>
                    </form>
                    <ul className='grid grid-cols-2 gap-3'>
                        {photos.map((photo) => (
                            <Card_photo photo={photo} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Photos;