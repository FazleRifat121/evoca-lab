import Card from "./Card";

const Cards = () => {
  return (
    <div className="max-w-screen mx-auto p-4 md:ml-10 xl:ml-20 mt-20 lg:mt-0 z-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3 ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Cards;
