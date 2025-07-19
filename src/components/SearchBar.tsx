const SearchBar = () => {
  return (
    <div className="flex h-[60px] w-full gap-5">
      <div className="shadow-custom flex w-full items-center justify-between gap-3 rounded-[20px] bg-white/10 pl-6 backdrop-blur-2xl">
        <div className="flex flex-col text-black/40">
          <label htmlFor="search-input" className="text-[10px]">
            Country
          </label>
          <input
            type="text"
            id="search-input"
            placeholder="Enter country or city"
            className="border-none bg-transparent text-black outline-none placeholder:text-black/40"
          />
        </div>
      </div>
      <button className="bg-purple-custom flex-center h-[60px] w-[60px] cursor-pointer rounded-[20px] border-none text-white transition-all duration-300 ease-in-out">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
