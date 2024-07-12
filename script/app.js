const url = 'http://localhost:3000/staff';

// UTILITY FUNCTIONS

function createAnElement(element) {
	return document.createElement(element);
}

function addText(element, text) {
	return (element.innerText = text);
}

function appendChild(child, parent) {
	return parent.appendChild(child);
}

function select(selector) {
	return document.querySelector(selector);
}

function listen(element, event, callback) {
	return element.addEventListener(event, callback);
}

function addAttribute(element, attribute, content) {
	return element.setAttribute(attribute, content);
}

function removeAttribute(element, attribute) {
	return element.removeAttribute(attribute);
}

const staffContainer = select('.staff-container');

listen(document, 'DOMContentLoaded', () => {
	fetchData(url);
});

// A function to fetch data from the API.
function fetchData(url) {
	fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw Error('Error fetching this data.');
			}
			return res.json();
		})
		.then(createCards)
		.catch((error) => {
			console.error(error);
		});
}

const createCards = (staffData) => {
	staffData.map((staff) => {
		const card = createAnElement('div');
		addAttribute(card, 'class', 'card');

		const profileImage = createAnElement('img');
		addText(profileImage, staff.image);
		addAttribute(profileImage, 'class', 'img');
		addAttribute(profileImage, 'alt', staff.name);
		addAttribute(profileImage, 'src', staff.image);
		appendChild(profileImage, card);

		const name = createAnElement('h3');
		addText(name, staff.name);
		appendChild(name, card);

		const jobTitle = createAnElement('h4');
		addText(jobTitle, staff.job);
		appendChild(jobTitle, card);

		const role = createAnElement('p');
		addText(role, 'Role: ' + staff.role);
		appendChild(role, card);

		const email = createAnElement('p');
		addText(email, 'Email: ' + staff.contact);
		appendChild(email, card);

		const address = createAnElement('p');
		addText(address, 'Address: ' + staff.address);
		appendChild(address, card);

		const bio = createAnElement('p');
		addText(bio, staff.about);
		addAttribute(bio, 'class', 'info');
		appendChild(bio, card);

		const button = createAnElement('button');
		addText(button, 'Delete');
		addAttribute(button, 'class', 'button');
		listen(button, 'click', () => deleteData(url, staff.id));
		appendChild(button, card);

		appendChild(card, staffContainer);
	});
};

// Logic to add a new staff member
const addStaffForm = select('form');
listen(addStaffForm, 'submit', getFormData);

// A utility function to gather all form data.
function getFormData(e) {
	e.preventDefault();

	const formData = new FormData(addStaffForm);
	const data = Object.fromEntries(formData);
	postData(url, data);
	e.target.reset();
}

// A utility function to post data captured from the form to the API.
function postData(url, data) {
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then(() => {
			fetchData(url);
		})
		.catch((error) => {
			console.error(error);
		});
}

// A utility function to delete a staff member from the API.
function deleteData(url, id) {
	fetch(`${url}/${id}`, {
		method: 'DELETE',
	})
		.then((res) => res.json())
		.then(() => fetchData(url));
}
