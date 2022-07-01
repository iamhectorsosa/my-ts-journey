import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between max-w-4xl p-4 mt-4 mx-auto'>
            <Link href='/' passHref>
                <a className='inline-flex items-center justify-center w-15 h-15 text-sky-600 hover:text-sky-700 active:text-sky-800 rounded-lg'>
                    <svg
                        width='50'
                        height='42'
                        viewBox='0 0 50 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M0 0V42H50V0H0ZM46.154 38.1825H3.846V7.63659H46.1535V38.1825H46.154Z'
                            fill='currentColor'
                        />
                        <path
                            d='M21.0011 26.1301H34.2451V29.9894H21.0011V26.1301ZM7.76057 26.1296L20.9941 20.9104V20.8994L21.0011 20.9024V16.7568L20.9941 16.7597V16.7488L7.76057 11.5295L7.75757 15.6811L15.7436 18.8296L7.75757 21.9785L7.76057 26.1296Z'
                            fill='currentColor'
                        />
                    </svg>
                </a>
            </Link>

            <ul className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
                <li className='hidden lg:block'>
                    <Link href='/' passHref>
                        <a className='px-3 py-2 rounded-lg'> Home </a>
                    </Link>
                </li>

                <li>
                    <Link href='/blog' passHref>
                        <a className='px-3 py-2 rounded-lg'> Blog </a>
                    </Link>
                </li>

                <li>
                    <Link href='https://github.com/ekqt/my-ts-journey' passHref>
                        <a
                            className='inline-flex items-center px-3 py-2 rounded-lg'
                            target='_blank'
                        >
                            GitHub
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='ml-1.5 w-4 h-4'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                ></path>
                            </svg>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
