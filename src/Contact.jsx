function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen relative overflow-hidden px-4 py-12 md:px-12">

      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10 z-0 bg-repeat"></div>

      {/* Content wrapper */}
      <div className="relative z-10">

        {/* Owner Info */}
        <section className="text-center mb-12">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-young-african-american-business-woman-black-peop-people-51712687.jpg"
            alt="Owner"
            className="mx-auto rounded-full w-32 md:w-36 h-32 md:h-36 object-cover shadow-md"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-green-800 mt-4">
            Aura Founder
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 mt-2 text-sm md:text-base">
            Passionate about turning creativity into income. Helping others discover nature, self-care, and sustainable crafts through immersive workshops.
          </p>
        </section>

        {/* Contact Info */}
        <section className="text-center bg-green-100 py-10 rounded-xl shadow-md mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-6">Get in Touch</h2>
          <div className="space-y-3 text-sm md:text-base text-gray-700">
            <p>📍 <strong>Nakuru, Kenya</strong> — Workshops at Your Home</p>
            <p>📧 Email: <a href="mailto:auranature@gmail.com" className="text-green-700 underline">auranature@gmail.com</a></p>
            <p>📱 Instagram: <a href="https://instagram.com/auraofnature" className="text-green-700 underline">@auraofnature</a></p>
            <p>📘 Facebook: <a href="https://facebook.com/auraofnature" className="text-green-700 underline">Aura of Nature</a></p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="mailto:auranature@gmail.com" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
              Email Us
            </a>
            <a href="https://instagram.com/auraofnature" className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
              Instagram
            </a>
            <a href="https://facebook.com/auraofnature" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Facebook
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-green-800 text-center mb-6">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                name: "Mary W.",
                text: "I never thought I'd be making organic skincare myself. These classes are incredibly empowering!",
              },
              {
                name: "Daniel M.",
                text: "Aura of Nature has changed my perspective on sustainability. I started my own line after learning here.",
              },
              {
                name: "Lilian K.",
                text: "The scented candle workshop was 🔥! Beautiful experience, and now I sell them at local fairs.",
              },
              {
                name: "James T.",
                text: "Highly recommend the bath bomb class. Everything was hands-on, clear, and fun.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:scale-[1.01]"
              >
                <p className="italic text-gray-700 text-sm md:text-base">“{review.text}”</p>
                <p className="mt-4 text-green-800 font-bold text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer-style CTA */}
        <section className="text-center py-6 border-t border-gray-300">
          <p className="text-gray-600 text-sm md:text-base">🌿 Ready to craft your own story?</p>
          <p className="text-green-700 font-semibold mt-1 text-base">Let’s bring nature, community, and creativity together.</p>
        </section>

      </div>
    </main>
  );
}

export default Contact;
