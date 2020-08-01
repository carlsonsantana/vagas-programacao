import React from 'react';

import JobItem from '../JobItem';
import FilterForm from '../FilterForm';
import ItemsNavigation from '../ItemsNavigation';

export default function JobList({jobs, filterHandler}) {
  return (
    <div>
      <FilterForm filterHandler={filterHandler} />
      <ItemsNavigation
        items={jobs}
        render={(job) => <JobItem key={job.id} job={job} />}
      />
    </div>
  );
}
