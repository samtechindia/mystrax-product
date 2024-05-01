import React from "react";

const Footer = () => {
	return (
		<div>
			<div
				className="container newsletter mt-5 wow fadeIn "
				data-wow-delay="0.1s"
			>
				<div className="row justify-content-center">
					<div className="col-lg-10 border rounded p-1">
						<div className="border rounded text-center p-1">
							<div className="bg-white rounded text-center p-5">
								<h4 className="mb-4 font-bold text-xl">
									Subscribe Our &nbsp;
									<span className="text-[#FEA116] text-uppercase">
										Newsletter
									</span>
								</h4>
								<div className="position-relative mx-auto max-w-[400px]">
									<input
										className="form-control w-100 py-3 ps-4 pe-5"
										type="text"
										placeholder="Enter your email"
									/>
									<button
										type="button"
										className="btn bg-[#FEAF39] hover:bg-[#feaf39ee] uppercase font-semibold text-white py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
									>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="container-fluid bg-dark text-white footer wow fadeIn"
				data-wow-delay="0.1s"
			>
				<div className="container pb-5">
					<div className="row g-5 pt-5">
						<div className="col-md-6 col-lg-4">
							<div className="bg-[#FEA116] rounded p-4">
								<a href="index.html">
									<h1 className="text-white text-uppercase mb-3">Hotelier</h1>
								</a>
								<p className="text-white mb-0">
									Download
									<a className="text-dark fw-medium" href="/">
										Hotelier – Premium Version
									</a>
									, build a professional website for your hotel business and
									grab the attention of new visitors upon your site’s launch.
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 flex flex-col items-start ">
							<h6 className="section-title text-start text-[#FEA116] text-uppercase mb-4">
								Contact
							</h6>
							<div className="mb-3 flex gap-2 items-center ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="currentColor"
									className="w-[4rem]"
								>
									<path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
								</svg>
								<h6 className="text-sm">
									B-33, 1st floor, Kasturba Nagar, Near Chetak Bridge,
									Bhopal-462023
								</h6>
							</div>
							<div className="mb-2 flex gap-2 items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="currentColor"
									className="w-[1.5rem]"
								>
									<path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
								</svg>
								<h6 className="text-sm">
									0755-493-7957, <br /> +91-77709-63303, <br /> 91-76979-80782
								</h6>
							</div>
							<div className="my-3 flex gap-2 items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="currentColor"
									className="w-[1.5rem] "
								>
									<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
								</svg>
								<h6 className="text-sm">contact@shivomsecuranation.com</h6>
							</div>

							<div className="d-flex gap-2 pt-2">
								<a className="btn btn-outline-light btn-social" href="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										fill="currentColor"
									>
										<path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
									</svg>
								</a>

								<a className="btn btn-outline-light btn-social" href="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										fill="currentColor"
									>
										<path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
									</svg>
								</a>

								<a className="btn btn-outline-light btn-social" href="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										fill="currentColor"
									>
										<path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
									</svg>
								</a>

								<a className="btn btn-outline-light btn-social" href="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										fill="currentColor"
									>
										<path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
									</svg>
								</a>
							</div>
						</div>

						<div className="col-lg-5 col-md-12 ">
							<div className="row gy-5 g-4">
								<div className="col-md-6 flex flex-col items-start">
									<h6 className="section-title text-start text-[#FEA116] text-uppercase mb-4">
										Company
									</h6>
									<a
										className="btn  text-white text-sm flex items-center gap-1"
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">About Us</h6>
									</a>
									<a
										className="btn  text-white text-sm flex items-center gap-1"
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">Contact Us</h6>
									</a>
									<a
										className="btn text-white text-sm flex items-center gap-1 "
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">Privacy Policy</h6>
									</a>
									<a
										className="btn  text-white text-sm flex items-center gap-1 "
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">Terms & Condition</h6>
									</a>
									<a
										className="btn  text-white text-sm flex items-center gap-1"
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">Support</h6>
									</a>
								</div>

								<div className="col-md-6 flex flex-col items-start">
									<h6 className="section-title text-[#FEA116] text-start text-uppercase mb-4">
										Services
									</h6>
									<a
										className="btn text-white text-sm flex items-center gap-1"
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">Food & Restaurant</h6>
									</a>
									<a
										className="btn text-white text-sm flex items-center gap-1"
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">Spa & Fitness</h6>
									</a>
									<a
										className="btn text-white text-sm flex items-center gap-1"
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">Sports & Gaming</h6>
									</a>
									<a
										className="btn text-white text-sm flex items-center gap-1"
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">Event & Party</h6>
									</a>
									<a
										className="btn text-white text-sm flex items-center gap-1"
										href=""
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
										</svg>
										<h6 className="hover:animate-pulse">GYM & Yoga</h6>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="copyright">
						<hr />
						<div className="row py-4">
							<div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
								&copy;
								<a className="border-bottom" href="#">
									S-mart Hostel
								</a>
								, All Right Reserved.
								{/* *** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** */}
								{/* Designed By link : https://htmlcodex.com */}
								<a className="border-bottom" href="/">
									{/* HTML Codex */}
								</a>
							</div>
							<div className="col-md-6 text-center text-md-end">
								<div className="footer-menu flex items-center justify-end ">
									<a href="" className="px-3 border-r ">
										Home
									</a>
									<a href="" className="px-3 border-r ">
										Cookies
									</a>
									<a href="" className="px-3 border-r ">
										Help
									</a>
									<a href="" className="px-3 ">
										FQAs
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
