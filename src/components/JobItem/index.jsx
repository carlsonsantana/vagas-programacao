import React from 'react';

import DateDiff from 'date-diff';

import './styles.css';

export default function JobItem({job}) {
  const daysAgo = (new DateDiff(new Date(), new Date(job.publishedAt))).days();

  return (
    <li class="list-group-item">
      <a class="list-group-item-action" href="#">
        <div class="d-flex w-100 justify-content-between">
          <strong class="mb-1">{job.title}</strong>
          <small>
            {daysAgo}
            {daysAgo > 1 ? ' days ' : ' day '}
            ago
          </small>
        </div>
        <p class="mb-1">
          {job.description}
        </p>
      </a>
    </li>
  );
}
