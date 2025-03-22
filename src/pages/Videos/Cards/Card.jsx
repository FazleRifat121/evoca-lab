import vid from "../../../assets/Videos/Electro-Light - Symbolism - Trap - NCS - Copyright Free Music.mp4";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <video
            className="w-full h-auto rounded-xl shadow-xl"
            controls
            playsInline
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Video Title</h2>
          <p>Video description</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
