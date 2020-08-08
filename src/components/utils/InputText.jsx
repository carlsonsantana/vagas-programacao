import React from 'react';

class InputText extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const {id, label} = this.props;
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          className="form-control"
          id={id}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default InputText;
