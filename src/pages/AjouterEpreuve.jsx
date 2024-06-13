import React, {useState} from 'react';
import Card_compete from '../composants/Card_compete';
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();
    const handleRetour = () => {
        navigate(-1);
      };

    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='p-8 text-black'>
                <h1 className='text-3xl font-bold pt-8'>
                    Ajouter une nouvelle épreuve à la compétition EQUIPOLE LANDIVISIAU ECUR
                </h1>
                    <div  className="flex items-center gap-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clip-rule="evenodd"/></svg>
                        <button onClick={handleRetour} >Retour à la compétition</button>
                    </div>
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
                            className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 w-full'
                        />
                        <button
                            type='button'
                            onClick={handleRetour}
                            className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 w-full'
                        >
                            Retour à la compétition
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