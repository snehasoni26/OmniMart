import { TypewriterEffect } from "../ui/typewriter-effect";
import { useNavigate } from "react-router-dom";
export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Explore.",
    },
    {
      text: "Experience.",
    },
    {
      text: "Shop.",
    },
    {
      text: "OmniMart...",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen h-full w-full">
      {/* Background image div with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/26152872/pexels-photo-26152872/free-photo-of-man-walking-towards-a-shop.jpeg?auto=compress&cs=tinysrgb&w=600')",
          opacity: 0.2, // Adjust the opacity here
        }}
      ></div>

      {/* Content that stays above the background */}
      <p className="text-neutral-600 dark:text-neutral-200 text-lg mb-10 relative">
        Bringing out virtual experience to life
      </p>
      <TypewriterEffect words={words} />
      <div className="relative flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-gray-700 border dark:border-white border-transparent text-white text-sm shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100 transition">
          Join now
        </button>
        <button className="w-40 h-10 text-black rounded-xl bg-white border dark:border-white border-transparent text-sm shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100 transition" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </div>
    </div>
  );
}
