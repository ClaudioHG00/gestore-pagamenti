import "./Pagamento.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Modal } from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { create, remove } from "../../store/pagamentoSlice";
import { useState } from "react";

export interface MetodoPagamento {
    id: number;
    tipo: string;
    numeroConto: number;
    dataScadenza: Date;
    codiceSicurezza?: number;
}

export const Pagamento = () => {
    const dispatch = useDispatch();
    // Recupero l'array di metodiPagamento dello store
    const metodiPagamento = useSelector((state: RootState) => state.metodiPagamento);

    // State locale per prendere i valor idel form
    const [formValues, setFormValues] = useState({
        tipo: '',
        numeroConto: '',
        dataScadenza: '',
        codiceSicurezza: ''
    });

    // Elimina
    const handleRemove = (id: number) => {
        dispatch(remove(id));
    };

    // Crea
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const idNewMetodoPagamento = metodiPagamento.length > 0
            ? Math.max(...metodiPagamento.map(mp => mp.id)) + 1  // Trovo il massimo id presente nell'array di metodiPagamento + 1 
            : 1; // Altrimenti metto 1, se array vuoto

        const newMetodoPagamento: MetodoPagamento = {
            id: idNewMetodoPagamento,
            tipo: formValues.tipo,
            numeroConto: parseFloat(formValues.numeroConto),
            dataScadenza: new Date(formValues.dataScadenza),
            codiceSicurezza: formValues.codiceSicurezza
                ? parseFloat(formValues.codiceSicurezza) // Se esiste, inserisco
                : undefined // altrimenti inserisco undefined
        };

        dispatch(create(newMetodoPagamento));

        setFormValues({
            tipo: '',
            numeroConto: '',
            dataScadenza: '',
            codiceSicurezza: ''
        });
    };

    return (
        <>
            <div className="container">
                <Navbar />
                <div className="content">
                    <table>
                        {/* <tbody>
                            {metodiPagamento.map(metodoPagamento => (
                                <tr key={metodoPagamento.id}>
                                    <td>{metodoPagamento.tipo}</td>
                                    <td>{metodoPagamento.numeroConto}</td>
                                    <td>{metodoPagamento.dataScadenza.toLocaleDateString()}</td>
                                    <td>{metodoPagamento.codiceSicurezza}</td>
                                    <td>
                                        <button onClick={() => handleRemove(metodoPagamento.id)}>Elimina</button>
                                    </td>
                                    <td>
                                        <Modal id={metodoPagamento.id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody> */}
                        <tbody>
                            {metodiPagamento.map((metodoPagamento) => {
                                // Converti la dataScadenza in un oggetto Date se non lo è già
                                const dataScadenza = new Date(metodoPagamento.dataScadenza);
                                return (
                                    <tr key={metodoPagamento.id}>
                                        <td>{metodoPagamento.tipo}</td>
                                        <td>{metodoPagamento.numeroConto}</td>
                                        <td>{dataScadenza.toLocaleDateString()}</td>
                                        <td>{metodoPagamento.codiceSicurezza}</td>
                                        <td>
                                            <button onClick={() => handleRemove(metodoPagamento.id)}>
                                                Elimina
                                            </button>
                                        </td>
                                        <td>
                                            <Modal id={metodoPagamento.id} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                    <form onSubmit={handleSubmit} className="form-inserimento">
                        <h2>Form Inserimento</h2>
                        <div className="form-row">
                            <label htmlFor="tipo">Tipo: </label>
                            <input
                                type="text"
                                id="tipo"
                                name="tipo"
                                placeholder="Inserisci il nome"
                                value={formValues.tipo}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="numeroConto">Numero Conto: </label>
                            <input
                                type="text"
                                id="numeroConto"
                                name="numeroConto"
                                placeholder="Inserisci il numero conto"
                                value={formValues.numeroConto}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="dataScadenza">Data Scadenza: </label>
                            <input
                                type="date"
                                id="dataScadenza"
                                name="dataScadenza"
                                value={formValues.dataScadenza}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="codiceSicurezza">Codice Sicurezza: </label>
                            <input
                                type="text"
                                id="codiceSicurezza"
                                name="codiceSicurezza"
                                placeholder="Inserisci il codice di sicurezza"
                                value={formValues.codiceSicurezza}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <button type="submit">Crea</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
