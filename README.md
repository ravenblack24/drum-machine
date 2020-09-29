# React Drum Machine
> Repository for my solution to the freeCodeCamp front-end libraries Drum Machine challenge.

## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Contact](#contact)

## General info
This app was built to satisfy and subsequently validated against the following User Stories:

- **User Story #1**: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
- **User Story #2**: Within #drum-machine I can see an element with a corresponding id="display".
- **User Story #3**: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
- **User Story #4**: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
- **User Story #5**: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
- **User Story #6**: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
- **User Story #7**: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Technologies
* React.js, vanilla Javascript and react-helmet

## Setup
In the project directory you should run:

`npm install`

Installs the required libraries.

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed!

## Status
Project is complete and an [interactive demo is available here](https://ravenblack24.github.io/drum-machine/).

## Contact
Created by [Kay Pea](https://imkp.co.uk) - feel free to contact me!