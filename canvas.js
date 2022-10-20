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
   context.moveTo(200,300);
   context.lineTo(0,10);
   context.stroke();
   
});

