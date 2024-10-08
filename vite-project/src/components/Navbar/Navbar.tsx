import './Navbar.css';
import pleoLogo from '../../assets/pleo-logo.png'
import dashboardIcon from '../../assets/dashboard-icon.svg'
import profileIcon from '../../assets/profile-icon.svg'
import pagamentoIcon from '../../assets/pagamento-icon.svg'
import { useSelector } from 'react-redux';
// Uso Navlinks piuttosto che useNavigate, in quanto active gia' incorporato
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const profilo = useSelector((state: any) => state.profilo);
    const utente: string = profilo.nome + '  ' + profilo.cognome

    return    (
        <nav className="navbar">

            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}><img src={pleoLogo} alt="Logo di Pleo" className='logo' /></NavLink>
            
            <div className='spazio'></div>
            <ul>
                <li className='navbar-row'>
                    <img src={dashboardIcon} className='navbar-icon'/>
                    <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink>
                </li>
                <li className='navbar-row'>
                    <img src={profileIcon} className='navbar-icon'/>
                    <NavLink to="/profilo" className={({ isActive }) => (isActive ? 'active' : '')}>Profilo</NavLink>
                </li>
                <li className='navbar-row'>
                    <img src={pagamentoIcon} className='navbar-icon'/>
                    <NavLink to="/pagamento" className={({ isActive }) => (isActive ? 'active' : '')}>Pagamento</NavLink>
                </li>
            </ul>

            <div className='bottom-item'>
                <NavLink to="/profilo">{utente}</NavLink>
            </div>
        </nav>
    ) 
}