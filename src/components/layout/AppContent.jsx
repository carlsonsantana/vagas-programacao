import React from 'react';

import {Switch, Route} from 'react-router-dom';
import md5 from 'md5';
import stripHtmlComments from 'strip-html-comments';
import calcudate from 'calcudate';

import HomePage from '../pages/HomePage';
import JobPage from '../pages/JobPage';
import Loading from '../utils/Loading';

const API_URL = 'https://carlsonsantana.github.io/static-jobs-api/data.json';

class AppContent extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredJobs: [],
      allJobs: [],
      jobsLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      API_URL,
      {
        cache: 'no-store',
        method: 'GET'
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }).then((jobs) => jobs.map((job) => {
      job.id = md5(`${job.url}:${job.publishedAt}`);
      return job;
    })).then((jobs) => jobs.map((job) => {
      job.description = stripHtmlComments(job.description);
      return job;
    })).then(
      (jobs) => this.setState({
        allJobs: jobs,
        filteredJobs: jobs,
        jobsLoaded: true
      })
    );
  }

  getDateAgo(days) {
    const now = new Date();
    const today = calcudate.getStart(now).day;
    return calcudate.sub(today).days(days);
  }

  filterHandler(filters) {
    const titleRegex = new RegExp(filters.title, 'gi');
    const descriptionRegex = new RegExp(filters.description, 'gi');
    const startDate = this.getDateAgo(filters.endDayBefore);
    const endDate = this.getDateAgo(filters.startDayBefore - 1);

    const filteredJobs = this.state.allJobs.filter((job) => {
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
            render={() => (
              <HomePage
                jobs={filteredJobs}
                filterHandler={this.filterHandler.bind(this)}
              />
            )}
          />
          <Route
            exact
            path="/job/:id"
            render={this.renderJobPage.bind(this)}
          />
        </Switch>
      </main>
    );
  }
}

export default AppContent;
