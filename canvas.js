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

   context.beginPath();
   // (eixo x, eixo y, esticando)
   context.moveTo(820,300);
   // (eixo x, qt +, + afasta / eixo y, qt +, + afasta, com a ponta do inicio do desenho)
   context.lineTo(900,50);
   context.strokeStyle = "blue";
   context.lineTo(1000,300);
   context.lineTo(818,300);
   context.stroke();
   
});

