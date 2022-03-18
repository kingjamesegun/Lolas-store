import Image from 'next/image';
import ArrowRight from '../public/images/ArrowRight.svg';
import BeautifulLady from '../public/images/BeautifulLady.svg';
import Burger from '../public/images/Burger.svg';

const Navbar = ({handleClose}) => {
  return (
    <div className='bg-white w-full flex items-center px-[32px] justify-between py-[16px] shadow-md'>
        <section>
            <div className='flex space-x-[20px]'>
              <Image src={ArrowRight} alt='Arrowleft' className='cursor-pointer' onClick={handleClose}/>
              <div>
                <h3 className='text-[#9CA3AF] text-[13px] md:text-[16px] font-medium'>Keep track of your store</h3>
                <h2 className='text-[14px] md:text-[24px] font-semibold'>September, 2020</h2>
              </div>
            </div>
        </section>
        <section className='flex space-x-[17px] items-center'>
            <div className='hidden sm:flex'>
              <Image src={BeautifulLady} alt='Profile picture'/>
            </div>
            <div className='hidden sm:block'>
              <h4 className='text-[14px] md:text-[18px] font-medium'>Adam Smith</h4>
              <span className='text-[12px] font-medium text-[#9CA3AF]'>Kingjamesegun@gmail.com</span>
            </div>
            <div className='sm:hidden'>
              <Image src={Burger} alt='Profile picture'/>
            </div>
        </section>
    </div>
  )
}

export default Navbar