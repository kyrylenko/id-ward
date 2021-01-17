import "../styles.css";
import React from "react";

function lockScroll(state) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.style.overflow = state ? "hidden" : "";
}

const Modal = ({ show, onAccept, onReject }) => {
  lockScroll(show);

  return show ? (
    <div id="backdrop">
      <div className="modal">
        <h1>Modal</h1>
        <div className="footer">
          <button onClick={onAccept}>Accept</button>
          <button onClick={onReject}>Reject</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
