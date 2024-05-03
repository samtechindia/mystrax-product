import React from "react";

const Tenant = () => {
	return (
		<div className=" w-full h-full lg:bg-[#FFF9F4]    lg:flex lg:items-center lg:justify-center ">
			<div>
				<div className="lg:text-center">
					<h1 className="font-bold mt-[1rem]  text-orange-900 text-center  text-4xl font-['PP_Neue_Machina_Inktrap_Medium']">
						Experience smarter living with S-mart
					</h1>
					<h3 className="w-[80vw] lg:w-full pl-[4rem]  pb-6 pt-1 lg:text-lg text-sm text-center text-orange-900">
						Where convenience and comfort set you apart
					</h3>
				</div>
				<div className="container relative flex flex-col justify-between  max-w-6xl px-10 mx-auto xl:px-0 ">
					<div className="w-full">
						<div className="flex flex-col lg:flex-row gap-9 w-full mb-10 ">
							<div className="w-full lg:h-[15rem] sm:w-1/2">
								<div className="relative h-full ml-0 md:mr-10">
									<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#1A5155] rounded-lg"></span>
									<div className="relative h-full p-4 bg-white border-2 border-[#1A5155] rounded-lg">
										<div className="flex items-center -mt-1">
											<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
												Easy Payments
											</h3>
										</div>
										<p className="mt-3 mb-1 text-xs font-medium lg:text-[#1A5155] lg:uppercase">
											------------
										</p>
										<p className="mb-2 lg:text-gray-600">
											Now, effortlessly pay through our app's seamless feature.
											Enjoy convenience at your fingertips for smoother
											transactions, hassle-free.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full lg:h-[15rem] sm:w-1/2">
								<div className="relative h-full ml-0 md:mr-10">
									<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
									<div className="relative h-full p-4 bg-white border-2 border-green-500 rounded-lg">
										<div className="flex items-center -mt-1">
											<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
												Easy Complaints
											</h3>
										</div>
										<p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
											------------
										</p>
										<p className="mb-2 text-gray-600">
											Now, effortlessly lodge complaints through our S-Mart app
											tailored for tenants' needs. From room maintenance to food
											quality, report any issues promptly for swift resolution,
											ensuring a comfortable living experience.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-full mb-5 sm:flex-row">
							<div className="w-full mb-10 sm:mb-0 sm:w-1/2">
								<div className="relative h-full ml-0 mr-0 sm:mr-10">
									<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
									<div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
										<div className="flex items-center -mt-1">
											<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
												Daily Delights
											</h3>
										</div>
										<p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
											------------
										</p>
										<p className="mb-2 text-gray-600">
											Discover your daily dining destiny with our app's
											personalized meal recommendations. From breakfast to
											dinner, never wonder what's on the menu again - it's all
											at your fingertips.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full mb-10 sm:mb-0 sm:w-1/2">
								<div className="relative h-full ml-0 mr-0 sm:mr-10">
									<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
									<div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
										<div className="flex items-center -mt-1">
											<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
												Effortless Communication
											</h3>
										</div>
										<p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
											------------
										</p>
										<p className="mb-2 text-gray-600">
											Stay connected effortlessly! With our S-Mart Tenant app,
											notify us easily about delays, departures, or your return
											home, ensuring seamless communication and peace of mind.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full sm:w-1/2">
								<div className="relative h-full ml-0 md:mr-10">
									<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-700 rounded-lg"></span>
									<div className="relative h-full p-5 bg-white border-2 border-orange-700 rounded-lg">
										<div className="flex items-center -mt-1">
											<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
												Payment Reminder
											</h3>
										</div>
										<p className="mt-3 mb-1 text-xs font-medium text-orange-700 uppercase">
											------------
										</p>
										<p className="mb-2 text-gray-600">
											Never miss a payment deadline again! With our S-Mart
											Tenant app, enjoy the convenience of timely reminders for
											seamless rent payments, ensuring peace of mind and
											hassle-free transactions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tenant;
