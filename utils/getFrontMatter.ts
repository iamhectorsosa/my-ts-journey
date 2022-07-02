import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export default async function getFrontMatter(dirPath: string) {
    const files = fs.readdirSync(path.join(dirPath));

    const posts = await Promise.all(
        files.map(async (file) => {
            const markdownWithMeta = fs.readFileSync(
                path.join(dirPath, file),
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

    return posts;
}
