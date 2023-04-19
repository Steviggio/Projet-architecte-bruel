const btnConnect = document.querySelector("#btn-connect");

btnConnect.addEventListener("click", async function (event) {
	event.preventDefault();
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	const chargeUtileText = {
		"email": email,
		"password": password
	}

	const chargeUtile = JSON.stringify(chargeUtileText)

	await fetch("http://localhost:5678/api/users/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: chargeUtile
	})
		.then(response => response.json())
		.then(data => {
			console.log("0000000000001")
			console.log(data);
			if (data.token != null) {
				let serializedData = JSON.stringify(data)
				try {
					window.localStorage.setItem("data", serializedData)
					alert("Connection réussie")
					// Rediriger l'utilisateur vers une autre page après avoir enregistré les données dans le stockage
					window.location.href = "index.html"
				} catch (e) {
					// Gérer les erreurs éventuelles lors de l'enregistrement des données dans le stockage
					console.error("Impossible d'enregistrer les données dans le stockage : ", e)
				}


			} else {
				window.location.href = "login.html"
				alert("Erreur dans le mot de passe ou l'identifiant")
			}
		})
})


