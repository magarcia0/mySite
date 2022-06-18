import Layout from "../components/layout";

function Blog() {
  return (
    <Layout>
      <div className="min-h-screen">
        <p className="mt-20 mb-12 text-4xl font-extrabold dark:text-white">Coming soon!</p>

        <div className=" rounded-md bg-gradient-to-b from-purple-600 to-indigo-700 py-16 px-16">
          <div className="flex justify-center flex-wrap items-center">
            <div className="blogs mx-auto my-6 rounded-md max-w-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                className="rounded-sm object-fill"
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                  Lorem ipsum dolor sit amet
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

            <div className="blogs mx-auto my-6 max-w-lg rounded-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                className="rounded-sm"
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                  Lorem ipsum dolor sit amet
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

            <div className="blogs mx-auto rounded-md my-6 max-w-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                className="rounded-sm"
              />
              <div className="p-5">
                <h1 className="text-2xl font-bold text-purple-800 py-2">
                  Lorem ipsum dolor sit amet
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
