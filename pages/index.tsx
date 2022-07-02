import type { NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";

import getMdx from "../utils/getMdx";

import Meta from "../components/Meta";

const Home: NextPage | any = ({ source }: { source: any }) => {
    return (
        <>
            <Meta />
            <div className='max-w-3xl mx-auto px-4 mt-3 mb-9'>
                <h1 className='text-6xl lg:text-8xl font-bold mt-12 mb-4'>
                    My{" "}
                    <span className='text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500'>
                        TypeScript
                    </span>{" "}
                    Journey
                </h1>
            </div>
            <article className='prose lg:prose-xl prose-headings:pt-0  max-w-3xl mx-auto px-4 my-9'>
                <MDXRemote {...source} />
            </article>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const mdxSource = await getMdx("content", "index");

    return { props: { source: mdxSource } };
}
