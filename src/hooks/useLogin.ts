import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
interface LoginFormData {
	email: string;
	password: string;
}

export const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const login = async (data: LoginFormData) => {
		setLoading(true);
		setError(null);

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
			}

			return { success, message, user };
		} catch (err: any) {
			setError("Login failed. Please check your credentials.");
			return null;
		} finally {
			setLoading(false);
		}
	};

	return { login, loading, error };
};
