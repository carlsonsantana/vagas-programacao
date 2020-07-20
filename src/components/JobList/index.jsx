import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';

import JobItem from '../JobItem';
import SearchForm from '../SearchForm';

class JobList extends React.Component {
  constructor() {
    super();

    this.state = {
      loadedJobs: [],
      hasMoreJobs: true
    };
    this.index = 0;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.jobs.length !== this.props.jobs.length) {
      this.setState({hasMoreJobs: true});
    }
  }

  loadJobs() {
    const jobs = this.props.jobs;
    const loadedJobs = jobs.slice(0, this.index * 10);
    this.index++;
    this.setState({
      loadedJobs,
      hasMoreJobs: ((this.index * 10) < jobs.length)
    });
  }

  render() {
    const {loadedJobs, hasMoreJobs} = this.state;
    return (
      <div>
        <SearchForm filterHandler={this.props.filterHandler} />
        <InfiniteScroll
          element="ul"
          className="list-group"
          loadMore={this.loadJobs.bind(this)}
          hasMore={hasMoreJobs}
        >
          {loadedJobs.map(
            (job) => <JobItem key={job.id} job={job} />
          )}
        </InfiniteScroll>
      </div>
    );
  }
}

export default JobList;
