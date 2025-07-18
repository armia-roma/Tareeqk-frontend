import { useState } from "react";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import { useAlert } from "./useAlert";
interface RegisterFormData {
	name: string;
	email: string;
	password: string;
}

export const useRegister = () => {
	const [loading, setLoading] = useState(false);
	const { showAlert } = useAlert();
	const navigate = useNavigate();

	const signUp = async (data: RegisterFormData) => {
		setLoading(true);

		try {
			const res = await apiClient.post("/register", data);
			const {
				data: {
					data: { token, user },
					message,
					success,
				},
			} = res;
			if (token) {
				localStorage.setItem("token", token);
				localStorage.setItem("user", JSON.stringify(user));
				navigate("/towing-request");
				showAlert(message, "success");
			}
			return { success, message, user };
		} catch (err: any) {
			showAlert(err?.response?.data?.message || "Server error", "error");
		} finally {
			setLoading(false);
		}
	};

	return { signUp, loading };
};
