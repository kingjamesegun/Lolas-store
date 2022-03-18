import Image from 'next/image'
import Logo from '../public/images/Logo.svg';
import DashboardFill from '../public/images/DashboardFill.svg';
import DashboardProduct from '../public/images/DashboardProduct.svg';
import DashboardOrders from '../public/images/DashboardOrders.svg';
import DashboardAccount from '../public/images/DashboardAccount.svg';
import ArrowRight from '../public/images/ArrowRight.svg';
import DashboardSettings from '../public/images/DashboardSettings.svg';

const Sidebar = () => {
  return (
    <div className='bg-white w-[337px] h-screen shadow-md px-[40px] py-[33px] flex flex-col'>
        <div className='relative w-[91px] h-[39px]'>
            <Image src={Logo} alt='webStore' layout='fill'/>
        </div>
        <div className='block text-[16px] font-semibold mt-[52px] flex-grow'> 
            <ul className='space-y-[25px] mb-[25px]'>
                <li className='sidebar-text'><Image src={DashboardFill} alt='dashboard-logo'/><span className='inline ml-[13px]'>Dashboard</span></li>
                <li className='sidebar-text'><Image src={DashboardProduct} alt='dashboard-product'/><span className='inline ml-[13px]'>Product</span></li>
                <li className='sidebar-text'><Image src={DashboardOrders} alt='dashboard-orders'/><span className='inline ml-[13px]'>Orders</span></li>
            </ul>
            <hr className='border border-gray-100'/>
            <div className=''>
                <div className='uppercase text-[18px] flex justify-between mt-[29px]'>
                    <p className='h-full mb-[13px] '>Payments</p>
                    <div className='h-[12px] w-[12px] cursor-pointer'>
                        <Image src={ArrowRight} alt='dashboard-logo'/>
                    </div>
                </div>
                <ul>
                    <li className='sidebar-text'><Image src={DashboardAccount} alt='dashboard-orders'/><span className='inline ml-[13px]'>Bank Account</span></li>
                </ul>
            </div>
        </div>
        <div className="text-[16px] font-semibold sidebar-text ">
            <Image src={DashboardSettings} alt='dashboard-orders'/><span className='inline ml-[13px]'>Settings</span>
        </div>
    </div>
  )
}

export default Sidebar