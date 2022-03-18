import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/WebLogo.png";
import Splash from "../public/images/Splash.png";
import Ellipse from "../public/images/Ellipse.png";
import LoginForm from "../components/authentication/LoginForm";
import SidePageLogin from "../components/authentication/SidePageLogin";
import { Formik } from "formik";
import * as Yup from "yup";

const login = () => {
	const validate = Yup.object({
		Email: Yup.string().email("Email is invalid").required("Email is required"),
		Password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
	});
	return (
		<div>
			<Head>
				<title>Login Page</title>
				<meta
					name='description'
					content='Login page to be able to access your personal dashboard'
				/>
				<link
					rel='shortcut icon'
					href='images/LogoFavicon.png'
					type='image/x-icon'
				/>
			</Head>
			<section className='font-Roboto flex flex-col md:flex-row md:flex-1 h-full md:h-screen'>
				<div className='pb-6 p-4 pt-2 w-full md:w-6/12 lg:p-16 md:p-8 md:pt-4'>
					<Formik
						initialValues={{
							Email: "",
							Password: "",
						}}
						validationSchema={validate}
						onSubmit={(values) => {
							console.log(values);
						}}>
						{(formik) => (
							<div>
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
									<a className='cursor-pointer'>
										<Image
											src={Logo}
											alt='Logo'
											width={50}
											height={50}
											objectFit='contain'
										/>
									</a>
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
										Login
									</h1>
									<p className='text-xs font-semibold'>
										Welcome back, log in to your account.
									</p>
								</div>
								<LoginForm />
							</div>
						)}
					</Formik>
				</div>
				<SidePageLogin />
			</section>
		</div>
	);
};

export default login;
