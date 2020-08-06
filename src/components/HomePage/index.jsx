import React from 'react';

import JobList from '../JobList';
import FilterForm from '../FilterForm';

export default function HomePage({jobs, filterHandler}) {
  return (
    <div>
      <FilterForm filterHandler={filterHandler} />
      <JobList jobs={jobs} />
    </div>
  );
}
