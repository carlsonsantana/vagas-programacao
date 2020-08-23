import React from 'react';

import {HOME_PAGE} from '../../../config/pages';
import PageMetadata from '../../utils/PageMetadata';
import FilterForm from './FilterForm';
import JobList from './JobList';

export default function HomePage() {
  return (
    <div>
      <PageMetadata page={HOME_PAGE} />

      <FilterForm />
      <JobList />
    </div>
  );
}
