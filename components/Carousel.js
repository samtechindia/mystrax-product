"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Homepage from "./Homepage";
import Image from "next/image";

export default function App() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper h-[85vh] my-10"
			>
				<SwiperSlide>
					<Homepage />
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative h-[85vh] w-full bg-[#000000da] ">
						<div className="carousel-1"></div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="/media/carousel-2.jpg"
						alt=""
						width={1024}
						height={1024}
						className="h-fit w-full"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
