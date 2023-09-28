import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
import { persistStore } from 'redux-persist';

import { persistedReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
