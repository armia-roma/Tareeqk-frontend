import { useAlert } from "../../hooks/useAlert";
import Alert from "./Alert";

const AlertContainer = () => {
	const { alert, removeAlert } = useAlert();

	if (!alert) return null;

	return (
		<div className="fixed top-4 right-4 z-50 w-80 max-w-full">
			{alert && (
				<Alert key={alert.id} alert={alert} onClose={removeAlert} />
			)}
		</div>
	);
};

export default AlertContainer;
