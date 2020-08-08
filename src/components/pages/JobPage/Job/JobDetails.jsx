import React from 'react';

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
          </a>
        </li>
      </ul>
    </details>
  );
}
