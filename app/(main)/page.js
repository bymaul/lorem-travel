import CarIcon from '@/components/icons/Car';
import LikeIcon from '@/components/icons/Like';
import LocationIcon from '@/components/icons/Location';
import MedalIcon from '@/components/icons/Medal';
import PeoplesIcon from '@/components/icons/Peoples';
import RoutingIcon from '@/components/icons/Routing';
import StarIcon from '@/components/icons/Star';
import WalletIcon from '@/components/icons/Wallet';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import destination from '/data/destination.json';
import brands from '/data/partner.json';
import popular from '/data/popular.json';
import rating from '/data/rating.json';

export default function Home() {
    return (
        <>
            <main>
                <section className='mx-auto max-w-screen-xl px-4'>
                    <div className='relative flex h-[689px] items-center justify-between gap-x-2 overflow-hidden rounded-3xl px-20 text-white before:absolute before:inset-0 before:-z-50 before:block before:-scale-x-100 before:bg-hero-pattern before:bg-cover'>
                        <div className='w-5/6 space-y-6'>
                            <p className='inline rounded-full border border-white bg-white/20 px-6 py-2 text-sm font-medium'>
                                Discover the World&apos;s Wonders with Lorem Travel
                            </p>
                            <h1 className='text-6xl font-semibold'>Your Gateway to Extraordinary Travel Experiences</h1>
                            <button className='rounded-full bg-white px-6 py-3 text-sm font-medium text-primary'>
                                Booking Now
                            </button>
                        </div>
                        <div className='flex w-2/3 flex-col gap-y-10'>
                            <div className='flex w-3/4 items-center gap-x-4 self-center rounded-2xl bg-white/30 px-4 py-3 backdrop-blur-sm'>
                                <p className='rounded-full bg-white p-3 text-sm text-primary'>{<RoutingIcon />}</p>
                                <p className='text-xs font-medium'>
                                    A tour guide serves as a knowledgeable companion, offering insights, information,
                                    and guidance throughout the journey.
                                </p>
                            </div>
                            <div className='flex w-3/4 items-center gap-x-4 self-start rounded-2xl bg-white/30 px-4 py-3 backdrop-blur-sm'>
                                <p className='rounded-full bg-white p-3 text-sm text-primary'>{<LikeIcon />}</p>
                                <p className='text-xs font-medium'>
                                    Friendly service is a crucial aspect of a tour and travel package, as it plays a
                                    significant role in enhancing the overall customer experience.
                                </p>
                            </div>
                            <div className='flex w-3/4 items-center gap-x-4 self-end rounded-2xl bg-white/30 px-4 py-3 backdrop-blur-sm'>
                                <p className='rounded-full bg-white p-3 text-sm text-primary'>{<CarIcon />}</p>
                                <p className='text-xs font-medium'>
                                    Car rental is an essential component of many tour and travel packages, offering
                                    convenience, flexibility, and freedom.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mx-auto max-w-screen-xl px-4 pt-36'>
                    <div className='flex items-center justify-between'>
                        <h2 className='w-1/2 text-4xl font-semibold'>Travel Accommodation Recommendations For You</h2>
                        <div className='flex gap-x-2'>
                            <button className='rounded-full border border-slate-300 bg-white p-2 transition duration-300 hover:bg-secondary hover:text-white'>
                                <FaChevronLeft />
                            </button>
                            <button className='rounded-full border border-slate-300 bg-white p-2 transition duration-300 hover:bg-secondary hover:text-white'>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 place-items-center gap-8 pt-8'>
                        {destination.slice(0, 3).map((item, i) => (
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
                <section className='mx-auto max-w-screen-xl px-4 pt-44'>
                    <div className='relative h-[730px] overflow-hidden rounded-2xl bg-primary'>
                        <div className='absolute z-10 flex h-full items-center px-20 py-32 text-white'>
                            <div className='w-2/3 space-y-11 '>
                                <p className='text-xl font-medium capitalize'>Why you need Choose Us?</p>
                                <h3 className='w-11/12 text-5xl font-semibold capitalize'>
                                    Our expertly crafted itineraries offer a range of unique experiences to suit every
                                    traveler&apos;s wanderlust.
                                </h3>
                                <p className='text-lg'>
                                    Immerse yourself in the beauty of our handpicked destinations. Browse through our
                                    curated collection and find the perfect getaway for your next adventure.
                                </p>
                            </div>
                            <div className='flex w-1/2 flex-col items-end gap-y-6'>
                                <div className='flex w-3/4 items-center gap-x-4 rounded-2xl bg-white/30 px-6 py-8 backdrop-blur-sm'>
                                    <p className='rounded-full bg-white p-3 text-sm text-primary'>
                                        <WalletIcon />
                                    </p>
                                    <p className='text-xs font-medium'>
                                        Immerse yourself in the beauty of our handpicked destinations. Browse perfect
                                        getaway for your next adventure.
                                    </p>
                                </div>
                                <div className='flex w-3/4 items-center gap-x-4 rounded-2xl bg-white/30 px-6 py-8 backdrop-blur-sm'>
                                    <p className='rounded-full bg-white p-3 text-sm text-primary'>
                                        <MedalIcon />
                                    </p>
                                    <p className='text-xs font-medium'>
                                        Immerse yourself in the beauty of our handpicked destinations. Browse perfect
                                        getaway for your next adventure.
                                    </p>
                                </div>
                                <div className='flex w-3/4 items-center gap-x-4 rounded-2xl bg-white/30 px-6 py-8 backdrop-blur-sm'>
                                    <p className='rounded-full bg-white p-3 text-sm text-primary'>
                                        <StarIcon />
                                    </p>
                                    <p className='text-xs font-medium'>
                                        Immerse yourself in the beauty of our handpicked destinations. Browse perfect
                                        getaway for your next adventure.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='absolute inset-0 h-full bg-gradient-to-br from-transparent to-white/30 opacity-50 backdrop-blur-lg'></div>
                        <div className='absolute -top-12 left-20 h-48 w-48 rounded-full bg-white/20 blur-2xl'></div>
                        <div className='absolute -right-10 -top-16 h-80 w-80 rounded-full bg-gradient-to-tr from-transparent to-white/30 blur-2xl'></div>
                        <div className='absolute -bottom-64 -left-32 h-[589px] w-[589px] rounded-full bg-gradient-to-tr from-white/40 to-white/5 blur-xl'></div>
                    </div>
                </section>
                <section className='mx-auto max-w-screen-xl px-4 pt-36'>
                    <div className='flex items-center justify-between'>
                        <div className='w-1/2'>
                            <h2 className='text-4xl font-semibold text-primary'>Our Client and Partner</h2>
                            <p className='mt-3 w-5/6 leading-9 text-[#898989]'>
                                Lorem ipsum dolor sit amet consectetur. Quis faucibus at egestas viverra faucibus. Arcu
                                ac in diam ut nunc magna tristique risus lorem. Tempus amet morbi a enim. Sit leo
                                quisque diam sit elit sociis amet. Et viverra tortor lorem vulputate rhoncus iaculis
                                vestibulum neque sagittis.
                            </p>
                        </div>
                        <div className='grid grid-cols-3 gap-x-16 gap-y-8'>
                            {brands.map((item, i) => (
                                <div className='flex items-center justify-center' key={i}>
                                    <Image src={item.image} alt={item.name} width={128} height={72} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='mx-auto max-w-screen-xl px-4 pt-36'>
                    <div className='mb-9 flex items-center justify-between'>
                        <h2 className='text-4xl font-semibold text-primary'>Popular Destinations In Indonesia</h2>
                        <div className='flex gap-x-2'>
                            <button className='rounded-full border border-slate-300 bg-white p-2 transition duration-300 hover:bg-secondary hover:text-white'>
                                <FaChevronLeft />
                            </button>
                            <button className='rounded-full border border-slate-300 bg-white p-2 transition duration-300 hover:bg-secondary hover:text-white'>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        {popular.map((item, i) => (
                            <div
                                key={i}
                                className='relative flex h-[320px] w-[320px] items-center justify-center overflow-hidden rounded-2xl'>
                                <Image src={item.image} alt={item.name} width={320} height={320} />
                                <div className='absolute left-3 top-3 rounded-full bg-white/30 px-4 py-2 font-medium text-white backdrop-blur-sm'>
                                    {item.accom} Accommodation
                                </div>
                                <div className='absolute bottom-3 left-3 right-3 rounded-full bg-white/30 px-6 py-2 text-white backdrop-blur-sm'>
                                    <div className='inline-flex items-center gap-x-2'>
                                        <LocationIcon />
                                        <span className='text-sm font-semibold'>{item.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='relative mt-32 h-80 bg-[#242424]'>
                    <div className='mx-auto max-w-screen-xl px-4 text-white'>
                        <div className='flex h-80 items-center'>
                            <div className='w-1/2'>
                                <Image src='/images/logoipsum-284.svg' alt='logoipsum' width={80} height={80} />
                                <h2 className='mt-4 text-4xl font-bold'>Taste the Different at LogoIpsum!</h2>
                                <p className='mt-1 text-lg leading-6 text-white/70'>
                                    Lorem ipsum dolor sit amet consectetur. Quis faucibus at egestas viverra faucibus.
                                    Arcu ac in diam ut nunc magna tristique risus lorem.
                                </p>
                                <button className='mt-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#242424]'>
                                    Visit Us
                                </button>
                                <div className='absolute bottom-0 right-0 top-0 w-1/2 bg-[linear-gradient(90deg,rgba(36,36,36,1)17.71%,rgba(36,36,36,0.00)100%),url("/images/ads.jpg")] bg-cover bg-center'></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mx-auto max-w-screen-xl px-4 pt-32'>
                    <p className='text-xl font-medium capitalize text-primary'>satisfied client</p>
                    <div className='mb-8 flex items-center justify-between'>
                        <h2 className='text-4xl font-semibold text-primary'>What do they say about Lorem Travel?</h2>
                        <div className='flex gap-x-2'>
                            <button className='rounded-full border border-slate-300 bg-white p-2 transition duration-300 hover:bg-secondary hover:text-white'>
                                <FaChevronLeft />
                            </button>
                            <button className='rounded-full border border-slate-300 bg-white p-2 transition duration-300 hover:bg-secondary hover:text-white'>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-3 gap-x-10'>
                            {rating.map((item, i) => (
                                <div key={i} className='border-t border-slate-300 px-4'>
                                    <p className='my-6 text-lg text-[#263238]'>{item.comment}</p>
                                    <div className='flex items-center gap-x-2'>
                                        <span className='font-semibold text-secondary'>{item.name}</span>
                                        <span className='text-[#898989]'>•</span>
                                        <span className='text-[#898989]'>{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
