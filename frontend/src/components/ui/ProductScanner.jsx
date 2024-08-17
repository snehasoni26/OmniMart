import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const ProductScanner = () => {
  const [itemDetails, setItemDetails] = useState(null);
  const [error, setError] = useState(null);
  const [virtualCart, setVirtualCart] = useState([]);
  const [physicalCart, setPhysicalCart] = useState([]);

  // Function to fetch item details from the database
  const fetchItemDetails = async (itemId) => {
    try {
      const response = await fetch(`/api/items/${itemId}`);
      const data = await response.json();
      console.log(data)
      setItemDetails(data);
    } catch (err) {
      setError('Failed to fetch item details.');
    }
  };

  // Function to add item to both carts
  const addItemToCarts = (item) => {
    setVirtualCart((prev) => [...prev, item]);
    setPhysicalCart((prev) => [...prev, { ...item, status: 'unsold' }]);
  };

  // Handle QR code scan
  const handleScan = (data) => {
    if (data) {
      fetchItemDetails(data);
    }
  };

  // Handle errors
  const handleError = (err) => {
    setError('Failed to scan QR code.');
  };

  // Add item to carts when details are available
  React.useEffect(() => {
    if (itemDetails) {
      addItemToCarts(itemDetails);
      setItemDetails(null);
    }
  }, [itemDetails]);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-full max-w-md">
        <QrScanner
          onScan={handleScan}
          onError={handleError}
          style={{ width: '100%' }}
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="w-full max-w-md mt-4">
        <h2 className="text-xl font-bold mb-2 text-white">Virtual Cart</h2>
        <ul className="list-disc pl-4">
          {virtualCart.map((item) => (
            <li key={item.id} className="mb-1">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-4 mb-2 text-white">Physical Cart</h2>
        <ul className="list-disc pl-4">
          {physicalCart.map((item) => (
            <li key={item.id} className="mb-1">
              {item.name} - ${item.price} (Status: {item.status})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductScanner;