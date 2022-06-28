import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Meta from "../../components/Meta";
import Card from "../../components/Card";

const Blog: NextPage | any = ({
    source,
    posts,
}: {
    source: any;
    posts: any;
}) => {
    return (
        <>
            <Meta title={"Blog"} path={"/blog"} />
            <div className='prose lg:prose-xl max-w-3xl mx-auto px-4 my-9'>
                <MDXRemote {...source} />
            </div>
            <section className='grid md:grid-cols-2 gap-4 max-w-3xl mx-auto px-4 my-9'>
                {posts.map((post: any) => (
                    <Card
                        key={post.slug}
                        slug={post.slug}
                        title={post.title}
                        date={post.date}
                        description={post.description}
                    />
                ))}
            </section>
        </>
    );
};

export default Blog;

export async function getStaticProps() {
    const file = "blog.mdx";
    const source = fs.readFileSync(path.join("content", file), "utf8");
    const mdxSource = await serialize(source);

    const files = fs.readdirSync(path.join("blog"));

    const posts = await Promise.all(
        files.map(async (file) => {
            const markdownWithMeta = fs.readFileSync(
                path.join("blog", file),
                "utf-8"
            );
            const {
                frontmatter: { title, date, description },
            }: any = await serialize(markdownWithMeta, {
                parseFrontmatter: true,
            });
            return {
                title,
                date,
                description,
                slug: file.replace(".mdx", ""),
            };
        })
    );

    posts
        .sort((a: any, b: any) => Date.parse(a.date) - Date.parse(b.date))
        .reverse();

    return { props: { source: mdxSource, posts } };
}
