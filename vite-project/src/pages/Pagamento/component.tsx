import "./component.css"
import { Button } from "../../components/Button/component"
import { Navbar } from "../../components/Navbar/component"
import { MetodoPagamento } from "../../mocks/metodiPagamentoMock"
import { Modal } from "../../components/Modal/component"

export interface PagamentoProps {
    metodiPagamento: MetodoPagamento[]
}

export const Pagamento = (props: PagamentoProps) => {

    // const deleteMetodoPagamento = () => {
    // Redux
    // }

    // const [collapsed, setCollapsed] = useState(true)

    // const collapse = () => {
    //     setCollapsed(prev => !prev)
    // }

    return (
        <>
        <div className="container">
            <Navbar></Navbar>
            <div className="content">
            {props.metodiPagamento.map((metodoPagamento) => (
                  <tr>
                    <td>{metodoPagamento.tipo}</td>
                    <td>{metodoPagamento.numeroConto}</td>
                    <td>{metodoPagamento.dataScadenza.toLocaleDateString()} €</td>
                    <td>{metodoPagamento.codiceSicurezza}</td>
                    <Button text="Elimina"></Button>
                    <Modal metodoPagamento={metodoPagamento}></Modal>
                  </tr>
                ))}
            <form action="" className="form-inserimento">
                <h2>Form Inserimento</h2>
                <div className="form-row">
                    <label htmlFor="tipo">Tipo: </label>
                    <input type="text" name="tipo"/>
                </div>
                <div className="form-row">
                    <label htmlFor="numeroConto">Numero Conto: </label>
                    <input type="text" name="numeroConto"/>
                </div>
                <div className="form-row">
                    <label htmlFor="dataScadenza">Data Scadenza: </label>
                    <input type="date" name="dataScadenza"/>
                </div>
                <div className="form-row">
                    <label htmlFor="codiceSicurezza">Codice Sicurezza: </label>
                    <input type="text" name="codiceSicurezza"/>
                </div>
                <div className="form-row">
                    <button type="submit">Crea</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}