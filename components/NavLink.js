'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    return (
        <Link
            href={href}
            className={`${
                pathname == href ? 'text-primary' : 'text-[#898989]'
            } text-sm font-medium leading-6 tracking-tight`}>
            {children}
        </Link>
    );
}
