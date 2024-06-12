import  React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Hero from '../composants/Hero';
import Card_epreuve from '../composants/Card_epreuve';

const DetailCompetition = () => {
    const { id } = useParams();
    const [detailcompetition, setDetailCompetition] = useState([]);
    const [epreuves, setEpreuves] = useState([]);

    useEffect(() => {
        const fetchCompetition = async () => {
        try {
            const responseComp = await axios.get(`http://89.81.6.81:5000/competitions/${id}`);
            setDetailCompetition(responseComp.data);
            const response = await axios.get(`http://89.81.6.81:5000/EpreuvesByCompetition/${id}`);
            setEpreuves(response.data);
        } catch (error) {
            console.error('Error fetching competition:', error);
        }
        };

        fetchCompetition();
    }, []);

    const navigate = useNavigate();
      
    const handleClick = (id) => {
        navigate(`/DetailEpreuve/${id}`);
        console.log(`${id}`);
    };    

    return (
        <div className=''>
            {
                <Hero comp={detailcompetition} idCompetition={id} />
            }
            <h1 className='text-3xl p-5 font-medium'>Liste des épreuves</h1>

            <ul className='grid grid-cols-3 gap-3 p-5 '>
              
                {
                epreuves.map((ep) => (
                    <Card_epreuve key={ep.id} ep={ep} handleClick={handleClick}/>
                ))
                }
            </ul>
        </div>
        
    );
};

export default DetailCompetition;