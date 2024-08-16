import React from "react";
import { Card } from "flowbite-react";
import "./product.css"
export function Product({
  id = 12324,
  price = 500,
  url = "https://images.pexels.com/photos/6167328/pexels-photo-6167328.jpeg?auto=compress&cs=tinysrgb&w=600",
  title = "Chocolate",
  rating=4
}) {
  return (
    <Card className="max-w-sm bg-gray-800 border-gray-700">
      <img
        className="rounded-t-lg object-cover w-full h-48"
        src={url}
        alt={title}
      />
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-400 mt-2">
          ${price}
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}</div>
        <button className="mt-4 w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Add to Cart
        </button>
      </div>
    </Card>
  );
}

export default Product;
