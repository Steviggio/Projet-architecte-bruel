const modalOpenBtns = document.querySelectorAll('.js-modal');
const modalCloseBtns = document.querySelectorAll('.js-close');
const modalBackBtn = document.querySelector('#js-modal-back');
const modalBox1 = document.querySelector('#modal-box1');
const modalBox2 = document.querySelector('#modal-box2');
const modalBoxAddBtn = document.querySelector('.js-modal-box2');


// Open modal-box1
modalOpenBtns.forEach(button =>
	button.addEventListener('click', () => {
		modalBox1.style.display = null;
	})
)

// Open modal-box2
modalBoxAddBtn.addEventListener('click', () => {
	modalBox1.style.display = 'none';
	modalBox2.style.display = null;
});

// Close modals with js-close buttons
modalCloseBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		modalBox1.style.display = 'none';
		modalBox2.style.display = 'none';
	});
});

// Return to modal-box1 from modal-box2
modalBackBtn.addEventListener('click', () => {
	modalBox2.style.display = 'none';
	modalBox1.style.display = null;
});

// Close modals when user clicks outside of content-box 
document.addEventListener("click", (event) => {
	if (event.target == modalBox1 || event.target == modalBox2) {
		modalBox1.style.display = 'none';
		modalBox2.style.display = 'none';
	}
})

const categoryList = document.getElementById('categories');
const categoryInput = document.getElementById('category');


categoryInput.addEventListener('change', () => {
	const selectedCategory = categoryInput.value;
	const categories = Array.from(categoryList.options).map(option => option.value);

	if (!categories.includes(selectedCategory)) {
		categoryInput.value = '';
		alert('Veuillez choisir l\'une des catégories proposées.');
	}
});

fetch('http://localhost:5678/api/categories')
	.then(response => response.json())
	.then(data => {
		console.log(data);
		const categories = data.map(category => category.name);
		console.log(categories);

		for (let i = 0; i < categories.length; i++) {
			const option = document.createElement('option');
			option.value = categories[i];
			categoryList.appendChild(option);
		}
	})
	.catch(error => console.error(error));
