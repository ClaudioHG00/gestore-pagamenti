import { MetodoPagamento } from "../../mocks/metodiPagamentoMock"

interface ModalContentProps {
    metodoPagamento: MetodoPagamento
    onClose: () => void
}

export const ModalContent = (props: ModalContentProps) => {

    return (
        <div className="modal">
                <form action="" className="form-inserimento">
                    <h2>Form Modifica</h2>
                    <div className="form-row">
                        <label htmlFor="tipo">Tipo: </label>
                        <input type="text" name="tipo" value={props.metodoPagamento.tipo}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="numeroConto">Numero Conto: </label>
                        <input type="text" name="numeroConto" value={props.metodoPagamento.numeroConto}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="dataScadenza">Data Scadenza: </label>
                        <input type="date" name="dataScadenza" value={props.metodoPagamento.dataScadenza.toDateString()}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="codiceSicurezza">Codice Sicurezza: </label>
                        <input type="text" name="codiceSicurezza" value={props.metodoPagamento.codiceSicurezza}/>
                    </div>
                    <div className="form-row">
                        <button type="submit">Modifica</button> 
                        {/* <button type="reset">Reset</button> */}
                        {/* <button type="button">Annulla</button> */}
                    </div>
                </form>
        </div>
    )
}