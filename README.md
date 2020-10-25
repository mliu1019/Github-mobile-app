# FA20 CS242 Assignment 3

Assignment 3 of CS 242 Class Fall 2020. The assignment implements a React-Native App that presentsuser's profile and repository info gathered using Github's API.

## Tool
* [XCode](https://developer.apple.com/xcode/) 
* [Expo](https://expo.io/)

## Run
* `npm install`
  * Install all libraries and dependencies necessary to run the app.
* `npm start`
  * The command starts an expo server. And you should be able to connect to the server with your phone or run the app on a simulator. 

## Test 
* `npm test`
  * The command runs all tests under /__tests__ folder. 

## Folder
App data.
```
app
├── src                     # All react-native code  
│   ├── models              # Graphql models and service requests
|   └── views               # React Native Components
|       └── shared          # Shared components used by other classes
├── App.js                  # Main
├── __tests__               # Contains all tests
└── ...                     # .

```
