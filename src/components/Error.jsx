/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function Error({ title, message }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <>{message}</>
    </div>
  );
}
