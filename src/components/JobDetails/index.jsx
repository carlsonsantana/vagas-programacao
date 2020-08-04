import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function JobDetails({job}) {
  const {url: publishedURL} = job;

  return (
    <details>
      <summary>Informações de publicação da vaga</summary>
      <ul>
        <li>
          <strong>Página onde a vaga foi publicada</strong>:{' '}
          <a href={publishedURL} target="_blank" rel="noreferrer noopener">
            {publishedURL}
          </a>{' '}
          <a
            href={publishedURL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-body"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </details>
  );
}
