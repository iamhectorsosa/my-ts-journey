import fs from "fs";
import path from "path";

export default function getPaths(dirPath: string) {
    const files = fs.readdirSync(path.join(dirPath));
    return files.map((file) => ({
        params: {
            slug: file.replace(".mdx", ""),
        },
    }));
}
