import Layout from "../../components/layout";
import Link from "next/link";

function Hello() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="mt-24 rounded-md bg-gradient-to-b from-purple-600 to-indigo-700 py-16 px-16">
          <div className="flex justify-center flex-wrap items-center">
            <div className="blog mx-auto my-6 rounded-md max-w-lg bg-white">
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                  Hola, Mundo!
                </h1>
                <p className="bg-white text-lg leading-snug font-mono text-black">
                  My alma mater is California State University, Chico (the
                  Harvard of the West). GO WILDCATS! I earned my bachelor of
                  science in the field of computer science at Chico State. I am
                  a first generation college graduate, and the first STEM major
                  in my family. Fun fact about me, I did a season of rowing
                  while attending college. Currently, I am living in Alabama. I
                  know right? Why did I go from California all the way to
                  Alabama? Well, sorry to break it to you but I will not be
                  getting into that story right now. Maybe I will save that
                  conversation for another post. Anyway, if you made it this far
                  congratulations! You just read through my first blog post! If
                  you'd like to know more feel free to reach out to me{" "}
                  <Link href="../contact">
                    <span className="text-blue-500 underline hover:cursor-pointer">
                      {" "}
                      Here
                    </span>
                  </Link>
                  <br />
                  ¯\_( ͡° ͜ʖ ͡°)_/¯
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Hello;
