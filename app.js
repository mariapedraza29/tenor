 const url='https://tenor.googleapis.com/v2/search'
 let busqueda='?q='
 let q = '';
 let key = '&key=AIzaSyDErkesndjoYQ83QBwc8qxxcSDYPMrMNIo'
const limite= '&limit=40';

let urlComplete ='';
urlComplete = url + busqueda + q+ key+limite;
const btn = document.getElementById('btn');

btn.onclick=()=>{

    document.getElementById('portafolio');
    q= document.getElementById('finder').value;
    urlComplete
    getData();
}
const getData = async ()=>{
    await fetch(urlComplete).then((response) => {
        return response.json();
    }).then((tenor) =>{
        console.log(tenor);
    

    for( let i=0; i<tenor.data.length; i++){
        const gif= document.createElement('img');
        gif.src= tenor.data[i].images["original"].url;
        gif.className="mb-3"
        document.getElementById("portafolio").appendChild(gif)
    }
})
}
getData(); 