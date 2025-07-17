import Map from "./../Components/TowingRequest/Map";
import Header from "../Components/TowingRequest/Header";
import TowingForm from "../Components/TowingRequest/TowingForm";
const TowingRequestPage = () => {
	return (
		<div className="max-h-screen max-w-[450px] mx-auto">
			<div className="flex flex-col space-y-3">
				<Header />
				<h2 className="text-2xl">Request a Tawing </h2>
				<Map />
				<TowingForm />
			</div>
		</div>
	);
};

export default TowingRequestPage;
