import { FaAngleDown } from "react-icons/fa6";
const AddDocument = () => {
  return (
    <div>
      <form className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Name Section */}
        <div className="space-y-2">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#D9D9D9] "
            placeholder="Document"
          />
        </div>

        <div className="grid grid-cols-1 ">
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium whitespace-nowrap">
              Document type
            </label>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn w-32 m-1 flex justify-end"
              >
                <FaAngleDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Insurance Coverage</a>
                </li>
                <li>
                  <a>Formulary</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add User Button */}
        <div className="flex justify-center ">
          <button
            type="submit"
            className="px-6 py-3  w-52 rounded-3xl bg-[#F4F4F4]  border"
          >
            File Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDocument;
