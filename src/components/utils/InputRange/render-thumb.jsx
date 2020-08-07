import React from 'react';

export default function renderThumb(values) {
  function Thumb({index, props, isDragged}) {
    return (
      <div
        {...props}
        style={{...props.style}}
        className="input-range-thumb"
      >
        <div className="input-range-thumb-value">{values[index]}</div>
        <div
          className={`input-range-thumb-line ${isDragged ? 'dragged' : ''}`}
        />
      </div>
    );
  }

  return Thumb;
}
