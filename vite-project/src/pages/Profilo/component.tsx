import "./component.css"
import { Navbar } from "../../components/Navbar/component"

export const Profilo = () => {


    return (
        <>
        <div className='container'>
            <Navbar></Navbar>
            <div className="content">
                <form>
                    <div className="form-profilo black-text">
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" id="nome" name="nome"/>
                        <label htmlFor="cognome">Cognome: </label>
                        <input type="text" id="cognome" name="cognome"/>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email"/>
                        <label htmlFor="telefono">Telefono: </label>
                        <input type="tel" id="telefono" name="telefono"/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}