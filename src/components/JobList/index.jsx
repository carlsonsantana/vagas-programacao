import React from 'react';

import JobListItem from '../JobListItem';
import ItemsNavigation from '../ItemsNavigation';

export default function JobList({jobs}) {
  return (
    <ItemsNavigation
      items={jobs}
      render={(job) => <JobListItem key={job.id} job={job} />}
    />
  );
}
