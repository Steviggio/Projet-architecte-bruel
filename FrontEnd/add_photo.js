// Links to the DOM
let input = document.getElementById("modal-add-input");
let preview = document.getElementById('modal-add-jpg-container');
let modalElement = document.querySelector(".modal-add-element")
let modalLabel = document.querySelector("#modal-add-jpg-btn")

input.addEventListener('change', () => {
  const file = input.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    // Creating an img element
    const image = new Image();
    image.src = reader.result;

    // Adding the img to the preview div
    preview.appendChild(image);
  });

  if (file) {
    reader.readAsDataURL(file);
    modalElement.style.display = "none"
    modalLabel.style.display = "none"
  }
})


let form = document.getElementById('modal-add-form');
let title = document.getElementById('title');
let category = document.getElementById('category');
let validateBtn = document.getElementById('modal-box-validate')


function validateForm() {
  const title = document.getElementById('title').value;
  const category = document.getElementById('category').value;

  if (title.trim() === '' || category.trim() === '') {
    alert('Tous les champs sont nécessaires');
    return false;
  }

  // form is valid and can but submitted
  return true;
}

validateBtn.addEventListener("click", validateForm)

function checkInputs() {
  // Check if the fields are filled
  if (title.value.trim() !== '' && category.value.trim() !== '') {
    // Si les champs sont remplis, activer le bouton 'valider' If the fields are filled, active the "validate" button
    validateBtn.classList.add('active');
  } else {
    validateBtn.classList.remove('active');
  }
}

// Getting the token/userId in the localStorage
let authInfo = window.localStorage.getItem("data")
console.log("00000000001- infos " + authInfo)
let parseInfo = JSON.parse(authInfo)
console.log('000000001 - parsedinfos : ' + parseInfo)
let userId = parseInfo.userId
console.log("0000000000001- user ID : " + userId)
let token = parseInfo.token
console.log("00000000001 - token : " + token)

title.addEventListener('input', checkInputs);
category.addEventListener('input', checkInputs);


