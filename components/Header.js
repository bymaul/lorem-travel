import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Header() {
    return (
        <header className='mx-auto max-w-screen-xl px-4'>
            <nav className='flex items-center justify-center gap-x-20 py-5'>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/services'>Our Services</NavLink>
                <Link href='/'>
                    <Image src='/logo.svg' alt='Lorem Travel' width={50} height={50} />
                </Link>
                <NavLink href='/packages'>Packages</NavLink>
                <NavLink href='/about'>About Us</NavLink>
            </nav>
        </header>
    );
}
