# react-stateevents-practice1

- You have a regular component called DogCard, a container component called DogsList, an App component, and a `db.json` file
- On the DOM your application should show a list of dog images and a button for each image that says "Bark"
- When a User clicks on the "Bark" button it should render text to the screen that says "Ruff"
- When a User clicks on the button a second time the "Ruff" should be removed from the DOM

## API
We will be using `json-server`. Be sure to `npm install -g json-server`. Then to run `json-server db.json` when running your backend. You will want to make a request to `GET http://localhost:3005/dogs` to retrieve all dogs.

## What are we practicing?

- Making decisions about when we need state and which component should hold state
- Learning and mapping component hierarchy
- mapping through an array to render a list of components
- setState
- Event Handling in React

![dog gif](react-events.gif)
