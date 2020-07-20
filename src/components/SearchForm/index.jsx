import React from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class SearchForm extends React.Component {
  constructor() {
    super();

    const thirtyDaysInMilliseconds = 2592000000;
    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - thirtyDaysInMilliseconds);

    this.state = {
      title: '',
      description: '',
      startDate: thirtyDaysAgo,
      endDate: today
    };
  }

  titleHandleChange(event) {
    this.changeState({title: event.target.value});
  }

  descriptionHandleChange(event) {
    this.changeState({description: event.target.value});
  }

  startDateHandleChange(startDate) {
    this.changeState({startDate});
  }

  endDateHandleChange(endDate) {
    this.changeState({endDate});
  }

  changeState(newState) {
    this.setState(newState, this.filterJobs.bind(this));
  }

  filterJobs() {
    this.props.filterHandler(this.state);
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
              onChange={this.titleHandleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="job-description">Descrição</label>
            <input
              type="text"
              className="form-control"
              id="job-description"
              onChange={this.descriptionHandleChange.bind(this)}
            />
          </div>
          <fieldset>
            <legend>Vagas publicadas entre</legend>
            <div className="form-group">
              <label htmlFor="job-start-date">A partir da data</label>
              <DatePicker
                id="job-start-date"
                className="form-control"
                selected={this.state.startDate}
                onChange={this.startDateHandleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="job-end-date">Até a data</label>
              <DatePicker
                id="job-end-date"
                className="form-control"
                selected={this.state.endDate}
                onChange={this.endDateHandleChange.bind(this)}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SearchForm;
