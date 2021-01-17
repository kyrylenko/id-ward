import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      show={show}
      title="CMP"
      onAccept={handleClose}
      onClose={handleClose}
    />
  );
};

export default App;
