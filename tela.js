function NivelPoluicao() {  
    var mensagem = "ATENÇÃO ALTO NÍVEL DE POLUIÇÃO ARROIO 001!";
    var msgElement = document.querySelector(".msg2");
    msgElement.textContent = mensagem;  
  
    // Agende a restauração do texto após 5 segundos
    setTimeout(function() {
      msgElement.textContent = "ÓRGÃO PÚBLICO"; // Restaura o texto ao estado original (vazio)
  }, 5000); // 5000 milissegundos = 5 segundos 
  }

  function LixoVisivel(id) {
    var imagem = document.getElementById('lixo');
    imagem.style.display = 'block';
    var mensagem = "COLETOR 25ST CHEIO! ENVIAR CAMINHÃO PARA COLETA";
    var msgElement = document.querySelector(".msg2");
    msgElement.textContent = mensagem;
  }

   
  function MudarColeta(id) {
    var imagem = document.getElementById('imagemColeta');
    imagem.style.display = 'block';
  }

    
  function LixoInvisivel(id) {
    var imagem = document.getElementById('lixo');
    imagem.style.display = 'none';
    var imagem = document.getElementById('imagemColeta');
    imagem.style.display = 'none';
    var msgElement = document.querySelector(".msg2");
    msgElement.textContent = 'ÓRGÃO PÚBLICO';  
  
  }




function RemoverCorFundoAtencao() {
    var agua1 = document.querySelector("#agua2");
    agua1.style.backgroundColor = "transparent"; // ou rgba(0, 0, 0, 0) para cor completamente transparente  
  }
  
  
  
  
  function NivelAlerta() {
    var agua2 = document.querySelector("#agua1");
    agua2.style.backgroundColor = "transparent"; // ou rgba(0, 0, 0, 0) para cor completamente transparente
    var mensagem = "ATENÇÃO RISCO DE INUNDAÇÃO!";
    var msgElement = document.querySelector(".msg");
    msgElement.textContent = mensagem;  
    
    var alertaAudio = document.getElementById("alertaAudio");
    alertaAudio.play();
  }
 
  
  

  