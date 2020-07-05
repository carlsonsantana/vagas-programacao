import React from 'react';

import { Link } from 'react-router-dom';
import trimCharacters from 'trim-characters';
import removeMarkdown from 'remove-markdown';

import './styles.css';
import TimeAgo from '../TimeAgo';

export default function JobItem({job}) {
  const description = removeMarkdown(
    trimCharacters(job.description, 150, false, ' ...')
  );

  return (
    <li className="list-group-item job-item">
      <Link className="list-group-item-action" to={`/job/${job.id}`}>
        <div className="d-flex w-100 justify-content-between">
          <strong className="mb-1">{job.title}</strong>
          <TimeAgo date={job.publishedAt} />
        </div>
        <p className="mb-1">
          {description}
        </p>
      </Link>
    </li>
  );
}
