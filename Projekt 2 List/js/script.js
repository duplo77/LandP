// global variables
const page = document.querySelector('.page')
const eachStudent = document.querySelectorAll('.student-item');
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
	const nrOfPages = Math.ceil(eachStudent.length / studentsPerPage);

	// create a pagination section and give class 'pagination'
	const pagination = document.createElement('div');
	pagination.className = 'pagination';

	// add opening unordered list within pagination section
	pagination.innerHTML += '<ul>';

    // add links (for every page, add li and a tags with the page number text)
	for(let i=0; i < nrOfPages; i++) {
		pagination.innerHTML += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
	}

	// add closing unordered list tag
	pagination.innerHTML += '</ul>';

	// append the pagination section to the page
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

		// store the clicked number in a variable named clickedPageNumber
		let clickedPageNumber = paginationLinks[i].textContent;

		// use the showPage function to display the page for the link clicked
		showPage(clickedPageNumber, eachStudent);

		// save that link as “active”
		paginationLinks[i].className = 'active';
		});
	}
}


// show first page standardly
showPage(1, eachStudent);

// run appendPageLinks
appendPageLinks(eachStudent);
