import React from 'react';

import {BreadcrumbsItem} from 'react-breadcrumbs-dynamic';
import {useDocumentTitle} from '@huse/document-title';

function generateBreadcrumbsItems({path, title, parent}) {
  let parentContent = '';

  if (parent !== null) {
    parentContent = generateBreadcrumbsItems(parent);
  }

  return (
    <>
      {parentContent}
      <BreadcrumbsItem to={path}>{title}</BreadcrumbsItem>
    </>
  );
}

export default function PageMetadata({page}) {
  const breadcrumbsitems = generateBreadcrumbsItems(page);
  const documentTitle = `${page.title} - Vagas Programação`;

  useDocumentTitle(documentTitle);

  return (
    <>
      {breadcrumbsitems}
    </>
  );
}
