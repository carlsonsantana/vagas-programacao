import React from 'react';

import TimeAgo from 'timeago-react';

export default function MyTimeAgo({date}) {
  return (
    <TimeAgo datetime={date} locale="pt-br" live={false} className="small" />
  );
}
