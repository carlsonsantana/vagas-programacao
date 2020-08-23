import {SET_JOBS} from '../types';

export function setJobs(jobs) {
  return {
    type: SET_JOBS,
    jobs
  };
}
