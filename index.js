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
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        return data
    })
    .catch(error => error))
}

function User(id) {
    // the constructor
    return getUsers(id)
}

function addUserToDash(user){
    // add user to DOM
    myUsers.push(user)
}


function Book(title, author, numOfPages, read) {
	this.title = title;
	this.author = author;
	this.numOfPages = numOfPages;
	this.read = read;

	this.info = () => {
		return `${title} by ${author}, ${numOfPages} pages`;
	}
}
const output = document.querySelector('.users')
function render(){
    
}

function addBookToLibrary(title, author, numOfPages, read) {
	const book = new Book(title, author, numOfPages, read)
	myLibrary.push(book);

	// myLibrary.forEach(book => {
	// 	console.log(book);
	// })

	console.log(book);
	console.log('Added to library');
	render();
	console.log('rendered');
	
	// myLibrary[myLibrary.length - 1]
}

const table = document.querySelector('table');

function render() {
	book = 	myLibrary[myLibrary.length - 1]
	table.innerHTML += `<tr class="bookEntry"><td>${book.title}</td><td>${book.author}</td><td>${book.numOfPages}</td><td>${book.read}</td><td><input id="select" type="checkbox" name="select"></td></tr>`
}

addBookToLibrary('Wonder', 'RJ Palacio', '304', 'Read');
addBookToLibrary('Diary of a Wimpy Kid', 'Jeff Kinney', '254', 'Not Read');
addBookToLibrary('Lord of the Rings', 'JRR Tolkien', '304', 'Read');
// render();
// console.log('rendered');
// console.log(myLibrary[0].info());

const addBook = document.querySelector('#addBook');
const removeBook = document.querySelector('#removeBook');
const newBookForm = document.querySelector('form');
const submitNewBook = document.querySelector('#submit')
const closeFormButton = document.querySelector('#close')

function readStatus() {
	if(newBookForm[4].checked)
		return 'Read';
	else
		return 'Not Read';
}

addBook.addEventListener('click', () => {
	newBookForm.style.display = 'block';
});

removeBook.addEventListener('click', () => {
	let updatedTable = table.querySelector('tr').innerHTML;
	entry = table.querySelectorAll('.bookEntry');
	
	
	entry.forEach((element) => {
		console.log(element.innerHTML);
		
		selectBox = element.querySelector('#select')
		console.log(selectBox.checked);

		if(!selectBox.checked) {
			console.log(selectBox);
			updatedTable += element.outerHTML;
		}
	});

	console.log(updatedTable);
	
	table.innerHTML = updatedTable;
});

submitNewBook.addEventListener('click', () => {
	// console.log(newBookForm[4].value);
	
	// console.log(newBookForm[3].checked);
	
	addBookToLibrary(newBookForm[1].value, newBookForm[2].value, newBookForm[3].value, readStatus());
});

closeFormButton.addEventListener('click', () => {
	newBookForm.style.display = 'none';
})