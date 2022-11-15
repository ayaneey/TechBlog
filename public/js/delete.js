// Deleting a post
const delButtonHandler = async (event) => {
	event.preventDefault();
	const post =
		window.location.toString("/")[
			window.location.toString().split("/").length - 1
		];
	const response = await fetch(`/api/posts/${id}`, {
		method: "DELETE",
	});
	if (response.ok) {
		document.location.replace("/dashboard");
	} else {
		alert(response.statusText);
	}
};

document.querySelector(".delete-button");

document.addEventListener("click", delButtonHandler);
