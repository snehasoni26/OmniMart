import React from 'react';
import { XIcon } from '@heroicons/react/solid'; // Import the X (cross) icon from Heroicons
import { StarIcon } from '@heroicons/react/solid'; // Import Star icon for ratings

const WishlistItem = ({ item, onRemove }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-sm shadow-lg relative max-w-xs">
      {/* Remove Icon at the top-right corner */}
      <button 
        onClick={() => onRemove(item.id)} 
        className="absolute top-2 right-2 text-white hover:text-red-500"
      >
        <XIcon className="w-5 h-5" />
      </button>

      {/* Product Image */}
      <img src={item.url} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />

      {/* Product Name */}
      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>

      {/* Product Price */}
      <p className="text-lg text-gray-400 mb-2">Price: ${item.price}</p>

      {/* Product Rating */}
      <div className="flex items-center mb-4">
        <p className="text-gray-400 mr-2">Rating:</p>
        <div className="flex">
          {[...Array(item.rating)].map((_, index) => (
            <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Product Description */}
      <p className="text-gray-400">{item.description}</p>
    </div>
  );
};

export default WishlistItem;
