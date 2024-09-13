import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const coordinates = [33.8886, 35.4955];

    return (
        <MapContainer center={coordinates} zoom={13} style={{ height: "85vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates}>
                <Popup>
                    A popup message!
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
