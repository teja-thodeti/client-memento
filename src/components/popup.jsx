import { useState } from "react";
import { getLogoByName } from "../components/logos.jsx";

function Popup({ onSave, onClose }) {
    const [appName, setAppName] = useState("Netflix");
    const [expiry, setExpiry] = useState("");
    const [emailAlert, setEmailAlert] = useState(false);

    const handleSave = () => {
        onSave({ appName, expiry, emailAlert, logo: getLogoByName(appName) });
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Add Subscription</h2>

                <select value={appName} onChange={(e) => setAppName(e.target.value)}>
                    <option>Netflix</option>
                    <option>Prime Video</option>
                    <option>Spotify</option>
                    <option>Steam</option>
                    <option>HBO Max</option>
                    <option>Hulu</option>
                    <option>JioHotstar</option>
                    <option>Nintendo</option>
                    <option>Play Store</option>
                    <option>PlayStation</option>
                    <option>Xbox Game Pass</option>
                    <option>YouTube</option>
                    <option>YouTube Music</option>
                </select>

                <input type="date" value={expiry} onChange={(e) => setExpiry(e.target.value)} />

                <label className="popup-checkbox">
                    Email Alerts
                    <input
                        type="checkbox"
                        checked={emailAlert}
                        onChange={(e) => setEmailAlert(e.target.checked)}
                    />
                </label>

                <div className="popup-actions">
                    <button onClick={handleSave}>OK</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;