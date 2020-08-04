import React from 'react';

import JobListItem from '../JobListItem';
import FilterForm from '../FilterForm';
import ItemsNavigation from '../ItemsNavigation';

export default function JobList({jobs, filterHandler}) {
  return (
    <div>
      <FilterForm filterHandler={filterHandler} />
      <ItemsNavigation
        items={jobs}
        render={(job) => <JobListItem key={job.id} job={job} />}
      />
    </div>
  );
}
