import {SET_JOBS} from '../types';

const INITIAL_STATE = {
  jobs: []
};

export default function jobReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.jobs
      };
    default:
      return state;
  }
}
