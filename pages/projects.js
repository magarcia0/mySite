import Layout from "../components/layout";
import Link from "next/link";

function Projects() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Here are some of the projects I’ve worked on, showcasing a range of technologies and ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${project.status === 'Hosted' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                  >
                    {project.status}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <Link href={project.link}>
                    <a className="text-blue-600 dark:text-blue-400 hover:underline">
                      {project.linkText}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const projects = [
  {
    title: "Wildcat.plus",
    image: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg",
    description: "A full stack web app to build and log workouts! This was my senior capstone project. I plan on revamping this project soon.",
    status: "Hosted",
    link: "https://wildcat.plus/",
    linkText: "wildcat.plus"
  },
    {
    title: "Cinthias Party Decor",
    image: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-03/image-02.jpg",
    description: "The latest project I created for a party decor business.",
    status: "Hosted",
    link: "https://balloon-decor.vercel.app/",
    linkText: "https://balloon-decor.vercel.app/"
  },
  {
    title: "Unhobbies",
    image: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-03/image-01.jpg",
    description: "This blog website was created for fun on my spare time.",
    status: "Hosted",
    link: "https://www.unhobbies.com/",
    linkText: "unhobbies.com"
  },
  {
    title: "Runforhealth5k",
    image: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg",
    description: "This website was created for a virtual 5K during the pandemic. The client was a non-profit health clinic and all development was done for free.",
    status: "Offline",
    link: "https://github.com/runforhealth5k/website",
    linkText: "Github Repo"
  },
  {
    title: "L.A. Quality Painting",
    image: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-02/image-01.jpg",
    description: "A website built for a client who runs a painting business.",
    status: "Hosted",
    link: "https://www.laqualitypainting.com/",
    linkText: "laqualitypainting.com"
  },
  {
    title: "WildcatFridge+",
    image: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg",
    description: "Android app to keep track of what's in your fridge & expiration dates. The app has more features which include a brewery finder and favorites page.",
    status: "Mobile App",
    link: "https://github.com/magarcia0/wildcatfridge",
    linkText: "Github Repo"
  },
  {
    title: "Crypto Miler",
    image: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-02/image-02.jpg",
    description: "This website was developed for a client's crypto-related project.",
    status: "Hosted",
    link: "https://website-cryptomiler.vercel.app/",
    linkText: "website-cryptomiler.vercel.app/"
  }
];

export default Projects;
