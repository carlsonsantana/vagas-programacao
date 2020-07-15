import React from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class SearchForm extends React.Component {
  constructor() {
    super();

    const thirtyDaysInMilliseconds = 2592000000;
    const today = new Date();
    const thirtyDaysAgo = today.getTime() - thirtyDaysInMilliseconds;

    this.state = {
      jobTitle: '',
      jobDescription: '',
      jobStartDate: thirtyDaysAgo,
      jobEndDate: today
    };
  }

  render() {
    return (
      <div>
        <h2>Filtros de pesquisa de vagas</h2>
        <form>
          <div className="form-group">
            <label htmlFor="job-title">Título</label>
            <input
              type="text"
              className="form-control"
              id="job-title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="job-description">Descrição</label>
            <input
              type="text"
              className="form-control"
              id="job-description"
            />
          </div>
          <fieldset>
            <legend>Vagas publicadas entre</legend>
            <div className="form-group">
              <label htmlFor="job-start-date">A partir da data</label>
              <DatePicker
                id="job-start-date"
                className="form-control"
                selected={this.state.jobStartDate}
                onChange={(jobStartDate) => this.setState({jobStartDate})}
              />
            </div>
            <div className="form-group">
              <label htmlFor="job-end-date">Até a data</label>
              <DatePicker
                id="job-end-date"
                className="form-control"
                selected={this.state.jobEndDate}
                onChange={(jobEndDate) => this.setState({jobEndDate})}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SearchForm;
