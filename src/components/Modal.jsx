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
      <div>Would you like to track the analytics?</div>
      <div className="footer">
        <button onClick={onAccept}>Accept</button>
        <button onClick={onReject}>Reject</button>
      </div>
    </>
  );
};

const RejectView = ({ onClose }) => {
  return (
    <>
      <div>Analytics has been rejected</div>
      <div className="footer">
        <button onClick={onClose}>Close</button>
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
    <div id="backdrop">
      <div className="modal">
        <h2>{title}</h2>
        {rejected ? (
          <RejectView onClose={onClose} />
        ) : (
          <AcceptView onAccept={onAccept} onReject={rejectHandler} />
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;
