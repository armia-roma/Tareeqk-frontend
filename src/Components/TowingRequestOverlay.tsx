interface TowingRequestOverlayProps {
	onCancel: () => void;
}
const TowingRequestOverlay = ({onCancel}: TowingRequestOverlayProps) => {
	return (
		<div>
			<div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 z-10">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
				<p className="text-lg font-medium text-gray-800">
					Your request is being processed
				</p>
				<p className="text-md text-gray-600 mb-6">
					Looking for towing services near you...
				</p>

				<button
					onClick={onCancel}
					className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
				>
					Cancel Request
				</button>
			</div>
		</div>
	);
};

export default TowingRequestOverlay;
