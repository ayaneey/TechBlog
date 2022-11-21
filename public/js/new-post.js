// const { json } = require("sequelize");

// Creating a function to intiialize a new post!
// async function newFormHandler(event) {
// 	event.preventDefault();

// 	const title = document.querySelector('input[name="post-title"]').value;
// 	const content = document.querySelector('input[name="content"]').value;

// 	const response = await fetch(`/api/posts`, {
// 		method: "POST",
// 		body: JSON.stringify({
// 			title,
// 			content,
// 		}),
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	});

// 	if (response.ok) {
// 		document.location.replace("/dashboard");
// 	} else {
// 		alert(response.statusText);
// 	}
// }
async function showAddForm(event) {
	event.preventDefault();
	document.querySelector(".new-post").setAttribute("class", "show");
	let title = document.getElementById("post-title").value;
	let text_content = document.getElementById("post-content").value;
	let user_id = 1;
	let date = new Date();

	let response = fetch("/api/post", {
		method: "POST",
		body: JSON.stringify(title, text_content, user_id, date),
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(response);
}

document.querySelector(".new-post").addEventListener("submit", showAddForm);
