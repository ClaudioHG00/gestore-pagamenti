import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { Dashboard } from './pages/Dashboard/component.tsx';
import { Pagamento } from './pages/Pagamento/component.tsx';
import { Profilo } from './pages/Profilo/component.tsx';
import { SaldoMock } from './mocks/saldoMock.tsx';
import { TransazioniMock } from './mocks/transazioniMock.tsx';
import { Transazioni } from './pages/Transazioni/component.tsx';
import { MetodiPagamentoMock } from './mocks/metodiPagamentoMock.tsx'


const Routes = [
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/home",
    element: <App></App>
  }, 
  {
    path: "/dashboard",
    element: <Dashboard saldo={SaldoMock} transazioni={TransazioniMock}></Dashboard>
  },
  {
    path: '/dashboard/transazioni',
    element: <Transazioni saldo={SaldoMock} transazioni={TransazioniMock}></Transazioni>
  },
  {
    path: "/profilo",
    element: <Profilo></Profilo>
  },
  {
    path: "/pagamento",
    element: <Pagamento metodiPagamento={MetodiPagamentoMock} ></Pagamento>      
  },
]

const router = createBrowserRouter(Routes)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
