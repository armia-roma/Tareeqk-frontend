import React, { useState } from "react";
import Logo from "./../Components/Auth/Logo";
import LoginForm from "../Components/Auth/LoginForm";
import SignUpForm from "../Components/Auth/SignUpForm";

export default function TowingLoginPage() {
	const [isSignUp, setIsSignUp] = useState(false);

	const toggleForm = () => {
		setIsSignUp(!isSignUp);
	};

	return (
		<div className="max-h-screen flex items-center justify-center md:p-4">
			<div className="w-full max-w-md">
				<Logo />
				<div className="rounded-2xl shadow-2xl p-8 ">
					{isSignUp ? <SignUpForm /> : <LoginForm />}
					<div className="mt-6 pt-6 border-t border-white/20">
						<div className="text-center">
							<p className="text-sm text-blue-300 mb-4">
								{isSignUp
									? "Already have an account?"
									: "New to Towing?"}
							</p>
							<button
								className="text-sm text-yellow-400 hover:text-yellow-300"
								onClick={toggleForm}
							>
								{isSignUp ? "Sign In" : "Create an Account"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
