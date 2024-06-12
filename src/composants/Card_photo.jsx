import React, { useEffect, useState } from 'react';

const Card_photo = (props) => {
    const [cavalierData, setCavalierData] = useState(null);

    useEffect(() => {
        const fetchCavalierData = async () => {
            try {
                const response = await fetch(`http://89.81.6.81:5000/cavaliers/${props.photo.id_cavalier}`);
                if (response.ok) {
                    const data = await response.json();
                    setCavalierData(data);
                } else {
                    console.error('Failed to fetch cavalier data:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        };

        fetchCavalierData();
    }, [props.photo.id_cavalier]);

    return (
        <li className="bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-solid border-1 border-gray-600">
            <a href="/DetailCompetition">
                <img
                    className="rounded-t-lg filter grayscale hover:grayscale-0"
                    src={props.photo.url_photo}
                    alt=""
                />
            </a>
            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {props.photo.date_photo}
                </p>
                <a href={`/Cavalier/${props.photo.id_cavalier}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {cavalierData ? cavalierData.fullname : 'Chargement ...'}
                    </h5>
                </a>
            </div>
        </li>
    );
};

export default Card_photo;