/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import axios from "axios";
import Addcard from "../components/addcard";
import Popup from "../components/popup";
import SubscriptionCard from "../components/subscriptioncard";
import { getLogoByName } from "../components/logos";
import "../styles/Dashboard.css";

function Dashboard() {

    const [showpopup, setShowpopup] = useState(false);
    const [carddetails, setCarddetails] = useState([]);

    const getSubscriptions = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/subscription",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const cards = response.data.details.map((item) => ({
                _id: item._id,
                appName: item.name,
                expiry: item.expiry,
                emailAlert: item.alerts,
                logo: getLogoByName(item.name)
            }));

            setCarddetails(cards);

        } catch (error) {

            console.log(error);
            alert("Couldn't load subscriptions.");

        }

    };

    useEffect(() => {
        getSubscriptions();
    }, []);

    async function handleSaveCard(card) {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://localhost:5000/api/subscription/add",
                {
                    name: card.appName,
                    expiry: card.expiry,
                    alerts: card.emailAlert
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const newCard = {
                _id: response.data.details._id,
                appName: response.data.details.name,
                expiry: response.data.details.expiry,
                emailAlert: response.data.details.alerts,
                logo: getLogoByName(response.data.details.name)
            };

            setCarddetails((prev) => [...prev, newCard]);

            setShowpopup(false);

        } catch (error) {

            console.log(error);
            alert("Couldn't save subscription.");

        }

    }

    function handleRemoveCard(indexToRemove) {

        setCarddetails((prev) =>
            prev.filter((_, index) => index !== indexToRemove)
        );

    }

    const totalSubscriptions = carddetails.length;

    const alertsEnabled = carddetails.filter(
        (card) => card.emailAlert
    ).length;

    const nextExpiry = [...carddetails]
        .filter((card) => card.expiry)
        .sort((a, b) => new Date(a.expiry) - new Date(b.expiry))[0];

    const nextExpiryLabel = nextExpiry
        ? new Date(nextExpiry.expiry).toLocaleDateString()
        : "No expiry set";

    return (
        <div className="d-page">

            <div className="d-header">
                <span className="d-eyebrow">Ledger overview</span>
                <h1 className="d-title">Your subscriptions</h1>
            </div>

            <div className="d-container-analytics">

                <div className="analytics-card">
                    <span className="analytics-label">Subscriptions</span>
                    <strong className="analytics-value">
                        {totalSubscriptions}
                    </strong>
                </div>

                <div className="analytics-card">
                    <span className="analytics-label">Alerts On</span>
                    <strong className="analytics-value">
                        {alertsEnabled}
                    </strong>
                </div>

                <div className="analytics-card">
                    <span className="analytics-label">Next Expiry</span>
                    <strong className="analytics-value analytics-small">
                        {nextExpiryLabel}
                    </strong>
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
                        key={card._id || index}
                        props={card}
                        onRemove={() => handleRemoveCard(index)}
                    />
                ))}

            </div>

            {showpopup && (
                <Popup
                    onClose={() => setShowpopup(false)}
                    onSave={handleSaveCard}
                />
            )}

        </div>
    );
}

export default Dashboard;