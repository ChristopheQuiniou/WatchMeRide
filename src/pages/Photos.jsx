import React, {useEffect, useState} from 'react';
import Card_photo from '../composants/Card_photo';
import 'flowbite'; // Import Flowbite CSS
import Loading from "../composants/Loading.jsx";

const Photos = () => {
    const [loadingMessage, setLoadingMessage] = useState('');
    const [photos, setPhotos] = useState([]);

    const [formData, setFormData] = useState({
        cavalier: '',
        date: '',
        heure_debut: '',
        heure_fin: ''
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
        if (formData.heure_debut) requestBody.heure_debut = formData.heure_debut;
        if (formData.heure_fin) requestBody.heure_fin = formData.heure_fin;

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
            heure_debut: '',
            heure_fin: '',
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
                    <form className='grid grid-rows-7 grid-flow-col gap-4 text-black' onSubmit={handleSubmit}>
                        <div className='grid grid-rows-2 grid-flow-col'>
                            <label>Cavalier</label>
                            <input className='rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500' type='text' name='cavalier' value={formData.cavalier} onChange={handleChange} />
                        </div>
                        <div className='grid grid-rows-2 grid-flow-col'>
                            <label>Le jour</label>
                            <input className='rounded-lg  focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500' type='date' name='date' value={formData.date} onChange={handleChange} />
                        </div>
                        <div className='grid grid-rows-2 grid-flow-col'>
                            <label>Heure de début</label>
                            <input className='rounded-lg  focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500' type='time' name='heure' value={formData.heure} onChange={handleChange} />
                        </div>
                        <div className='grid grid-rows-2 grid-flow-col'>
                            <label>Heure de fin</label>
                            <input className='rounded-lg  focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500' type='time' name='' value={formData.heure} onChange={handleChange} />
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                            <Loading msg={loadingMessage}></Loading>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                            <input
                                type='submit'
                                value='Appliquer les filtres'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 w-full'
                            />
                            <button
                                onClick={handleReset}
                                type='button'
                                className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 w-full'
                            >
                                Effacer les champs
                            </button>
                        </div>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <button
                                type='button'
                                className='inline-flex justify-center items-center px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 w-full h-3/5'
                            >
                                Télécharger les photos
                            </button>
                        </div>
                    </form>
                </div>

                <div className='col-span-10 pt-8'>
                    <h1 className='text-3xl'></h1>
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