const Add = ({ title }) => {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center my-10">
      <div className="btn md:w-[32rem] w-full btn-outline rounded-4xl bg-base-300 font-inter">
        <h1>Add {title}</h1>
      </div>
    </div>
  );
};

export default Add;
