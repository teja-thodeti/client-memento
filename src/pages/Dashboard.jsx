import { useState } from "react";
import Addcard from "../components/addcard";
import Popup from "../components/popup";
import SubscriptionCard from "../components/subscriptioncard";
import "../styles/Dashboard.css";

function Dashboard() {
    const [showpopup, setShowpopup] = useState(false);
    const [carddetails, setCarddetails] = useState([]);

    const handleSaveCard = (card) => {
        setCarddetails((prev) => [...prev, card]);
        setShowpopup(false);
    };

    const handleRemoveCard = (indexToRemove) => {
        setCarddetails((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    const totalSubscriptions = carddetails.length;
    const alertsEnabled = carddetails.filter((card) => card.emailAlert).length;
    const nextExpiry = [...carddetails]
        .filter((card) => card.expiry)
        .sort((a, b) => new Date(a.expiry) - new Date(b.expiry))[0];
    const nextExpiryLabel = nextExpiry
        ? new Date(nextExpiry.expiry).toLocaleDateString()
        : "No expiry set";

    return (
        <>
            <div className="d-container-analytics">
                <div className="analytics-card">
                    <span className="analytics-label">Subscriptions</span>
                    <strong className="analytics-value">{totalSubscriptions}</strong>
                </div>
                <div className="analytics-card">
                    <span className="analytics-label">Alerts On</span>
                    <strong className="analytics-value">{alertsEnabled}</strong>
                </div>
                <div className="analytics-card">
                    <span className="analytics-label">Next Expiry</span>
                    <strong className="analytics-value analytics-small">{nextExpiryLabel}</strong>
                </div>
            </div>
            <div className="d-divider"></div>

            <div className="d-container-cards">
                <div className="d-container-addcard">
                    <Addcard
                        className="d-addcard"
                        onClick={() => setShowpopup(true)}
                    />
                </div>

                {carddetails.map((card, index) => (
                    <SubscriptionCard
                        className="subscription-card"
                        logo={index}
                        key={index}
                        props={card}
                        onRemove={() => handleRemoveCard(index)}
                    />
                ))}
            </div>

            {showpopup && (
                <Popup onClose={() => setShowpopup(false)} onSave={handleSaveCard} />
            )}
        </>
    );
}

export default Dashboard;