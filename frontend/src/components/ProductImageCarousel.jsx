import React from "react";
import { Magnifier } from "react-image-magnifiers";
const ProductImageCarousel = ({ images, selectedImage, onImageChange }) => {
  return (
    <div className="flex flex-col items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={`cursor-pointer ${
            selectedImage === image ? "border-2 border-blue-500" : ""
          }`}
          onClick={() => onImageChange(image)}
        >
          <Magnifier
            imageSrc={image}
            imageAlt={`Product Image ${index + 1}`}
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImageCarousel;
