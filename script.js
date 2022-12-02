function girar(){
    do{
    giro = Math.ceil(Math.random()*20);
    }while(giro<17);
    document.getElementById("Valor").innerHTML="Resultado: "+giro;
    
}

var botao = document.getElementById("botao");
botao.addEventListener("click", girar);