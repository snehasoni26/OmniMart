import React from 'react'
import Product from './product';
import { useState } from 'react';
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
    url: "https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Vanilla",
    rating: 5,
  },
  {
    id: 3,
    price: 250,
    url: "https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Strawberry",
    rating: 3,
  },
  {
    id: 4,
    price: 400,
    url: "https://images.pexels.com/photos/1264000/pexels-photo-1264000.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mint",
    rating: 4,
  },
  {
    id: 5,
    price: 150,
    url: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Lemon",
    rating: 5,
  },
  {
    id: 6,
    price: 200,
    url: "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mango",
    rating: 2,
  },
  {
    id: 7,
    price: 350,
    url: "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Pineapple",
    rating: 3,
  },
  {
    id: 8,
    price: 450,
    url: "https://images.pexels.com/photos/1424457/pexels-photo-1424457.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coconut",
    rating: 5,
  },
  { id: 9, price: 600, url: 'https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Blueberry', rating: 4 },
  { id: 10, price: 350, url: 'https://images.pexels.com/photos/8901234/pexels-photo-8901234.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Raspberry', rating: 3 },
  { id: 11, price: 250, url: 'https://images.pexels.com/photos/9012345/pexels-photo-9012345.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Peach', rating: 4 },
  { id: 12, price: 300, url: 'https://images.pexels.com/photos/0123456/pexels-photo-0123456.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Cherry', rating: 5 },
  { id: 13, price: 500, url: 'https://images.pexels.com/photos/1234568/pexels-photo-1234568.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Grape', rating: 4 },
  { id: 14, price: 400, url: 'https://images.pexels.com/photos/2345679/pexels-photo-2345679.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Pomegranate', rating: 3 },
  { id: 15, price: 600, url: 'https://images.pexels.com/photos/3456790/pexels-photo-3456790.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Fig', rating: 5 },
  { id: 16, price: 350, url: 'https://images.pexels.com/photos/4567891/pexels-photo-4567891.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Pear', rating: 4 },
  { id: 17, price: 200, url: 'https://images.pexels.com/photos/5678902/pexels-photo-5678902.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Kiwi', rating: 3 },
  { id: 18, price: 250, url: 'https://images.pexels.com/photos/6789013/pexels-photo-6789013.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Plum', rating: 4 },
  { id: 19, price: 150, url: 'https://images.pexels.com/photos/7890124/pexels-photo-7890124.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Apricot', rating: 5 },
  { id: 20, price: 300, url: 'https://images.pexels.com/photos/8901235/pexels-photo-8901235.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Nectarine', rating: 4 },
  { id: 21, price: 450, url: 'https://images.pexels.com/photos/9012346/pexels-photo-9012346.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Tangerine', rating: 5 },
  { id: 22, price: 500, url: 'https://images.pexels.com/photos/0123457/pexels-photo-0123457.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Grapefruit', rating: 3 },
  { id: 23, price: 350, url: 'https://images.pexels.com/photos/1234569/pexels-photo-1234569.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Cantaloupe', rating: 4 },
  { id: 24, price: 300, url: 'https://images.pexels.com/photos/2345680/pexels-photo-2345680.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Honeydew', rating: 5 },
  { id: 25, price: 600, url: 'https://images.pexels.com/photos/3456791/pexels-photo-3456791.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Dragonfruit', rating: 4 }
];

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
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
    </div>
  );
}

export default Dashboard;