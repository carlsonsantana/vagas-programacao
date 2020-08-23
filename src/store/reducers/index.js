import {combineReducers} from 'redux';

import filtersReducer from './filters';
import jobsReducer from './jobs';

export default combineReducers({filters: filtersReducer, jobs: jobsReducer});
