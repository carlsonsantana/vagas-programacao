import React from 'react';

import { Link } from 'react-router-dom';
import DateDiff from 'date-diff';
import trimCharacters from 'trim-characters';
import removeMarkdown from 'remove-markdown';

import './styles.css';

export default function JobItem({job}) {
  const daysAgo = (new DateDiff(new Date(), new Date(job.publishedAt))).days();
  const description = removeMarkdown(
    trimCharacters(job.description, 150, false, ' ...')
  );

  return (
    <li className="list-group-item">
      <Link className="list-group-item-action" to={`/job/${job.id}`}>
        <div className="d-flex w-100 justify-content-between">
          <strong className="mb-1">{job.title}</strong>
          <small>
            {daysAgo}
            {daysAgo > 1 ? ' dias ' : ' dia '}
            atrás
          </small>
        </div>
        <p className="mb-1">
          {description}
        </p>
      </Link>
    </li>
  );
}
