
function login() {
        const form = document.getElementById('form');
        form.addEventListener('submit', function (e) {
            // Prevent default behavior
            e.preventDefault();
            // Create payload as new FormData object
            const formData = new FormData(form);
            console.log(formData)
            var object = {};
formData.forEach(function(value, key){
    object[key] = value;
});
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*")
var json = JSON.stringify(Object.fromEntries(formData.entries()));
console.log(json)
            // Post the payload using Fetch
            fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: myHeaders,
                body: json
            })
            .then(response => response.text())
            .then(result => alert(result))
        })
    };


/*
function sendDetails() {
    form.addEventListener('submit', function (e) {
        // Prevent default behavior
        e.preventDefault();
        // Create payload as new FormData object
        const formData = new FormData(form);
        console.log(formData)
        var object = {};
        console.log(formData)
        var json = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(json)
        alert("shashi")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*")
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: myHeaders,
            body: json,
            mode: 'cors'
        })
            .then(response => response.text())
            .then(result => alert(result.text)
               });
}
}*/
