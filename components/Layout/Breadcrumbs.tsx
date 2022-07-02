import { useRouter } from "next/router";
import Link from "next/link";

export default function Breadcrumbs() {
    const router = useRouter();
    return (
        router.pathname.length > 1 && (
            <nav
                aria-label='Breadcrumb'
                className='max-w-3xl mx-auto mb-0 px-4 my-9 capitalize'
            >
                <ol
                    role='list'
                    className='flex items-center space-x-1 text-sm text-gray-400'
                >
                    <li>
                        <Link href='/' passHref>
                            <a className='block transition-colors hover:text-gray-500'>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-4 h-4'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </li>
                    <li>
                        <Link
                            href={
                                "/" +
                                router.route
                                    .replaceAll("/", "")
                                    .replace("[slug]", "")
                            }
                            passHref
                        >
                            <a className='block transition-colors hover:text-gray-500'>
                                {" "}
                                {router.route
                                    .replaceAll("/", "")
                                    .replace("[slug]", "")}{" "}
                            </a>
                        </Link>
                    </li>
                    {router.query.slug && (
                        <>
                            <li>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-4'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </li>
                            <li>
                                <Link
                                    href={
                                        "/" +
                                        router.route
                                            .replaceAll("/", "")
                                            .replace("[slug]", "") +
                                        "/" +
                                        router.query.slug.toString()
                                    }
                                    passHref
                                >
                                    <a className='block transition-colors hover:text-gray-500'>
                                        {" "}
                                        Post
                                    </a>
                                </Link>
                            </li>
                        </>
                    )}
                </ol>
            </nav>
        )
    );
}
