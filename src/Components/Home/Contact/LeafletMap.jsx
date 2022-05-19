import React from 'react';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import 'leaflet/dist/leaflet.css';
import { useSettingsContext } from "../../../Contexts/SettingsContext";

//Leaflet debug
//Map not appear properly: https://stackoverflow.com/questions/40103362/react-leaflet-not-rendering-properly
//Marker not appear properly: https://stackoverflow.com/questions/60174040/marker-icon-isnt-showing-in-leaflet
//Leaflet dark theme: https://gist.github.com/BrendonKoz/b1df234fe3ee388b402cd8e98f7eedbd
export const leafletDarkFilter = "brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7)";

const multiLanguageContent = {
    en: {
        popup: "34 Ha Hoi - Tran Hung Dao - Hoan Kiem"
    },
    vn: {
        popup: "34 Hạ Hồi - Trần Hưng Đạo - Hoàn Kiếm"
    }
};

function LeafletMap() {
    const { settings: { language } } = useSettingsContext();
    const { popup } = multiLanguageContent[language];

    return (
        <MapContainer
            attributionControl={false}
            zoomControl={false}
            center={[21.021050, 105.846800]}
            zoom={17}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "300px" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
                position={[21.021050, 105.846800]}
                icon={new Icon({ iconUrl: MarkerIcon, iconSize: [25, 41], iconAnchor: [12, 41] })}
            >
                <Popup>{popup}</Popup>
                {/* <Tooltip permanent>Tooltip for Marker</Tooltip> */}
            </Marker>
        </MapContainer>
    );
}



export default LeafletMap;