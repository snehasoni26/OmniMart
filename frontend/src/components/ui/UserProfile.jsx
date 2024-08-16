import React, { useState } from 'react';
import { PencilIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
//   const [activeTab, setActiveTab] = useState('profile');
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  const navigate = useNavigate();
  const userData = {
    userName: "JohnDoe123",
    email: "johndoe@example.com",
    phoneNumber: "+1234567890",
    dob: "1990-01-01",
    gender: "Male",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
      country: "USA"
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setProfileImage(upload.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'profile':
//         return (
//           <div className="text-gray-400 w-full">
//             {/* Email */}
//             <div className="mb-4">
//               <label className="block font-medium text-white">Email:</label>
//               <p className="px-4 py-2 bg-gray-700 rounded-lg">{userData.email}</p>
//             </div>

//             {/* Phone Number */}
//             <div className="mb-4">
//               <label className="block font-medium text-white">Phone Number:</label>
//               <p className="px-4 py-2 bg-gray-700 rounded-lg">{userData.phoneNumber}</p>
//             </div>

//             {/* Date of Birth */}
//             <div className="mb-4">
//               <label className="block font-medium text-white">Date of Birth:</label>
//               <p className="px-4 py-2 bg-gray-700 rounded-lg">{userData.dob}</p>
//             </div>

//             {/* Gender */}
//             <div className="mb-4">
//               <label className="block font-medium text-white">Gender:</label>
//               <p className="px-4 py-2 bg-gray-700 rounded-lg">{userData.gender}</p>
//             </div>

//             {/* Address */}
//             <div className="mb-4">
//               <label className="block font-medium text-white">Address:</label>
//               <p className="px-4 py-2 bg-gray-700 rounded-lg">
//                 {`${userData.address.street}, ${userData.address.city}, ${userData.address.state}, ${userData.address.zip}, ${userData.address.country}`}
//               </p>
//             </div>
//           </div>
//         );
//       case 'wishlist':
//         return (
//           <div className="text-gray-400 w-full">
//             <h3 className="text-2xl font-semibold text-white mb-4">Wishlist</h3>
//             <ul className="space-y-2">
//               {userData.wishlist.map((item, index) => (
//                 <li key={index} className="px-4 py-2 bg-gray-700 rounded-lg">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       case 'orders':
//         return (
//           <div className="text-gray-400 w-full">
//             <h3 className="text-2xl font-semibold text-white mb-4">Order History</h3>
//             <ul className="space-y-4">
//               {userData.orders.map(order => (
//                 <li key={order.id} className="p-4 bg-gray-700 rounded-lg">
//                   <p><strong>Order Date:</strong> {order.date}</p>
//                   <p><strong>Items:</strong> {order.items.join(", ")}</p>
//                   <p><strong>Total:</strong> {order.total}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-32 h-32 rounded-full mb-4"
            />
            <label className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full cursor-pointer">
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload} 
              />
              <PencilIcon className="w-5 h-5 text-white" /> {/* New Pencil Icon */}
            </label>
          </div>

          {/* User Information */}
          <h2 className="text-3xl font-semibold text-white mb-6">{userData.userName}</h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <button 
            className={`px-4 py-2 mx-2 rounded-lg bg-gray-600`}
            // onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`px-4 py-2 mx-2 rounded-lg bg-gray-600`}
             onClick={() => navigate('/wishlist')}
          >
            Wishlist
          </button>
          <button 
            className={`px-4 py-2 mx-2 rounded-lg bg-gray-600`}
            // onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          
        </div>
        <div className="text-gray-400 w-full">
            {/* Email */}
            <div className="mb-4">
              <label className="block font-medium text-white">Email:</label>
              <p className="px-4 py-2 bg-gray-700 rounded-lg">{userData.email}</p>
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block font-medium text-white">Phone Number:</label>
              <p className="px-4 py-2 bg-gray-700 rounded-lg">{userData.phoneNumber}</p>
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label className="block font-medium text-white">Date of Birth:</label>
              <p className="px-4 py-2 bg-gray-700 rounded-lg">{userData.dob}</p>
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block font-medium text-white">Gender:</label>
              <p className="px-4 py-2 bg-gray-700 rounded-lg">{userData.gender}</p>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block font-medium text-white">Address:</label>
              <p className="px-4 py-2 bg-gray-700 rounded-lg">
                {`${userData.address.street}, ${userData.address.city}, ${userData.address.state}, ${userData.address.zip}, ${userData.address.country}`}
              </p>
            </div>
          </div>
        {/* Render the content based on the active tab
        {renderContent()} */}
      </div>
    </div>
  );
};

export default UserProfile;