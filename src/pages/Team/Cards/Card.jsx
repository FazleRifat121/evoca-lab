const Card = ({ item }) => {
  const { name, img, position, description } = item;
  return (
    <div>
      <div className="card border border-[#1C1D1C] rounded-xl w-full lg:w-72 h-96 shadow-sm ">
        <figure className="px-10 pt-10 mt-5">
          <img src={img} alt={name} className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title text-sm">{position}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
