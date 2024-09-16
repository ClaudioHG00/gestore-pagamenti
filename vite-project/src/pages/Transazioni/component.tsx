import { Navbar } from "../../components/Navbar/component"
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
        <h2>Transazioni</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mittente</th>
              <th>Beneficiario</th>
              <th>Denaro</th>
              <th>Data</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {props.transazioni.map((transazione) => (
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
    </div>
    </>
  );
}