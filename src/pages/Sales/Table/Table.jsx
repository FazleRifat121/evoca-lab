const Table = () => {
  return (
    <div>
      <div className="my-5 font-medium">
        <h1 className="text-2xl lg:text-4xl">Sales Details</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0  text-center text-white">
          <thead>
            <tr>
              {/* First header cell */}
              <th
                className="px-4 py-5 text-sm font-semibold 
                border-t border-l border-b border-[#252A25]
                rounded-tl-2xl"
              >
                Item
              </th>

              {/* Middle header cell */}
              <th
                className="px-4 py-5 text-sm font-semibold 
                border border-[#252A25]"
              >
                Description
              </th>

              {/* Last header cell */}
              <th
                className="px-4 py-5 text-sm font-semibold 
                border-t border-r border-b border-[#252A25]
                rounded-tr-2xl"
              >
                Fee
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-7 text-sm border  border-[#252A25]  border-l-0"></td>
              <td className="px-4 py-7 text-sm  border border-[#252A25]"></td>
              <td className="px-4 py-7 text-sm border border-[#252A25] border-r-0"></td>
            </tr>
            <tr>
              <td className="px-4 py-7 text-sm border border-[#252A25] border-l-0"></td>
              <td className="px-4 py-7 text-sm  border border-[#252A25]"></td>
              <td className="px-4 py-7 text-sm border border-[#252A25] border-r-0"></td>
            </tr>
            <tr>
              <td className="px-4 py-7 text-sm border border-[#252A25] border-l-0"></td>
              <td className="px-4 py-7 text-sm  border border-[#252A25]"></td>
              <td className="px-4 py-7 text-sm border border-[#252A25] border-r-0"></td>
            </tr>
            <tr>
              <td className="px-4 py-7 text-sm border border-[#252A25] border-l-0"></td>
              <td className="px-4 py-7 text-sm  border border-[#252A25]"></td>
              <td className="px-4 py-7 text-sm border border-[#252A25] border-r-0"></td>
            </tr>
            <tr>
              <td className="px-4 py-5 text-sm "></td>
              <td className="px-4 py-5 text-sm   text-right">Total</td>
              <td className="px-4 py-5 text-sm  "></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
