import Layout from "../components/layout";
import Image from "next/image";
import metaverse from "./img/AO.png";
import hello from "./img/hello.png";
import pc from "./img/pc.png";
import Link from "next/link";

function Blog() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="mt-24 rounded-md bg-gradient-to-b from-purple-600 to-indigo-700 py-16 px-16">
          <div className="flex justify-center flex-wrap items-center">

            <div className="blog mx-auto my-6 rounded-md max-w-lg bg-white">
              <Image alt="metaverse image" src={metaverse} 
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                Adventures in the Metaverse
                </h1>
                <p className="bg-white text-sm text-black">
                  With all the hype surrounding the Metaverse I decided to dive in and experience what
                  many are describing as the next evolution of social media. My journey into the Metaverse started around
                  October of 2021 and boy has it been quite a ride...
                </p>
                <a className="py-2 mt-4 px-3 text-white bg-indigo-700 rounded-lg hover:cursor-not-allowed inline-block">
                  Coming Soon!
                </a>
              </div>
            </div>

            <div className="blog mx-auto my-6 max-w-lg rounded-md bg-white">
              <Image className="" alt="computer image" src={pc} 
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                  Building my Desktop
                </h1>
                <p className="bg-white text-sm text-black">
                  Growing up I can remember hearing my sister tell my parents that my oldest brother
                  knew how to build computers. That was the spark that lit my interest in
                  personal computers. When I was young, we didn't have luxury of being able to splurge on PC components...
                </p>
                <a className="py-2 mt-4 px-3 text-white bg-indigo-700 hover:cursor-not-allowed inline-block rounded-lg">
                  Coming Soon!
                </a>
              </div>
            </div>

            <div className="blog mx-auto rounded-md my-6 max-w-lg bg-white">
              <Image alt="hello, world image" src={hello}/>
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
