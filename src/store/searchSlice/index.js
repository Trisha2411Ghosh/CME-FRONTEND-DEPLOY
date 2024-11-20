import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    isLoading: false,
    searchStockData: null,
    searchStockPerformance: null,
    searchTradeInfo: [],
    searchTradePerformance: null,
    searchInstrument: null,
    searchInstrumentPerformance: null,
    searchCombined: [],
    searchCombinedPerformance: null
}

// For PostgreSQL

export const searchStockDataPostgreSql = createAsyncThunk('/search/searchStockDataPostgreSql', 
    async (symbol, { rejectWithValue }) => {
      try {
        const result = await axios.get(`https://trading-dashboard-backend.onrender.com/stocks/${symbol}?dbsource=postgres`);
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

export const searchTradeInfoPostgreSql = createAsyncThunk('/search/searchTradeInfoPostgreSql', 
    async (symbol, { rejectWithValue }) => {
      try {
        const result = await axios.get(`https://trading-dashboard-backend.onrender.com/trades/${symbol}?dbsource=postgres`);
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

export const searchInstrumentPostgreSql = createAsyncThunk('/search/searchInstrumentPostgreSql', 
    async (symbol, { rejectWithValue }) => {
      try {
        const result = await axios.get(`https://trading-dashboard-backend.onrender.com/instruments/${symbol}?dbsource=postgres`);
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

export const searchCombinedPostgreSql = createAsyncThunk('/search/searchCombinedPostgreSql', 
    async ({getStartDate, getEndDate}, { rejectWithValue }) => {
      try {
        const result = await axios.get(`https://trading-dashboard-backend.onrender.com/aggregate?dbsource=postgres&startDate=${getStartDate}&endDate=${getEndDate}`);
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

// For ClickHouse

export const searchStockDataClickHouse = createAsyncThunk('/search/searchStockDataClickHouse', 
    async (symbol, { rejectWithValue }) => {
      try {
        const result = await axios.get(`https://trading-dashboard-backend.onrender.com/stocks/${symbol}?dbsource=clickhouse`);
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

export const searchTradeInfoClickHouse = createAsyncThunk('/search/searchTradeInfoClickHouse', 
    async (symbol, { rejectWithValue }) => {
      try {
        const result = await axios.get(`https://trading-dashboard-backend.onrender.com/trades/${symbol}?dbsource=clickhouse`);
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

export const searchInstrumentClickHouse = createAsyncThunk('/search/searchInstrumentClickHouse', 
    async (symbol, { rejectWithValue }) => {
      try {
        const result = await axios.get(`https://trading-dashboard-backend.onrender.com/instruments/${symbol}?dbsource=clickhouse`);
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

export const searchCombinedClickHouse = createAsyncThunk('/search/searchCombinedClickHouse', 
    async ({getStartDate, getEndDate}, { rejectWithValue }) => {
      try {
        const result = await axios.get(`https://trading-dashboard-backend.onrender.com/aggregate?dbsource=clickhouse&startDate=${getStartDate}&endDate=${getEndDate}`);
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

const searchSlice = createSlice({
    name: 'searchBySymbol',
    initialState,
    reducers: {
        resetSearchResults: (state) => {
            state.searchStockData = null,
            state.searchStockPerformance = null,
            state.searchTradeInfo = [],
            state.searchTradePerformance = null,
            state.searchInstrument = null,
            state.searchInstrumentPerformance = null,
            state.searchCombined = [],
            state.searchCombinedPerformance = null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchStockDataPostgreSql.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchStockDataPostgreSql.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchStockData = action.payload.data
            state.searchStockPerformance = action.payload.performanceMetrics
        })
        .addCase(searchStockDataPostgreSql.rejected, (state) => {
            state.isLoading = false
            state.searchStockData = null
            state.searchStockPerformance = null
        })
        .addCase(searchTradeInfoPostgreSql.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchTradeInfoPostgreSql.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchTradeInfo = action.payload.data
            state.searchTradePerformance = action.payload.performanceMetrics
        })
        .addCase(searchTradeInfoPostgreSql.rejected, (state) => {
            state.isLoading = false
            state.searchTradeInfo = []
            state.searchTradePerformance = null
        })
        .addCase(searchInstrumentPostgreSql.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchInstrumentPostgreSql.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchInstrument = action.payload.data
            state.searchInstrumentPerformance = action.payload.performanceMetrics
        })
        .addCase(searchInstrumentPostgreSql.rejected, (state) => {
            state.isLoading = false
            state.searchInstrument = null
            state.searchInstrumentPerformance = null
        })
        .addCase(searchCombinedPostgreSql.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchCombinedPostgreSql.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchCombined = action.payload.data
            state.searchCombinedPerformance = action.payload.performanceMetrics
        })
        .addCase(searchCombinedPostgreSql.rejected, (state) => {
            state.isLoading = false
            state.searchCombined = []
            state.searchCombinedPerformance = null
        })

        .addCase(searchStockDataClickHouse.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchStockDataClickHouse.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchStockData = action.payload.data
            state.searchStockPerformance = action.payload.performanceMetrics
        })
        .addCase(searchStockDataClickHouse.rejected, (state) => {
            state.isLoading = false
            state.searchStockData = null
            state.searchStockPerformance = null
        })
        .addCase(searchTradeInfoClickHouse.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchTradeInfoClickHouse.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchTradeInfo = action.payload.data
            state.searchTradePerformance = action.payload.performanceMetrics
        })
        .addCase(searchTradeInfoClickHouse.rejected, (state) => {
            state.isLoading = false
            state.searchTradeInfo = []
            state.searchTradePerformance = {}
        })
        .addCase(searchInstrumentClickHouse.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchInstrumentClickHouse.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchInstrument = action.payload.data
            state.searchInstrumentPerformance = action.payload.performanceMetrics
        })
        .addCase(searchInstrumentClickHouse.rejected, (state) => {
            state.isLoading = false
            state.searchInstrument = null
            state.searchInstrumentPerformance = null
        })
        .addCase(searchCombinedClickHouse.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchCombinedClickHouse.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchCombined = action.payload.data
            state.searchCombinedPerformance = action.payload.performanceMetrics
        })
        .addCase(searchCombinedClickHouse.rejected, (state) => {
            state.isLoading = false
            state.searchCombined = []
            state.searchCombinedPerformance = null
        })
    }
})

export const { resetSearchResults } = searchSlice.actions
export default searchSlice.reducer