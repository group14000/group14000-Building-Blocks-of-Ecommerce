const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center lg:text-left">
          About Us
        </h1>
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:pr-8 mb-6">
            <p className="text-gray-700 mb-6">
              Welcome to our online store! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam.
            </p>
            <p className="text-gray-700 mb-6">
              We are committed to providing you with the best shopping
              experience. Our goal is to offer a wide range of high-quality
              products at competitive prices.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel mauris vel elit sagittis congue non id tortor. Duis
              blandit, massa eget interdum ullamcorper, justo elit malesuada
              justo, nec porta sem enim a justo.
            </p>
            <p className="text-gray-700 mb-6">
              Thank you for choosing us for your shopping needs. If you have any
              questions or suggestions, feel free to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
