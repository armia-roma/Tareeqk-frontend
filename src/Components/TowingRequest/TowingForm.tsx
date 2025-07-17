const TowingForm = () => {
	return (
		<form>
			<textarea
				placeholder="Note for the towing service (optional)"
				className="w-full p-4 border-2 border-gray-200 rounded-lg "
				rows={4}
			/>
			<button
				type="submit"
				className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-orange-50 font-semibold rounded-xl shadow-lg focus:outline-none "
			>
				Order
			</button>
		</form>
	);
};

export default TowingForm;
