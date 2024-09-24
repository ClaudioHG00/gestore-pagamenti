import './App.css'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { SaldoMock } from './mocks/saldoMock'
import { TransazioniMock } from './mocks/transazioniMock'
function App() {

  return (
    <>
    <Dashboard saldo={SaldoMock} transazioni={TransazioniMock}></Dashboard>
    </>
  )
}

export default App
