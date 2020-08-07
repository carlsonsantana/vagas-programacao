import {pageFactory} from '../utils/page-factory';

export const HOME_PAGE = pageFactory('/', 'Página inicial', null);
export const JOB_PAGE_TEMPLATE = pageFactory('/job/:id', ':title', HOME_PAGE);
