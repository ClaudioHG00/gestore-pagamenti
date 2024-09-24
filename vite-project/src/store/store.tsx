import { configureStore } from '@reduxjs/toolkit';
import { profiloSlice } from './profiloSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default storage utilizza localStorage per il web
import { metodiPagamentoSlice } from './pagamentoSlice';
import { combineReducers } from 'redux';

/* Store non permanente */
// const store = configureStore({
//   reducer: {
//     profilo: profiloSlice.reducer, 
//     metodiPagamento: metodiPagamentoSlice.reducer,
//   },
// });


// Inferri automaticamente il tipo RootState a partire dal store
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch; 
// export default store;

/* Store permanente con redux-persist */

// Crea il config per redux-persist
const persistConfig = {
  key: 'root', // chiave che identifica il persist storage
  storage, // utilizza localStorage per salvare lo stato
};

// Combina i tuoi slice in un unico reducer
const rootReducer = combineReducers({
  profilo: profiloSlice.reducer,
  metodiPagamento: metodiPagamentoSlice.reducer,
});

// Applica persistReducer al tuo rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura lo store
const store = configureStore({
  reducer: persistedReducer, // usa il reducer persistito
});

// Crea il persistor associato allo store
const persistor = persistStore(store);

// Inferisci automaticamente il tipo RootState e AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };