import {useState} from "react";
import Addcard from "../components/addcard";
import "../styles/Dashboard.css";

function Dashboard() {
    const [showpopup, setShowpopup] = useState(false);
    return (
        <>
            <div className="d-container-analytics">
            </div>
            <div className="d-divider"></div>

            <div className="d-container-cards">
                <div className="d-container-addcard">
                    <Addcard
                        className="d-addcard"
                        onClick={() => setShowpopup(true)}
                    ></Addcard>
                </div>
            </div>
        </>
    );
}

export default Dashboard;