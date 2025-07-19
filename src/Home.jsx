import Services from './Services';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 md:px-12 py-16 bg-green-100 overflow-hidden">
  {/* Dimmed Background Image */}
  <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/023/695/825/non_2x/spa-natural-organic-products-illustration-ai-generative-free-photo.jpg')] bg-cover bg-center opacity-50 z-0"></div>

  {/* Foreground Content */}
  <div className="relative z-10">
    <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
      Welcome to Aura of Nature
    </h1>
    <p className="text-base md:text-lg text-black font-bold max-w-xl mb-6">
      Your journey into the world of nature begins here.
    </p>
    <Link to="/contact">
    <button className="bg-green-700 text-white font-bold px-6 py-2 rounded shadow hover:bg-green-800 transition">
      Contact Us
    </button>
    </Link>
    
  </div>
</section>


      {/* Services Section */}
      <section className="px-4 md:px-12 py-12 bg-white">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">
          Services Offered
        </h2>
        <div className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>
    </main>
  );
}

export default Home;
