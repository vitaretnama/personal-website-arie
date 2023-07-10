import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      image: "/assets/filosofinew.jpg",
      link: "https://malangposcomedia.id/arie-aripin-berharap-indonesia-pimpin-kopi-dunia/",
      text: "Pendapat Arie Aripin Mengenai Kopi Yang Sangat Filosofis",
      width: 300,
      height: 200,
    },
    {
      image: "/assets/arie.jpg",
      link: "https://tugumalang.id/gaungkan-gastronomi-malang-ke-dunia-bersama-arie-aripin-dan-chef-handry-wahyu/ ",
      text: "Gaungkan Gastronomi Malang Ke Dunia",
      width: 270,
      height: 200,
    },
    {
      image: "/assets/anak.jpeg",
      link: "https://malangposcomedia.id/kawal-impian-anak-menuju-indonesia-emas-2045/",
      text: "Kawal Impian Anak Menuju Indonesia Emas 2045",
      width: 250,
      height: 200,
    },
    {
      image: "/assets/kulinernew.jpeg",
      link: "https://malangposcomedia.id/sukses-promosikan-kuliner-indonesia-di-paris/",
      text: "Sukses Promosikan Kuliner Indonesia di Paris",
      width: 200,
      height: 200,
    },
    {
      image: "/assets/talkshow.jpg",
      link: "https://malangposcomedia.id/gelar-talk-show-bangun-generasi-emas-indonesia/",
      text: "Gelar Talkshow Bangun Generasi Emas",
      width: 270,
      height: 200,
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all  "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 7000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <a key={index} href={listTestimonis.link}>
            <div className="px-3 flex items-stretch h-96" key={index}>
              <div className="border-2 border-gray-500 hover:border-brown-400 transition-all rounded-lg p-10 flex flex-col bg-white-500 bg-opacity-50">
                <div className="flex flex-col w-full items-stretch xl:items-center ">
                  <div className="flex order-2 xl:order-1">
                    <Image
                      src={listTestimonis.image}
                      height={listTestimonis.height}
                      width={listTestimonis.width}
                      className="w-full"
                      alt="Icon People"
                    />
                  </div>
                </div>
                <p className="mt-5 text-left">“{listTestimonis.text}”.</p>
              </div>
            </div>
          </a>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-brown-400 border hover:bg-brown-400 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " stroke='#7B3F00' />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-brown-400 border hover:bg-brown-400 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" stroke='#7B3F00' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
