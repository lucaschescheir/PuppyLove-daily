//    Nodes   //

let searchBox = document.getElementById('search');
let displayBox = document.getElementById('results')
let picture = document.getElementById('results');

//    End Nodes   //

//function search(){
  //search = `${searchBox.value}`;
//};

searchBox.addEventListener('keyup',function(e){
  if(e.key === 'Enter'){
fetch(`https:recipepuppyproxy.herokuapp.com/api/?q=${searchBox.value}`)
.then(function(response) {
    return response.json()})
    .then(function(data){
      let display = "";
      console.log(data)
      for(let i = 0; i < 10; i++){
        console.log(data.results)


          display +=`<div> ${data.results[i].title} </div>`;
          display += `<img src="${data.results[i].thumbnail}" alt="picture of recipe">`;
      };

      displayBox.innerHTML = display;
    })
    }
      });
  // for(let i = 0; i < 10; i++){
  //   console.log(data.results)
  //     search =`<p> ${data.results[i]} </p>`;
  //     searchBox.innerHTML = search;
