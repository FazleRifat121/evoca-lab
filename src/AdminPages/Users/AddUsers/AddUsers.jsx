const AddUsers = () => {
  return (
    <div className=" min-h-screen md:min-h-0">
      <form className="max-w-4xl mx-auto p-6 space-y-6  ">
        {/* Name Section */}
        <div className="space-y-2">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#D9D9D9]"
            placeholder="Name"
          />
        </div>

        {/* Address Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
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
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">ZIP</label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              className="w-full px-3 py-2  rounded-md bg-base-300"
            />
          </div>
          {/* Gender & Email Frequency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="space-y-2 ">
              <label className="block text-sm font-medium mb-2">Gender</label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" />
                  Male
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" />
                  Female
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" />
                  Other
                </label>
              </div>
            </div>
            {/* Email Frequency */}
            <div className="space-y-2">
              <div className="flex flex-col  gap-2">
                <label className="text-sm font-medium whitespace-nowrap">
                  Email Frequency
                </label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    Daily
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    Weekly
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    Never
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Bio</label>
          <textarea className="w-full px-3 py-2  rounded-md bg-base-300 h-32"></textarea>
        </div>

        {/* Add User Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3  w-52 rounded-3xl bg-[#F4F4F4]  border"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
