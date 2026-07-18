 function Input(props){
    return(
        <>
        <label
         >{props.label}
        </label>
        <input
        className={props.className}
        label={props.label}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        ></input>
        </>
    )
}
export default Input;