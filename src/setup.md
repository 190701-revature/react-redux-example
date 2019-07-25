# Initial Goal
Create a clicker component that tracks state using the Redux State store

# Redux Setup
* Setup the store
* Define our Actions
* * Clicker -> Click (CLICKER_UPDATE)
* Define the state (clicker.reducer.ts)
* * Typing the state
* * Aggregate State
* Define reducers
* * Reducer will receive the action, and move the state forward
* * Aggregate Reducers
* Create Component
* * Setup component prop interface
* * Wire component to get props from store
* * Wire component to get props from dispatcher
* * Connect component to store using connect method
* * Ensure connect returned value is a default export
* * In App.ts (or anywhere else) you import the default export of the component
* Add Provider into component tree, at a high level above all components
        which require state
