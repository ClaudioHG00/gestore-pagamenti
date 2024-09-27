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
    numeroConto: string;
    dataScadenza: Date;
    codiceSicurezza?: string;
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
        const conferma = window.confirm("Sei sicuro di voler eliminare questo metodo di pagamento?");
        if (conferma) {
            dispatch(remove(id));
        }
    };

    // Crea
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "numeroConto") {
            // Rimuovi tutti gli spazi
            newValue = value.replace(/\s+/g, '');
            // Limita a 16 caratteri
            newValue = newValue.slice(0, 16);
            // Aggiungi uno spazio ogni 4 caratteri
            newValue = newValue.replace(/(.{4})/g, '$1 ').trim();
        }

        if (name === "dataScadenza") {
            // Rimuovi tutti i caratteri non numerici
            newValue = value.replace(/\D/g, '');
            // Limita a 4 caratteri
            newValue = newValue.slice(0, 4);
            // Aggiungi '/' dopo 2 caratteri
            if (newValue.length > 2) {
                newValue = `${newValue.slice(0, 2)}/${newValue.slice(2)}`;
            }
        }

        if (name === "codiceSicurezza") {
            // Limita a 3 caratteri
            newValue = value.slice(0, 3);
        }

        setFormValues(prevValues => ({
            ...prevValues,
            [name]: newValue
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const conferma = window.confirm("Sei sicuro di voler creare un nuovo metodo di pagamento?");
        if (conferma) {
                    // Parsing della dataScadenza
        const [monthStr, yearStr] = formValues.dataScadenza.split('/');
        const month = parseInt(monthStr, 10);
        let year = parseInt(yearStr, 10);
    
        // Assumiamo year sia da 01 a 99, quindi aggiungiamo 2000 per avere anni da 2001 a 2099
        if (year < 100) {
            year += 2000;
        }
    
        // Crea un oggetto Date con il primo giorno del mese e anno specificati
        const dataScadenzaDate = new Date(year, month - 1, 1); // Mese è 0-based
    
        // Ternario per assegnare nuovo id(il max + 1 al nuovo elemento)
        const idNewMetodoPagamento = metodiPagamento.length > 0
            ? Math.max(...metodiPagamento.map(mp => mp.id)) + 1
            : 1;
    
        const newMetodoPagamento: MetodoPagamento = {
            id: idNewMetodoPagamento,
            tipo: formValues.tipo,
            numeroConto: formValues.numeroConto,
            dataScadenza: dataScadenzaDate,
            codiceSicurezza: formValues.codiceSicurezza
                ? formValues.codiceSicurezza
                : undefined
        };
    
        dispatch(create(newMetodoPagamento));
    
        setFormValues({
            tipo: '',
            numeroConto: '',
            dataScadenza: '',
            codiceSicurezza: ''
        });
        }
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
                <div className="content content-pagamento">

                    <button className="carousel-control-prev" onClick={() => prevSlide()}>Previous</button>
                    <div id="customCarousel" className="carousel">
                        <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                            {/* Carte di Credito Inserite */}
                            {metodiPagamento.map((metodoPagamento, index) => {
                                // Converti la dataScadenza in un oggetto Date se non lo è già
                                const dataScadenza = new Date(metodoPagamento.dataScadenza);
                                // padStart per garantire i mesi da 01 a 09, estraggo anno completo con getFullYear per poi prendere le ultime due cifre
                                const formattedDate = `${(dataScadenza.getMonth() + 1).toString().padStart(2, '0')}/${dataScadenza.getFullYear().toString().slice(-2)}`;
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
                                                        readOnly
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
                                                        readOnly
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
                                                        readOnly
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
                                                        readOnly
                                                    />
                                                </div>
                                                <Modal id={metodoPagamento.id} />
                                                <button className="carta-button elimina-button" onClick={() => handleRemove(metodoPagamento.id)}>
                                                    <img className="icon" src={trashIcon} />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Form di Inserimento*/}

                            <div className="carousel-item">
                                <div className="credit-card">
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
                                                required
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
                                                required
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
                                                required
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
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="carta-button"><img className="icon" src={plusIcon} /></button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-next" onClick={() => nextSlide()}>Next</button>

                </div>
            </div>
        </>
    );
};
