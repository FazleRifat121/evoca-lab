import Card from "./Card";

const Table = () => {
  return (
    <div className="mt-5">
      <h1 className="text-3xl font-medium">User Name</h1>
      <div className="mt-5 space-y-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Table;
