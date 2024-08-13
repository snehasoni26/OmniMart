import { TypewriterEffect } from "../ui/typewriter-effect";
 
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
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
      <button className="w-40 h-10 rounded-xl bg-gray-700 border dark:border-white border-transparent text-white text-sm shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100 transition">
  Join now
</button>

        <button className="w-40 h-10 text-black rounded-xl bg-white border dark:border-white border-transparent text-white text-sm shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100 transition">
          Signup
        </button>
      </div>
    </div>
  );
}