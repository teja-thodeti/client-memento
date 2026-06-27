export default function Button(props) {
    return (
        <button
            className={props.className}
            onClick={(e) => {
                if (typeof props.onClick === "function") props.onClick(e);
            }}
        >
            {props.name}
        </button>
    );
}