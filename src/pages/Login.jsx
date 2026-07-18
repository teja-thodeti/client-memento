import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import "../styles/Login.css";
import Button from "../components/button";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function loginclick() {

        if (!email || !password) {
            setError("Please enter your email and password");
            return;
        }

        setError("");

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email: email,
                    password: password
                }
            );

            // Save JWT token
            localStorage.setItem("token", response.data.token);

            // Optional: Save user details
            localStorage.setItem("user", JSON.stringify(response.data.user));

            alert(response.data.message);

            // Go to Dashboard
            navigate("/Dashboard");

        } catch (err) {

            console.log(err);

            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("Cannot connect to server");
            }

        }
    }

    return (
        <div className="login-page">

            <video autoPlay loop muted playsInline className="background-video">
                <source src="/y.mp4" type="video/mp4" />
            </video>

            <div className="container-login">

                <span className="pass-eyebrow">Member access</span>

                <h1 className="header-login">
                    Login
                </h1>

                <div className="pass-divider"></div>

                <div className={`container-error ${error ? "has-error" : ""}`}>
                    {error && <p className="paragraph-error">{error}</p>}
                </div>

                <div className="container-email-row">
                    <Input
                        className="input-email"
                        label="Email Id:"
                        type="email"
                        placeholder="Type in your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="container-password-row">
                    <Input
                        className="input-password"
                        label="Password:"
                        type="password"
                        placeholder="Type in your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="container-button">
                    <Button
                        className="button-login"
                        name="Login"
                        onClick={loginclick}
                    />
                </div>

                <p className="paragraph-dha">
                    Don't have an account?{" "}
                    <Link to="/Register">Register</Link>.
                </p>

            </div>
        </div>
    );
}

export default Login;