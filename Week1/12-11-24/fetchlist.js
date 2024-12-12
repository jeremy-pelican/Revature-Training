const getAuthors=async()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
} 

function listAuthors() {
    getAuthors().then((data)=> {
        console.log(data);
        data.map((user)=> {
            //create new element and store name, email, birthdate
            var list = document.getElementById("list");
            let name = document.createElement("li");
            name.style.color = "blue";
            name.style.size = "30px";
            name.innerHTML = user.name;
            let info = document.createElement("ul");
            let email = document.createElement("li");
            email.innerHTML = `Email: ${user.email}`;
            email.style.color = "red";
            info.append(email);
            name.append(info);
            list.append(name);
        })

    }).catch((error)=>{
        console.log(error);
    })
}
