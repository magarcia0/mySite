import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="mt-4 rounded-md py-16 px-16">
          <div className="flex flex-col justify-center items-center">
            <h1 className="dark:text-white  font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-2">
              Blog
            </h1>
            <div className="mx-auto rounded-md my-6 max-w-lg border bg-white">
              <Image className="rounded-md" alt="Marco Garcia - hello, world image" src="hello.png"/>
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                  Hello, World!
                </h1>
                <p className="bg-white my-6 text-sm text-black">
                For my first post I figured I would talk a little bit about who I am.
                My name is Marco Garcia and I was born and raised in sunny, Southern California. 
                Eventually I made my way up North to Chico, CA for college.... 
                </p>
                <Link href="posts/hello">
                 <a className="py-2 mt-4 px-3 text-white bg-indigo-700 hover:cursor-pointer inline-block rounded-lg">
                  Read More
                 </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Blog;
