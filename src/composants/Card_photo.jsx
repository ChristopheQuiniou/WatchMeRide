import React from 'react';

const Card_photo = () => {
    return (
        

        <li class=" bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-solid border-1 border-gray-600">
            <a href="/DetailCompetition">
                <img 
                class="rounded-t-lg filter grayscale hover:grayscale-0" 
                src="https://www.roscoff-tourisme.com/uploads/2019/05/equipole-pays-landivisiau-1.jpg" 
                alt="" />
            </a>
            <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lieu
                </p>

                <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        LANA RONCE
                    </h5>
                </a>
            </div>
        </li>

    );
};

export default Card_photo;