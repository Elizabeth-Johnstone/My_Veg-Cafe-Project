/*
Assign baseURL to window.location.origin and change package.json "start" to "node ./server/index.js && npm build" for Heroku deployment. Assign baseURL to `http://localhost:4000` and change package.json "start" to "react-scripts start" to run locally.
*/

export const baseURL = window.location.origin
// export const baseURL = `http://localhost:4000`;

