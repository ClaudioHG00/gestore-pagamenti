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
      <div className='container'>
        <Navbar></Navbar>
        <div className="content">
          <h3 className='grey-text'>Saldo Attuale: {props.saldo.saldoAttuale} €</h3>
          <div className="ultime-transazioni-container">
            {ultimeTransazioni.map((transazione) => (
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
          <Button text="Transazioni" navigateTo={'/dashboard/transazioni'} />
        </div>
      </div>
    </>
  );
}