import { createAction } from '@reduxjs/toolkit';

export const resetItems = createAction('trucks/resetItems');

export const addLocation = createAction('trucks/addLocation');

export const addEquipment = createAction('trucks/addEquipment');

export const addType = createAction('trucks/addType');

export const addQueryFilters = createAction('trucks/addQueryFilters');

export const setPage = createAction('trucks/setPage');
