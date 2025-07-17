import { Clock, Truck } from "lucide-react";

function Header() {
	return (
		<>
			<div className="flex flex-col sm:flex-row  justify-between gap-4 mb-2 shadow-lg p-4 rounded-lg w-full max-w-full">
				<div className="flex items-start gap-4">
					<div className="bg-orange-300 p-2 rounded-full">
						<Truck className="w-8 h-8 text-white" />
					</div>
					<div>
						<h1 className="text-2xl text-start font-bold">
							Towing
						</h1>
						<p className="text-sm text-gray-600">
							24/7 Emergency Service
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center ml-4 gap-2 text-green-600">
				<Clock className="w-4 h-4" />
				<span className="text-sm font-medium">Available</span>
			</div>
		</>
	);
}

export default Header;
