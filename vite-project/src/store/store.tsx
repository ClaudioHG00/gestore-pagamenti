import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProfiloType } from "../mocks/profiloMock"

// interface ProfiloState {
//     state: Profilo
// }

const initialState: ProfiloType = {
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
}

const profiloSlice = createSlice({
    name: 'profilo',
    initialState,
    reducers: {
        // modifica(state, action: PayloadAction<Profilo>) {
        //     const updatedProfilo = {...state,...action.payload}
        //     state = updatedProfilo
        // }
        modifica(state, action: PayloadAction<Partial<ProfiloType>>) {
            state = {...state,...action.payload}
        }
    }
}) 

export const { modifica } = profiloSlice.actions
// export default profiloSlice.reducer
