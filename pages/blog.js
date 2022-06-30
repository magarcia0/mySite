import Layout from "../components/layout";
import Image from "next/image";
import metaverse from "./img/AO.png";
import hello from "./img/hello.png";
import pc from "./img/pc.png";

function Blog() {
  return (
    <Layout>
      <div className="min-h-screen">
        <p className="mt-20 mb-12 text-4xl font-extrabold dark:text-white">Coming soon!</p>

        <div className=" rounded-md bg-gradient-to-b from-purple-600 to-indigo-700 py-16 px-16">
          <div className="flex justify-center flex-wrap items-center">

            <div className="blog mx-auto my-6 rounded-md max-w-lg bg-white">
              <Image src={metaverse} 
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                Adventures in the Metaverse
                </h1>
                <p className="bg-white text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis vitae qui distinctio ex soluta? Voluptates, ea!
                  Esse, natus. Quas possimus laboriosam consectetur deserunt ea
                  sapiente. Dicta ipsam atque voluptatem provident!
                </p>
                <a className="py-2 mt-4 px-3 text-white bg-indigo-700 rounded-lg hover:cursor-not-allowed inline-block">
                  Read More
                </a>
              </div>
            </div>

            <div className="blog mx-auto my-6 max-w-lg rounded-md bg-white">
              <Image src={pc} 
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                  Building my Desktop
                </h1>
                <p className="bg-white text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis vitae qui distinctio ex soluta? Voluptates, ea!
                  Esse, natus. Quas possimus laboriosam consectetur deserunt ea
                  sapiente. Dicta ipsam atque voluptatem provident!
                </p>
                <a className="py-2 mt-4 px-3 text-white bg-indigo-700 hover:cursor-not-allowed inline-block rounded-lg">
                  Read More
                </a>
              </div>
            </div>

            <div className="blog mx-auto rounded-md my-6 max-w-lg bg-white">
              <Image src={hello}/>
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                  Hello, World!
                </h1>
                <p className="bg-white my-6 text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis vitae qui distinctio ex soluta? Voluptates, ea!
                  Esse, natus. Quas possimus laboriosam consectetur deserunt ea
                  sapiente. Dicta ipsam atque voluptatem provident!
                </p>
                <a className="py-2 mt-4 px-3 text-white bg-indigo-700 hover:cursor-not-allowed inline-block rounded-lg">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Blog;
