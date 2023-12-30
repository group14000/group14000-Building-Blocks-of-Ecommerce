const TheGenericsBanner = () => {
  return (
    <div className="bg-gray-800 text-white h-[50vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">The Generics</h1>
      <button className="bg-gray-600 text-white px-8 py-3 rounded">
        Get our Latest Album
      </button>
      <div className="mt-8">
        <svg
          height="50"
          width="50"
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <polygon points="20,15 40,25 20,35" />
        </svg>
      </div>
    </div>
  );
};

export default TheGenericsBanner;
