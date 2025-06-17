var btn = document.getElementById("result");
btn.addEventListener("click",loadData);


function loadData(){
    var inputbtn = document.getElementById("input").value
    var http = new XMLHttpRequest();
    http.open('get',`https://api.tenor.com/v1/search?q=${inputbtn}&key=LIVDSRZULELA&limit=8`,true);
    http.onreadystatechange = function(){
        if(http.readyState ===4 && http.status===200){
            var gifData = JSON.parse(http.responseText);
            console.log(gifData);
            let html = "";
            gifData.results.forEach(element => {
                html+=`<img src=" ${element.media[0].gif.url}" class="img-fluid m-2"/>`;
            });
            document.getElementById("container").innerHTML = html; 
        };
    }
    http.send();

}