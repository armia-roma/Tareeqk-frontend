import { Lock, Mail } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const LoginForm = () => {
	const schema = z.object({
		email: z.string().email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(6, { message: "Password must be at least 6 characters" }),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});
	type FormData = z.infer<typeof schema>;
	const onSubmit = (data: FormData) => {
		console.log("Form submitted:", data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-6">
				<div className="relative">
					<label className="block text-sm font-medium mb-2">
						Username or Email
					</label>
					<div className="relative">
						<Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
						<input
							type="text"
							{...register("email")}
							className="w-full pl-12 pt-3 pr-3 pb-3 border  rounded-xl "
							placeholder="Enter your email or username"
							required
						/>
						{errors.email && (
							<p className="text-red-500 text-sm">
								{errors.email.message}
							</p>
						)}
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
							{...register("password")}
							className="w-full pl-12 pr-12 py-3 border rounded-xl"
							placeholder="Enter your password"
							required
						/>
					</div>
					{errors.password && (
						<p className="text-red-500 text-sm">
							{errors.password.message}
						</p>
					)}
				</div>

				<button
					type="submit"
					className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-orange-50 font-semibold rounded-xl shadow-lg focus:outline-none "
				>
					Sign In
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
