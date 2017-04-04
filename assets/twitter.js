//alert("hola");

function agregarTweetALista() {
  var textArea = document.getElementById("textArea").value;
  console.log(textArea)
  var inputAutor = document.getElementById("nombreAutor").value;
  console.log(inputAutor)
  var sectionTweets = document.getElementById("sectionTweets");

  //var divTweet = document.getElementById("tweet");
  //var divTweet = document.createElement("div");
  //divTweet.innerHTML = textArea + "<br>" + inputAutor;
  //sectionTweets.appendChild(divTweet);

  var divTweet = document.createElement("div");
  var textAreaAgregar = document.createTextNode(textArea);
  var inputAutorAgregar = document.createTextNode(inputAutor);
  var lineaHorizon = document.createElement("hr");
  var saltoLinea = document.createElement("br");
  divTweet.appendChild(textAreaAgregar);
  divTweet.appendChild(saltoLinea);
  divTweet.appendChild(inputAutorAgregar);
  divTweet.appendChild(lineaHorizon);
  sectionTweets.appendChild(divTweet);

}

var contadorSpan = document.getElementById("contadorCaracteres");
var textAreaContent = document.getElementById("textArea");
var contadorInit = 0;


function contarCaracteres(){

  if(contadorInit < 140){
    contadorInit += 1;
    contadorCaracteres.innerHTML = contadorInit;
  }
  else{
    alert("Sobrepasas el límite de 140 caracteres para un tweet. Sorry.");
  }
}
