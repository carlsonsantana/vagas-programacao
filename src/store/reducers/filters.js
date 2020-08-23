import {
  DEFAULT_START_DAY_BEFORE,
  DEFAULT_END_DAY_BEFORE
} from '../../config/filters';
import {SET_FILTER_PARAMETERS} from '../types';

const INITIAL_STATE = {
  filters: {
    title: '',
    description: '',
    startDayBefore: DEFAULT_START_DAY_BEFORE,
    endDayBefore: DEFAULT_END_DAY_BEFORE
  }
};

export default function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FILTER_PARAMETERS:
      return {
        ...state,
        filters: action.filters
      };
    default:
      return state;
  }
}
