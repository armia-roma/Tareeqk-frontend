import { useState } from "react";
import apiClient from "../services/apiClient";
import { useAlert } from "./useAlert";

const useCancelTowingRequest = () => {
	const { showAlert } = useAlert();
	const [loading, setLoading] = useState(false);
	const cancelTowing = async (towingId: number) => {
		setLoading(true);
		try {
			const response = await apiClient.post(
				`/requests/${towingId}/cancel`
			);
			showAlert(response.data.message, "success");
		} catch (error) {
			showAlert("Failed to cancel towing request", "error");
		} finally {
			setLoading(false);
		}
	};
	return { cancelTowing, loading };
};
export default useCancelTowingRequest;
