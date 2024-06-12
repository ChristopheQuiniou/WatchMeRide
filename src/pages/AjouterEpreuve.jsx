import React, {useState} from 'react';
import Card_compete from '../composants/Card_compete';
import Cav from '../assets/Cavalier.png';
import Loading from "../composants/Loading.jsx";
import {useParams} from "react-router-dom";

const AjouterEpreuve = () => {
    const { id } = useParams();
    const [loadingMessage, setLoadingMessage] = useState('');
    const [formData, setFormData] = useState({

        'id': 0,
        'nom': '',
        'id_competition': id,
        'lieu': ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddEpreuve = async (e) => {
        e.preventDefault();
        const newId = new Date().getTime();
        const updatedFormData = { ...formData, id: newId };

        setLoadingMessage('Création de l\'épreuve');

        const response = await fetch('http://89.81.6.81:5000/epreuves', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFormData),
        });

        if (response.ok) {
            const data = await response.json();
            setLoadingMessage('Épreuve créée !');
            console.log('Success:', data);
        } else {
            setLoadingMessage('Erreur lors de la création de l\'épreuve');
            console.error('Error:', response.statusText);
        }
    };

    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='p-8 text-black'>
                <h1 className='text-3xl font-bold pt-8'>
                    Ajouter une nouvelle épreuve à la compétition EQUIPOLE LANDIVISIAU ECUR
                </h1>
                <form onSubmit={handleAddEpreuve} method="POST" className='grid grid-rows-7 grid-flow-col gap-4 pt-8 '>
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <label>Dénomination de l'épreuve</label>
                        <input required id="nom" name="nom" className='bg-white border border-gray-300 rounded-lg'
                               type='text' value={formData.nom} onChange={handleChange}/>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <label>Lieu de l'épreuve</label>
                        <input required id="lieu" name="lieu" className='bg-white border border-gray-300 rounded-lg'
                               type='text' value={formData.lieu} onChange={handleChange}/>
                    </div>

                    <Loading msg={loadingMessage}/>
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
                <img className="w-full h-full" src={Cav} alt=""/>
            </div>
        </div>
    );
};

export default AjouterEpreuve;