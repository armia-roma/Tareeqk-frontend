import Map from "./../Components/TowingRequest/Map";
import Header from "../Components/TowingRequest/Header";
import TowingForm from "../Components/TowingRequest/TowingForm";
import { useTowingRequest } from "../hooks/useTowingRequest";
import TowingRequestOverlay from "../Components/TowingRequestOverlay";
import { useState } from "react";
import useCancelTowingRequest from "../hooks/useCancelTowingRequest";
import Loading from "../Components/Ui/Loading";
interface ITowing {
	id: number;
}
const TowingRequestPage = () => {
	const { setLocation, submitRequest, error, loading } = useTowingRequest();
	const [showOverlay, setShowOverlay] = useState(false);
	const [towing, setTowing] = useState<ITowing>({} as ITowing);
	const { cancelTowing } = useCancelTowingRequest();
	const handleFormSubmit = async ({ note }: { note: string }) => {
		const result = await submitRequest(note);
		if (result.success) {
			setShowOverlay(true);
			setTowing(result.data);
		}
	};
	const handleLocationChange = (location: google.maps.LatLngLiteral) => {
		setLocation(location);
	};
	const handleOnCancel = async () => {
		await cancelTowing(towing.id);
		setShowOverlay(false);
	};
	if (loading) {
		<Loading />;
	}

	return (
		<div className="max-h-screen max-w-[450px] mx-auto relative">
			<div className={`flex flex-col space-y-3 `}>
				<Header />
				<h2 className="text-2xl font-semibold">Request a Tawing </h2>
				<Map onLocationChange={handleLocationChange} />
				<TowingForm onSubmit={handleFormSubmit} />
			</div>
			{showOverlay && <TowingRequestOverlay onCancel={handleOnCancel} />}
		</div>
	);
};

export default TowingRequestPage;
