import Add from "../../components/Add/Add";
import Search from "../../components/Search/Search";

const Appoinments = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Add title={"Appoinment"}></Add>
      <Search></Search>
    </div>
  );
};

export default Appoinments;
