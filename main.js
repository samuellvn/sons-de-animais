//
var classificadora;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classificadora=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5uNvfaqYl/model.json", modelo_carregado);
}
function modelo_carregado(){
    classificadora.classify(resultados_obtidos);
}
function resultados_obtidos(error, results){
    if(error==true){
        console.error(error);
    }
    else{
        console.log(results);
        var vermelho=Math.floor(Math.random()*255)+1;
        var verde=Math.floor(Math.random()*255)+1;
        var azul=Math.floor(Math.random()*255)+1;
        var rgb="rgb("+vermelho+","+verde+","+azul+")";
        document.getElementById("result_label").innerHTML="posso ouvir "+results[0].label;
        document.getElementById("result_confidence").innerHTML="precisão "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color=rgb;
        document.getElementById("result_confidence").style.color=rgb;
        var imagem1=document.getElementById("bugio");
        var imagem2=document.getElementById("siriema");
        var imagem3=document.getElementById("galo_de_campina");
        var imagem4=document.getElementById("ra_touro");
        if(results[0].label="bugio"){
            imagem1.src="bugio_ruivo_gif.gif";
            imagem2.src="Seriema-2.webp";
            imagem3.src="galo.de.campina.webp";
            imagem4.src="rã-touro.jpeg";
        }
        else if(results[0].label="siriema"){
            imagem1.src="macaco-bugio.webp";
            imagem2.src="siriema.gif - Copia.gif";
            imagem3.src="galo.de.campina.webp";
            imagem4.src="rã-touro.jpeg";
        }
        else if(results[0].label="galo campina"){
            imagem1.src="macaco-bugio.webp";
            imagem2.src="Seriema-2.webp";
            imagem3.src="galo.de.campina.gif.jpg";
            imagem4.src="rã-touro.jpeg";
        }
        else{
        imagem1.src="macaco-bugio.webp";
        imagem2.src="Seriema-2.webp";
        imagem3.src="galo.de.campina.webp";
        imagem4.src="ra_gif - Copia.gif";
    }
    }
} 