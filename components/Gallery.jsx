import Image from "next/image";
import React from "react";

function Gallery() {
  return (
    <div className="flex items-center flex-col justify-center mt-12 mb-12">
      <h3 className="text-3xl text-rose-950 font-bold mb-4">Photo Gallery</h3>
      <div className="grid w-full px-4 lg:w-[80%] gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="border border-slate-300 flex items-center justify-center flex-col  w-full lg:w-[250px] h-65 rounded-2xl p-4"
          >
            <Image
              src={image}
              alt="gallery images"
              width={2000}
              height={2000}
              className="w-152 h-55"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

const gallery = ["/plane1.png", "/plane2.png", "/plane3.png", "/plane4.png"];
