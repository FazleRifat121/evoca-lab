const Form = () => {
  return (
    <div className="max-w-5xl mx-5 lg:mx-auto mt-10 lg:mt-0  lg:mb-0">
      <form action="" method="post" className="space-y-5">
        <div className="lg:space-x-5 flex items-center flex-col lg:flex-row space-y-5 lg:space-y-0">
          <input
            type="text"
            placeholder="Name"
            className="input-group border border-gray-600 bg-[#1C1D1C] p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="input-group border border-gray-600 bg-[#1C1D1C] p-2 rounded md:w-56 w-full"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Phone"
            className="input-group border border-gray-600 bg-[#1C1D1C] p-2 rounded w-full"
          />
        </div>
        <div>
          <textarea
            className="w-full px-3 py-2 md:px-4 md:py-2.5 border border-gray-600 bg-[#1C1D1C] rounded focus:ring-2 focus:ring-blue-500 h-32 md:h-40 text-sm md:text-base"
            required
            placeholder="Message"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-[#C8DA27] text-white py-2.5 md:py-3 px-6 rounded-lg hover:bg-[#c8da278f] transition-colors font-medium text-sm md:text-base"
          >
            Save Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
