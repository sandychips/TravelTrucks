export const selectIsRefreshing = state => state.trucks.isRefreshing;

export const selectError = state => state.trucks.error;

// select the total number of pages
export const selectTotal = state => state.trucks.total;

// select pagination
export const selectPagination = state => state.trucks.pagination;

// select all trucks
export const selectItems = state => state.trucks.items;

// select all trucks
export const selectTruckInfo = state => state.trucks.truckInfo;

// select all filters
export const selectFilters = state => state.trucks.filters;

// select filter location
export const selectLocation = state => state.trucks.filters.location;

//select all equipment options
export const selectEquipment = state => state.trucks.filters.equipment;

//select type of truck
export const selectType = state => state.trucks.filters.form;

// export const select = state => state.trucks.
