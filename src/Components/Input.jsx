import './Input.css'

const Input = (props) => {
  return (
    <>
      <label className={`label ${props.label}`}>{props.label}</label>
      <input
        className={`input ${props.class}`}
        placeholder={props.placeholder}
        value={props.value}
      />
    </>
  );
};
export default Input;
