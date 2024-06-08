import React from 'react';
import Hero from '../composants/Hero';
import Card_epreuve from '../composants/Card_epreuve';

const DetailCompetition = () => {
    
    return (
        <div className=''>
            <Hero />

            <div className='flex flex-wrap justify-stretch grid grid-cols-3 gap-3  mt-5 p-5 '>
                <Card_epreuve/>  
                <Card_epreuve/>
                <Card_epreuve/>
                <Card_epreuve/>
                <Card_epreuve/>
                <Card_epreuve/>
                <Card_epreuve/>
                <Card_epreuve/>
            </div>
        </div>
        
    );
};

export default DetailCompetition;