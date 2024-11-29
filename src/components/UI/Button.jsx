/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses = `${cssClasses} ${className}`;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
