import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import md5 from 'md5';

import JobList from '../JobList';
import JobDetail from '../JobDetail';

const API_URL = 'https://carlsonsantana.github.io/fakeapi-jobs/data.json';

class PageContent extends React.Component {
  constructor() {
    super();

    this.state = {
      jobs: []
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
    })).then((jobs) => this.setState({jobs}));
  }

  render() {
    const {jobs} = this.state;
    return (
      <main>
        <Router basename="/vagas-programacao/">
          <Switch>
            <Route exact path="/" render={() => <JobList jobs={jobs} />} />
            <Route
              exact
              path="/job/:id"
              children={<JobDetail jobs={jobs} />}
            />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default PageContent;
