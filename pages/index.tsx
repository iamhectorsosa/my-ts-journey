import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Meta from "../components/Meta";

const Home: NextPage | any = ({ source }: { source: any }) => {
    return (
        <>
            <Meta />
            <article className='prose lg:prose-xl max-w-3xl mx-auto px-4 my-9'>
                <MDXRemote {...source} />
            </article>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const file = "index.mdx";
    const source = fs.readFileSync(path.join("content", file), "utf8");
    const mdxSource = await serialize(source);

    return { props: { source: mdxSource } };
}
