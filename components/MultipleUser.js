import Image from "next/image";
import React from "react";

const MultipleUser = () => {
	return (
		<div className="flex lg:flex-row flex-col items-center justify-between w-full lg:p-10 font-['PP_Neue_Machina_Inktrap_Medium'] text-cyan-900">
			<div className="lg:w-1/2 w-full">
				<h1 className="text-5xl  font-semibold p-10 ">Multiple Users</h1>
				<h3 className="text-2xl  font-semibold pb-5 px-10">
					Lorem, ipsum dolor.
				</h3>
				<p className="text-sm  font-semibold px-10 ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
					architecto, harum asperiores cupiditate vel minus placeat minima animi
					voluptatem aliquid mollitia magni impedit veritatis iste iusto, velit
					laboriosam nesciunt alias!
				</p>
			</div>
			<div className=" lg:w-1/2 w-full bg-[#FDFDFD]">
				<Image
					src="/media/poster1.jpg"
					alt="poster-5"
					height={900}
					width={900}
					className="pt-20"
				/>
			</div>
		</div>
	);
};

export default MultipleUser;
