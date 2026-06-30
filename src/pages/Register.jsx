import { useState } from "react";
import {useEffect} from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import "../styles/Register.css";
import Button from "../components/button"
import bgVideo from "../assets/y.mp4"
function Register() {
//gitpush
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[repassword,setRepassword]=useState("")
    const[error,setError]=useState("");

    useEffect(()=>{
          alert("please DONOT enter your already existing credentails linked to any apps/sites.CREATE NEW")
    },[])

    function loginclick(){
        if(!email || !password || !repassword){
            setError("Please fill all fields");
            return;
        }
        if(password != repassword){
            setError("Passwords didn't match");
            return;
        }
        setError("");
        alert("Registration Successful");
    }
      
    return (
        
    <><video autoPlay loop muted playsInline className="background-video">
            <source src={bgVideo} type="video/mp4" />
        </video><div className="container-login">
            <div className="container-error">
                     {error && <p className="paragraph-error">{error}</p>}
                </div>
                <h1 className="header-login">Register</h1>
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
                        placeholder="Choose your password"
                        //interactive properties
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="container-password-row">
                    <Input
                        className="input-repassword"
                        type="password"
                        placeholder="re-enter your password"
                        //interactive properties
                        value={repassword}
                        onChange={(e) => setRepassword(e.target.value)} />
                </div>

                <div className="container-button">
                    <Button
                        className="button-login"
                        name="Register"
                        //interactive properties
                        onClick={loginclick} />
                </div>
                <p className="paragraph-dha">Already have an account? <Link to="/Login">Login</Link>.</p>
            </div></>
    );
    
}

export default Register; 