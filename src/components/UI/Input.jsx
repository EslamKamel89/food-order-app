/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input className="" id={id} name={id} required {...props}></input>
    </p>
  );
}
