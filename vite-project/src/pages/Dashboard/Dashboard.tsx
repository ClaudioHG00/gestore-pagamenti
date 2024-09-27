import './Dashboard.css'
import { Navbar } from '../../components/Navbar/Navbar';
import { Saldo } from '../../mocks/saldoMock'
import { Transazione } from '../../mocks/transazioniMock'
import { Button } from '../../components/Button/Button';


interface DashboardProps {
  saldo: Saldo;
  transazioni: Transazione[];
}

export const Dashboard = (props: DashboardProps) => {

  // Seleziona le ultime 5 transazioni
  const ultimeTransazioni = props.transazioni.slice(-5);

  return (
    <>
      <div className='container container-dashboard'>
        <Navbar></Navbar>
        <div className="content content-dashboard">
          <div className='row'>
            <h2 className='saldo-text'>Saldo: {props.saldo.saldoAttuale} €</h2>
            <Button text="Transazioni" navigateTo={'/dashboard/transazioni'} />
          </div>
          <div className="ultime-transazioni-container">
            {ultimeTransazioni.map((transazione) => (
              <div className="transazione" key={transazione.id}>
                {/* <div className="transazione-id">ID: {transazione.id}</div> */}

                {/* Dettagli transazione */}
                <div className='transazione-dettagli'>
                  {transazione.sender 
                    ? <div className="transazione-mittente">{transazione.sender}</div>
                    : null
                  }
                  {transazione.beneficiario
                    ? <div className="transazione-beneficiario">{transazione.beneficiario}</div>
                    : null
                  }
                  <div className="transazione-descrizione"> ~ {transazione.descrizione}</div>
                  <div className="transazione-data">{transazione.data.toLocaleDateString()}</div>
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
  );
}