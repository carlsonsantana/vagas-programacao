import React from 'react';

import BreadcrumbItem from '../BreadcrumbItem';
import TimeAgo from '../TimeAgo';
import MarkdownContent from '../MarkdownContent';
import JobDetails from '../JobDetails';
import './style.css';

export default function Job({job}) {
  const jobURL = `/job/${job.id}`;

  return (
    <article className="job-details">
      <BreadcrumbItem to={jobURL}>{job.title}</BreadcrumbItem>

      <header className="d-flex w-100 justify-content-between">
        <h2 className="mb-1">{job.title}</h2>
        <TimeAgo date={job.publishedAt} />
      </header>
      <JobDetails job={job} />
      <MarkdownContent content={job.description} />
    </article>
  );
}
