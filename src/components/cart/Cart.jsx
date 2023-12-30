const Cart = ({ cartItems }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div>
        {cartItems.map((item, index) => (
          <div key={index} className="border p-4 mb-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700">${item.price}</p>
            <p className="text-gray-700">Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
