const AddAppoinments = () => {
  return (
    <div>
      <form className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Name Section */}
        <div className="space-y-2">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#D9D9D9] "
            placeholder="Title"
          />
        </div>

        {/* Address Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium whitespace-nowrap">
              Address 1{" "}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium whitespace-nowrap">
              Address 2{" "}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">ZIP</label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
        </div>
        {/* third row  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">Time</label>
            <input
              type="Time"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">Duration</label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
        </div>
        {/* fourth row  */}
        <div className="grid grid-cols-1  ">
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">Organizer</label>
            <input
              type="option"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
        </div>

        {/* Add User Button */}
        <div className="flex justify-center md:justify-end">
          <button
            type="submit"
            className="px-6 py-3  w-52 rounded-3xl bg-[#F4F4F4]  border"
          >
            Add appoinment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAppoinments;
