import Link from "next/link";
import React from "react";

const Contactpage = () => {
	return (
		<div className=" w-full lg:mt-20">
			<div className="flex lg:flex-row flex-col items-center justify-between lg:gap-10 ">
				<div className="lft lg:p-10 py-5 lg:w-[50vw] w-[70vw] lg:-mt-[3rem]">
					<div className="flex items-center gap-3 mb-8 ">
						<div className="h-[13px] w-[13px] rounded-full bg-black"></div>
						<h3 className="text-sm  ">COLLABORATIONS THAT DRIVE REAL CHANGE</h3>
					</div>

					<h1 className="text-6xl font-['PP_Neue_Machina_Inktrap_Medium']">
						Get In Touch
					</h1>
				</div>
				<div className="font-['PP_Neue_Machina_Inktrap_Medium'] lg:w-[50vw] w-[70vw] lg:p-20  mb-9 flex flex-col items-center gap-7 ">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor
						unde sapiente. Sunt voluptates consectetur aliquid eos reprehenderit
						amet eum quam laudantium, hic temporibus perferendis!
					</p>
				</div>
			</div>

			<div className="  lg:h-[70vh] w-[70vw] bg-blue-50 border mb-10 border-black lg:mx-[10rem] mx-12 rounded-xl">
				<div className="flex lg:flex-row gap-10 flex-col lg:p-20 py-10 justify-between">
					<div className="flex flex-col gap-2 text-center lg:w-1/3 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="64"
							height="64"
							fill="currentColor"
							className="ml-[5.5rem] mb-2"
						>
							<path d="M2 5.5V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z"></path>
						</svg>
						<h1 className="text-xl font-bold">Email</h1>
						<h6>s-mart@gmail.com</h6>
					</div>
					<div className="flex flex-col gap-2 text-center lg:w-1/3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="64"
							height="64"
							fill="currentColor"
							className="ml-[5.5rem] mb-2"
						>
							<path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
						</svg>
						<h1 className="text-xl font-bold">Phone</h1>
						<h6>+91 9876543210</h6>
					</div>
					<div className="flex flex-col gap-2 text-center lg:w-1/3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="64"
							height="64"
							fill="currentColor"
							className="ml-[5.5rem] mb-2"
						>
							<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
						</svg>
						<h1 className="text-xl font-bold">office</h1>
						<h6>
							B-33,1st floor,Kasturba Nagar,near Chetak Bridge, Bhopal, MP,
							462023
						</h6>
					</div>
				</div>
				<div>
					<Link href="https://www.google.com/maps/dir/23.2473031,77.4816688/Shivom+Securanation,+Choudhary+Villa,+B-33,+Sector+B,+Kasturba+Nagar,+Bhopal,+Madhya+Pradesh+462023/@23.2420372,77.4204466,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x397c4269e09fe1bf:0x680f5a969dc28a6c!2m2!1d77.4400797!2d23.232504?entry=ttu">
						<button
							type="button"
							className="lg:ml-[18rem] ml-4  flex items-center gap-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-bold rounded-lg  px-5 py-2.5 text-center me-2 mb-6"
						>
							Visit Us
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="30"
								height="30"
								fill="currentColor"
							>
								<path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
							</svg>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contactpage;
