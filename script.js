fetch("https://api.github.com/repos/EmilyBonar/JavaScript30/contents/")
	.then((response) => response.json())
	.then((data) => {
		// Here's a list of repos!
		data.forEach((element) => {
			if (element.type == "dir") {
				console.log(element);
				//Create the element using the createElement method.
				var myDiv = document.createElement("div");

				//Set its unique ID.
				myDiv.id = element.name;

				//Add your content to the DIV
				myDiv.innerHTML = `<p><a href="${element.name}">${element.name}</a></p>`;

				//Finally, append the element to the HTML body
				document.body.appendChild(myDiv);
			}
		});
	});
