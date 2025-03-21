// Form.jsx
const Form = () => {
  return (
    <div className="max-w-5xl px-4 lg:mx-auto mt-8 lg:mt-0 lg:mb-0 w-full">
      <form action="" method="post" className="space-y-4 md:space-y-6">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-600 bg-[#1C1D1C] p-3 md:p-4 rounded-lg focus:ring-2 focus:ring-[#C8DA27]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full lg:w-auto lg:flex-1 border border-gray-600 bg-[#1C1D1C] p-3 md:p-4 rounded-lg focus:ring-2 focus:ring-[#C8DA27]"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-600 bg-[#1C1D1C] p-3 md:p-4 rounded-lg focus:ring-2 focus:ring-[#C8DA27]"
          />
        </div>
        <div>
          <textarea
            className="w-full border border-gray-600 bg-[#1C1D1C] p-3 md:p-4 rounded-lg focus:ring-2 focus:ring-[#C8DA27] h-40 md:h-48"
            placeholder="Message"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-[#C8DA27] text-black py-3 md:py-4 px-8 rounded-lg hover:bg-[#c8da278f] transition-colors font-medium text-md md:text-lg"
          >
            Save Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
