import React from 'react';

import TimeAgo from '../TimeAgo';
import MarkdownContent from '../MarkdownContent';
import JobDetails from '../JobDetails';
import './style.css';

export default function Job({job}) {
  return (
    <article className="job-details">
      <header className="d-flex w-100 justify-content-between">
        <h2 className="mb-1">{job.title}</h2>
        <TimeAgo date={job.publishedAt} />
      </header>
      <JobDetails job={job} />
      <MarkdownContent content={job.description} />
    </article>
  );
}
