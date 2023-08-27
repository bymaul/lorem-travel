import Footer from '@/components/Footer';

export default function FooterLayout({ children }) {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}
