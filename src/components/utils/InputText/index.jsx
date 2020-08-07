import React from 'react';

class InputText extends React.Component {
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
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default InputText;
