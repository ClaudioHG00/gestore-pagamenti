import { MetodoPagamento } from "../pages/Pagamento/Pagamento";

export const MetodiPagamentoMock: MetodoPagamento[] = [
    {
        id: 1,
        tipo: "Carta di Credito",
        numeroConto: 4111111111111111,
        dataScadenza: new Date(2025, 10, 1), // Novembre 2025
        codiceSicurezza: 123
    },
    {
        id: 2,
        tipo: "Carta di Debito",
        numeroConto: 5500000000000004,
        dataScadenza: new Date(2024, 6, 1), // Luglio 2024
        codiceSicurezza: 456
    },
    {
        id: 3,
        tipo: "Bonifico Bancario",
        numeroConto: 12345678901,
        dataScadenza: new Date(2030, 0, 1), // Gennaio 2030 (data generica per un bonifico)
    },
    {
        id: 4,
        tipo: "PayPal",
        numeroConto: 98765432109,
        dataScadenza: new Date(2026, 3, 1), // Aprile 2026
        codiceSicurezza: 789
    },
    {
        id: 5,
        tipo: "Criptovaluta",
        numeroConto: 1231231231231231, // Un identificatore generico
        dataScadenza: new Date(9999, 11, 31), // Data molto lontana per indicare assenza di scadenza
    },
]