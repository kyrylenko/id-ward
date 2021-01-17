import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [open, setOpen] = useState(true);

  return <Modal show={open} title="CMP" onAccept={() => setOpen(false)} onClose={() => setOpen(false)} />;
};

export default App;
