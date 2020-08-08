import md5 from 'md5';
import stripHtmlComments from 'strip-html-comments';

const API_URL = 'https://carlsonsantana.github.io/static-jobs-api/data.json';

export function loadJobs() {
  return requestJobs().then(
    convertResponseToJSON
  ).then(createJobsIDs).then(removeMarkdownComments);
}

function requestJobs() {
  return fetch(
    API_URL,
    {cache: 'no-store', method: 'GET'}
  ).then(checkRequestError);
}

function checkRequestError(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

function convertResponseToJSON(response) {
  return response.json();
}

function createJobsIDs(jobs) {
  return jobs.map((job) => {
    job.id = md5(`${job.url}:${job.publishedAt}`);
    return job;
  });
}

function removeMarkdownComments(jobs) {
  return jobs.map((job) => {
    job.description = stripHtmlComments(job.description);
    return job;
  });
}
