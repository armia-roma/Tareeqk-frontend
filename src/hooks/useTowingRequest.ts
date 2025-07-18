import { useState } from "react";
import apiClient from "../services/apiClient";
import { useAlert } from "./useAlert";
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
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const { showAlert } = useAlert();

	const submitRequest = async (note: string) => {
		if (!location) {
			showAlert("Please select a location on the map.", "error");
		}

		setLoading(true);
		setError(null);

		try {
			if (location) {
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
				if (response.data.success) {
					showAlert(response.data.message, "success");
				}
				return response.data;
			}
		} catch (err: any) {
			const errorMessage = err.response?.data?.message || "Server error";
			showAlert(errorMessage, "error");
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
