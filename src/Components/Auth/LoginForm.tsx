import { Lock, Mail } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../Ui/FormInput";

import { useLogin } from "../../hooks/useLogin";
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
	const { login, loading } = useLogin();
	const onSubmit = async (data: FormData) => {
		await login(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-6">
				<FormInput
					label="Email"
					name="email"
					type="email"
					placeholder="Enter your Email"
					icon={<Mail className="text-blue-300 w-5 h-5" />}
					register={register}
					error={errors.email?.message}
				/>

				<FormInput
					label="Password"
					name="password"
					type="password"
					placeholder="Enter your Password"
					icon={<Lock className="text-blue-300 w-5 h-5" />}
					register={register}
					error={errors.password?.message}
				/>

				<button
					type="submit"
					className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-orange-50 font-semibold rounded-xl shadow-lg focus:outline-none "
				>
					{loading ? "Wait..." : "Sign In"}
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
