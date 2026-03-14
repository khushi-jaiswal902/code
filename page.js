import Link from "next/link";

export const metadata = {
  title: 'services'
}

export default function Services() {
    return (
        <>
            <h1>Service page</h1>
            <p>
                <Link href='/services/web-dev'>Web Development</Link>
            </p>
            <p>
                <Link href='/services/SEO'>SEO</Link>
            </p>
        </>
    );
}

