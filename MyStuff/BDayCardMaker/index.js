let name;
name = window.prompt("What's the name of the person with the birthday??");
document.getElementById("title").textContent = `Happy Birthday ${name}!`
message = window.prompt("What message do you want to display?");
document.getElementById("message").textContent = message;