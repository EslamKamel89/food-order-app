/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import logoImg from "../assets/Logo.jpg";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumbersOfItems, item) => {
    return item.quantity + totalNumbersOfItems;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="resturant logo" />
        <h1> Feast Finder </h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
