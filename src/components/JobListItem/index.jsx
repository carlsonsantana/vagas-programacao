import React from 'react';

import {Link} from 'react-router-dom';
import trimCharacters from 'trim-characters';
import removeMarkdown from 'remove-markdown';

import './style.css';
import TimeAgo from '../TimeAgo';

export default function JobListItem({job}) {
  const jobURL = `/job/${job.id}`;
  const description = removeMarkdown(
    trimCharacters(job.description, 150, false, ' ...')
  );

  return (
    <li className="list-group-item job-list-item">
      <Link className="list-group-item-action" to={jobURL}>
        <div className="d-flex w-100 justify-content-between">
          <strong className="mb-1">{job.title}</strong>
          <TimeAgo date={job.publishedAt} />
        </div>
        <p className="mb-1">{description}</p>
      </Link>
    </li>
  );
}
