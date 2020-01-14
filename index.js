/*
We want to create a dashboard interface that allows us to input a user ID 
and submit it to fetch a user object in JSON format which we can then use as data
to "hydrate" the page with user profiles in some kind of "card" style

1.) All users will be stored in a simple array. So complete the getUsers() function so that it
can take a users input for the user ID, then go fetch that user and store the response
as an object in the myUsers Array. (don't overwrite previously stored users!)

2.) Hook the array up to your HTML with a render() function that loops through the array and 
displays each user on the page somehow. You'll have to write the css and think of how the html
of the user cards will look. You can add a couple of users manually to make debugging your css easier



You can choose to use either Objects or Classes to organize your code into a module

We'll use this endpoint to fetch the users: `https://jsonplaceholder.typicode.com/users/${id}`


the documentation for how to use that endpont is here: https://jsonplaceholder.typicode.com

Bonus 1: Add a button that will remove the user from the display
Bonus 2: Add a button that changes the user to "Admin" status and gives a visual cue that they are Admins


Extra Bonus: Use promises, keyframes and web-animations library to make the users "card" animated onto the page nicely and gradually 
*/

let myUsers = [];

function getUsers(id){
    // fetch a user with given id
}

function User() {
    // the constructor
}

function addUserToDash(){
    // add user to DOM
}