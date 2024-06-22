'use client';
import React, { use, useState } from 'react';
import { sendDataToGemini } from '../services/gemini';
import { useForm } from 'react-hook-form';
import Input from '@/components/common/Input/Input';
import Markdown from '@/components/common/MarkDown/Markdown';

interface IItenaryData {
	destination: string;
	budgetType: 'backPacking' | 'luxury' | 'domestic';
	numberOfDays: string;
}

export default function Home() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IItenaryData>();

	const [itenaryDetails, setItenaryDetails] = useState<any>();

	const onSubmit = async (data: IItenaryData) => {
		const response = await sendDataToGemini(data);
		console.log('response', response);
		setItenaryDetails(response);
	};

	return (
		<div className='min-h-screen w-screen flex justify-center items-center flex-col'>
			<h1>Itenary Details</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col justify-center items-center space-y-5 mt-5 w-full'
			>
				<Input
					placeholder='Destination'
					register={{ ...register('destination', { required: true }) }}
					error={errors.destination && 'Destination is required'}
				/>
				<Input
					placeholder='Budget'
					register={{ ...register('budgetType', { required: true }) }}
					error={errors.budgetType && 'Budget is required'}
				/>
				<Input
					placeholder='No of Days'
					register={{ ...register('numberOfDays', { required: true }) }}
					error={errors.numberOfDays && 'No of Days is required'}
				/>
				<button
					className='select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
					type='submit'
				>
					Get your trip details
				</button>
			</form>
			<div className='flex justify-start items-start flex-col p-5 w-full'>
				<Markdown>{itenaryDetails}</Markdown>
			</div>
		</div>
	);
}

/*
1) destination
2) budget
3) no of days.
*/
