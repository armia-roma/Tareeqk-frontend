import { Lock, Mail } from "lucide-react";
import React, { useState } from "react";

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		console.log("Login attempt:", formData);
		// Handle login logic here
	};
	return (
		<form>
			<div className="space-y-6">
				<div className="relative">
					<label className="block text-sm font-medium mb-2">
						Username or Email
					</label>
					<div className="relative">
						<Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
						<input
							type="text"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full pl-12 pt-3 pr-3 pb-3 border  rounded-xl "
							placeholder="Enter your email or username"
							required
						/>
					</div>
				</div>

				<div className="relative">
					<label className="block text-sm font-medium mb-2">
						Password
					</label>
					<div className="relative">
						<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
						<input
							type={"password"}
							name="password"
							value={formData.password}
							onChange={handleInputChange}
							className="w-full pl-12 pr-12 py-3 border rounded-xl"
							placeholder="Enter your password"
							required
						/>
					</div>
				</div>

				<button
					type="button"
					onClick={handleSubmit}
					className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-orange-50 font-semibold rounded-xl shadow-lg focus:outline-none "
				>
					Sign In
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
