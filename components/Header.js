// components/Header.js
import Link from 'next/link';

const Header = () => {
    return (
        <header style={{ padding: '20px', background: '#0070f3', color: '#fff' }}>
            <h1>News App</h1>
            <nav>
                <Link href="/" style={{ color: '#fff', margin: '0 10px' }}>
                    Home
                </Link>
            </nav>
        </header>
    );
};

export default Header;
