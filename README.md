## To-Do Application with authorization

Development build located here: https://shrouded-reef-75988.herokuapp.com/

This is a React application to manage simple tasks. It uses an API server (https://github.com/doug97703/basic-node-js-api-server) for use in persisting and updating data, a custom hook to handle API calls, and the Context API to change app settings. This repo adds authorization functionality with different levels of users, using the API to authenticate requests.

  * Logged In Users with 'read' permissions can see the summary/count
  * Logged In Users with 'read' permissions can see the list of To Do Items
  * Logged In Users with 'delete' permissions can delete the records
  * Logged In Users with 'update' permissions can click the records to mark them as complete
  * Logged In Users with 'update' permissions can edit the app settings
  * Logged In Users with 'create' permissions can create new items

### API server is live here: (https://lit-anchorage-79085.herokuapp.com)

To create a new account:
POST /signup
body needs username, password, and role.

Possible roles: admin, editor, reader, creator, none

### Here are some profiles you can use. All users have the password of 'password'

* doug: ALL PERMISSIONS
* susy reader: READ
* bob creator:  READ, CREATE
* edward editor: READ, DELETE, UPDATE

### Dependencies:
    "jsonwebtoken": "^8.5.1",
    "node-sass": "^4.12.0",
    "react": "16.12.0",
    "react-cookies": "^0.1.1",
    "react-dom": "16.12.0",
    "react-jsonschema-form": "1.8.1",
    "react-router-dom": "5.1.2",
    "react-scripts": "^3.4.0",
    "uuid": "3.4.0"