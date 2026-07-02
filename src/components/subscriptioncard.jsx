function SubscriptionCard({ props }) {
    return (
        <div className="subscription-card">

            <img src={props.logo} alt={props.appName} />

            <h3>{props.appName}</h3>

            <p>Expiry : {props.expiry}</p>

            <p>
                Email Alerts :
                {props.emailAlert ? " ON" : " OFF"}
            </p>

        </div>
    );
}

export default SubscriptionCard;