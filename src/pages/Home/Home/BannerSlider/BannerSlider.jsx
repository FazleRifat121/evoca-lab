import { useState } from "react";

const BannerSlider = () => {
  const [activeCard, setActiveCard] = useState(2);

  const cards = [
    {
      id: 1,
      title: "02",
      content: "Lorem Ipsum simply dummy text...",
    },
    {
      id: 2,
      title: "01",
      content: "Lorem Ipsum simply dummy text...",
    },
    {
      id: 3,
      title: "03",
      content: "Lorem Ipsum simply dummy text...",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-20 justify-center items-center h-[60dvh] mt-10 mb-50 md:mb-20">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`transition-all duration-300 ease-in-out p-6 rounded-lg cursor-pointer w-full md:w-[417px] h-[335px] flex flex-col justify-around
            ${
              activeCard === card.id
                ? "bg-[#C8DA27] md:scale-110 text-black"
                : "bg-linear-0 from-[#3D4D3D] to-[#1C1C1D] text-gray-300"
            }
            ${card.id === 2 ? "order-1 md:order-2" : ""}
            ${card.id === 1 ? "order-2 md:order-1" : ""}
            ${card.id === 3 ? "order-3 md:order-3" : ""}
          `}
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
