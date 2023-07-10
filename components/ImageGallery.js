import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    {
      id: 0,
      value: "/assets/tangan.jpeg",
    },
    {
      id: 1,
      value: "/assets/jalananak.jpeg",
    },
    {
      id: 2,
      value: "/assets/anak.jpeg",
    },
    {
      id: 3,
      value: "/assets/enygma.jpeg",
    },
    {
      id: 4,
      value: "/assets/kulinernew.jpeg",
    },
    {
      id: 5,
      value: "/assets/talkshow.jpg",
    },
    {
      id: 6,
      value: "/assets/arie-2.jpg",
    },
    {
      id: 7,
      value: "/assets/arie-3.jpg",
    },
    {
      id: 8,
      value: "/assets/arie-4.jpg",
    },
  ];
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {images.map((image, i) => (
            <Image
              src={image.value}
              height={0}
              width={0}
              key={i}
              className="w-full"
              alt="Icon People"
              style={{
                width: "100%",
                display: "block",
                cursor: "pointer",
                height: "auto",
              }}
              sizes="100vw"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImageGallery;
