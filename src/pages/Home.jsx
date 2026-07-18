import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import "../styles/Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="h-page">
            <div className="h-container-navbar">
                <span className="h-brand">
                    <span className="h-brand-mark">•</span> Ledger
                </span>

                <div className="h-nav-links">
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
            </div>

            <div className="h-container-body">
                <span className="h-eyebrow">Subscription tracking, simplified</span>

                <h1 className="h-headline">
                    Every subscription,
                    <br />
                    <em>one ledger.</em>
                </h1>

                <p className="h-subhead">
                    Stop hunting through bank statements. Track renewals, set alerts, and
                    see exactly what you're paying for — all in one place.
                </p>

                <div className="h-hero-actions">
                    <Button
                        className="h-button-register h-cta-primary"
                        onClick={() => navigate("/Register")}
                        name="Get started"
                    />

                    <Button
                        className="h-button-login h-cta-secondary"
                        onClick={() => navigate("/login")}
                        name="I have an account"
                    />
                </div>

                <div className="h-card-fan" aria-hidden="true">
                    <div className="h-fan-card h-fan-card--1">
                        <span className="h-fan-label">STREAMING</span>
                        <div className="h-fan-divider"></div>
                        <div className="h-fan-meta">
                            <span className="h-fan-amount">$15.99/mo</span>
                            <span className="h-fan-date">Aug 3</span>
                        </div>
                    </div>

                    <div className="h-fan-card h-fan-card--2">
                        <span className="h-fan-label">CLOUD STORAGE</span>
                        <div className="h-fan-divider"></div>
                        <div className="h-fan-meta">
                            <span className="h-fan-amount">$9.99/mo</span>
                            <span className="h-fan-date">Aug 11</span>
                        </div>
                    </div>

                    <div className="h-fan-card h-fan-card--3">
                        <span className="h-fan-label">MUSIC</span>
                        <div className="h-fan-divider"></div>
                        <div className="h-fan-meta">
                            <span className="h-fan-amount">$11.99/mo</span>
                            <span className="h-fan-date">Aug 19</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
