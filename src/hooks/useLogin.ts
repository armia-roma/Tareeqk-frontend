import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import { useAlert } from "./useAlert";
interface LoginFormData {
	email: string;
	password: string;
}

export const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { showAlert } = useAlert();
	const navigate = useNavigate();

	const login = async (data: LoginFormData) => {
		setLoading(true);

		try {
			const res = await apiClient.post("/login", data);
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
			showAlert(err.response.data.message, "error");
		} finally {
			setLoading(false);
		}
	};

	return { login, loading };
};
