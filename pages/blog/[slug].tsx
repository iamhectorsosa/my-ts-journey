import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

import Meta from "../../components/Meta";

interface FrontMatterType {
    date: string;
    description: string;
    title: string;
    thumbnailUrl: string;
}

const Post: NextPage | any = ({
    source,
    meta,
    slug,
}: {
    source: any;
    meta: FrontMatterType;
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
            <div className='prose lg:prose-xl max-w-3xl mx-auto px-4 my-9'>
                <MDXRemote {...source} />
            </div>
        </>
    );
};

export default Post;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("blog"));
    const paths = files.map((file) => ({
        params: {
            slug: file.replace(".mdx", ""),
        },
    }));
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
    const source = fs.readFileSync(path.join("blog", slug + ".mdx"), "utf8");

    const mdxSource = await serialize(source, {
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                rehypePrism,
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {
                            className: ["anchor"],
                        },
                    },
                ],
            ],
            format: "mdx",
        },
    });

    return { props: { source: mdxSource, meta: mdxSource.frontmatter, slug } };
}
