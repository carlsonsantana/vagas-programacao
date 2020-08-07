import React from 'react';

import {Range} from 'react-range';

import renderTrack from './render-track';
import renderThumb from './render-thumb';
import './style.css';

class InputRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {values: [props.min, props.max]};
  }

  render() {
    const {label, min, max, onChange} = this.props;
    const {values} = this.state;

    return (
      <div className="form-group">
        <label className="input-range-label">{label}</label>
        <Range
          step={1}
          min={min}
          max={max}
          values={values}
          onChange={newValues => this.setState({values: newValues})}
          onFinalChange={onChange}
          renderTrack={renderTrack(values, min, max)}
          renderThumb={renderThumb(values)}
        />
      </div>
    );
  }
}

export default InputRange;
