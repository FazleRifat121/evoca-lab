import { Link } from "react-router";
import Add from "../../components/Add/Add";
import Search from "../../components/Search/Search";
import Table from "./Table/Table";

const Documents = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Link to={"/admin/addDocument"}>
        <Add title={"Document"}></Add>
      </Link>
      <Search></Search>
      <Table></Table>
    </div>
  );
};

export default Documents;
