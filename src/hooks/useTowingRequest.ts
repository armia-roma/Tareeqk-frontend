import {useState} from "react";
import apiClient from "../services/apiClient";

interface TowingRequestData {
	customer_id: string;
	lat: number;
	lang: number;
	note: string;
}

export const useTowingRequest = () => {
	const [location, setLocation] = useState<google.maps.LatLngLiteral | null>(
		null
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const submitRequest = async (note: string) => {
		if (!location) {
			alert("Please select a location on the map.");
			return;
		}

		setLoading(true);
		setError(null);

		try {
			const token = localStorage.getItem("token");
			const user = JSON.parse(localStorage.getItem("user") || "{}");
			const payload: TowingRequestData = {
				customer_id: user.id,
				lat: location.lat,
				lang: location.lng,
				note: note,
			};

			const response = await apiClient.post("/requests", payload, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data;
		} catch (err: any) {
			setError("Failed to submit towing request");
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return {
		location,
		setLocation,
		submitRequest,
		loading,
		error,
	};
};
