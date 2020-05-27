import React from 'react';

import JobItem from '../JobItem';

export default function JobList({jobs}) {
  return (
    <ul class="list-group">
      {jobs.map(
        (job) => <JobItem key={job.url} job={job} />
      )}
    </ul>
  );
}
