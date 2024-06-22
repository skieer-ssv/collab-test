import React from 'react';

interface IProps {
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	type?: string;
	label?: string;
	error?: string;
	register: any;
}

const Input = ({
	placeholder,
	onChange,
	value,
	type,
	label,
	error,
	register,
	...props
}: IProps) => {
	return (
		<div>
			{label && <label>{label}</label>}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='border-2 border-black p-3 rounded-xl w-full'
				{...register}
			/>
			{error && <p className='text-red-500 text-sm'>{error}</p>}
		</div>
	);
};

export default Input;
