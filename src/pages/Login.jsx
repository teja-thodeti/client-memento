import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import "../styles/Login.css";
import Button from "../components/button"
import bgVideo from "../assets/y.mp4"
function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("");
    function loginclick(){
        if (!email || !password) {
                alert("Please fill all fields");
                setError("enter your email and password")
            }
          else{
            setError("");
          }  
        }
    return (
        <div className="login-page">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="container-login">
                <div className="container-error">
                    {error && <p className="paragraph-error">{error}</p>}
                </div>
                <h1 className="header-login"
                >Login</h1>
                <div className="container-email-row">
                    <Input
                        className="input-email"
                        label="Email Id:"
                        type="email"
                        placeholder="Type in your email"
                        //interactive properties
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="container-password-row">
                    <Input
                        className="input-password"
                        label="Password:"
                        type="password"
                        placeholder="Type in your password"
                        //interacitive properties
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="container-button">
                    <Button
                        className="button-login"
                        name="Login"
                        //interactive properties
                        onClick={loginclick} />
                </div>
                <p className="paragraph-dha">Don't have an account? <Link to="/Register">Register</Link>.</p>
            </div>
        </div>
    );
}

export default Login; 