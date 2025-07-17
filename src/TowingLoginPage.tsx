import React from "react";
import Logo from "./Components/Auth/Logo";
import LoginForm from "./Components/Auth/LoginForm";

export default function TowingLoginPage() {
	return (
		<div className="max-h-screen flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<Logo />
				<div className="rounded-2xl shadow-2xl p-8 ">
					<LoginForm></LoginForm>
				</div>
			</div>
		</div>
	);
}
