import "./Pagamento.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Modal } from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { create, remove } from "../../store/pagamentoSlice";
import { useState } from "react";
import plusIcon from "../../assets/plus-icon.svg";
import trashIcon from "../../assets/trash-icon.svg"

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

    const nome = useSelector((state: RootState) => state.profilo.nome)

    const cognome = useSelector((state: RootState) => state.profilo.cognome)

    // State locale per prendere i valor idel form
    const [formValues, setFormValues] = useState({
        tipo: '',
        numeroConto: '',
        dataScadenza: '',
        codiceSicurezza: ''
    });

    // Carosello di Cards
    const [currentSlide, setCurrentSlide] = useState(1)
    const slidesTotali: number = useSelector((state: RootState) => state.metodiPagamento).length;

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

    const prevSlide = () => {
        if (currentSlide == 1) {
            console.log("Pagina iniziale, impossibile tornare indietro.")
        } else {
            const slide = currentSlide - 1
            setCurrentSlide(slide)
        }
    }

    const nextSlide = () => {
        if (currentSlide == slidesTotali) {
            console.log("Pagina finale, impossibile andare avanti.")
        } else {
            const slide = currentSlide + 1
            setCurrentSlide(slide)
        }
    }


    return (
        <>
            <div className="container">
                <Navbar />
                <div className="content">

                    <div id="customCarousel" className="carousel">
                        <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {/* Carte di Credito Inserite */}
                            {metodiPagamento.map((metodoPagamento, index) => {
                                // Converti la dataScadenza in un oggetto Date se non lo è già
                                const dataScadenza = new Date(metodoPagamento.dataScadenza);
                                const formattedDate = dataScadenza.toLocaleDateString('it-IT', {
                                    year: '2-digit',  // Mostra solo le ultime due cifre dell'anno
                                    month: '2-digit', // Mostra il mese con due cifre (01-12)
                                });
                                return (
                                    <div className={`carousel-item ${index === currentSlide ? '' : 'blur'}`} 
                                    key={index} >
                                        <div className="credit-card">
                                            <form className="form-inserimento">
                                                <div className="form-row">
                                                    <label htmlFor="tipo"></label>
                                                    <input
                                                        type="text"
                                                        id="tipo"
                                                        name="tipo"
                                                        className="tipo"
                                                        value={metodoPagamento.tipo}
                                                    />
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="numeroConto"></label>
                                                    <input
                                                        type="text"
                                                        id="numeroConto"
                                                        name="numeroConto"
                                                        className="numero-conto"
                                                        value={metodoPagamento.numeroConto}
                                                    />
                                                </div>
                                                <div className="form-row">
                                                    <div className="nome-cognome">{nome} {cognome}</div>
                                                    <label htmlFor="dataScadenza"></label>
                                                    <input
                                                        type="text"
                                                        id="dataScadenza"
                                                        name="dataScadenza"
                                                        className="data-scadenza"
                                                        value={formattedDate}
                                                    />
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="codiceSicurezza"></label>
                                                    <input
                                                        type="text"
                                                        id="codiceSicurezza"
                                                        name="codiceSicurezza"
                                                        className="codice-sicurezza"
                                                        value={metodoPagamento.codiceSicurezza}
                                                    />
                                                </div>
                                                <button className="carta-button elimina-button" onClick={() => handleRemove(metodoPagamento.id)}>
                                                    <img className="icon" src={trashIcon}/>
                                                </button>
                                                <Modal id={metodoPagamento.id} />
                                            </form>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Form di Inserimento*/}

                            <div className="credit-card carousel-item">
                                <form onSubmit={handleSubmit} className="form-inserimento">
                                    <div className="form-row">
                                        <label htmlFor="tipo"></label>
                                        <input
                                            type="text"
                                            id="tipo"
                                            name="tipo"
                                            placeholder="Tipo di Pagamento"
                                            className="tipo"
                                            value={formValues.tipo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="numeroConto"></label>
                                        <input
                                            type="text"
                                            id="numeroConto"
                                            name="numeroConto"
                                            placeholder="0000 0000 0000 0000"
                                            className="numero-conto"
                                            value={formValues.numeroConto}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="nome-cognome">{nome} {cognome}</div>
                                        <label htmlFor="dataScadenza"></label>
                                        <input
                                            type="text"
                                            id="dataScadenza"
                                            name="dataScadenza"
                                            className="data-scadenza"
                                            placeholder="00/00"
                                            value={formValues.dataScadenza}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="codiceSicurezza"></label>
                                        <input
                                            type="text"
                                            id="codiceSicurezza"
                                            name="codiceSicurezza"
                                            placeholder="000"
                                            className="codice-sicurezza"
                                            value={formValues.codiceSicurezza}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button type="submit" className="carta-button"><img className="icon" src={plusIcon} /></button>
                                </form>
                            </div>

                        </div>

                        <button className="carousel-control-prev" onClick={() => prevSlide()}>Previous</button>
                        <button className="carousel-control-next" onClick={() => nextSlide()}>Next</button>
                    </div>






                    {/* Tabella di Metodi di Pagamento */}
                    {/* <table>
                        <tbody>
                            {metodiPagamento.map((metodoPagamento) => {
                                // Converti la dataScadenza in un oggetto Date se non lo è già
                                const dataScadenza = new Date(metodoPagamento.dataScadenza);
                                const formattedDate = dataScadenza.toLocaleDateString('it-IT', {
                                    year: '2-digit',  // Mostra solo le ultime due cifre dell'anno
                                    month: '2-digit', // Mostra il mese con due cifre (01-12)
                                });
                                return (
                                    <tr key={metodoPagamento.id}>
                                        <td>{metodoPagamento.tipo}</td>
                                        <td className="numeroConto">{metodoPagamento.numeroConto}</td>
                                        <td>{formattedDate}</td>
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
                    </table> */}

                </div>
            </div>
        </>
    );
};
