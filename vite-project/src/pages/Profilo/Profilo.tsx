import "./Profilo.css"
import { Navbar } from "../../components/Navbar/Navbar.tsx"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { modifica } from "../../store/profiloSlice.tsx"
import { RootState } from "../../store/store.tsx"

export interface ProfiloType {
    nome: string,
    cognome: string,
    email: string,
    telefono: string,
}

export const Profilo = () => {

    const profilo = useSelector((state: RootState) => state.profilo);

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

    // Submit del Form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Impedisce comportamento default del form (ricaricherebbe pagina)
        if (window.confirm('Sei sicuro di voler salvare le modifiche?')) {
            // Invia l'azione di modifica con i dati aggiornati allo store (slice di profilo)
            dispatch(modifica(profiloModificato));
            console.log('Modifiche salvate:', profiloModificato);
        }
    };

    // Funzione per gestire il reset del form
    const handleReset = () => {
        setProfiloModificato(profilo);
    };

    return (
        <>
            <div className='container'>
                <Navbar></Navbar>
                <div className="content content-profilo">
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <div className="form-profilo black-text">
                            <div className="form-row">
                                <label className="pink-text" htmlFor="nome">Nome</label>
                                <input className="grey-text" type="text" id="nome" name="nome" value={profiloModificato.nome} onChange={handleChange} required/>
                            </div>
                            <div className="form-row">
                                <label className="pink-text" htmlFor="cognome">Cognome</label>
                                <input className="grey-text" type="text" id="cognome" name="cognome" value={profiloModificato.cognome} onChange={handleChange} required/>
                            </div>
                            <div className="form-row">
                                <label className="pink-text" htmlFor="email">Email</label>
                                <input className="grey-text" type="email" id="email" name="email" value={profiloModificato.email} onChange={handleChange} required/>
                            </div>
                            <div className="form-row">
                                <label className="pink-text" htmlFor="telefono">Telefono</label>
                                <input className="grey-text" type="tel" id="telefono" name="telefono" value={profiloModificato.telefono} onChange={handleChange} required/>
                            </div>
                            <button type="submit">Salva</button>
                            <button type="reset">Annulla</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}