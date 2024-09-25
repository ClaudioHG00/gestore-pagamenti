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
                {/* <div className="transazione-id">ID: {transazione.id}</div> */}

                {/* Dettagli transazione a Sinistra */}
                <div className='transazione-dettagli'>
                  {transazione.sender 
                    ? <div className="transazione-mittente"><b>Mittente: </b>{transazione.sender}</div>
                    : null
                  }
                  {transazione.beneficiario
                    ? <div className="transazione-beneficiario"><b>Beneficiario:</b> {transazione.beneficiario}</div>
                    : null
                  }
                  <div className="transazione-descrizione"><b>Causale:</b> {transazione.descrizione}</div>
                  <div className="transazione-data"><b>Data:</b> {transazione.data.toLocaleDateString()}</div>
                </div>

                  {/* Divisore */}
                <div className="divisore"></div>
                  
                  {/* Denaro a Destra */}
                <div className={
                  transazione.denaro > 0
                    ? 'transazione-denaro transazione-accredito'
                    : 'transazione-denaro transazione-addebito'}>
                      {
                  transazione.denaro > 0
                    ? '+'
                    : ''
                  }{transazione.denaro} €</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
