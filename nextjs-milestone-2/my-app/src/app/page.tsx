import Home2 from "./home/page";

export default function Home() {
  return (
    <>
      <Home2 />

      <section id="posts" className="py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">
                How to Start a Blog in 2024
              </h3>
              <p className="text-gray-600 mb-3">
                Starting a blog has never been easier. Here's how you can get
                started today...
              </p>
              <a className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">
                The Power of Consistency
              </h3>
              <p className="text-gray-600 mb-3">
                Consistency is key to success. In this post, I share how you can
                build lasting habits...
              </p>
              <a className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">
                Tips for Effective Writing
              </h3>
              <p className="text-gray-600 mb-3">
                Writing is an art, but with the right tools and techniques,
                anyone can improve their writing...
              </p>
              <a className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
