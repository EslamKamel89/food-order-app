import { useContext } from "react";
import CartContext from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

/* eslint-disable react/react-in-jsx-scope */
export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    console.log(customerData);
  }
  return (
    <Modal
      open={userProgressCtx.progress == "checkout"}
      onClose={userProgressCtx.progress == "checkout" ? handleClose : null}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <Input label="Full Name" type="text" id="fullName" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street Address" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postalCode" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" onClick={handleClose} textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}