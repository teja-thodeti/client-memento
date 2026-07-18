function SubscriptionCard({ props, onRemove }) {
    return (
        <div className="subscription-card">
            <img
                src={props.logo}
                alt={props.appName || "Subscription logo"}
                className="subscription-logo"
            />

            <p>Expiry : {props.expiry || "Not set"}</p>

            <p>
                Email Alerts :
                {props.emailAlert ? " ON" : " OFF"}
            </p>

            <button className="remove-card-btn" onClick={onRemove}>
                Remove
            </button>
        </div>
    );
}

export default SubscriptionCard;