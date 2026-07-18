import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import "../styles/Register.css";
import Button from "../components/button";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        alert("Please DO NOT use your real passwords. Create a new account for testing.");
    }, []);

    async function registerClick() {

        if (!email || !password || !repassword) {
            setError("Please fill all fields");
            return;
        }

        if (password !== repassword) {
            setError("Passwords didn't match");
            return;
        }

        setError("");

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    email: email,
                    password: password
                }
            );

            // Save token
            localStorage.setItem("token", response.data.token);

            // Save user details
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

                <span className="pass-eyebrow">New member</span>

                <h1 className="header-login">Register</h1>

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
                        placeholder="Choose your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="container-password-row">
                    <Input
                        className="input-repassword"
                        label="Confirm password:"
                        type="password"
                        placeholder="Re-enter your password"
                        value={repassword}
                        onChange={(e) => setRepassword(e.target.value)}
                    />
                </div>

                <div className="container-button">
                    <Button
                        className="button-login"
                        name="Register"
                        onClick={registerClick}
                    />
                </div>

                <p className="paragraph-dha">
                    Already have an account? <Link to="/login">Login</Link>.
                </p>

            </div>
        </div>
    );
}

export default Register;