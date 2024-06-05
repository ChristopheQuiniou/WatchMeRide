import React from 'react';
import Hero from '../composants/Hero';
import Card_compete from '../composants/Card_compete';

const DetailCompetition = () => {
    return (
        <div className=''>
            <Hero />

            <div className='flex flex-wrap justify-stretch grid grid-cols-3 gap-3  mt-5 p-5 '>
                <Card_compete/>  
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
                <Card_compete/>
            </div>
        </div>
        
    );
};

export default DetailCompetition;