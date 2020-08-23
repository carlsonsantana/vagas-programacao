import {SET_FILTER_PARAMETERS} from '../types';

export function setFilters(filters) {
  return {
    type: SET_FILTER_PARAMETERS,
    filters
  };
}
