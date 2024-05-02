"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
					<div className="w-full  p-20 flex items-center justify-between">
						<div className="w-2/3 ">
							<div className="font-['PP_Neue_Machina_Inktrap_Medium'] text-blue-800 flex items-center gap-2 text-sm font-semibold my-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="currentColor"
								>
									<path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"></path>
								</svg>
								<h3>Explore Now</h3>
							</div>
							<h1 className=" text-4xl font-semibold pb-7 font-['Gillroy']">
								Manage all your Hostels and PGs magically in your pocket
							</h1>
							<p className="border-l-2  border-gray-400 pl-5 text-sm  font-['PP_Neue_Machina_Inktrap_Medium']">
								Easy manageable. Easy trackable. Easy remembering
							</p>
							<button className="my-10 px-4 py-[1rem] bg-blue-800 hover:bg-blue-900  text-white  border-1 border-black">
								Make An Enquiry
							</button>
						</div>
						<div>
							<Image
								src="/media/slide-1.webp"
								alt=""
								height={100}
								width={100}
								className="h-[70vh] w-full"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-full  p-20 flex items-center justify-between">
						<div className="w-2/3 ">
							<div className="font-['PP_Neue_Machina_Inktrap_Medium'] text-blue-800 flex items-center gap-2 text-sm font-semibold my-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="currentColor"
								>
									<path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"></path>
								</svg>
								<h3>Explore Now</h3>
							</div>
							<h1 className=" text-4xl font-semibold pb-7 font-['Gillroy']">
								Manage all your Hostels and PGs magically in your pocket
							</h1>
							<p className="border-l-2  border-gray-400 pl-5 text-sm  font-['PP_Neue_Machina_Inktrap_Medium']">
								Easy manageable. Easy trackable. Easy remembering
							</p>
							<button className="my-10 px-4 py-[1rem] bg-blue-800 hover:bg-blue-900  text-white  border-1 border-black">
								Make An Enquiry
							</button>
						</div>
						<div>
							<Image
								src="/media/slide-1.webp"
								alt=""
								height={100}
								width={100}
								className="h-[70vh] w-full"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-full  p-20 flex items-center justify-between">
						<div className="w-2/3 ">
							<div className="font-['PP_Neue_Machina_Inktrap_Medium'] text-blue-800 flex items-center gap-2 text-sm font-semibold my-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="currentColor"
								>
									<path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"></path>
								</svg>
								<h3>Explore Now</h3>
							</div>
							<h1 className=" text-4xl font-semibold pb-7 font-['Gillroy']">
								Manage all your Hostels and PGs magically in your pocket
							</h1>
							<p className="border-l-2  border-gray-400 pl-5 text-sm  font-['PP_Neue_Machina_Inktrap_Medium']">
								Easy manageable. Easy trackable. Easy remembering
							</p>
							<button className="my-10 px-4 py-[1rem] bg-blue-800 hover:bg-blue-900  text-white  border-1 border-black">
								Make An Enquiry
							</button>
						</div>
						<div>
							<Image
								src="/media/slide-1.webp"
								alt=""
								height={100}
								width={100}
								className="h-[70vh] w-full"
							/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
