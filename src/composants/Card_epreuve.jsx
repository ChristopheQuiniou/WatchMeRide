import React from 'react';

const Card_epreuve = ({ ep, handleClick }) => {
    return (
        

        <li className="bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-solid border-1 border-gray-600" onClick={() => handleClick(ep.id)}>
            
            <a href="">
                <div className="p-5">
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {ep.lieu}
                    </p>

                
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {ep.nom}
                    </h5>
                    
                </div>
            </a>
        </li>

    );
};

export default Card_epreuve;