import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      show={open}
      title="CMP"
      onAccept={handleClose}
      onClose={handleClose}
    />
  );
};

export default App;
