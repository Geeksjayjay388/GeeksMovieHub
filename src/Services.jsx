function Services() {
  const products = [
    {
      id: 1,
      name: 'Organic Face Products',
      description: 'Learn to make natural face creams, scrubs, and masks.',
      price: 'KSH 2000',
      image: 'https://www.sustainablejungle.com/wp-content/uploads/2024/09/Image-by-Sustainable-Jungle-Miscellaneous-natural-anti-aging-skin-care.jpg',
    },
    {
      id: 2,
      name: 'Organic Body Care Products',
      description: 'Craft body lotions, oils, and exfoliants.',
      price: 'KSH 2000',
      image: 'https://www.thegoodtrade.com/wp-content/uploads/2025/01/organic-skincare-one-love-organics-1-edited.jpeg',
    },
    {
      id: 3,
      name: 'Organic Hair Care Products',
      description: 'Create shampoos, conditioners, and hair masks.',
      price: 'KSH 2000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmCf7H9ske3rmpnjDxywWMLakCxk5b5n4-Q&s',
    },
    {
      id: 4,
      name: 'Soaps',
      description: 'Make handmade soaps with essential oils.',
      price: 'KSH 2000',
      image: 'https://amalaearth.store/cdn/shop/articles/2_1200X1200_6b37bb3a-61e6-46a6-8bd5-02744393bae4.jpg?v=1714389837&width=2048',
    },
    {
      id: 5,
      name: 'Lip & Sensitive Skin Care',
      description: 'Formulate lip balms and gentle skin products.',
      price: 'KSH 2000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OTPyRGtBSTIGOkfMJI_enpx1hC0Xvu36bA&s',
    },
    {
      id: 6,
      name: 'Baby & Pet Care Products',
      description: 'Gentle, safe products for little ones and furry friends.',
      price: 'KSH 2000',
      image: 'https://bugalugspetcare.com/cdn/shop/files/Ultimate-Giftset-Products.png?v=1717075986&width=1500',
    },
    {
      id: 7,
      name: 'Organic Soap',
      description: 'Make luxurious organic soap bars.',
      price: 'KSH 2000',
      image: 'https://images.squarespace-cdn.com/content/v1/52f2b921e4b0e025f164533f/1543039080420-2DSMBONP95D0TG1NMPT6/OrganicHandmadeSoap.jpg',
    },
    {
      id: 8,
      name: 'Scented Candles',
      description: 'Craft aromatic candles for ambiance and gifts.',
      price: 'KSH 2000',
      image: 'https://www.faerly.ie/cdn/shop/products/candles-bay-leaf-bergamot-scented-luxury-soy-candle-somas-studio-28925407527073_1445x.jpg?v=1645375839',
    },
    {
      id: 9,
      name: 'Crocheting',
      description: 'Create your own design piece of art.',
      price: 'KSH 1000',
      image: 'https://theneonteaparty.com/wp-content/uploads/2022/03/How-to-Crochet-with-Multiple-Strands-of-Yarn-1-scaled.jpg',
    },
    {
      id: 10,
      name: 'Fabric Softener',
      description: 'Make eco-friendly softeners for laundry.',
      price: 'KSH 1000',
      image: 'https://res.cloudinary.com/dpelb0bad/images/f_auto,q_auto/v1725282419/Aqua_Fabric_Softener_3L/Aqua_Fabric_Softener_3L.jpg?_i=AA',
    },
  ];

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-green-700 font-bold mt-3">{product.price}</p>
            <button className="mt-4 w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Services;
