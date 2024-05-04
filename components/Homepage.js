"use client";

import { Typewriter, useTypewriter } from "react-simple-typewriter";

import Image from "next/image";
import React from "react";
import Search from "./Search";

const Homepage = () => {
	const [typeEffect] = useTypewriter({
		words: ["PGs", "Hostel"],
		loop: {},
		typeSpeed: 100,
		deleteSpeed: 40,
	});
	return (
		<>
			<div>
				<div className="lg:w-full flex lg:h-[90vh]  items-center flex-col lg:flex-row ">
					<div className="lftcontainer lg:w-[60vw] px-[6rem]  py-[3rem]  ">
						<h1 className="text-5xl lg:-mt-[5rem] ml-10 lg:-ml-1 font-bold lg:py-7 font-['Gillroy']">
							S-mart way to rent your &nbsp;
							<span className="text-[#ED7C24] font-['PP_Neue_Machina_Inktrap_Medium']">
								{typeEffect}
							</span>
						</h1>
						<p className="text-xs font-light p-4 lg:text-zinc-500 leading-tight">
							Discover a world of convenience with the S-Mart app, offering a
							myriad of features from audit trails to hassle-free rent
							collection. From maintaining electricity bills to transparent
							record-keeping, enjoy seamless operations with Google Cloud backup
							and restoration. Stay organized with expense reports, admission
							management, and tenant complaints, all in one user-friendly
							platform for efficient property management.
						</p>
						<div className="mt-10  font-bold text-lg ">
							<h1 className="px-4">We Manage </h1>
							<div className="mt-3 flex items-center gap-1 lg:gap-4">
								<div className="shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">Hostel</h2>
								</div>
								<div className="shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">PGs</h2>
								</div>
								<div className=" shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">Studio</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="rgtcontainer  lg:-mt-[5rem]">
						<Image src="/media/girl.gif" alt="home" width={500} height={500} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
