import React from 'react';
import DashboardLayout from '../components/dashboardLayout';
import Title from '../components/title';
import Image from 'next/image';
import Carousel from '../public/images/Carousel.jpg';
import Illus from '../public/images/productIlustr.svg'

export default function Dashboard() {
	return (
		<div className=''>
			<Title />
			<div className='w-full h-[261px] bg-primary  mt-2 font-Roboto rounded-md  px-10'>
				<div className='flex justify-center'>
					<div className="py-7">
						<h1 className='text-white font-bold text-5xl'>
							Sell your products
						</h1>
						<h1 className='text-white font-bold text-5xl'>
							with <span className='text-secondary'>easy.</span>
						</h1>
						<p className='text-sm text-white mt-2'>
							Share your products to the world
						</p>
						<button className='bg-secondary text-white text-xs py-3  font-semibold px-8 hover:bg-hrsecondary rounded mt-3'>
							Create Store
						</button>
					</div>

          <div className="w-full h-full">
            <Image src={Illus} alt=""/>
          </div>
				</div>
			</div>
		</div>
	);
}

Dashboard.Layout = DashboardLayout;
