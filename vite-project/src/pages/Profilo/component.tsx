import "./component.css"
import { Navbar } from "../../components/Navbar/component"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { modifica } from "../../store/profiloSlice.tsx"

export interface ProfiloType {
    nome: string,
    cognome: string,
    email: string,
    telefono: string,
}

export const Profilo = () => {
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const profilo = useSelector((state: any) => state.profilo);

    // Stato locale
    const [profiloModificato, setProfiloModificato] = useState<ProfiloType>(profilo)

    const dispatch = useDispatch();

    // Funzione per aggiornare lo stato locale quando l'utente modifica un campo
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // Estrai il nome e il valore dell'input

        setProfiloModificato({
            ...profiloModificato, // Mantieni i campi esistenti con spread
            [name]: value,        // Aggiorna il campo specifico che è stato modificato  
        })
    } 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Impedisce comportamento default del form (ricaricherebbe pagina)
        // Invia l'azione di modifica con i dati aggiornati allo store (slice di profilo)
        dispatch(modifica(profiloModificato));
        console.log(profilo)
    };

    return (
        <>
        <div className='container'>
            <Navbar></Navbar>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="form-profilo black-text">
                        <div className="form-row">
                            <label htmlFor="nome">Nome: </label>
                            <input type="text" id="nome" name="nome" value={profiloModificato.nome} onChange={handleChange}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="cognome">Cognome: </label>
                            <input type="text" id="cognome" name="cognome" value={profiloModificato.cognome} onChange={handleChange}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" value={profiloModificato.email} onChange={handleChange}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="telefono">Telefono: </label>
                            <input type="tel" id="telefono" name="telefono" value={profiloModificato.telefono} onChange={handleChange}/>
                        </div>
                        <br></br>
                        <button type="submit">Modifica</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}