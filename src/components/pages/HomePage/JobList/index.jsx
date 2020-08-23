import React from 'react';

import {connect} from 'react-redux';

import JobListItem from './JobListItem';
import ItemsNavigation from '../../../utils/ItemsNavigation';

function JobList({jobs}) {
  return (
    <ItemsNavigation
      items={jobs}
      render={(job) => <JobListItem key={job.id} job={job} />}
    />
  );
}

function mapStateToProps(state) {
  return {jobs: state.jobs.jobs};
}

export default connect(mapStateToProps)(JobList);
