import type { NextPage } from "next";
import getFrontMatter from "../../utils/getFrontMatter";

import Meta from "../../components/Meta";
import Card from "../../components/Card";

const Blog: NextPage | any = ({ posts }: { posts: any }) => {
    return (
        <>
            <Meta title={"Blog"} path={"/blog"} />
            <div className='max-w-3xl mx-auto px-4 mt-3 mb-9'>
                <h1 className='text-6xl font-bold mb-4'>Welcome to my Blog</h1>
                <p className='text-xl leading-relaxed'>
                    Welcome to my TS Journey! TypeScript is a strongly typed
                    programming language that builds on JavaScript, giving you
                    better tooling at any scale.{" "}
                </p>
            </div>
            <section className='grid md:grid-cols-2 gap-4 max-w-3xl mx-auto px-4 my-9'>
                {posts.map((post: any) => (
                    <Card
                        key={post.slug}
                        slug={post.slug}
                        title={post.title}
                        date={post.date}
                        description={post.description}
                        index={(posts.indexOf(post) + 1)
                            .toString()
                            .padStart(3, "0")}
                    />
                ))}
            </section>
        </>
    );
};

export default Blog;

export async function getStaticProps() {
    const posts = await getFrontMatter("blog");
    return { props: { posts } };
}
