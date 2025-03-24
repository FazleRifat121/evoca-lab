import { PiNotePencil } from "react-icons/pi";
import { ImBin } from "react-icons/im";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table border-separate border-spacing-y-4 w-full min-w-[600px]">
        {/* head */}
        <thead>
          <tr className="text-lg text-black border-0">
            <th className="px-4 py-2 text-left">Doctor Name</th>
            <th className="px-4 py-2 text-left">Doctor Specialty</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="border-0">
            <td className="bg-base-300 rounded-l-3xl border-r border-[#C0C0C0] px-4 py-2 text-nowrap">
              Add Your Name
            </td>
            <td className="bg-base-300 px-4 py-2 text-nowrap rounded-r-3xl">
              Add your Specialty
            </td>
            <td className=" flex items-center gap-2 text-[#96C93B] px-4 py-2">
              <PiNotePencil className="text-2xl shadow-sm cursor-pointer" />
              <ImBin className="text-2xl shadow-sm cursor-pointer p-1" />
            </td>
          </tr>
          {/* row 2 */}
          <tr className="border-0">
            <td className="bg-base-300 rounded-l-3xl border-r border-[#C0C0C0] px-4 py-2 text-nowrap">
              Add Your Name
            </td>
            <td className="bg-base-300 px-4 py-2 text-nowrap rounded-r-3xl">
              Add your Specialty
            </td>
            <td className=" flex items-center gap-2 text-[#96C93B] px-4 py-2">
              <PiNotePencil className="text-2xl shadow-sm cursor-pointer" />
              <ImBin className="text-2xl shadow-sm cursor-pointer p-1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
