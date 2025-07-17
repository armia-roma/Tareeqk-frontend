import { useState } from "react";
import {
	AlertContext,
	type Alert,
	type AlertType,
} from "./context/AlertContext";

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
	const [alert, setAlert] = useState<Alert | null>(null);

	const showAlert = (message: string, type: AlertType, timeout = 5000) => {
		const id = Date.now().toString();
		const newAlert = { id, message, type, timeout };
		setAlert(newAlert);

		if (timeout > 0) {
			setTimeout(() => {
				removeAlert();
			}, timeout);
		}
	};

	const removeAlert = () => {
		setAlert(null);
	};

	return (
		<AlertContext.Provider value={{ alert, showAlert, removeAlert }}>
			{children}
		</AlertContext.Provider>
	);
};
