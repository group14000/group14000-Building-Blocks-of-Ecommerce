import { useEffect, useState } from "react";

const Store = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cartItems from local storage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const products = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
  ];

  const handleAddToCart = (product) => {
    // Update the cartItems state
    setCartItems([...cartItems, product]);

    // Save the updated cartItems to local storage
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, product]));

    console.log(`Added "${product.title}" to the cart`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">E-Commerce Store</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-2 mb-4 bg-white transition-transform transform hover:scale-105"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover transform transition-transform hover:scale-125"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700">${product.price}</p>
              <p className="text-gray-700">Quantity: {product.quantity}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
