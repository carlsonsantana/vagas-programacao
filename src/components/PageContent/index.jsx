import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import md5 from 'md5';
import stripHtmlComments from 'strip-html-comments';

import JobList from '../JobList';
import JobDetails from '../JobDetails';

const API_URL = 'https://carlsonsantana.github.io/static-jobs-api/data.json';
const A_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

class PageContent extends React.Component {
  constructor() {
    super();

    this.state = {
      jobs: [],
      allJobs: []
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
    })).then((jobs) => this.setState({allJobs: jobs, jobs}));
  }

  filterHandler(filters) {
    const titleRegex = new RegExp(filters.title, 'gi');
    const descriptionRegex = new RegExp(filters.description, 'gi');
    const endDate = new Date(filters.endDate.getTime() + A_DAY_IN_MILLISECONDS);
    const jobs = this.state.allJobs.filter((job) => {
      const publishedAt = new Date(job.publishedAt);
      return (
        titleRegex.test(job.title)
        && descriptionRegex.test(job.description)
        && (publishedAt.getTime() >= filters.startDate.getTime())
        && (publishedAt.getTime() < endDate.getTime())
      );
    });
    this.setState({jobs});
  }

  render() {
    const {jobs} = this.state;
    return (
      <main>
        <Router basename="/vagas-programacao/">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <JobList
                  jobs={jobs}
                  filterHandler={this.filterHandler.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/job/:id"
              render={() => <JobDetails jobs={jobs} />}
            />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default PageContent;
