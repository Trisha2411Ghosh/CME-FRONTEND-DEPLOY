import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    dataList: [],
    performanceMetrics: {}
}

export const fetchDataFromPostgreSQL = createAsyncThunk('/data/fetchDataFromPostgreSQL',
     
    async (_, { rejectWithValue }) => {
      try {
        const result = await axios.get('https://trading-dashboard-backend.onrender.com/stocks?dbsource=postgres');
        return result?.data
      } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue({ message: 'Something went wrong!' });
        }
        
      }
    }
)

export const fetchDataFromClickHouse = createAsyncThunk('/data/fetchDataFromClickHouse',
         
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get('https://trading-dashboard-backend.onrender.com/stocks?dbsource=clickhouse');
            return result?.data
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue({ message: 'Something went wrong!' });
            }
        }
    }
)

const dataFetchSlice = createSlice({
    name: 'fetchData',
    initialState,
    reducers: {
        resetDataFetchResult: (state) => {
           state.dataList = []
           state.performanceMetrics = {}
        } 
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataFromPostgreSQL.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchDataFromPostgreSQL.fulfilled, (state, action) => {
            state.isLoading = false
            state.dataList = action.payload.data
            state.performanceMetrics = action.payload.overallPerformanceMetrics
        })
        .addCase(fetchDataFromPostgreSQL.rejected, (state) => {
            state.isLoading = false
            state.dataList = []
            state.performanceMetrics = {}
        })
        .addCase(fetchDataFromClickHouse.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchDataFromClickHouse.fulfilled, (state, action) => {
            state.isLoading = false
            state.dataList = action.payload.data
            state.performanceMetrics = action.payload.overallPerformanceMetrics
        })
        .addCase(fetchDataFromClickHouse.rejected, (state) => {
            state.isLoading = false
            state.dataList = []
            state.performanceMetrics = {}
        })
    }
})

export default dataFetchSlice.reducer;
export const { resetDataFetchResult } = dataFetchSlice.actions;