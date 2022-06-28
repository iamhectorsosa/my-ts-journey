import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import GitHubCorner from "./Layout/GitHubCorner";

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <GitHubCorner accent={"rgb(8, 145, 178)"} href={"https://github.com/ekqt/mdx-project-starter"} />
        </>
    );
}
