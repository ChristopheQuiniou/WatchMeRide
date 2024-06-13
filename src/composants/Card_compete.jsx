import React from 'react';

const Card = ({ competition, handleClick }) => {

    console.log(competition.Image)
    return (
        

        <li className=" bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-solid border-1 border-gray-600" onClick={() => handleClick(competition.id)}>
            
                <img 
                className="rounded-t-lg filter grayscale hover:grayscale-0 h-[312px] " 
                src={competition.Image}
                alt={competition.nom} />
            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {competition.lieu}
                </p>

                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {competition.nom}
                    </h5>
                </a>
            </div>
        </li>

    );
};

export default Card;