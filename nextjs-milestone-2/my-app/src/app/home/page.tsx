export default function Page() {
  return (
    <>
      <section id="home" className="bg-gray-800 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to My Personal Blog</h1>
          <p className="text-xl mb-8">
            Where I share my thoughts, stories, and ideas with the world.
          </p>
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full"
          >
            Explore Posts
          </a>
        </div>
      </section>
    </>
  );
}
