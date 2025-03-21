import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Card = ({ item }) => {
  const { name, img, profession, description, rating } = item;

  return (
    <div className="max-w-sm bg-[#090A09] rounded-xl p-8 space-y-6 hover:shadow-lg transition-shadow">
      {/* Client Info */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={img} alt={name} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="font-medium text-[#C8DA27]">{profession}</p>
        </div>
        <div>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
