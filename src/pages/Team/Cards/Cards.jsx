import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="max-w-screen mx-auto p-4 md:ml-10  mt-20 lg:mt-0  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
