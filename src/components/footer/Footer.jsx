const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: +1 123 456 7890</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <i className="material-icons">facebook</i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <i className="material-icons">twitter</i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <i className="material-icons">telegram</i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400">
            Subscribe to our newsletter for updates
          </p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 w-full border border-gray-500 rounded-l focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
