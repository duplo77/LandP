//Pagination
// global variables
const page = document.querySelector('.page')
let currentStudents = document.querySelectorAll('.student-item');
const students = currentStudents;
const studentsPerPage = 10;

// To hide all students and show only a particular set of ten
function showPage(pageNumber, studentList) {

	// hide students
	for(let i = 0; i < studentList.length; i++) {
		studentList[i].style.display = 'none';
	}

	// loop through students in student list
	for(let i = 0; i < studentList.length; i++) {

		// if student belong, show them
		if ( (i+1) >= (pageNumber * 10 - 9) && (i+1) <= (pageNumber * 10)  ) {
			let studentItem = studentList[i];
			studentItem.style.display = 'block';
		}
	}
}


// function that creates all the pagination buttons, adds them to the DOM and adds their functionality.
function appendPageLinks(studentList) {

	// Function for determining the rounded number of pages based on the number of students
	const nrOfPages = Math.ceil(currentStudents.length / studentsPerPage);

	// create a pagination section and give class 'pagination'
	const pagination = document.createElement('div');
	pagination.className = 'pagination';

	// add unordered list within pagination section
	pagination.innerHTML += '<ul>';

    // add links (for every page, add li and a tags with page number text)
	for(let i=0; i < nrOfPages; i++) {
		pagination.innerHTML += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
	}

	// add closing unordered list tag
	pagination.innerHTML += '</ul>';

	// append pagination section to the page
	page.appendChild(pagination);

	// store pagination links in a var = paginationLinks
    const paginationLinks = document.querySelectorAll('.pagination a');

	// link 1 active standardly
	paginationLinks[0].className = 'active';

	// event listener 'click' to all links
	for (let i =0; i < paginationLinks.length; i++) {
		paginationLinks[i].addEventListener('click', () => {

		// remove active class from all links
		for (let i=0; i < paginationLinks.length; i++) {
			paginationLinks[i].className='';
		}

		// store clicked number in a variable "clickedPageNumber"
		let clickedPageNumber = paginationLinks[i].textContent;

		// use showPage function to display page for the link clicked
		showPage(clickedPageNumber, currentStudents);

		// save that link as “active”
		paginationLinks[i].className = 'active';
		});
	}
}


// show first page standardly
showPage(1, currentStudents);

// run appendPageLinks
appendPageLinks(currentStudents);



//Extra Credits: Searchbar:
// search bar, search input, search button
const searchBar = document.createElement('div');
searchBar.className = 'student-search';

const searchBarInput = document.createElement('input');
searchBarInput.type = 'text';
searchBarInput.placeholder = "Search for students...";

const searchBarButton = document.createElement('button');
searchBarButton.textContent = "Search";

searchBar.appendChild(searchBarInput);
searchBar.appendChild(searchBarButton);

document.querySelector('.page-header').appendChild(searchBar);

// search function
function search(){
//converts input to lowercase letters
	const name = searchBarInput.value.toLowerCase();

	if (name === ''){
			currentStudents = students;
			showPage(1, currentStudents);
		} else {
			currentStudents = [];
				let counter = 0;
					//add loop: compares with all students
				for (let i = 0; i < students.length; i++){
					const studentName = students[i].querySelector('.student-details h3').textContent.toLowerCase();
					if (studentName.indexOf(name) !== -1){
						counter=counter+1;
						students[i].style.display = 'block';
						currentStudents.push(students[i]);
					} else
						students[i].style.display = 'none';
				}
				//if no students found -> alert box will pop up
				if (counter === 0)
					alert('No Results');
				else
				showPage(1, currentStudents);
			}

};
// add eventlistener to button and input
searchBarInput.addEventListener('input', search);
searchBarButton.addEventListener('click', search);

// run search function
search();
