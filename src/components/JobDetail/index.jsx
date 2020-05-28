import React from 'react';

import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import DateDiff from 'date-diff';

export default function JobItem({jobs}) {
  const {id} = useParams();
  let job = null;
  for (let i = 0, length = jobs.length; i < length; i++) {
    if (jobs[i].id === id) {
      job = jobs[i];
      break;
    }
  }

  const daysAgo = (new DateDiff(new Date(), new Date(job.publishedAt))).days();

  return (
    <article>
      <div className="d-flex w-100 justify-content-between">
        <h2 className="mb-1">{ job.title }</h2>
        <small>
          {daysAgo}
          {daysAgo > 1 ? ' dias ' : ' dia '}
          atrás
        </small>
      </div>
      <section>
        <ReactMarkdown source={job.description} />
      </section>
    </article>
  );
}
