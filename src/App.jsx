import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h1>Hi</h1>
      <button
        onClick={() => {
          setOpenModal((p) => !p);
        }}
      >
        Sign Up
      </button>
      {openModal && (
        <Modal
          closeModal={() => {
            setOpenModal((p) => !p);
          }}
        />
      )}
    </div>
  );
}

export default App;
