import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { MapContainer } from './Style';

const Map = () => {
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 0, lng: 0 };
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

    return (
        <MapContainer>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={{ height: '85vh', width: '100%' }}
                    center={coordinates}
                    zoom={14}
                    onClick={() => { }}
                >
                    <Marker
                        position={coordinates}
                        icon={<LocationOnOutlinedIcon />}
                    />
                </GoogleMap>
            </LoadScript>
        </MapContainer>
    );
}

export default Map;
