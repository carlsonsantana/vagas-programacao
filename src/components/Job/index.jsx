import React from 'react';

import {useParams} from 'react-router-dom';
import ReactLoading from 'react-loading';

import TimeAgo from '../TimeAgo';
import MarkdownContent from '../MarkdownContent';
import JobDetails from '../JobDetails';
import './style.css';

export default function Job({jobs}) {
  const {id} = useParams();

  if ((jobs === null) || (jobs.length === 0)) {
    return (
      <ReactLoading type="spokes" color="#000" />
    );
  }

  let job = null;
  for (let i = 0, length = jobs.length; i < length; i++) {
    if (jobs[i].id === id) {
      job = jobs[i];
      break;
    }
  }

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
