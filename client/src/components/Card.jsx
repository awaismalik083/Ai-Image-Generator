import React from "react";
import { downloadImage } from "../utils";
import { asset } from "../assets/asset";

const Card = ({ _id, photo, prompt, name }) => {
  if (!photo) {
    console.warn(`Card ${_id} has no photo!`);
    return null;
  }

  return (
    <div className="break-inside-avoid mb-4 rounded-xl group relative shadow-md hover:shadow-lg overflow-hidden transition duration-300 ease-in-out">
      <img
        src={photo}
        alt={prompt || "AI generated image"}
        className="w-full object-cover rounded-xl"
        style={{ height: "auto", aspectRatio: "auto" }}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm mb-2 line-clamp-2">{prompt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold">
              {name?.charAt(0).toUpperCase()}
            </div>
            <p className="text-white text-xs">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="bg-transparent border-none outline-none"
          >
            <img
              src={asset.download}
              alt="download"
              className="w-6 h-6 object-contain invert cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
