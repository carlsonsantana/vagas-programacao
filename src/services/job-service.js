const API_URL = 'https://carlsonsantana.github.io/static-jobs-api/data.json';

export function loadJobs() {
  return requestJobs().then(convertResponseToJSON);
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
