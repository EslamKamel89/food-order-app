/* eslint-disable react/react-in-jsx-scope */
import logoImg from "../assets/Logo.jpg";
import Button from "./UI/Button";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="resturant logo" />
        <h1> Feast Finder </h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
