'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md p-4 flex items-center">
            <Link
                href="/"
                className="mr-4 w-10 h-10 relative">
                <Image
                    src="/images/icon.png"
                    alt="Logo"
                    width={64}
                    height={64}
                />
            </Link>
            <Link href="/">
                <h1 className="text-xl font-bold">Nag Note</h1>
            </Link>
        </header>
    );
}
