# LAB -  `<Login />` and `<Auth />`

Using Login Context, "protect" the To Do application by restricting access to the various application features based on the users' login status and capabilities.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Open [Code Sandbox](http://codesandbox.io) and Create a new application titled with your course code and this lab number (i.e. js-401n15-class-10)

You will be submitting the URL to this working sandbox as part of your assignment.

## Assignment: To Do Application

Write a React application that will be able to manage your personal To Do List

For this assignment, we'll be using the Context API to add a few "settings" to the To Do application to make it work differently based on configuration.

### Requirements

- Design your application with a header, main section, and a footer
- The overall styling is up to you
- The header should present the application title
  - Render a login/logout option in the header of the app
- The main section will house the To Do application itself
  - A Form where the user can a new item to the todo list
    - Items should have the following fields:
      - To Do Item Text
      - Assigned To
      - Status (complete/incomplete)
      - Difficulty (number between 1 and 5)
  - The list of items in the to do list
    - Each item in list should show the text of the item as well as the assignee
    - When clicked, toggle the "complete" status of the item.
    - Items should have a delete button associated with them
      - When clicked, remove the item from the list
  - Based on configuration
    - Show a maximum of a certain number of items per screen
    - Hide completed items from the list **OR** display them (with a style that indicates their status
  - **Hide the entire interface until the user has logged in.**
  - **Implement the following RBAC rules:**
    - Logged In Users with 'read' permissions can see the summary/count
    - Logged In Users with 'read' permissions can see the list of To Do Items
    - Logged In Users with 'delete' permissions can click the records to mark them as complete
    - Logged In Users with 'update' permissions can edit existing items
    - Logged In Users with 'create' permissions can create new items

### Implementation Notes/Details

You have been provided, in the `practice` folder, a sample application built using the `<Login />` and `<Auth />` components built during class. Get this running first, and analyze it. You will need these components to complete the Authentication tasks specified above

- You will notice that the login system is fundamentally broken
  - What doesn't work? Why?
  - Fix It before you move on
- For practice, convert the `<LoginContext />`,`<Login />`and`<Auth />` components to be implemented as 'function' components instead of 'class' components

Once you have a working practice app, extract the components from it and separately build the To Do application, implementing Authentication and Authorization as described in the requirements

### Testing

- Write unit tests for the Login Context Component
- Write unit tests for the Login/Auth components
  - Hide/Show based on status
- You will need to create some mocking interface to fake a server/login to simulate.

## To Do Application Refactor

You have been provided, in the `starter-code/todo` folder, a working To Do list application, written using standard React Component State

**Assignment: Implement Login and Authorization into an existing application**

### Requirements

* Hide the entire interface until the user has logged in.
  * Provide a login and logout option in the header of the app
* Implement the following RBAC rules:
  * Logged In Users with 'read' permissions can see the summary/count
  * Logged In Users with 'read' permissions can see the list of To Do Items
  * Logged In Users with 'delete' permissions can click the records to mark them as complete
  * Logged In Users with 'update' permissions can edit existing items
  * Logged In Users with 'create' permissions can create new items

### Notes

* You may use the working login/auth component system from your practice assignment
* You may not alter the functionality of the existing application
* You may only grant access using RBAC
* You must test/implement with a live API server
  * Use .env in your React app to configure it's connection
* You may use your own API Server, which support login and auth or you may use the official API deployment at <https://api-js401.herokuapp.com>
  * Note: The deployed API server has the following user accounts (username:password) that you can use to login as a user with varying permissions
    * admin:ADMIN (create, read, update, delete)
    * editor:EDITOR (create, read, update)
    * user:USER (read)

### Testing

* Write a suite of UI tests that assert the existence of components based on user login state. This is an assertion of wiring, not logic.
* Your previous Login/Auth tests are going to be sufficient for the core functionality

### Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
