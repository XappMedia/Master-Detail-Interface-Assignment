# XAPPmedia UI Developer Homework Assignment

This homework assignment will give us a better understanding of your current skill level and give us a brief glimpse into how you work.

This repository is a highly modified version of [react-redux-typescript-boilerplate by rokoroku](https://github.com/rokoroku/react-redux-typescript-boilerplate).  It is extremely similar to the repository for our web application.

## Prerequisites 

- Node.js
- NPM
- We strongly recommend [VSCode](https://code.visualstudio.com/download) as your IDE for TypeScript

## Primary Task - Application Detail View

A common pattern in UIs is the [master-detail interface](https://en.wikipedia.org/wiki/Master%E2%80%93detail_interface) where selecting an item in the master view changes what is in the detail view.

The project as it stands is a partial implementation of such an interface.  The master view is a list of applications but the detail view is up to you to implement.  

The expectation is when one of the apps in the list is selected, the details for the selected app is displayed in the detail view.

## Additional Tasks

- [ ] Display an empty list state
- [ ] Display feedback to the user that the list is loading
- [ ] Make everything look great

## Even More Additioanal Tasks

- [ ] Add a unit testing framework and a unit test
- [ ] Hook up an action for when the getApps fails and display the error message to the user
- [ ] Hook up a route (for example `/{app-slug}`) that just displays the application detail view.  
