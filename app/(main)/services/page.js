import ArrowLineIcon from '@/components/icons/ArrowLine';
import Image from 'next/image';

export default function Page() {
    const services = [
        {
            title: 'Comprehensive Itinerary Planning',
        },
        {
            title: 'Customized Tour Packages',
        },
        {
            title: 'Knowledgeable and Friendly Guides',
        },
        {
            title: 'Quality Accommodations',
        },
        {
            title: 'Excellent Customer Service',
        },
    ];
    return (
        <main>
            <section className='mx-auto max-w-screen-xl px-4 pt-32'>
                <div className='flex items-center justify-between px-8'>
                    <h1 className='w-2/3 text-6xl font-semibold capitalize text-primary'>
                        Plan your dream vacation effortlessly with our user-friendly booking platform.
                    </h1>
                    <div className='flex w-1/2 justify-end text-primary'>
                        <p className='w-11/12'>
                            Lorem ipsum dolor sit amet consectetur. Quis faucibus at egestas viverra faucibus. Arcu ac
                            in diam ut nunc magna tristique risus lorem. Tempus amet morbi a enim. Sit leo quisque diam
                            sit elit sociis amet.
                        </p>
                    </div>
                </div>
            </section>
            <section className='mx-auto max-w-screen-xl px-4 pt-32'>
                <div className='flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl'>
                    <Image src='/images/services-background.jpg' alt='Our Services' width={1320} height={500} />
                </div>
            </section>
            <section className='mx-auto max-w-screen-xl px-4 pt-32'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-6xl font-semibold capitalize text-primary'>
                        Your Gateway to Extraordinary Travel Experiences With Us!
                    </h2>
                    <div className='space-y-4'>
                        <p className='text-primary'>
                            Lorem ipsum dolor sit amet consectetur. Quis faucibus at egestas viverra faucibus. Arcu ac
                            in diam ut nunc magna tristique risus lorem.
                        </p>
                        <p className='text-primary'>
                            Immerse yourself in the beauty of our handpicked destinations. Browse through our curated
                            collection and find the perfect getaway for your next adventure.
                        </p>
                        <button className='inline-flex items-center justify-center gap-x-2 rounded-full border border-primary px-6 py-2 text-primary transition duration-300 hover:bg-primary hover:text-white'>
                            <span className='text-sm font-semibold'>Contact Us</span> <ArrowLineIcon />
                        </button>
                    </div>
                </div>
            </section>
            <section className='mx-auto max-w-screen-xl px-4 pt-32'>
                <div className='flex items-center justify-between border-b border-t border-slate-300 py-28'>
                    <p className='rounded-full border border-primary px-8 py-3 text-xl font-medium uppercase text-primary'>
                        our services
                    </p>
                    <h2 className='w-3/5 text-6xl font-medium capitalize text-primary'>
                        We provide a wide range of service
                    </h2>
                </div>
                {services.map((service, i) => (
                    <div key={i} className='border-b border-slate-300 last:border-none last:pb-14'>
                        <div className='grid grid-cols-2 py-28'>
                            <div className='-mt-8 flex flex-col'>
                                <p className='mb-4 self-start rounded-full border border-primary bg-white px-8 py-3'>
                                    0{i + 1}
                                </p>
                                <h2 className='text-6xl font-medium text-primary'>{service.title}</h2>
                            </div>
                            <p className='text-primary'>
                                Lorem ipsum dolor sit amet consectetur. Quis faucibus at egestas viverra faucibus. Arcu
                                ac in diam ut nunc magna tristique risus lorem. <br />
                                <br /> The provider should offer well-planned and diverse itineraries that cater to
                                various preferences and interests of customers. This includes carefully selecting
                                destinations, arranging transportation, and scheduling activities.
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
