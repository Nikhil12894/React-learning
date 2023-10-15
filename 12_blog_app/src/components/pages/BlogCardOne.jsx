import React, { useEffect, useState } from "react";

const BlogCardOne = ({ blog = {} }) => {
  const [cardColor, setCardColor] = useState(
    blog.cardColor ? blog.cardColor : "pink"
  );
  useEffect(() => {
    const colors = [
      "Slate",
      "Gray",
      "Zinc",
      "Neutral",
      "Stone",
      "Orange",
      "Amber",
      "Yellow",
      "Lime",
      "Green",
      "Emerald",
      "Teal",
      "Cyan",
      "Blue",
      "Violet",
      "Purple",
      "Fuchsia",
      "Pink",
      "Rose",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    setCardColor(color.toLowerCase());
  });

  return (
    <div className="col-span-12 sm:col-span-6  md:col-span-6 lg:col-span-6 xl:col-span-6 ">
      <div
        className={`bg-${cardColor}-50 dark:bg-${cardColor}-500/10 backdrop-blur-2xl   rounded-md w-full relative hover:bg-${cardColor}-100 dark:hover:bg-${cardColor}-500/20 hover:drop-shadow-2xl dark:hover:drop-shadow-2xl`}
      >
        <div className="flex-auto p-8 md:p-8">
          <span
            className={`text-[12px] bg-${cardColor}-500/10 text-${cardColor}-500 dark:text-${cardColor}-600 rounded font-medium py-1 px-2 inline mb-3`}
          >
            Finance
          </span>
          <a
            href="#"
            className="my-3 block text-[24px] font-medium tracking-tight text-gray-800 dark:text-white"
          >
            Popular admin template you can use for your business.
          </a>
          <div className="border-b border-dashed border-white dark:border-slate-700/40 my-4"></div>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="block mt-3">
            <a
              href=""
              className={`block text-${cardColor}-500 hover:text-${cardColor}-600 font-medium  focus:outline-none`}
            >
              Read More
              <i
                data-lucide="arrow-right"
                className="self-center inline-block ms-1 h-4 w-4"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardOne;
