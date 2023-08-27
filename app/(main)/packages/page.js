import LocationIcon from '@/components/icons/Location';
import PeoplesIcon from '@/components/icons/Peoples';
import StarIcon from '@/components/icons/Star';
import Image from 'next/image';
import destination from '/data/destination.json';

export default function Page() {
    return (
        <main className='mx-auto max-w-screen-xl px-4'>
            <section>
                <div className='relative flex h-[500px] items-center justify-center overflow-hidden rounded-3xl'>
                    <Image src='/images/packages-background.jpg' alt='packages' width='1320' height='500' />
                    <div className='absolute inset-0 flex items-center justify-between p-14 text-white'>
                        <h2 className='text-6xl font-semibold capitalize'>
                            Plan your dream vacation effortlessly with our user-friendly booking platform.
                        </h2>
                        <p className=' font-medium'>
                            Lorem ipsum dolor sit amet consectetur. Quis faucibus at egestas viverra faucibus. Arcu ac
                            in diam ut nunc magna tristique risus lorem. Tempus amet morbi a enim. Sit leo quisque diam
                            sit elit sociis amet.
                        </p>
                    </div>
                </div>
            </section>
            <section className='pt-20'>
                <h3 className='text-4xl font-semibold capitalize text-primary'>
                    Travel accommodation
                    <br /> recommendations for you
                </h3>
                <div className='grid grid-cols-3 place-items-center gap-8 pt-8'>
                    {destination.map((item, i) => (
                        <div key={i} className='space-y-4'>
                            <div className='flex h-64 items-center justify-center overflow-hidden rounded-2xl shadow-md'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={419}
                                    height={256}
                                    className='object-cover object-center'
                                />
                            </div>
                            <h3 className='text-xl font-medium'>{item.title}</h3>
                            <div className='flex items-center justify-between text-slate-500'>
                                <div className='inline-flex items-center gap-x-2'>
                                    <StarIcon />
                                    {item.rating} Rating
                                </div>
                                <div className='h-4 border-l border-slate-500'></div>
                                <div className='inline-flex items-center gap-x-2'>
                                    <LocationIcon />
                                    {item.location}
                                </div>
                                <div className='h-4 border-l border-slate-500'></div>
                                <div className='inline-flex items-center gap-x-2'>
                                    <PeoplesIcon />
                                    {item.person} Person
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p>
                                        <span className='font-medium'>Rp{item.price}/</span>person
                                    </p>
                                    <p className='text-xs text-slate-500'>Include tax and fee</p>
                                </div>
                                <button className='rounded-full border border-primary bg-white px-6 py-3 font-medium text-primary transition duration-300 hover:bg-primary hover:text-white'>
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
