//before running this, run this code on cmd:
//npm install react-qr-scanner
//npm install @babel/runtime
//npm run build

import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

const CartQRScanner = ({ onCartScanned }) => {
  const [cartId, setCartId] = useState(null);
  const [error, setError] = useState("");

  const handleScan = (data) => {
    if (data) {
      setCartId(data.text); // Use data.text for the QR code value
      checkCartStatus(data.text);
    }
  };

  const handleError = (err) => {
    setError("Failed to scan QR code. Please try again.");
    console.error(err);
  };

  const checkCartStatus = async (cartId) => {
    // Fetch cart status from your backend
    const response = await fetch(`/api/cart-status/${cartId}`);
    const { status, userId } = await response.json();

    if (status === "unallotted") {
      // Allot cart to the user
      await fetch(`/api/assign-cart`, {
        method: "POST",
        body: JSON.stringify({ cartId, userId }),
      });
      onCartScanned(cartId);
    } else {
      setError("This cart is already allotted.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-white text-lg mb-4 text-center">Scan Cart QR Code</h2>
        <div className="qr-scanner">
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
          {error && <p className="error text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CartQRScanner;