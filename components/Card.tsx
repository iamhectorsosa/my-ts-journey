import Link from "next/link";

export default function Card({
    slug,
    title,
    date,
    description,
}: {
    slug: string;
    title: string;
    date: string;
    description: string;
}) {
    return (
        <Link href={`/blog/${slug}`} passHref>
            <a className='block md:h-48 group no-underline'>
                <div className='relative flex items-end h-full transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8'>
                    <div className='lg:group-hover:opacity-0 lg:group-hover:absolute'>
                        <span
                            className='m-0 text-3xl font-bold'
                            aria-hidden='true'
                        >
                            {date}
                        </span>
                        <p className='mt-1 text-xl font-bold sm:text-2xl'>
                            {title}
                        </p>
                    </div>

                    <div className='absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative'>
                        <p className='text-2xl font-bold'>{title}</p>

                        <p className='mt-2 text-lg font-medium leading-tight'>
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
}
