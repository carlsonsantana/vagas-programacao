import React from 'react';

import {Breadcrumbs} from 'react-breadcrumbs-dynamic';

import BreadcrumbListItemLink from './BreadcrumbListItemLink';
import BreadcrumbListItemActive from './BreadcrumbListItemActive';

export default function AppBreadcrumbs() {
  return (
    <nav aria-label="breadcrumb">
      <Breadcrumbs
        container="ol"
        containerProps={{className: 'breadcrumb'}}
        item={BreadcrumbListItemLink}
        finalItem={BreadcrumbListItemActive}
      />
    </nav>
  );
}
