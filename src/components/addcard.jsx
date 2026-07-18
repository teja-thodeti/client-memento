function AddCard({ onClick, className }) {
    return (
        <div className={className} onClick={onClick}>
            <h1 style={{ margin: 0 }}>+</h1>
            <p style={{ margin: 0 }}>Add</p>
        </div>
    );
}

export default AddCard;