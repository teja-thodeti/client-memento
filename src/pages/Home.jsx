import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import "../styles/Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="h-page">
            <div className="h-container-navbar">
                <Button
                    className="h-button-login"
                    onClick={() => navigate("/login")}
                    name="Login"
                />

                <Button
                    className="h-button-register"
                    onClick={() => navigate("/Register")}
                    name="Register"
                />
            </div>

            <div className="h-container-body" />
        </div>
    );
}

export default Home;
