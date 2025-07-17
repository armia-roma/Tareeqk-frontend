import {Lock, Mail} from "lucide-react";
import FormInput from "../Ui/FormInput";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRegister} from "./../../hooks/useRegister";
const SignUpForm = () => {
	const schema = z.object({
		name: z.string().min(1, {message: "Name is required"}),
		email: z.string().email({message: "Invalid email address"}),
		password: z
			.string()
			.min(6, {message: "Password must be at least 6 characters"}),
	});
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: zodResolver(schema),
	});
	const {signUp, loading} = useRegister();
	type FormData = z.infer<typeof schema>;
	const onSubmit = async (data: FormData) => {
		await signUp(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-6">
				<FormInput
					label="Name"
					name="name"
					type="name"
					placeholder="Enter your Name"
					icon={<Mail className="text-blue-300 w-5 h-5" />}
					register={register}
					error={errors.name?.message}
				/>

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
					className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-orange-50 font-semibold rounded-xl shadow-lg"
					disabled={loading}
				>
					{loading ? "wait..." : "Sign Up"}
				</button>
			</div>
		</form>
	);
};
export default SignUpForm;
