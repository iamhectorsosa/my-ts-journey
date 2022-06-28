import Link from "next/link";

export default function Hero() {
    return (
        <section>
            <div className='max-w-screen-xl px-4 pt-32 pb-12 mx-auto'>
                <div className='max-w-2xl mx-auto text-center'>
                    <h1 className='text-6xl font-extrabold md:text-7xl'>
                        Using MDX the
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600'> easy way</span>
                    </h1>

                    <p className='mt-4 sm:leading-relaxed sm:text-xl'>
                        Power your Next.js content with MDX and TailwindCSS with
                        minimal plugins and configuration
                    </p>

                    <div className='flex flex-col md:flex-row justify-center gap-4 mt-8'>
                        <Link href='#managing-markdown-content-doesnt-have-to-be-hard' passHref>
                            <a className='inline-block px-12 py-3 text-sm font-medium text-white bg-cyan-600 border border-cyan-600 rounded active:text-cyan-500 hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring'>
                                Get Started
                            </a>
                        </Link>

                        <Link href='https://github.com/ekqt/mdx-project-starter' passHref>
                            <a className='inline-block px-12 py-3 text-sm font-medium text-cyan-600 border border-cyan-600 rounded hover:bg-cyan-600 hover:text-white active:bg-cyan-500 focus:outline-none focus:ring'>
                                Visit our repo
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
