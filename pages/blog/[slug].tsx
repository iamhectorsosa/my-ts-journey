import type { NextPage } from "next";
import getPaths from "../../utils/getPaths";
import getMdx from "../../utils/getMdx";

import { MDXRemote } from "next-mdx-remote";
import Meta from "../../components/Meta";

const Post: NextPage | any = ({
    source,
    meta,
    slug,
}: {
    source: any;
    meta: any;
    slug: string;
}) => {
    return (
        <>
            <Meta
                title={meta.title}
                path={`/blog/${slug}`}
                description={meta.description}
                image={meta.thumbnailUrl}
            />
            <div className='prose lg:prose-xl prose-headings:pt-6 max-w-3xl mx-auto px-4 my-9'>
                <MDXRemote {...source} />
            </div>
        </>
    );
};

export default Post;

export async function getStaticPaths() {
    const paths = getPaths("blog");
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const mdxSource = await getMdx("blog", slug);

    return { props: { source: mdxSource, meta: mdxSource.frontmatter, slug } };
}
