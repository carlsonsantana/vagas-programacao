import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import md5 from 'md5';
import stripHtmlComments from 'strip-html-comments';
import calcudate from 'calcudate';

import JobList from '../JobList';
import JobDetails from '../JobDetails';

const API_URL = 'https://carlsonsantana.github.io/static-jobs-api/data.json';

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

    const jobs = this.state.allJobs.filter((job) => {
      const publishedAt = new Date(job.publishedAt);

      return (
        titleRegex.test(job.title)
        && descriptionRegex.test(job.description)
        && (publishedAt.getTime() >= startDate.getTime())
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
