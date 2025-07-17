import {X} from "lucide-react";
import type {Alert as AlertType} from "./../../context/AlertContext";

interface AlertProps {
	alert: AlertType;
	onClose: (id: string) => void;
}

const Alert = ({alert, onClose}: AlertProps) => {
	const getAlertStyles = () => {
		switch (alert.type) {
			case "success":
				return "bg-green-100 border-green-500 text-green-700";
			case "error":
				return "bg-red-100 border-red-500 text-red-700";
			case "warning":
				return "bg-yellow-100 border-yellow-500 text-yellow-700";
			case "info":
			default:
				return "bg-blue-100 border-blue-500 text-blue-700";
		}
	};

	return (
		<div
			className={`px-4 py-3 rounded relative border-l-4 mb-3 ${getAlertStyles()}`}
			role="alert"
		>
			<span className="block sm:inline">{alert.message}</span>
			<button
				onClick={() => onClose(alert.id)}
				className="absolute top-0 bottom-0 right-0 px-4 py-3"
			>
				<X size={18} />
			</button>
		</div>
	);
};

export default Alert;
