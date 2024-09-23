import './Transazioni.css'
import { Navbar } from "../../components/Navbar/Navbar"
import { Saldo } from "../../mocks/saldoMock";
import { Transazione } from "../../mocks/transazioniMock";

interface DashboardProps {
  saldo: Saldo;
  transazioni: Transazione[];
}

export const Transazioni = (props: DashboardProps) => {

  return (
    <>
      <div className='container'>
        <Navbar></Navbar>
        <div className="content">
          <div className="transazioni-container">
            {props.transazioni.map((transazione) => (
              <div className="transazione" key={transazione.id}>
                <div className="transazione-id">ID: {transazione.id}</div>
                <div className="transazione-mittente">Mittente: {transazione.sender}</div>
                <div className="transazione-beneficiario">Beneficiario: {transazione.beneficiario}</div>
                <div className="transazione-denaro">Denaro: {transazione.denaro} €</div>
                <div className="transazione-data">Data: {transazione.data.toLocaleDateString()}</div>
                <div className="transazione-descrizione">Descrizione: {transazione.descrizione}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}