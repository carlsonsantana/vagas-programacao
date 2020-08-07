import React from 'react';

import PageMetadata from '../PageMetadata';
import TimeAgo from '../TimeAgo';
import MarkdownContent from '../MarkdownContent';
import JobDetails from '../JobDetails';
import {JOB_PAGE_TEMPLATE} from '../../config/pages';
import {pageFactoryByTemplate} from '../../utils/page-factory';
import './style.css';

export default function Job({job}) {
  const pageMetadata = pageFactoryByTemplate(JOB_PAGE_TEMPLATE, job);

  return (
    <article className="job-details">
      <PageMetadata page={pageMetadata} />

      <header className="d-flex w-100 justify-content-between">
        <h2 className="mb-1">{job.title}</h2>
        <TimeAgo date={job.publishedAt} />
      </header>
      <JobDetails job={job} />
      <MarkdownContent content={job.description} />
    </article>
  );
}
