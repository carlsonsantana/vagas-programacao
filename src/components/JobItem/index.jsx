import React from 'react';

import './styles.css';

export default function JobItem({job}) {
  return (
    <li class="list-group-item">
      <a class="list-group-item-action" href="#">
        <div class="d-flex w-100 justify-content-between">
          <strong class="mb-1">{job.title}</strong>
          <small>{job.publishedAt}</small>
        </div>
        <p class="mb-1">
          {job.description}
        </p>
      </a>
    </li>
  );
}
