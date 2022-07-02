import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogNav({ posts }: { posts: any[] }) {
    const router = useRouter();
    const [previous, setPrevious] = useState<any>();
    const [next, setNext] = useState<any>();

    useEffect(() => {
        posts.map((i: any) => {
            if (i.slug === router.query.slug) {
                setPrevious(posts[posts.indexOf(i) - 1]);
                setNext(posts[posts.indexOf(i) + 1]);
            }
        });
    }, [posts, router.query.slug]);

    return (
        <>
            {next?.slug ? (
                <Link href={"/blog/" + next?.slug} passHref>
                    <a className='w-fit flex gap-2 py-2 text-2xl font-bold text-gray-400 hover:text-gray-100'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                        Up Next: {next?.title}{" "}
                    </a>
                </Link>
            ) : (
                <></>
            )}
            {previous?.slug ? (
                <Link href={"/blog/" + previous?.slug} passHref>
                    <a className='w-fit flex gap-2 py-2 text-2xl font-bold text-gray-400 hover:text-gray-100'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>
                        Previous: {previous?.title}
                    </a>
                </Link>
            ) : (
                <></>
            )}
        </>
    );
}
