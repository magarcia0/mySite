import Layout from "../components/layout";

function Projects() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2 className="dark:text-white mt-12 font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                Projects
              </h2>
              <p className="dark:text-white pt-4 text-body-color text-lg">
                Below are some of the projects I've worked on and some I am currently
                working on.
              </p>
              <p className="dark:text-white pt-4 text-body-color text-xs">
                *Individual project pages will be rolled out in the near future
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
           <div className="rounded bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
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
                  <a
                    href="https://wildcat.plus/"
                    className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                      https://wildcat.plus/
                  </a>
                <p className="text-white text-lg">
                  A web app to build workouts! This was my
                  senior capstone that I plan on converting into a gated Web3 site in
                  the future.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
           <div className="rounded bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
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
                  <a
                    href="https://github.com/runforhealth5k/website"
                    className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    Github Repo
                  </a>
                <p className="text-white text-lg">
                  This website was created for a virtual 5K during the pandemic.
                  The client was a non-profit health clinic and
                  site was done for free.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
           <div className="rounded bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span
                  className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-blue-300 mb-5">
                  Android mobile app
                </span>
                <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    Runforhealth5k
                </h3>
                  <a
                    href="https://github.com/magarcia0/wildcatfridge"
                    className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    Github Repo
                  </a>
                <p className="text-lg text-white">
                  Android app to keep track of what's in your fridge & expiration dates. 
                  The app has more features which include a brewery finder.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
           <div className="rounded bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-02/image-01.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span
                  className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-yellow-300 mb-5">
                  In Development
                </span>
                <h3>
                  <a href="javascript:void(0)" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-white hover:cursor-not-allowed">
                  L.A. Quality Painting
                  </a>
                </h3>
                <p className="text-lg text-white">
                A web app for a client who runs a painting business. Currently in development.
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
