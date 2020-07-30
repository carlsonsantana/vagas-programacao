import React from 'react';

import InputRange from '../InputRange';

const DEFAULT_START_DAY_BEFORE = 0;
const DEFAULT_END_DAY_BEFORE = 30;

class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      startDayBefore: DEFAULT_START_DAY_BEFORE,
      endDayBefore: DEFAULT_END_DAY_BEFORE
    };
  }

  titleHandleChange(event) {
    this.changeState({title: event.target.value});
  }

  descriptionHandleChange(event) {
    this.changeState({description: event.target.value});
  }

  daysBeforeHandleChange([startDayBefore, endDayBefore]) {
    this.changeState({startDayBefore, endDayBefore});
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
          <InputRange
            id="days-range"
            label="Intervalo entre os dias"
            min={DEFAULT_START_DAY_BEFORE}
            max={DEFAULT_END_DAY_BEFORE}
            onChange={this.daysBeforeHandleChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
