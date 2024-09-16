export interface Transazione {
    id: number;
    denaro: number;
    data: Date;
    sender?: string;        
    beneficiario?: string;  
    descrizione?: string;  
}

export const TransazioniMock: Transazione[] = [
    {
    id: 1,
    sender: "Mario Rossi",
    denaro: 1700,
    data: new Date(2024, 8, 15), 
    descrizione: "Bonifico stipendio"
    },
    {
    id: 2,
    beneficiario: "Enel",
    denaro: -150,
    data: new Date(2024, 8, 16), 
    descrizione: "Pagamento bolletta"
    },
    {
    id: 3,
    beneficiario: "Pam",
    denaro: -50,
    data: new Date(2024, 8, 17), 
    descrizione: "Acquisto alimentari"
    },
    {
    id: 4,
    sender: "Anna Verdi",
    denaro: 100,
    data: new Date(2024, 8, 18),
    descrizione: "Rimborso spese"
    },
    {
    id: 5,
    beneficiario: "Planet Fitness",
    denaro: -20,
    data: new Date(2024, 8, 19), 
    descrizione: "Abbonamento palestra"
    },
    {
    id: 6,
    beneficiario: "Bar Caffe",
    denaro: -10,
    data: new Date(2024, 8, 20),
    descrizione: "Acquisto Colazione"
    },
    {
    id: 7,
    beneficiario: "Fiat Autos",
    denaro: -500,
    data: new Date(2024, 8, 21),
    descrizione: "Noleggio auto"
    },
    {
    id: 8,
    sender: "Sofia Rossi",
    denaro: 200,
    data: new Date(2024, 8, 22),
    descrizione: "Vendita oggetti usati"
    },
    {
    id: 9,
    beneficiario: "Conad",
    denaro: -70,
    data: new Date(2024, 8, 23), 
    descrizione: "Spesa alimentare"
    },
    {
    id: 10,
    sender: "Azienda",
    denaro: 500,
    data: new Date(2024, 8, 24), 
    descrizione: "Bonus aziendale"
    }
];
