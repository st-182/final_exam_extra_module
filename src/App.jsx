import { useState } from "react";
import { GlobalStyle } from "./GlobalStyles";
import Form from "./components/Form";
import ImageNearForm from "./components/ImageNearForm";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <GlobalStyle />
      <header></header>
      <main>
        <h1>Hi</h1>
        <Button
          action={() => {
            setOpenModal((p) => !p);
          }}
          text="Sign Up"
        />

        {openModal && (
          <Modal
            closeModal={() => {
              setOpenModal((p) => !p);
            }}
          >
            <ImageNearForm />
            <Form />
          </Modal>
        )}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
