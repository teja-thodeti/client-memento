function Popup({ props }) {
    return (
        <div className="popup-overlay">

            <div className="popup">

                <h2>Add Subscription</h2>

                <select>
                    <option>Netflix</option>
                    <option>Prime Video</option>
                    <option>Spotify</option>
                    <option>Steam</option>
                </select>

                <input type="date" />

                <label>
                    Email Alerts
                    <input type="checkbox" />
                </label>

                <button>OK</button>

                <button onClick={props.onClose}>
                    Cancel
                </button>

            </div>

        </div>
    );
}

export default Popup;