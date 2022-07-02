import Link from "next/link";

export default function Card({
    slug,
    title,
    date,
    description,
    index,
}: {
    slug: string;
    title: string;
    date: string;
    description: string;
    index: string;
}) {
    return (
        <Link href={`/blog/${slug}`} passHref>
            <a className='p-6 border border-gray-500 hover:border-gray-400 rounded-lg'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <div className='mt-3 sm:pr-8'>
                    <p className='text-gray-300'>{description}</p>
                </div>
                <div className='flex mt-3'>
                    <div className='flex flex-col-reverse'>
                        <p className='text-sm font-medium text-gray-400'>
                            Published
                        </p>
                        <p className='text-xs text-gray-400'>{date}</p>
                    </div>

                    <div className='flex flex-col-reverse ml-3 sm:ml-6'>
                        <p className='text-sm font-medium text-gray-400'>
                            Blog Post
                        </p>
                        <p className='text-xs text-gray-400'>#{" "}{index}</p>
                    </div>
                </div>
            </a>
        </Link>
    );
}
