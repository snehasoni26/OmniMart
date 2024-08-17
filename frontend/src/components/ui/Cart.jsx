import React from "react";
import Product from "./product";
import { useNavigate } from "react-router-dom";
const products = [
  {
    id: 1,
    price: 500,
    url: "https://images.pexels.com/photos/6167328/pexels-photo-6167328.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Chocolate",
    rating: 4,
  },
  {
    id: 2,
    price: 300,
    url: "https://images.pexels.com/photos/6167327/pexels-photo-6167327.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Vanilla",
    rating: 5,
  },
  {
    id: 3,
    price: 250,
    url: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Strawberry",
    rating: 3,
  },
  {
    id: 4,
    price: 400,
    url: "https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mint",
    rating: 4,
  },
  {
    id: 5,
    price: 150,
    url: "https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Lemon",
    rating: 5,
  },
  {
    id: 6,
    price: 200,
    url: "https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mango",
    rating: 2,
  },
  {
    id: 7,
    price: 350,
    url: "https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Pineapple",
    rating: 3,
  },
  {
    id: 8,
    price: 450,
    url: "https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coconut",
    rating: 5,
  },
  
];

export function Cart() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="text-center">
        <h1> Items added to cart</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            price={product.price}
            url={product.url}
            title={product.title}
            rating={product.rating}
          />
        ))}
      </div>
      <button 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={()=>{navigate("/payment")}}
        >
          Checkout
        </button>
    </div>
  );
}

export default Cart;
