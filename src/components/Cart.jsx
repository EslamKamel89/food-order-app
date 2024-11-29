import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

/* eslint-disable react/react-in-jsx-scope */
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );
  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go To Checkout</Button>
      </p>
    </Modal>
  );
}
