import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "../ModalContent/component";
import { MetodoPagamento } from "../../mocks/metodiPagamentoMock";

interface ModalProps {
    metodoPagamento: MetodoPagamento
}

export const Modal = (props: ModalProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>
          Modifica
        </button>
        {showModal && createPortal(
          <ModalContent onClose={() => setShowModal(false)} metodoPagamento={props.metodoPagamento} />,
          document.body
        )}
      </>
    );
  }