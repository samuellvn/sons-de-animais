//https://teachablemachine.withgoogle.com/models/IPwcaezQ5/

var classificadora;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classificadora=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IPwcaezQ5/model.json", modelo_carregado);
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
        var imagem=document.getElementById("animal");
        
        if(results[0].label="bugio"){
            imagem.src="macaco_bugio.webp";
        }
        else if(results[0].label="siriema"){
            imagem.src="Seriema-2.webp";
        }
        else if(results[0].label="galo"){
            imagem.src="galodecampina.jpg";
        }
        else{
            imagem.src="ra_touro.jpeg";
    }
    }
} 