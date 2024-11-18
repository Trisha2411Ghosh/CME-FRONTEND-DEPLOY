import { configureStore } from "@reduxjs/toolkit";
import searchSlice from './searchSlice';
import dataFetchSlice from './dataFetchSlice';

const store = configureStore({
    reducer: {
      search: searchSlice,
      dataFetch: dataFetchSlice,
    }
})

export default store;