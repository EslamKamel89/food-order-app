/* eslint-disable react/react-in-jsx-scope */
import logoImg from "../assets/Logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="resturant logo" />
        <h1> Feast Finder </h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
