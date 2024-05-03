"use client";
import Image from "next/image";
import React from "react";
import Search from "./Search";

const Homepage = () => {
	return (
		<>
			<div>
				<div className="lg:w-full flex lg:h-[90vh]  items-center flex-col lg:flex-row ">
					<div className="lftcontainer lg:w-[60vw] px-[6rem]  py-[3rem]  ">
						<h1 className="text-5xl lg:-mt-[5rem] ml-10 lg:-ml-1 font-bold lg:py-7 font-['Gillroy']">
							S-mart way to rent your
							<span className="text-[#ED7C24] font-['PP_Neue_Machina_Inktrap_Medium']">
								&nbsp; PGs
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

				{/* <hr />
				<div className="hidden lg:visible h-32 font-['PP_Neue_Machina_Inktrap_Medium'] lg:flex lg:items-center lg:justify-between lg:py-10 lg:px-20 ">
					<div className="section flex items-center justify-between gap-8">
						<div className="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="50"
								height="50"
								fill="#85433A"
							>
								<path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"></path>
							</svg>
						</div>
						<div className="flex flex-col items-center justify-between gap-1">
							<h3 className="text-sm font-ligt text-[#18444E] ">Property</h3>
							<h1 className="text-3xl font-semibold ">9,000+</h1>
						</div>
					</div>
					<div className="section flex items-center justify-between gap-6">
						<div className="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="52"
								height="52"
								fill="#85433A"
							>
								<path d="M1.99805 21.0001V19.0001L3.99805 18.9999V4.83465C3.99805 4.35136 4.34367 3.93723 4.81916 3.85078L14.2907 2.12868C14.6167 2.0694 14.9291 2.28564 14.9884 2.61167C14.9948 2.64708 14.998 2.68301 14.998 2.719V3.9999L18.998 4.00007C19.5503 4.00007 19.998 4.44779 19.998 5.00007V18.9999L21.998 19.0001V21.0001H17.998V6.00007L14.998 5.9999V21.0001H1.99805ZM11.998 11.0001H9.99805V13.0001H11.998V11.0001Z"></path>
							</svg>
						</div>
						<div className="flex flex-col items-center justify-between gap-1">
							<h3 className="text-sm font-ligt text-[#18444E] ">Rooms</h3>
							<h1 className="text-3xl font-semibold ">1.5Lacs+</h1>
						</div>
					</div>
					<div className="section flex items-center justify-between gap-6">
						<div className="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="50"
								height="50"
								fill="#85433A"
							>
								<path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
							</svg>
						</div>
						<div className="flex flex-col items-center justify-between gap-1">
							<h3 className="text-sm font-ligt text-[#18444E] ">Tenants</h3>
							<h1 className="text-3xl font-semibold ">1.2Lacs+</h1>
						</div>
					</div>
					<div className="section flex items-center justify-between gap-6">
						<div className="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="50"
								height="50"
								fill="#85433A"
							>
								<path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"></path>
							</svg>
						</div>
						<div className="flex flex-col items-center justify-between gap-1">
							<h3 className="text-sm font-ligt text-[#18444E] ">Collection</h3>
							<h1 className="text-3xl font-semibold ">44Cr+</h1>
						</div>
					</div>
				</div>
				<hr className="mb-[3rem]" /> */}
			</div>
		</>
	);
};

export default Homepage;
