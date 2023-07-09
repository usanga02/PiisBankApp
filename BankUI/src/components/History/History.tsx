
import Sidebar from "../Siderbar/Sidebar";
import BasicTable from "../Table/Table";
import "./History.css";

const History = () => {
  return (
    <div className="Appp">
      <div className="AppGlass">
        <Sidebar />
        <div className="tableH">
            <BasicTable />
        </div>
    </div>
      </div>
  );
};

export default History;