import React from 'react';

import PageMetadata from '../PageMetadata';
import {JOB_PAGE_TEMPLATE} from '../../config/pages';
import {pageFactoryByTemplate} from '../../utils/page-factory';
import Job from '../Job';

export default function JobPage({job}) {
  const pageMetadata = pageFactoryByTemplate(JOB_PAGE_TEMPLATE, job);

  return (
    <>
      <PageMetadata page={pageMetadata} />
      <Job job={job} />
    </>
  );
}
