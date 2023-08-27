import MobileAlert from '@/components/MobileAlert';
import localFont from 'next/font/local';
import './globals.css';
import Header from '/components/header';

const generalSans = localFont({ src: '../public/fonts/GeneralSans-Variable.ttf', variable: '--font-generalsans' });

export const metadata = {
    title: 'Lorem Travel',
    description: 'Lorem Travel is a travel agency that provides tour and travel packages, car rental, and tour guides.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${generalSans.variable} font-sans antialiased`}>
                <MobileAlert />
                <Header />
                {children}
            </body>
        </html>
    );
}
