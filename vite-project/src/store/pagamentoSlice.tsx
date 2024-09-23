import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MetodiPagamentoMock } from "../mocks/metodiPagamentoMock";
import { MetodoPagamento } from "../pages/Pagamento/Pagamento";

const initialState: MetodoPagamento[] = MetodiPagamentoMock

export const metodiPagamentoSlice = createSlice({
    name: 'metodiPagamento',
    initialState,
    reducers: {
        remove(state, action: PayloadAction<number>) {
            const idToRemove = action.payload
            return state.filter(metodoPagamento => metodoPagamento.id !== idToRemove)
        },
        modifica(state, action: PayloadAction<Partial<MetodoPagamento>>) {
            // Essendo state di array, uso map per modificare
            return state.map(metodoPagamento =>
                // solo l'oggetto che ha id del MetodoPagamento passato
                metodoPagamento.id === action.payload.id 
                    ? { ...metodoPagamento, ...action.payload } // Se si, aggiorna
                    : metodoPagamento // Se no, riprendi l'oggetto esistente
            )
        },
        create(state, action: PayloadAction<MetodoPagamento>) {
            return [...state, action.payload];
            // return state.concat(
            //     !state.some(metodoPagamento => metodoPagamento.id === action.payload.id)
            //     ? [action.payload as MetodoPagamento] // Se true (ovvero non trovato, aggiungi)
            //     : [] // altrimenti aggiungi uno vuoto
            // )
        }
    }
})

export const { remove, modifica, create } = metodiPagamentoSlice.actions;
