import Link from "next/link";
import Nav from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";

export const siteTitle = "Marco A. Garcia";

export default function Layout({ children, home }) {
  return (
    <div className="dark:bg-slate-900">
      <Header />
      <Nav />
      <title>{siteTitle}</title>
      <div className="container bg-white mx-auto p-4 text-center dark:bg-slate-900">
        {home ? (
          <>{/* This layout is for the home page */}</>
        ) : (
          <>{/* This is a top layout for pages other than home */}</>
        )}
        {/* This is a bottom layout for pages other than home */}
        <main className="dark:bg-slate-900">{children}</main>
        {!home && (
          <div className="pt-8 text-left">
            <Link href="/">
              <a className="dark:text-white">
                <span className="dark:text-white text-3xl"> ← </span>Back to
                Home
              </a>
            </Link>
          </div>
        )}
      </div>
      {/* Everything after here will be at the bottom ALL pages */}
      <Footer />
    </div>
  );
}
