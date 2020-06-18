import React from 'react';

import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ReactLoading from "react-loading";

import TimeAgo from '../TimeAgo';

export default function JobItem({jobs}) {
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
    <article>
      <div className="d-flex w-100 justify-content-between">
        <h2 className="mb-1">{job.title}</h2>
        <TimeAgo date={job.publishedAt} />
      </div>
      <section>
        <ReactMarkdown source={job.description} />
      </section>
    </article>
  );
}
