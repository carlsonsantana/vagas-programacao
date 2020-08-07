import React from 'react';

import InputText from '../../../utils/InputText';
import InputRange from '../../../utils/InputRange';

const DEFAULT_START_DAY_BEFORE = 0;
const DEFAULT_END_DAY_BEFORE = 30;

class FilterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      startDayBefore: DEFAULT_START_DAY_BEFORE,
      endDayBefore: DEFAULT_END_DAY_BEFORE
    };
  }

  titleHandleChange(title) {
    this.changeState({title});
  }

  descriptionHandleChange(description) {
    this.changeState({description});
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
          <InputText
            id="job-title"
            label="Título"
            onChange={this.titleHandleChange.bind(this)}
          />
          <InputText
            id="job-description"
            label="Descrição"
            onChange={this.descriptionHandleChange.bind(this)}
          />
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

export default FilterForm;
