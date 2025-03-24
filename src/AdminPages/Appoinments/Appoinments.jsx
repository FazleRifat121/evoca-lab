import { Link } from "react-router";
import Add from "../../components/Add/Add";
import Search from "../../components/Search/Search";
import Table from "./Table/Table";

const Appoinments = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Link to={"/admin/AddAppoinment"}>
        <Add title={"Appoinment"}></Add>
      </Link>
      <Search></Search>
      <Table></Table>
    </div>
  );
};

export default Appoinments;
