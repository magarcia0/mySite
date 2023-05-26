import Layout from "../components/layout";
import Link from "next/link";

function Projects() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-14 max-w-[510px]">
              <h2 className="dark:text-white mt-12 font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-2">
                Projects
              </h2>
              <p className="dark:text-white pt-4 text-body-color text-lg">
                Below are some of the projects I've worked on and some I am
                currently working on.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
            <div className="rounded h-[40rem] bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-green-400 mb-5">
                    Hosted
                  </span>
                  <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    Wildcat.plus
                  </h3>
                  <span className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    <Link href="https://wildcat.plus/">
                      https://wildcat.plus/
                    </Link>
                  </span>
                  <p className="text-white text-lg">
                    A web app to build and log workouts! This was my senior capstone
                    that I plan on converting into a gated Web3 site in the
                    future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
            <div className="rounded h-[40rem] bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-red-400 mb-5">
                    Offline
                  </span>
                  <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    Runforhealth5k
                  </h3>
                  <span className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    <Link href="https://github.com/runforhealth5k/website">
                      Github Repo
                    </Link>
                  </span>
                  <p className="text-white text-lg">
                    This website was created for a virtual 5K during the
                    pandemic. The client was a non-profit health clinic and all
                    development was done for free. 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
            <div className="rounded h-[40rem] bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-blue-300 mb-5">
                    Android mobile app
                  </span>
                  <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    WildcatFridge+
                  </h3>
                  <span className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    <Link href="https://github.com/magarcia0/wildcatfridge">
                      Github Repo
                    </Link>
                  </span>
                  <p className="text-lg text-white">
                    Android app to keep track of what's in your fridge &
                    expiration dates. The app has more features which include a
                    brewery finder and favorites page.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
            <div className="rounded h-[40rem] bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-02/image-01.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-green-400 mb-5">
                    Hosted
                  </span>
                  <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    L.A. Quality Painting
                  </h3>
                  <span className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    <Link href="https://www.laqualitypainting.com/">
                      laqualitypainting.com
                    </Link>
                  </span>
                  <p className="text-lg text-white">
                    A website built for a client who runs a painting business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
            <div className="rounded h-[40rem] bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-02/image-02.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-primary -mr-4 rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-green-400 mb-3">
                    Hosted
                  </span>
                  <span className="bg-primary rounded inline-block text-center py-1 px-2 text-xs leading-loose font-semibold text-yellow-300 mb-3">
                    In Development 
                  </span>
                  <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-3 inline-block text-dark hover:text-primary">
                   Crypto Miler 
                  </h3>
                  <span className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    <Link href="https://website-cryptomiler.vercel.app/">
                  https://website-cryptomiler.vercel.app/ 
                    </Link>
                  </span>
                  <p className="text-lg text-white">
                    This website was developed for a clients crypto related project. 
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Projects;
