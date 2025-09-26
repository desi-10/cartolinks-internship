import React from "react";

type Props = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image?: string;
};

const CarouselCard = ({
  label,
  title,
  subtitle,
  description,
  buttonText,
  image,
}: Props) => {
  return (
    <div className="w-full md:w-[66.66%] lg:w-[55%] flex-shrink-0 h-[450px] relative">
      {/* Background placeholder */}
      <div className="absolute inset-0 rounded-3xl mx-3">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover  rounded-3xl"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-gray-950/30 dark:bg-gradient-to-t dark:from-black dark:to-gray-900/10 rounded-3xl mx-3" />

      {/* Content overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white mx-2">
        <span className="absolute top-7 text-xs uppercase tracking-wide text-white dark:text-gray-400">
          {label}
        </span>

        <h2 className="absolute top-[40%] w-full text-7xl text-center font-bold text-white dark:text-gray-100 text-shadow-sm text-shadow-black/50">
          {title}
        </h2>

        <div className="flex items-end justify-between space-x-10">
          <div className="w-[50%]">
            <h3 className="text-2xl font-bold mt-2">{subtitle}</h3>
            <p className="text-sm mt-1 max-w-xl ">{description}</p>
          </div>
          <button className="mt-4 bg-white text-black px-2 py-2 text-sm rounded-full w-36 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
