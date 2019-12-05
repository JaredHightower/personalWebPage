function getBio() {
    const xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange = finction();{
        if(this.readyState ==4 && this.status ==200){
            results = JSON.parse(this.responseText);
            for(var i = 0; i < results.length; i++) {
                console.log(result[i]).name

                var ul = document.getElementById("repositories");
                var li = document.createElement("list");
                var a = document.createElement("a");
                li.appendChild(document.createTextNode(results[i].name));

                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                ul.appendChild(a);
            }
        }
    }
    xhttp.open("GET","https://api.github.com/users/STUDENTUSERNAME/repos", true);
    xhttp.send();
}   
