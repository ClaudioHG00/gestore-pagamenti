import { useDispatch, useSelector } from 'react-redux'
import { MetodoPagamento } from '../../pages/Pagamento/component'
import'./components.css'
import { RootState } from '../../store/store'
import { useState } from 'react'
import { modifica } from '../../store/pagamentoSlice'

interface ModalContentProps {
    // metodoPagamento: MetodoPagamento
    id: number,
    onClose: () => void
}

export const ModalContent = (props: ModalContentProps) => {

    const dispatch = useDispatch();

    const metodoPagamento = useSelector((state: RootState) => {
        // Ottengo array di 1 elemento (con id voluto)
        const metodiPagamento = state.metodiPagamento.filter((metodoPagamento) => metodoPagamento.id == props.id)
        // Lo estraggo
        return metodiPagamento[0]
    })

    const [metodoPagamentoModificato, setMetodoPagamentoModificato] = useState<MetodoPagamento>(metodoPagamento)
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setMetodoPagamentoModificato({
            ...metodoPagamentoModificato,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(modifica(metodoPagamentoModificato));
        console.log(metodoPagamento)
        // Chiude la modale 
        props.onClose()
    }


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                    <form onSubmit={handleSubmit} className="form-inserimento">
                        <h2>Form Modifica</h2>
                        <div className="form-row">
                            <label htmlFor="tipo">Tipo: </label>
                            <input type="text" name="tipo" value={metodoPagamentoModificato.tipo} onChange={handleChange}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="numeroConto">Numero Conto: </label>
                            <input type="text" name="numeroConto" value={metodoPagamentoModificato.numeroConto} onChange={handleChange}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="dataScadenza">Data Scadenza: </label>
                            <input type="date" name="dataScadenza" value={metodoPagamentoModificato.dataScadenza.toDateString()} onChange={handleChange}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="codiceSicurezza">Codice Sicurezza: </label>
                            <input type="text" name="codiceSicurezza" value={metodoPagamentoModificato.codiceSicurezza} onChange={handleChange}/>
                        </div>
                        <div className="form-row">
                            <button type="submit">Modifica</button> 
                        </div>
                    </form>
            </div>
        </div>
    )
}