import React from "react";

interface FormInputProps {
	label?: string;
	name: string;
	type?: string;
	icon?: React.ReactNode;
	placeholder?: string;
	register: any; // or use: UseFormRegister<any>
	error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
	label,
	name,
	type = "text",
	icon,
	placeholder,
	register,
	error,
}) => {
	return (
		<div className="space-y-1">
			<label className="block text-sm font-medium mb-2">{label}</label>
			<div className="flex items-center border rounded-xl pl-3 pr-3">
				{icon}
				<input
					type={type}
					{...register(name)}
					className="w-full py-3 px-3 outline-none"
					placeholder={placeholder}
				/>
			</div>
			{error && (
				<p className="text-red-500 text-start text-sm">{error}</p>
			)}
		</div>
	);
};

export default FormInput;
