import { useState } from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import pizza from "../../../public/assets/pizza.png";
import cake from "../../../public/assets/cake.png";
import frenchFries from "../../../public/assets/frenchFries.png";
import salad from "../../../public/assets/salad.png";
import drinks from "../../../public/assets/drinks.png";

export const Slider = () => {
  const [itemSelected, setitemSelected] = useState<number>(1);
  const slideItems = [
    { id: 1, image: pizza, title: "Pizza" },
    { id: 2, image: cake, title: "Salad" },
    { id: 3, image: frenchFries, title: "Dessert" },
    { id: 4, image: salad, title: "Sides" },
    { id: 5, image: drinks, title: "Drinks" },
  ];

  const onSetCategory = (id: number) => setitemSelected(id);

  return (
    <div id="Category-Slider" className={`mx-2`}>
      <Swiper
        className="py-4"
        breakpoints={{
          "@0.00": {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
          "@0.50": {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          "@1.25": {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        spaceBetween={50}
        slidesPerView={4}
      >
        {slideItems.map(({ id, image, title }) => (
          <SwiperSlide key={id}>
            <div
              onClick={() => onSetCategory(id)}
              className={`flex items-center ${
                itemSelected == id
                  ? "border-textOrange border-2 shadow-[0_3px_15px_0_rgba(0,0,0,0.2)] p-2 rounded-2xl"
                  : "border-none"
              } 
              transition-all
              duration-500
              cursor-pointer
              w-[100px] 
              md:w-[120px] 
              h-[150px]
              justify-center 
              flex-col 
              gap-2`}
            >
              <Image
                priority={true}
                src={image}
                className={`w-[80px] h-[80px] object-contain`}
                alt={title}
                width={0}
                height={0}
              />
              <span className={`font-bold`}>{title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
