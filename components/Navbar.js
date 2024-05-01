"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white lg:fixed lg:w-full lg:z-20 lg:top-0 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="h-16 flex items-center justify-between">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link href="/">
								<Image
									src="/media/logoimage.jpeg"
									alt="logo"
									height={110}
									width={110}
								/>
							</Link>
						</div>
					</div>
					<div className="hidden md:block ">
						<div className="ml-4 flex items-center space-x-3">
							<Link
								href="/"
								className="text-black hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
							>
								HOME-1
							</Link>
							<Link
								href="/About"
								className="text-black hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
							>
								ABOUT
							</Link>
							<Link
								href="/Services"
								className="text-black hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
							>
								FEATURES
							</Link>
							<Link
								href="/Find"
								className="text-black hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
							>
								FIND PGs & HOSTEL
							</Link>
							<Link
								href="/Contact"
								className="text-black hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
							>
								CONTACT
							</Link>
						</div>
					</div>
					<div className="block">
						<button
							type="button"
							className="text-white mt-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
						>
							GET APP
						</button>
					</div>

					<div className="md:hidden flex items-center">
						<button
							className="inline-flex items-center justify-center rounded-md p-2 bg-gray-100 text-black  hover:text-black focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-black"
							onClick={toggleNavbar}
						>
							{isOpen ? (
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							href="/"
							className="text-black block hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
						>
							HOME
						</Link>
						<Link
							href="/About"
							className="text-black block hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
						>
							ABOUT
						</Link>
						<Link
							href="/Services"
							className="text-black block hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
						>
							FEATURES
						</Link>
						<Link
							href="/Find"
							className="text-black block hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
						>
							FIND PGs & HOSTEL
						</Link>
						<Link
							href="/Contact"
							className="text-black block hover:text-orange-700 rounded-lg p-2 hover:underline hover:underline-offset-4"
						>
							CONTACT
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
export default Navbar;
