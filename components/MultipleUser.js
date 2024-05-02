import Image from "next/image";
import React from "react";

const MultipleUser = () => {
	return (
		<div>
			<div className="flex flex-col items-center font-['PP_Neue_Machina_Inktrap_Medium'] text-cyan-900">
				<h1 className="text-5xl  font-semibold pt-4  text-center ">
					Multiple Users
				</h1>
				<h3 className="text-sm  font-semibold p-2">Lorem, ipsum dolor.</h3>
			</div>
			<div className="flex lg:flex-row flex-col items-center justify-between w-full lg:px-10 font-['PP_Neue_Machina_Inktrap_Medium'] text-cyan-900">
				<div className="lg:w-1/3 w-full flex flex-col gap-3 ">
					
					<div className="shadow ml-3 bg-[#f4fcff] hover:bg-cyan-600 hover:text-white hover:ease-in-out w-[20rem] border-2 rounded-lg border-[#9CCDD5] p-4 ">
						<p className="text-sm  font-semibold  ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							architecto
						</p>
					</div>
					<div className="shadow ml-3 bg-[#f4fcff] hover:bg-cyan-600 hover:text-white hover:ease-in-out w-[20rem] border-2 rounded-lg border-[#9CCDD5] p-4 ">
						<p className="text-sm  font-semibold  ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							architecto
						</p>
					</div>
					<div className="shadow ml-3 bg-[#f4fcff] hover:bg-cyan-600 hover:text-white hover:ease-in-out w-[20rem] border-2 rounded-lg border-[#9CCDD5] p-4 ">
						<p className="text-sm  font-semibold  ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							architecto
						</p>
					</div>
				</div>
				<div className=" lg:w-2/3 w-full bg-[#FDFDFD]">
					<Image
						src="/media/poster1.jpg"
						alt="poster-5"
						height={900}
						width={900}
					/>
				</div>
			</div>
		</div>
	);
};

export default MultipleUser;
