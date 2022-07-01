import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import GitHubCorner from "./Layout/GitHubCorner";

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <GitHubCorner accent={"rgb(2, 132, 199)"} href={"https://github.com/ekqt/my-ts-journey"} />
        </>
    );
}
