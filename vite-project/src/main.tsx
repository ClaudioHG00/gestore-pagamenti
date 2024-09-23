import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { Dashboard } from './pages/Dashboard/Dashboard.tsx';
import { Pagamento } from './pages/Pagamento/Pagamento.tsx';
import { Profilo } from './pages/Profilo/Profilo.tsx';
import { SaldoMock } from './mocks/saldoMock.tsx';
import { TransazioniMock } from './mocks/transazioniMock.tsx';
import { Transazioni } from './pages/Transazioni/Transazioni.tsx';
import { Provider } from 'react-redux';
import store from './store/store.tsx';

const Routes = [
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/home",
    element: <Dashboard saldo={SaldoMock} transazioni={TransazioniMock}></Dashboard>
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
    element: <Pagamento></Pagamento>      
  },
]

const router = createBrowserRouter(Routes)

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
