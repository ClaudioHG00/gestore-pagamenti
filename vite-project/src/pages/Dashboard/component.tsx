import './component.css'
import { Navbar } from '../../components/Navbar/component';
import { Saldo } from '../../mocks/saldoMock'
import { Transazione } from '../../mocks/transazioniMock'
import { Button } from '../../components/Button/component';


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
          <h2>Ultime Transazioni</h2>
          <h4>Saldo Attuale: {props.saldo.saldoAttuale}€</h4>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Sender</th>
                  <th>Beneficiario</th>
                  <th>Denaro</th>
                  <th>Data</th>
                  <th>Descrizione</th>
                </tr>
              </thead>
              <tbody>
                {ultimeTransazioni.map((transazione) => (
                  <tr key={transazione.id}>
                    <td>{transazione.id}</td>
                    <td>{transazione.sender}</td>
                    <td>{transazione.beneficiario}</td>
                    <td>{transazione.denaro} €</td>
                    <td>{transazione.data.toLocaleDateString()}</td>
                    <td>{transazione.descrizione}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button text="Transazioni" navigateTo={'/dashboard/transazioni'}></Button>
        </div>
      </div>
    </>
  );
}