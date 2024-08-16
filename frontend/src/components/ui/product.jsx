import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import "./product.css";

export function Product({
  id,
  price,
  url,
  title,
  rating
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Check local storage to see if the product is wishlisted
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(id)) {
      setIsWishlisted(true);
    }
  }, [id]);

  const handleWishlistClick = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (isWishlisted) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter(item => item !== id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsWishlisted(false);
    } else {
      // Add to wishlist
      wishlist.push(id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsWishlisted(true);
    }
  };

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
              <p key={i}>🌟</p>
            ))}
        </div>
        <button
          onClick={handleWishlistClick}
          className={`mt-4 w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
            isWishlisted ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isWishlisted ? "Added to Wishlist ✔" : "Add to Wishlist"}
        </button>
      </div>
    </Card>
  );
}

export default Product;
