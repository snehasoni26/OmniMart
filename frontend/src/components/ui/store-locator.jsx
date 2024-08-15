import React, { useEffect, useState } from 'react';
import axios from "axios";

const StoreLocator = () => {
    const [currLocation, setCurrLocation] = useState(null);

    const [currLocationJS, setCurrLocationJS] = useState(null);
    useEffect(() => {
        getLocation();
        getLocationJS();
    }, []);

    const getLocation = async () => {
        try {
            const location = await axios.get('http://ipapi.co/json');
            setCurrLocation(location.data);
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    };
    const getLocationJS = () =>
    {
        navigator.geolocation.getCurrentPosition((position) =>
    {   console.log(position);
        const {latitude, longitude} = position.coords;
        setCurrLocationJS({latitude, longitude});
    })
    }
    return (
        <div >
            <h1>Current Location</h1>
            {currLocationJS ? (
                <>
                    {/* <p>Latitude: {currLocation.latitude}</p>
                    <p>Longitude: {currLocation.longitude}</p>
                    <p>City: {currLocation.city}</p> */}

                    <p>Latitude: {currLocationJS.latitude}</p>
                    <p>Longitude: {currLocationJS.longitude}</p>
                    <p>City: {currLocationJS.city}</p>
                </>
            ) : (
                <p>Loading location...</p>
            )}
        </div>
    );
}

export default StoreLocator;
