import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Map = ({ value }) => {
	console.log("announ: ", value.id);
	return (
		<MapContainer
			style={{ width: "70%", height: "500px" }}
			center={[47.2192424, 38.9195747]}
			zoom={13}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{value !== "" ? (
				<Marker position={[47.2192424, 38.9195747]}>
					<Popup>{value.title}</Popup>
				</Marker>
			) : null}
		</MapContainer>
	);
};
