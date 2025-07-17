import { useState } from "react";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
interface RegisterFormData {
	name: string;
	email: string;
	password: string;
}

export const useRegister = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [message, setMessage] = useState<string | null>(null);
	const navigate = useNavigate();

	const signUp = async (data: RegisterFormData) => {
		setLoading(true);
		setError(null);
		setMessage(null);

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
			}
			console.log("Registration successful:", res);
			setMessage("Registration completed successfully.");
			return { success, message, user };
		} catch (err: any) {
			console.error("Registration error:", err);
			setError("Registration failed. Please check the data.");
			return null;
		} finally {
			setLoading(false);
		}
	};

	return { signUp, loading, error, message };
};
