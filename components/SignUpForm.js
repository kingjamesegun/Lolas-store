import Link from 'next/link';
const SignUpForm = () => {
	return (
		<form>
			<div className='flex flex-col mb-4'>
				<label htmlFor='email' className='text-sm mb-2 font-semibold'>
					Name
				</label>
				<input
					type='email'
					id='email'
					className='rounded-md border py-3 px-5 text-sm border-input-border placeholder:text-input-grey outline-0'
					placeholder='John Doe'
				/>
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='email' className='text-sm mb-2 font-semibold'>
					Email
				</label>
				<input
					type='email'
					id='email'
					className='rounded-md border py-3 px-5 text-sm border-input-border placeholder:text-input-grey outline-0'
					placeholder='youremail@gmail.com'
				/>
			</div>
			<div className='flex justify-between'>
				<div className='flex flex-col mb-4 mx-1 w-full'>
					<label htmlFor='password' className='text-sm mb-2 font-semibold'>
						Password
					</label>
					<input
						type='password'
						id='password'
						placeholder='Password'
						className='rounded-md border py-4 px-4 text-sm border-input-border placeholder:text-input-grey outline-0'
					/>
				</div>
				<div className='flex flex-col mb-4 mx-1 w-full'>
					<label htmlFor='password' className='text-sm mb-2 font-semibold'>
						Confirm Password
					</label>
					<input
						type='password'
						id='password'
						placeholder='Confirm Password'
						className='rounded-md border py-4 px-4 text-sm border-input-border placeholder:text-input-grey outline-0'
					/>
				</div>
			</div>
			<div className='flex justify-between items-center mb-6'>
				<div className='flex flex-row items-center justify-center'>
					<input className='mr-1' type='checkbox' />
					<span className='text-xs font-semibold'>Remember Me</span>
				</div>
				<div className='flex items-center '>
					<p className='text-xs font-medium'>Already have an account?</p>
					<Link href='/login'>
						<a className='text-xs font-medium text-blue-600 ml-1'>Login</a>
					</Link>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<Link href=''>
					<a className='w-full'>
						<button className=' mb-4 w-full bg-input-border text-white px-2 py-4 rounded-md'>
							Create Account
						</button>
					</a>
				</Link>
			</div>
		</form>
	);
};

export default SignUpForm;
