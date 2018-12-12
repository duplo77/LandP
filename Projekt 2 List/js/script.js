/******************************************
Treehouse Techdegree: project 2 - List Filter and Pagination
Christian Oosterhof
******************************************/

// global variables
const eachStudent = document.querySelectorAll('.student-item');
const buttonDiv = document.querySelector('.pagination');
const buttonUl = buttonDiv.querySelector('ul');
const studentsPerPage = 10;

// Function for determining the rounded number of pages based on the number of students
function numberOfPages() {
    let pages = Math.ceil(eachStudent.length / studentsPerPage);
    return pages;
}

// Loop create page buttons based on number of required pages
for (let i = 1; i <= numberOfPages(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a'); //Hyperlink
    pageLink.href = '#'; // to top of the page
    pageLink.textContent = i; //page number
    buttonUl.appendChild(pageli);  // Append the li to buttonUl
    pageli.appendChild(pageLink); // Append the a to li
}

const paginationLinks = document.querySelectorAll('.pagination a');
paginationLinks[0].className = 'active';

for (let i = 0; i < paginationLinks.length; i++) {
		paginationLinks[i].addEventListener('click', () => {
		// remove active class from all the links
		for (let i = 0; i < paginationLinks.length; i++) {
			paginationLinks[i].className='';
		}
		// mark that link as “active”
		paginationLinks[i].className = 'active';
		});
	}

// Function to automatically show first ten students when page loads
function showFirstTen() {
    for (let i = 0; i < eachStudent.length; i++) {
        if (i < studentsPerPage) {
            eachStudent[i].style.display = '';
        } else {
            eachStudent[i].style.display = 'none';
        }
    }
}

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

// Event listener to divide students between the pages
buttonDiv.addEventListener('click', (event) => {
    let buttonNumber = parseInt(event.target.textContent);
    let max = buttonNumber * 10;
    let min = max - 10;
    for (let i = 0; i < eachStudent.length; i++) {
        if (i >= min && i < max) {
            eachStudent[i].style.display = '';
        }  else {
            eachStudent[i].style.display = 'none';
        }
    }
});

// Function call to display first ten students on load
showFirstTen();
