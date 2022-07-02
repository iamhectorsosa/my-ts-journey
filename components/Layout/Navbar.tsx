import Link from "next/link";

export default function Navbar() {
    return (
        <div className='navbar bg-base-100 mt-4 px-4 max-w-7xl mx-auto'>
            <div className='flex-1'>
                <div className='flex-none md:hidden'>
                    <div className='navbar-start'>
                        <div className='dropdown dropdown-hover'>
                            <label
                                tabIndex={0}
                                className='btn btn-ghost btn-circle'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h7'
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className='menu dropdown-content mt-0 p-4 shadow bg-base-100 rounded-box w-52'
                            >
                                <li>
                                    <Link href='/blog' passHref>
                                        <a className='text-lg font-normal'>
                                            Blog
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='https://github.com/ekqt/my-ts-journey'
                                        passHref
                                    >
                                        <a
                                            className='text-lg font-normal'
                                            target='_blank'
                                        >
                                            GitHub
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='h-6 w-6'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                                strokeWidth='2'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                                />
                                            </svg>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link href='/' passHref>
                    <a
                        className='btn btn-ghost normal-case text-xl'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                            />
                        </svg>
                    </a>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='hidden md:flex menu menu-horizontal p-0'>
                    <li>
                        <Link href='/blog' passHref>
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='https://github.com/ekqt/my-ts-journey'
                            passHref
                        >
                            <a target='_blank'>
                                GitHub
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                    />
                                </svg>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
