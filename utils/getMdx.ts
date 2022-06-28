import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

export default async function getMdx(dirPath: string, slug: string) {
    const source = fs.readFileSync(path.join(dirPath, slug + ".mdx"), "utf8");

    return await serialize(source, {
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
}
