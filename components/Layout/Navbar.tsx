import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between max-w-4xl p-4 mx-auto'>
            <Link href='/' passHref>
                <a className='inline-flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg'>
                    📓
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
                    <Link href='https://github.com/ekqt' passHref>
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
