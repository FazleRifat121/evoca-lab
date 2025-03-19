import { useState } from "react";

const BannerSlider = () => {
  const [activeCard, setActiveCard] = useState(2);

  const cards = [
    {
      id: 1,
      title: "02",
      content:
        "Lorem Ipsum simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "01",
      content:
        "Lorem Ipsum simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "03",
      content:
        "Lorem Ipsum simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-20 justify-center items-center h-[60dvh] ">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`transition-all duration-300 ease-in-out p-6 rounded-lg cursor-pointer w-full md:w-[417px] h-[335px] flex flex-col justify-around ${
            activeCard === card.id
              ? "bg-lime-400 md:scale-110 text-black"
              : "bg-linear-0 from-[#3D4D3D] to-[#1C1D1C] text-gray-300"
          }`}
          onClick={() => setActiveCard(card.id)}
        >
          <h2 className="text-2xl font-bold">{card.title}</h2>
          <p className="mt-2">{card.content}</p>
          {activeCard === card.id && (
            <p className="mt-4 font-semibold">Learn more →</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
