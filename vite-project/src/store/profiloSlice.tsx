import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProfiloType } from "../pages/Profilo/component"
import { ProfiloMock } from "../mocks/profiloMock"

const initialState: ProfiloType = ProfiloMock

export const profiloSlice = createSlice({
    name: 'profilo',
    initialState,
    reducers: {
        // modifica(state, action: PayloadAction<Partial<ProfiloType>>) { 
        // In Redux Toolkit il state non può essere riassegnato direttamente, puoi solo modificare le sue proprietà o fare operazioni mutabili su di esso.
        //     state = {...state,...action.payload} 
        // }
        modifica(state, action: PayloadAction<Partial<ProfiloType>>) {
            Object.assign(state, action.payload);  // Aggiorna solo le proprietà passate
        }
    }
}) 

export const { modifica } = profiloSlice.actions
// export default profiloSlice.reducer
