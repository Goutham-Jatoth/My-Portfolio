const texts = ["Aspiring Software Engineer", "Full Stack Developer", "MAANG Focused"];
let i = 0, j = 0;

function typingEffect(){
  if(j < texts[i].length){
    document.querySelector(".typing").textContent += texts[i][j++];
    setTimeout(typingEffect, 100);
  } else {
    setTimeout(() => {
      document.querySelector(".typing").textContent = "";
      j = 0;
      i = (i + 1) % texts.length;
      typingEffect();
    }, 1500);
  }
}

typingEffect();
