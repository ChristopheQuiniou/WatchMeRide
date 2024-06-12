import React, {useRef, useState} from 'react';
import Card_compete from '../composants/Card_compete';
import Image from '../assets/ImageAjoutP.png';
import competitions from "./Competitions.jsx";
import Loading from "../composants/Loading.jsx";

const AjouterCompetition = () => {
    const [loadingMessage, setLoadingMessage] = useState('');
    const [formData, setFormData] = useState({
        id: '',
        nom: '',
        date: '',
        lieu: '',
        Image: ''
    });
    const [file, setFile] = useState(null);
    const [participantsFile, setParticipantsFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleParticipantsFileChange = (e) => {
        setParticipantsFile(e.target.files[0]);
    };

    const getCurrentFormattedDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleAddCompetiton = async (e) => {
        e.preventDefault();
        const newId = new Date().getTime().toString();
        const date = getCurrentFormattedDate();
        const updatedFormData = { ...formData, id: newId,date: date };

        setLoadingMessage('Creation de la compétition');

        const response = await fetch('http://89.81.6.81:5000/competitions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFormData),
        });

        if (response.ok) {
            const data = await response.json();

            // Upload image file
            // if (file) {
            //     const fileFormData = new FormData();
            //     fileFormData.append('file', file);
            //     fileFormData.append('competition_id', newId);
            //
            //     const fileResponse = await fetch('http://89.81.6.81:5000/uploadFile', {
            //         method: 'POST',
            //         body: fileFormData,
            //     });
            //
            //     if (fileResponse.ok) {
            //         const fileData = await fileResponse.json();
            //         console.log('File Upload Success:', fileData);
            //     } else {
            //         console.error('File Upload Error:', fileResponse.statusText);
            //     }
            // }

            // Upload participants file (if any)
            if (participantsFile) {
                const participantsFormData = new FormData();
                participantsFormData.append('file', participantsFile);
                participantsFormData.append('competition_id', newId);

                setLoadingMessage('Conversion du fichier PDF');
                const participantsResponse = await fetch('http://89.81.6.81:5000/uploadFile', {
                    method: 'POST',
                    body: participantsFormData,
                });

                if (participantsResponse.ok) {
                    setLoadingMessage('Conversion et création de la compétition effectuée avec succès');
                    const participantsData = await participantsResponse.json();
                    console.log('Participants File Upload Success:', participantsData);
                } else {
                    setLoadingMessage('Erreur lors de la conversion du fichier PDF');
                    console.error('Participants File Upload Error:', participantsResponse.statusText);
                }
            } else {
                setLoadingMessage('Compétition créée : ' + newId);
            }
        } else {
            setLoadingMessage('Erreur lors de la création de la compétition !');
            console.error('Error:', response.statusText);
        }
    }


    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='p-8 text-black '>
                <h1 className='text-3xl font-bold pt-8'>
                    Ajouter une compétition
                </h1>
                <form onSubmit={handleAddCompetiton} method="POST"
                      className='grid grid-rows-6 grid-flow-col gap-4 pt-8 '>
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <label>Dénomination</label>
                        <input className='bg-white border border-gray-300 p-2 rounded-lg' type='text' name='nom'
                               value={formData.nom} onChange={handleChange} required/>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <label>Localisation</label>
                        <input className='bg-white border border-gray-300  p-2 rounded-lg' type='location' name="lieu"
                               value={formData.lieu} onChange={handleChange} required/>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <label>Image de couverture</label>
                        <input className='bg-white border border-gray-300 rounded-lg ' type='file' onChange={handleFileChange} />
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <label>Liste des participants</label>
                        <input className='bg-white border border-gray-300 rounded-lg ' type='file' onChange={handleParticipantsFileChange} />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <Loading msg={loadingMessage}></Loading>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <input
                            type='submit'
                            value='Ajouter la compétition'
                            className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                        />
                        <button
                            type='reset'
                            className='my-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full'
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <img className="w-full" src={Image} alt="" />
            </div>
        </div>
    );
};

export default AjouterCompetition;