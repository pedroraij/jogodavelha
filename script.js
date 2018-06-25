const jogador1 = "X";
const jogador2 = "O";
var turno = jogador1;
var fim = false;
var restart = false;
var placarx = 0;
var placaro = 0;



mostrarodada();



function mostrarodada(){
   
   if (fim) {return;}

   if (turno == jogador1) {

      var jogador = document.querySelectorAll("div#rodada img")[0];
      jogador.setAttribute("src", "Imagens/X.png");
     }
     else {
     	var jogador = document.querySelectorAll("div#rodada img")[0];
      jogador.setAttribute("src", "Imagens/O.png");
     

     } 

   }

function inicio() {

     var espacos = document.getElementsByClassName("espaco");
     for (var i = 0; i < espacos.length; i++) {
     	 
         espacos[i].addEventListener("click", function (){

              if (fim) {return;}
              

              if(this.getElementsByTagName("img").length == 0){

              	if (turno == jogador1) {

              		this.innerHTML = "<img src='Imagens/X.png' height='90'>";
              		this.setAttribute("jogada", jogador1);
              		turno = jogador2;
              		
              	    } 

              	else{

              		this.innerHTML = "<img src='Imagens/O.png' height='90'>";
              		this.setAttribute("jogada", jogador2);
              		turno = jogador1;
              		          	
              		}
              	mostrarodada();
                verificar();

              }
            }
          );
      }
     
    }


function verificar(){
        
     var a1 = document.getElementById("1").getAttribute("jogada");
     var a2 = document.getElementById("2").getAttribute("jogada");
     var a3 = document.getElementById("3").getAttribute("jogada");
     var b1 = document.getElementById("4").getAttribute("jogada");
     var b2 = document.getElementById("5").getAttribute("jogada");
     var b3 = document.getElementById("6").getAttribute("jogada");
     var c1 = document.getElementById("7").getAttribute("jogada");
     var c2 = document.getElementById("8").getAttribute("jogada");
     var c3 = document.getElementById("9").getAttribute("jogada");

     var vencedor = "";
    

     if( ((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != ""){
     	vencedor = a1;
    }
     else if( ((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != ""){
         vencedor = b2;
    }
     else if( ((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != "") {
         vencedor = c3;
    }
      

    if (vencedor != "") {
        fim = true;
        document.getElementById('Vencedor').innerHTML = vencedor;

        if (turno = jogador2) {
    	placarx = placarx + 1;
    }
    else if (turno = jogador1) {
        placaro = placaro + 1;

    }

        
    }


        document.getElementById('placarX').innerHTML= placarx;
        document.getElementById('placarO').innerHTML= placaro;
    
    
                
} 

        mostrarodada();