const Card = () => {
  return (
    <div className="border rounded-lg border-[#252A25] w-full md:w-64 lg:w-72 h-96 min-h-[300px] p-6 flex flex-col">
      <div className="flex flex-col justify-between h-full">
        {/* Content Section */}
        <div className="flex-1">
          <h1 className="text-3xl mb-6 text-[#C8DA27]">Component 1</h1>
          <ol className="list-decimal space-y-4 pl-0 md:pl-4">
            <li className="">product</li>
            <li className="">product</li>
            <li className="">product</li>
          </ol>
        </div>

        {/* Button Section */}
        <div className="mt-8 flex ">
          <button className="bg-[#C8DA27] rounded-2xl text-black px-6 py-3 w-full hover:bg-[#b8ca1f] transition-colors">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
