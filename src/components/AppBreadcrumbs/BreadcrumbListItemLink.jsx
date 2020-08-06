import React from 'react';

import {Link} from 'react-router-dom';

export default function BreadcrumbListItemLink({children, to}) {
  return <li className="breadcrumb-item"><Link to={to}>{children}</Link></li>;
}
