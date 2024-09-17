import "./component.css"
import { Navbar } from "../../components/Navbar/component"
import { useState } from "react"
import { ProfiloType } from "../../mocks/profiloMock"
import { useDispatch, useSelector } from "react-redux"
import { modifica } from "../../store/store"

export const Profilo = () => {

    const profilo = useSelector((state: any) => state.profilo);

    const [profiloModificato, setProfiloModificato] = useState<ProfiloType>(profilo)

    const dispatch = useDispatch();

    const onChange = () => {
        setProfiloModificato(profiloModificato)
    }


    return (
        <>
        <div className='container'>
            <Navbar></Navbar>
            <div className="content">
                <form onSubmit={dispatch(modifica())}>
                    <div className="form-profilo black-text">
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" id="nome" name="nome" value={profiloModificato.nome} onChange={(e) => }/>
                        <label htmlFor="cognome">Cognome: </label>
                        <input type="text" id="cognome" name="cognome" value={profiloModificato.cognome}/>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" value={profiloModificato.email}/>
                        <label htmlFor="telefono">Telefono: </label>
                        <input type="tel" id="telefono" name="telefono" value={profiloModificato.telefono}/>
                        <button type="submit"></button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}