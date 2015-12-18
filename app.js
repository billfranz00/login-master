
var users= [
	{
		username: "Billy",
		password: "buzzball"
	},
	{
		username: "Brian",
		password: "ballbuzz"

	}
]

console.log(users[0].username)




function savePassword(){
	var password = document.getElementById("password").value
	var username = document.getElementById("username").value
	console.log(password)

	for(i=0; i<users.length; i++){
		if(username === users[i].username && password === users[i].password){
			alert("You're in")
			return;
		}
	}
	alert("get out")
}

function addUser(){
	var newPassword = document.getElementById("newPassword").value
	var newUsername = document.getElementById("newUsername").value
	for(i=0; i<users.length; i++){
		if(newUsername === users[i].username){
			alert("This name is already taken")
			return;
		}
		else if(newPassword.length<8){
			alert("Password must be at least 8 characters")
			return;
		}
	}

	users.push({username: newUsername, password: newPassword})

}