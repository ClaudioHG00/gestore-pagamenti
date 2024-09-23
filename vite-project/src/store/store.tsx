import { configureStore } from '@reduxjs/toolkit';
import { profiloSlice } from './profiloSlice';
import { metodiPagamentoSlice } from './pagamentoSlice';

const store = configureStore({
  reducer: {
    profilo: profiloSlice.reducer, 
    metodiPagamento: metodiPagamentoSlice.reducer,
  },
});

// Inferri automaticamente il tipo RootState a partire dal `store`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
export default store;
