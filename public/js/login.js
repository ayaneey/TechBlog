const loginFormHandler = async (event) => {
	event.preventDefault();

	// Collect values from the login form
	const username = document.querySelector("#username-login").value.trim();
	const email = document.querySelector("#email-login").value.trim();
	const password = document.querySelector("#password-login").value.trim();

	if (username && email && password) {
		// Send a POST request to the API endpoint
		const response = await fetch("/api/users/login", {
			method: "POST",
			body: JSON.stringify({ username, email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// If successful, redirect the browser to the dashboard page
			document.location.replace("/dashboard");
		} else {
			alert(response.statusText);
		}
	}
};

// const signupFormHandler = async (event) => {
// 	event.preventDefault();

// 	const username = document.querySelector("#username-signup").value.trim();
// 	const email = document.querySelector("#email-signup").value.trim();
// 	const password = document.querySelector("#password-signup").value.trim();

// 	if (username && email && password) {
// 		const response = await fetch("/api/users/signup", {
// 			method: "POST",
// 			body: JSON.stringify({ username, email, password }),
// 			headers: { "Content-Type": "application/json" },
// 		});

// 		if (response.ok) {
// 			document.location.replace("/dashboard");
// 		} else {
// 			alert(response.statusText);
// 		}
// 	}
// };

document
	.querySelector(".login-form")
	.addEventListener("submit", loginFormHandler);

// document
// 	.querySelector(".signup-form")
// 	.addEventListener("submit", signupFormHandler);
