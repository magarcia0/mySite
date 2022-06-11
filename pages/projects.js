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
                Below are some of the projects I've worked on and some I plan on
                working on.
              </p>
              <p className="dark:text-white pt-4 text-body-color text-lg">
                *Individual project pages are currently in development. Come
                back after 6/18/2022 for more features and projects!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-green-600 mb-5">
                  Hosted
                </span>
                <h3>
                  <a
                    href="https://wildcat.plus/"
                    className="dark:text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    Wildcat.plus
                  </a>
                </h3>
                <p className="dark:text-white text-lg">
                  A web app that allows you to build workouts! This was my
                  senior capstone that I plan on converting into a Web3 site in
                  the future.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-red-600 mb-5">
                  Offline
                </span>
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block dark:text-white hover:cursor-not-allowed"
                  >
                    Runforhealth5K.org
                  </a>
                </h3>
                <p className="dark:text-white text-lg">
                  This website was created for a virtual 5K when the pandemic
                  had just begun. The client was a non-profit health clinic and
                  development was done free of charge.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
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
                  className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-blue-600 mb-5">
                  Android mobile app
                </span>
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        dark:text-white
                        hover:cursor-not-allowed
                        "
                  >
                    WildcatFridge+
                  </a>
                </h3>
                <p className="text-lg dark:text-white">
                  An Android mobile application built that, among many other
                  features, keeps track of what's in your fridge and when it
                  expires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
