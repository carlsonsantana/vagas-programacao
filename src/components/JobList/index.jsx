import React from 'react';

import JobItem from '../JobItem';

export default function JobList({jobs}) {
  return (
    <ul className="list-group">
      {jobs.map(
        (job) => <JobItem key={job.id} job={job} />
      )}
    </ul>
  );
}
