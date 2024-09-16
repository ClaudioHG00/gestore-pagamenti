export interface Saldo {
    saldoAttuale: number,
    dataModifica: Date
}

export const SaldoMock: Saldo = {
    saldoAttuale: 1500,
    dataModifica: new Date(2024,8,16)
}