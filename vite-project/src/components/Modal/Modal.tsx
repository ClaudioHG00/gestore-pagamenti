import "./Modal.css"
import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "../ModalContent/ModalContent";

interface ModalProps {
    // metodoPagamento: MetodoPagamento
    id: number
}

export const Modal = (props: ModalProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className="carta-button" onClick={() => setShowModal(true)}>
          Modifica
        </button>
          {showModal && createPortal(
            <ModalContent onClose={() => setShowModal(false)} id={props.id} />,
            document.body
          )}
      </>
    );
  }