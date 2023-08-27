import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='mt-32 h-[820px] bg-[linear-gradient(180deg,rgba(31,41,51,0.20)11.76%,rgba(31,41,51,0.80)49.89%,rgba(31,41,51,1)72.77%),url("/images/background.jpg")] bg-cover text-white'>
            <div className='mx-auto max-w-screen-xl px-4'>
                <div className='flex flex-col items-center justify-center py-52'>
                    <h2 className='text-center text-6xl uppercase '>
                        <span className='font-bold'>Your Gateway to Extraordinary</span>
                        <br />
                        Travel Experiences With Us
                    </h2>
                    <Link
                        href='/contact'
                        className='mt-6 rounded-full bg-white px-14 py-3 text-sm font-semibold text-[#242424]'>
                        Contact Us
                    </Link>
                </div>
                <div className='flex w-full justify-around gap-x-10'>
                    <div className='w-2/4'>
                        <div className='flex w-3/4 justify-center'>
                            <Image src='/logo-white.svg' alt='Lorem Travel' width={80} height={80} />
                        </div>
                        <p className='mt-3 w-3/4 text-xs'>
                            Immerse yourself in the beauty of our handpicked destinations. Browse through our curated
                            collection and find the perfect getaway for your next adventure.
                        </p>
                    </div>
                    <div className='w-1/4'>
                        <h4 className='mb-2 text-xl font-semibold uppercase'>Our Services</h4>
                        <ul>
                            <li className='mb-2'>Tour Packages</li>
                            <li className='mb-2'>Event Production</li>
                            <li className='mb-2'>Car Rental</li>
                            <li className='mb-2'>Hotel Reservation</li>
                            <li className='mb-2'>Mice</li>
                        </ul>
                    </div>
                    <div className='w-1/4'>
                        <h4 className='mb-2 text-xl font-semibold uppercase'>Quick Link</h4>
                        <ul>
                            <li className='mb-2'>Home</li>
                            <li className='mb-2'>About Us</li>
                            <li className='mb-2'>Our Services</li>
                            <li className='mb-2'>Packages</li>
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <h4 className='mb-2 text-xl font-semibold uppercase'>Get in Touch</h4>
                        <p>38959 Nugraha Mill, Mataram, DI Yogyakarta</p>
                        <p>+62 878 406 299</p>
                        <p>customer.support@loremtravel.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
