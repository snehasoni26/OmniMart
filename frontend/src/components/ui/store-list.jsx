import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const StoreList = () => {
    // const location = useLocation();

    // const query = new URLSearchParams(location.search);
    // const latitude = query.get('lat');
    // const longitude = query.get('lng');

    const [stores, setStores] = useState([]);

    // useEffect(() => {
    //     if (latitude && longitude) {
    //         fetchStores(latitude, longitude);
    //     }
    // }, [latitude, longitude]);

    const fetchStores = () => {
        // Hardcoded list of stores
        const hardcodedStores = [
            { name: 'Store 1', distance: '1.5', address: '123 Main St, City A' },
            { name: 'Store 2', distance: '2.0', address: '456 Elm St, City B' },
            { name: 'Store 3', distance: '3.2', address: '789 Maple Ave, City C' }
        ];

        setStores(hardcodedStores);
    };

    return (
        <div>
            <h1>Nearest Stores</h1>
            <ul className='text-white'>
                {stores.map((store, index) => (
                    <li key={index}>
                        <strong>{store.name}</strong> - {store.distance} km away
                        <br />
                        Address: {store.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StoreList;
