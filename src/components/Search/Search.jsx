import { IoSearchOutline } from "react-icons/io5";
const Search = () => {
  return (
    <div>
      <div className="relative z-0">
        <input
          type="text"
          className="bg-base-300 focus:outline-none w-full  md:w-80 py-3 rounded-lg "
          placeholder="   Search all Columns...."
        />
        <IoSearchOutline className="absolute top-3 sm:left-64 xs:left-52 md:left-72 text-2xl" />
      </div>
    </div>
  );
};

export default Search;
