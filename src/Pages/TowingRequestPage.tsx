import Map from "./../Components/TowingRequest/Map";
import Header from "../Components/TowingRequest/Header";
import TowingForm from "../Components/TowingRequest/TowingForm";
import {useTowingRequest} from "../hooks/useTowingRequest";
const TowingRequestPage = () => {
	const {location, setLocation, submitRequest, error, loading} =
		useTowingRequest();

	const handleFormSubmit = async (data: {note: string}) => {
		if (!location) {
			alert("Please select a location on the map.");
			return;
		}
		const result = await submitRequest(data.note);
		if (result) {
			console.log("Towing request submitted:", result);
		}
	};
	const handleLocationChange = (location: google.maps.LatLngLiteral) => {
		setLocation(location); // Store in state or pass to form
	};
	return (
		<div className="max-h-screen max-w-[450px] mx-auto">
			<div className="flex flex-col space-y-3">
				<Header />
				<h2 className="text-2xl font-semibold">Request a Tawing </h2>
				<Map onLocationChange={handleLocationChange} />
				<TowingForm onSubmit={handleFormSubmit} />
			</div>
		</div>
	);
};

export default TowingRequestPage;
