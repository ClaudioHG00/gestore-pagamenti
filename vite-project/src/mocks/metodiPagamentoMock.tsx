import { MetodoPagamento } from "../pages/Pagamento/Pagamento";

export const MetodiPagamentoMock: MetodoPagamento[] = [
    {
        id: 1,
        tipo: "Carta di Credito",
        numeroConto: "1234 1234 1234 1234",
        dataScadenza: new Date(2025, 10), // Novembre 2025
        codiceSicurezza: "123"
    },
    {
        id: 2,
        tipo: "Carta di Debito",
        numeroConto: "5500 0000 0000 0004",
        dataScadenza: new Date(2024, 6), // Luglio 2024
        codiceSicurezza: "456"
    },
    {
        id: 3,
        tipo: "Bonifico Bancario",
        numeroConto: "1234 5678 9014 1234",
        dataScadenza: new Date(2030, 0), // Gennaio 2030 (data generica per un bonifico)
    },
    {
        id: 4,
        tipo: "PayPal",
        numeroConto: "9876 5432 1094 1234",
        dataScadenza: new Date(2026, 3), // Aprile 2026
        codiceSicurezza: "789"
    },
    {
        id: 5,
        tipo: "Criptovaluta",
        numeroConto: "1231 2312 3123 1231", // Un identificatore generico
        dataScadenza: new Date(9999, 11), // Data molto lontana per indicare assenza di scadenza
    },
]