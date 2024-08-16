import React, { useEffect, useState } from 'react';
import axios from "axios";

const StoreLocator = () => {
    const [currLocation, setCurrLocation] = useState(null);

    const [currLocationJS, setCurrLocationJS] = useState(null);
    useEffect(() => {
      
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.1086032668777!2d76.82013447501954!3d29.947554623155817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f422f5244e7%3A0x9c630c311d6349b8!2sNIT%20KURUKSHETRA!5e0!3m2!1sen!2sin!4v1723825574269!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </>
            ) : (
                <p>Loading location...</p>
            )}
        </div>
    );
}

export default StoreLocator;
