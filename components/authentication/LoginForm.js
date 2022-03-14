import React, { useState } from 'react'
import Link from 'next/link';
import InputForm from '../InputForm';
import {FaEye} from "react-icons/fa"
import {FaEyeSlash} from "react-icons/fa"
const LoginForm = () => {
	//Logic
	const [showPassword, setShowPassword] = useState(false)
	const togglePassword = () =>{
		setShowPassword(!showPassword)
	} 

	return (
		<form>
			<div className='flex flex-col mb-4'>
				<label htmlFor='email' className='text-sm mb-2 font-semibold'>
					Email
				</label>
				<InputForm
					type='email'
					id='email'
					placeholder='youremail@gmail.com'
				/>
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='password' className='text-sm mb-2 font-semibold'>
					Password
				</label>
				<div className='relative'>
					<InputForm
						type={showPassword ? 'text':'password'}
						id='password'
						placeholder='Password'
					/>
					{
						showPassword ? 
						<FaEyeSlash className='absolute right-4 bottom-4 cursor-pointer' onClick={togglePassword} />
						:
						<FaEye className='absolute right-4 bottom-4 cursor-pointer' onClick={togglePassword} />
					}
				</div>
			</div>
			<div className='flex justify-between items-center mb-6'>
				<div className='flex flex-row items-center justify-center'>
					<input className='mr-1' type='checkbox' />
					<span className='text-xs font-semibold'>Remember Me</span>
				</div>
				<div className='flex items-center '>
					<p className='text-xs font-medium'>No account yet?</p>
					<Link href='/signup'>
						<a className='text-xs font-medium text-blue-600 ml-1'>Register</a>
					</Link>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<Link href=''>
					<a className='w-full'>
						<button className=' mb-4 w-full bg-input-border text-white px-2 py-4 rounded-md'>
							Login
						</button>
					</a>
				</Link>
				<Link href=''>
					<a className='text-blue-600 text-sm'>Forgot password?</a>
				</Link>
			</div>
		</form>
	);
};

export default LoginForm;
