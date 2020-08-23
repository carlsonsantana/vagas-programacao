import React from 'react';

import {connect} from 'react-redux';

import InputText from '../../utils/InputText';
import InputRange from '../../utils/InputRange';
import {setFilters} from '../../../store/actions/filters';
import {
  DEFAULT_START_DAY_BEFORE,
  DEFAULT_END_DAY_BEFORE
} from '../../../config/filters';

class FilterForm extends React.Component {
  constructor() {
    super();

    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.descriptionHandleChange = this.descriptionHandleChange.bind(this);
    this.daysBeforeHandleChange = this.daysBeforeHandleChange.bind(this);
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
    this.props.setFilters({
      ...this.props.filters,
      ...newState
    });
  }

  render() {
    return (
      <div>
        <h2>Filtros de pesquisa de vagas</h2>
        <form>
          <InputText
            id="job-title"
            label="Título"
            onChange={this.titleHandleChange}
          />
          <InputText
            id="job-description"
            label="Descrição"
            onChange={this.descriptionHandleChange}
          />
          <InputRange
            id="days-range"
            label="Intervalo entre os dias"
            min={DEFAULT_START_DAY_BEFORE}
            max={DEFAULT_END_DAY_BEFORE}
            onChange={this.daysBeforeHandleChange}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {filters: state.filters.filters};
}

function mapDispatchToProps(dispatch) {
  return {setFilters: filters => dispatch(setFilters(filters))};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
