export default function Page(){
    return(
        <>
          <section id="contact" className="bg-gray-100 py-24">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
            <p className="text-xl mb-8">Have any questions? I'd love to hear from you. Fill out the form below!</p>
            
            <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-left font-medium">Your Name</label>
                    <input type="text" id="name" name="name" className="w-full p-4 border border-gray-300 rounded-lg mt-2" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-left font-medium">Your Email</label>
                    <input type="email" id="email" name="email" className="w-full p-4 border border-gray-300 rounded-lg mt-2" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-left font-medium">Your Message</label>
                    <textarea id="message" name="message" className="w-full p-4 border border-gray-300 rounded-lg mt-2" required></textarea>
                </div>
                <span className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">Send Message</span>
            </form>
        </div>
    </section>

        </>
    )
}