const Search = () => {
	return (
		<form className="lg:max-w-md lg:mx-4 lg:my-6">
			<label
				for="default-search"
				className="lg:mb-2  lg:text-sm lg:font-medium lg:text-gray-900 sr-only lg:dark:text-white"
			>
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="search"
					id="default-search"
					className="lg:block lg:w-full lg:p-4 lg:ps-10 lg:text-sm lg:text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:focus:ring-blue-500 lg:focus:border-blue-500 lg:dark:bg-gray-700 lg:dark:border-gray-600 lg:dark:placeholder-gray-400 lg:dark:text-white lg:dark:focus:ring-blue-500 lg:dark:focus:border-blue-500"
					placeholder="Search Hostels & PGs..."
					required
				/>
				<button
					type="submit"
					className="lg:text-white lg:absolute lg:end-2.5 lg:bottom-2.5 lg:bg-[#D19C0A] lg:hover:bg-[#a07603] lg:focus:ring-4 lg:focus:outline-none lg:focus:ring-blue-300 lg:font-medium lg:rounded-lg lg:text-sm lg:px-4 lg:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Search
				</button>
			</div>
		</form>
	);
};

export default Search;
