import React from 'react';

import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import calcudate from 'calcudate';

import HomePage from '../pages/HomePage';
import JobPage from '../pages/JobPage';
import Loading from '../utils/Loading';
import {loadJobs} from '../../services/job-service';

class AppContent extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredJobs: [],
      allJobs: [],
      jobsLoaded: false
    };

    this.filterHandler = this.filterHandler.bind(this);
    this.renderJobPage = this.renderJobPage.bind(this);
  }

  componentDidMount() {
    loadJobs().then((jobs) => this.setState({
      allJobs: jobs,
      filteredJobs: jobs,
      jobsLoaded: true
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevProps.filters !== this.props.filters)
      || (prevState.allJobs !== this.state.allJobs)
    ) {
      this.filterHandler(this.props.filters);
    }
  }

  getDateAgo(days) {
    const now = new Date();
    const today = calcudate.getStart(now).day;
    return calcudate.sub(today).days(days);
  }

  filterHandler(filters) {
    const {allJobs} = this.state;

    const titleRegex = new RegExp(filters.title, 'gi');
    const descriptionRegex = new RegExp(filters.description, 'gi');
    const startDate = this.getDateAgo(filters.endDayBefore);
    const endDate = this.getDateAgo(filters.startDayBefore - 1);

    const filteredJobs = allJobs.filter((job) => {
      const publishedAt = new Date(job.publishedAt);

      return (
        titleRegex.test(job.title)
        && descriptionRegex.test(job.description)
        && (publishedAt.getTime() >= startDate.getTime())
        && (publishedAt.getTime() < endDate.getTime())
      );
    });

    this.setState({filteredJobs});
  }

  getJobById(id) {
    const {allJobs} = this.state;
    return allJobs.find((job) => job.id === id);
  }

  renderJobPage(props) {
    const {jobsLoaded} = this.state;

    if (!jobsLoaded) {
      return <Loading />;
    }

    const jobId = props.match.params.id;
    const job = this.getJobById(jobId);

    return <JobPage job={job} />;
  }

  render() {
    const {filteredJobs} = this.state;

    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage jobs={filteredJobs} />}
          />
          <Route exact path="/job/:id" render={this.renderJobPage} />
        </Switch>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {filters: state.filters.filters};
}

export default connect(mapStateToProps)(AppContent);
