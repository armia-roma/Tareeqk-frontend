import { useState } from "react";
interface TowingFormProps {
	onSubmit: (data: { note: string }) => void;
}
const TowingForm = ({ onSubmit }: TowingFormProps) => {
	const [note, setNote] = useState("");
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit({ note });
	};
	return (
		<form onSubmit={handleSubmit}>
			<textarea
				placeholder="Note for the towing service (optional)"
				className="w-full p-4 border-2 border-gray-200 rounded-lg "
				rows={4}
				value={note}
				onChange={(e) => setNote(e.target.value)}
			/>
			<button
				type="submit"
				className="w-full py-3 px-4 bg-orange-300 font-semibold rounded-xl shadow-lg hover:bg-orange-400 active:bg-orange-500"
			>
				Order
			</button>
		</form>
	);
};

export default TowingForm;
