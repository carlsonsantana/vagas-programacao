import React from 'react';

import {getTrackBackground} from 'react-range';

export default function renderTrack(values, min, max) {
  function Track({props, children}) {
    return (
      <div
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        className="input-range-box"
        style={{...props.style}}
      >
        <div
          ref={props.ref}
          className="input-range-line"
          style={{
            background: getTrackBackground({
              values,
              min,
              max,
              colors: ['#ccc', '#548bf4', '#ccc']
            })
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return Track;
}
