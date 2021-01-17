import "../styles.css";
import React, { useState } from "react";

function lockScroll(lock) {
  if (typeof window.document === "undefined") {
    return;
  }
  window.document.documentElement.style.overflow = lock ? "hidden" : "";
}

const AcceptView = ({ onAccept, onReject }) => {
  return (
    <>
      <p>Would you like to track the analytics?</p>
      <div className="footer">
        <button
          className="w3-button w3-padding-large w3-red w3-margin-bottom"
          onClick={onReject}
        >
          Reject
        </button>
        <button
          className="w3-button w3-padding-large w3-red w3-margin-bottom"
          onClick={onAccept}
        >
          Accept
        </button>
      </div>
    </>
  );
};

const RejectView = ({ onClose }) => {
  return (
    <>
      <p>Analytics has been rejected</p>
      <div className="footer">
        <button
          className="w3-button w3-padding-large w3-red w3-margin-bottom"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>
  );
};

const Modal = ({ show, title, onAccept, onClose }) => {
  lockScroll(show);

  const [rejected, setRejected] = useState(false);

  const rejectHandler = () => {
    //REF: https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
    //window['ga-disable-G-ZJ3W1BLRK4'] = true;
    window.gtag("config", "G-ZJ3W1BLRK4", {
      send_page_view: false,
    });
    setRejected(true);
  };

  return show ? (
    <div className="w3-modal" style={{ display: "block" }}>
      <div className="w3-modal-content w3-animate-zoom">
        <div className="w3-container w3-white w3-center">
          <i
            className="fa fa-remove w3-right w3-button w3-transparent w3-large"
            title="Close"
            onClick={onClose}
            style={{ visibility: rejected ? "visible" : "hidden" }}
          ></i>
          <h2 className="w3-wide">{title}</h2>
          {rejected ? (
            <RejectView onClose={onClose} />
          ) : (
            <AcceptView onAccept={onAccept} onReject={rejectHandler} />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
