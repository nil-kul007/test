import './Button.css';

const Button = (props) => {
    return<>
        <button className={`btn ${props.class}`} onClick={props.onClick}>{props.name}</button>
    </>
}
 export default Button