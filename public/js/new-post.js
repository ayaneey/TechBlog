const { json } = require("sequelize");

// Creating a function to intiialize a new post!
async function newFormHandler(event) {
	event.preventDefault();

	const title = document.querySelector('input[name="post-title"]').value;
	const content = document.querySelector('input[name="content"]').value;

	const response = await fetch(`/api/posts`, {
		method: "POST",
		body: JSON.stringify({
			title,
			content,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		document.location.replace("/dashboard");
	} else {
		alert(response.statusText);
	}
}
async function showAddForm(event) {
	event.preventDefault();
	document.getElementById("new_post").setAttribute("class", "show");
	let title = document.getElementById("title").value;
	let text_content = document.getElementById("content").value;
	let user_id = 1;
	let date = new Date();

	let response = fetch("/api/posts", {
		method: "POST",
		body: JSON.stringify(title, content, user_id, date),
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(response);
}

document.querySelector("#add_post").addEventListener("click", showAddForm);
