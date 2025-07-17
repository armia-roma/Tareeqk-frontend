import { createContext } from "react";

export type AlertType = "success" | "error" | "info" | "warning";

export interface Alert {
	id: string;
	message: string;
	type: AlertType;
	timeout?: number;
}

interface AlertContextType {
	alert: Alert | null;
	showAlert: (message: string, type: AlertType, timeout?: number) => void;
	removeAlert: (id: string) => void;
}

export const AlertContext = createContext<AlertContextType>(
	{} as AlertContextType
);
