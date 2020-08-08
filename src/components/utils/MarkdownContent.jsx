import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

export default function MarkdownContent({content}) {
  return (
    <div>
      <ReactMarkdown source={content} plugins={[remarkBreaks]} />
    </div>
  );
}
