window.addEventListener("load", () => {
   const canvas = document.querySelector("#canvas");
   const context = canvas.getContext("2d");

   //Resizing

   canvas.height = window.innerHeight;
   canvas.width = window.innerWidth;

   //(eixo x, eixo y, largura do objeto, altura do objeto)
   context.strokeStyle = "red";
   context.lineWidth = 5;
   context.fillRect(50, 50, 250, 250);
   context.strokeRect(400, 50, 250, 250);

   // iniciar o traço:
   context.beginPath();

   // (eixo x, eixo y, esticando)
   context.moveTo(820,300);

   // (eixo x, qt +, + afasta / eixo y, qt +, + afasta, com a ponta do inicio do desenho):
   context.lineTo(910,50);

   //Define a cor:
   context.strokeStyle = "blue";

   context.lineTo(1000,300);
   
   // fecha os pontos:
   context.closePath();
   context.stroke();

   //variaveis

   let painting = false;

   function posicaoInicial(e){
    painting = true;
    draw(e);
   }

   function posicaoFinal(){
    painting = false;
    context.beginPath();
   }

   function draw (e){
    if(!painting) return;
    context.lineWidth = 20;
    context.lineCap = "round";

    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
   }
   //EventListeners

   canvas.addEventListener("mousedown", posicaoInicial);
   canvas.addEventListener("mouseup", posicaoFinal);
   canvas.addEventListener("mousemove", draw);

   
});

