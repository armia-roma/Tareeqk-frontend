import React, { useState, useCallback, useEffect } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const defaultCenter = {
	lat: 25.2759665,
	lng: 55.3620658,
};
interface MapPageProps {
	onLocationChange: (position: google.maps.LatLngLiteral) => void;
}

export default function Map({ onLocationChange }: MapPageProps) {
	const [currentPosition, setCurrentPosition] =
		useState<google.maps.LatLngLiteral>(defaultCenter);
	const [map, setMap] = useState<google.maps.Map | null>(null);

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyCGRRVL7FlEoJNCN9Ljk8xo4dF9k2pNu_I",
	});

	const onLoad = useCallback(
		(map: google.maps.Map) => {
			setMap(map);
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const location = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};
					setCurrentPosition(location);
					onLocationChange(location); //  Notify parent
					map.setCenter(location);
				},
				() => {
					map.setCenter(defaultCenter);
				},
				{ enableHighAccuracy: true }
			);
		},
		[onLocationChange]
	);

	const onUnmount = useCallback(() => {
		setMap(null);
	}, []);

	const handleMapClick = (e: google.maps.MapMouseEvent) => {
		if (e.latLng) {
			const newPos = {
				lat: e.latLng.lat(),
				lng: e.latLng.lng(),
			};
			setCurrentPosition(newPos);
			onLocationChange(newPos); // 🔸 Notify parent
		}
	};
	if (!isLoaded) {
		return (
			<div className="flex items-center justify-center w-full h-[300px]">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
			</div>
		);
	}

	return (
		<div className="w-full">
			<div className="relative rounded-lg overflow-hidden w-[350px] md:w-[430px] mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px]">
				<GoogleMap
					mapContainerStyle={{ width: "100%", height: "100%" }}
					center={currentPosition}
					zoom={15}
					onLoad={onLoad}
					onUnmount={onUnmount}
					onClick={handleMapClick}
					options={{
						zoomControl: false,
						mapTypeControl: false,
						streetViewControl: false,
						fullscreenControl: false,
						gestureHandling: "greedy",
					}}
				>
					<Marker
						position={currentPosition}
						icon={{
							url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
							scaledSize: new google.maps.Size(30, 30),
						}}
					/>
				</GoogleMap>
			</div>
		</div>
	);
}
