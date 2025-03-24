import { PiNotePencil } from "react-icons/pi";
import { ImBin } from "react-icons/im";

const Table = () => {
  return (
    <div>
      <table className="table border-separate border-spacing-y-4">
        {/* head */}
        <thead>
          <tr className="text-xl text-black border-0">
            <th>Documnet Name</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="border-0">
            <td className="bg-base-300 rounded-3xl px-4 py-2 w-full">
              Document name
            </td>

            <td className="flex items-center gap-2 text-[#96C93B]">
              <PiNotePencil className="text-3xl shadow-sm cursor-pointer" />
              <ImBin className="text-3xl shadow-sm cursor-pointer p-1" />
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="bg-base-300 rounded-3xl px-4 py-2 row-span-2">
              Document name
            </td>

            <td className="flex items-center gap-2 text-[#96C93B]">
              <PiNotePencil className="text-3xl shadow-sm cursor-pointer" />
              <ImBin className="text-3xl shadow-sm cursor-pointer p-1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
