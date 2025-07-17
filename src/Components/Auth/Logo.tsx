import React from "react";
import { Truck } from "lucide-react";

const Logo = () => {
	return (
		<div className="flex flex-col items-center justify-center  mb-8">
			<div className=" flex flex-col items-center justify-center w-20 h-20 bg-orange-300 rounded-full shadow-2xl mb-4">
				<Truck className="w-10 h-10" />
			</div>
			<h1 className="text-3xl font-bold mb-2">Towing</h1>
			<p className="text-blue-300 text-sm">Towing Services</p>
		</div>
	);
};
export default Logo;
