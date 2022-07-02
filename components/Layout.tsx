import Breadcrumbs from "./Layout/Breadcrumbs";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Navbar />
            <Breadcrumbs />
            {children}
            <Footer />
        </>
    );
}
