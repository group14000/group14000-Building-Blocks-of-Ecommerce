import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cartItems from local storage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleIncrement = (index) => {
    // Increment quantity for the item at the specified index
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    // Save the updated cartItems to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDecrement = (index) => {
    // Decrement quantity for the item at the specified index
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity -= 1;
    // Remove the item from the cart if quantity becomes zero
    if (updatedCartItems[index].quantity === 0) {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    // Save the updated cartItems to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDelete = (index) => {
    // Remove the item from the cart at the specified index
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    // Save the updated cartItems to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="flex items-center justify-center">
          <div className="overflow-x-auto w-full">
            <table className="min-w-full border rounded overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2 hidden sm:table-cell">Colors</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Increment</th>
                  <th className="px-4 py-2">Decrement</th>
                  <th className="px-4 py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2 hidden sm:table-cell">Colors</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2">
                      <IconButton onClick={() => handleIncrement(index)}>
                        <AddIcon />
                      </IconButton>
                    </td>
                    <td className="px-4 py-2">
                      <IconButton onClick={() => handleDecrement(index)}>
                        <RemoveIcon />
                      </IconButton>
                    </td>
                    <td className="px-4 py-2">
                      <IconButton onClick={() => handleDelete(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
