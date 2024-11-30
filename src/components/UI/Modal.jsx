import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/* eslint-disable react/react-in-jsx-scope */
export default function Modal({ children, open, className = "", onClose }) {
  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);
  const dialogRef = useRef();
  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
