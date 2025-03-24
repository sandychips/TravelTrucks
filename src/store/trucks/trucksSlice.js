import { createSlice } from '@reduxjs/toolkit';

import { getCamperInfo, getCampers } from './trucksOperations.js';

const initialState = {
  total: 0,
  isRefreshing: false,
  error: null,
  pagination: {
    page: 1,
    limit: 4,
  },
  filters: {
    location: '',
    equipment: {
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
    },
    form: '',
  },
  queryFilters: '',
  items: [],
  truckInfo: {},
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    setPage(state, action) {
      state.pagination.page = action.payload;
    },
    addLocation(state, action) {
      state.filters.location = action.payload;
    },
    addEquipment(state, action) {
      state.filters.equipment[action.payload] =
        !state.filters.equipment[action.payload];
    },
    addType(state, action) {
      state.filters.form = action.payload;
    },
    addQueryFilters(state, action) {
      state.queryFilters = action.payload;
    },
    resetItems(state) {
      state.items = initialState.items;
      state.pagination = initialState.pagination;
    },
  },
  extraReducers: builder => {
    builder
      // get all trucks
      .addCase(getCampers.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.total = payload.total;
        // state.items = payload.items;
        state.items = [...state.items, ...payload.items];
      })
      .addCase(getCampers.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })

      // get truck detail info
      .addCase(getCamperInfo.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(getCamperInfo.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.truckInfo = payload;
      })
      .addCase(getCamperInfo.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  },
});

export default trucksSlice.reducer;
