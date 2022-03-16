import Head from "next/head";
import Link from "next/link"
import Splash from "../public/images/Splash.png";
import Ellipse from "../public/images/Ellipse.png";
import Logo from "../public/images/WebLogo.png";
import Image from "next/image";
import { SidePage } from "../components/authentication/SidePage";
import SignUpForm from "../components/authentication/SignUpForm";

const signUp = () => {
	return (
		<div>
			<Head>
				<title>Sign Up Page</title>
				<meta
					name='description'
					content='Sign up page to be able to create your account'
				/>
				<link
					rel='shortcut icon'
					href='images/LogoFavicon.png'
					type='image/x-icon'
				/>
			</Head>
			<section className='font-Roboto flex flex-col md:flex-row md:flex-1 h-full md:h-screen'>
				<div className='pb-6 p-4 pt-2 w-full md:w-6/12 lg:p-16 md:p-8 md:pt-4'>
					<div className='md:hidden fixed -bottom-6 -left-16 -z-10'>
						<Image
							src={Ellipse}
							alt='Ellipse'
							width={100}
							height={100}
							objectFit='contain'
						/>
					</div>
					<Link href='/'>
						<Image
							src={Logo}
							alt='Logo'
							width={50}
							height={50}
							objectFit='contain'
						/>
					</Link>
					<div className='mb-8 relative'>
						<div className='md:hidden absolute right-0'>
							<Image
								src={Splash}
								alt='Splash'
								width={70}
								height={70}
								objectFit='contain'
							/>
						</div>
						<h1 className='font-semibold text-input-border text-[1.9rem] sm:text-4xl mb-1 tracking-normal'>
							Create Account
						</h1>
						<p className='text-xs font-semibold'>
							Sign up to start setting up your store.
						</p>
					</div>
					<SignUpForm />
				</div>
				<SidePage />
			</section>
		</div>
	);
};

export default signUp;
