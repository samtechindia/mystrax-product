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
		<div class="  lg:fixed lg:top-0 z-50 container-fluid bg-dark px-0">
			<div class="row gx-0">
				<div class="col-lg-3 bg-dark d-none d-lg-block">
					<a
						href="/"
						class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
					>
						<Image
							src="/media/smart-hostel-PG-02.png"
							alt="logo"
							height={100}
							width={200}
						/>
					</a>
				</div>
				<div class="col-lg-9">
					<div class="row gx-0 bg-white d-none d-lg-flex">
						<div class="col-lg-7 px-5 text-start">
							<div class="h-100 d-inline-flex align-items-center py-2 me-4">
								<i class="fa fa-envelope text-primary me-2"></i>
								<p class="mb-0">shivom@gmail.com</p>
							</div>
							<div class="h-100 d-inline-flex align-items-center py-2">
								<i class="fa fa-phone-alt text-primary me-2"></i>
								<p class="mb-0">+91-7879868904</p>
							</div>
						</div>
						<div class="col-lg-5 px-5 text-end">
							<div class="d-inline-flex align-items-center py-2">
								<a class="me-3" href="/CommingSoon">
									<Image
										src="/media/googlePlay.png"
										alt=""
										height={20}
										width={100}
									/>
								</a>
								<a class="me-3" href="/CommingSoon">
									<Image
										src="/media/appStore.png"
										alt=""
										height={20}
										width={100}
									/>
								</a>
							</div>
						</div>
					</div>

					<nav class="navbar navbar-expand-lg bg-dark navbar-dark text-white p-3 p-lg-0">
						<div className="flex items-center justify-between gap-[30vw]">
							<a href="/" class="navbar-brand d-block d-lg-none">
								<Image
									src="/media/smart-hostel-PG-02.png"
									alt="logo"
									height={80}
									width={140}
								/>
							</a>
							<button
								type="button"
								class="navbar-toggler"
								// data-bs-toggle="collapse"
								// data-bs-target="#navbarCollapse"
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

						<div className="hidden lg:flex items-center gap-[11.7rem]">
							<div className="flex items-center gap-5 justify-center  ml-10 ">
								<Link className="hover:text-orange-500 outline-none" href="/">
									Home
								</Link>
								<Link
									className="hover:text-orange-500 outline-none"
									href="/About"
								>
									About
								</Link>
								<Link
									className="hover:text-orange-500 outline-none"
									href="/Services"
								>
									Features
								</Link>
								<Link
									className="hover:text-orange-500 outline-none"
									href="/Find"
								>
									Find PGs & Hostels
								</Link>
								<Link
									className="hover:text-orange-500 outline-none"
									href="/Contact"
								>
									Contact
								</Link>
							</div>
							<div className="bg-orange-500 text-white  py-[1.2rem] px-[1.83rem]">
								<button>Premium</button>
							</div>
						</div>

						{isOpen && (
							<div className="md:hidden">
								<div className="px-2 pt-2  pb-3 space-y-1 sm:px-3">
									<Link
										href="/"
										className="text-white font-semibold block hover:text-orange-700 rounded-lg p-2"
									>
										HOME
									</Link>
									<Link
										href="/About"
										className="text-white font-semibold block hover:text-orange-700 rounded-lg p-2 "
									>
										ABOUT
									</Link>
									<Link
										href="/Services"
										className="text-white font-semibold block hover:text-orange-700 rounded-lg p-2 "
									>
										FEATURES
									</Link>
									<Link
										href="/Find"
										className="text-white font-semibold block hover:text-orange-700 rounded-lg p-2 "
									>
										FIND PGs & HOSTEL
									</Link>
									<Link
										href="/Contact"
										className="text-white font-semibold block hover:text-orange-700 rounded-lg p-2 "
									>
										CONTACT
									</Link>
								</div>
							</div>
						)}
					</nav>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
