## To-Do Application with authorization

This is a React application to manage simple tasks. It uses an API server (https://github.com/doug97703/basic-node-js-api-server) for use in persisting and updating data, a custom hook to handle API calls, and the Context API to change app settings. This repo adds authorization functionality with different levels of users.

  * Logged In Users with 'read' permissions can see the summary/count
  * Logged In Users with 'read' permissions can see the list of To Do Items
  * Logged In Users with 'delete' permissions can click the records to mark them as complete
  * Logged In Users with 'update' permissions can edit existing items
  * Logged In Users with 'create' permissions can create new items