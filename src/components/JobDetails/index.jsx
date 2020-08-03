import React from 'react';

import {useParams} from 'react-router-dom';
import ReactLoading from 'react-loading';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import TimeAgo from '../TimeAgo';
import MarkdownContent from '../MarkdownContent';
import './style.css';

export default function JobDetails({jobs}) {
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
      <section>
        <section>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Página onde a vaga foi publicada:{' '}
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {job.url}
              </a>{' '}
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-body"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </section>
      </section>
      <MarkdownContent content={job.description} />
    </article>
  );
}
