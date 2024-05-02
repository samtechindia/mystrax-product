import Image from "next/image";
import React from "react";

const Subscription = () => {
	return (
		<div>
			<section className="bg-white dark:bg-gray-900 relative">
				<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
					<div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
						<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white font-['PP_Neue_Machina_Inktrap_Medium']">
							Explore our Subscription plans
						</h2>
					</div>
					<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
						<div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
							<h3 className="mb-4 text-2xl font-semibold rounded p-7 bg-blue-400 hover:bg-blue-900 hover:text-white">
								S-mart Basic
							</h3>

							<div className="flex items-baseline justify-center my-8">
								<span className="mr-2 text-5xl font-extrabold">Rs. 19.00</span>
								<span className="text-gray-500 dark:text-gray-400">/year</span>
							</div>

							<ul role="list" className="mb-8 text-xs space-y-4 text-left">
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart room and seats management</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart digital expenses records</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart billing for rent collection</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart registration system for your tenant</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Manage property on your finger tip.</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Monitor your business analytics.</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Customer support</span>
								</li>
							</ul>
							<button
								type="button"
								className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
							>
								Get Started
							</button>
						</div>

						<div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
							<h3 className="mb-4 text-2xl font-semibold bg-slate-400 rounded p-7 hover:bg-slate-500 hover:text-white">
								S-mart Silver
							</h3>

							<div className="flex items-baseline justify-center my-8">
								<span className="mr-2 text-5xl font-extrabold">Rs. 21.25</span>
								<span className="text-gray-500 dark:text-gray-400 ">/year</span>
							</div>

							<ul role="list" className="mb-8 text-xs space-y-3 text-left">
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart report, share and downloads</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart tenant app for S-mart communication</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>One S-mart app for manage multi businesses</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart lead manager for better follow ups</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart tenant rent collection through APP</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										Add and manage employees records, attendance and roles
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										Super S-mart registration, expenses & sales management
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Make offers and improve your business </span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Highly secure google cloud backup</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										Everything from S-mart basics with advanced customer support
									</span>
								</li>
							</ul>
							<button
								type="button"
								className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
							>
								Get Start
							</button>
						</div>

						<div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
							<h3 className="mb-4 text-2xl font-semibold bg-yellow-500 rounded p-7 hover:bg-yellow-700  hover:text-white">
								S-mart Gold
							</h3>

							<div className="flex items-baseline justify-center my-8">
								<span className="mr-2 text-5xl font-extrabold">Rs.95.00</span>
								<span className="text-gray-500 dark:text-gray-400">/years</span>
							</div>

							<ul role="list" className="mb-8 space-y-4 text-left text-xs">
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart verification of tenant and employee</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart electricity billing manager.</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Super S-mart food menu and stock management</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart social leads, no worry to vacant seats</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>S-mart auto billing and take payment by app.</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										Online business platform, increase business with less effort
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Multi themes and Languages for friendly use</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Updates on whatsapp, easy work flow.</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Everything from S-mart Silver</span>
								</li>
							</ul>
							<button
								type="button"
								className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
							>
								Get Started
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Subscription;
