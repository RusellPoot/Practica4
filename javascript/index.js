document.addEventListener("DOMContentLoaded", ()=>{
     const btn = document.getElementById("btn");
  const fm = document.getElementById("fm");
  const na = document.getElementById("na");

  const body = document.getElementsByTagName("body");
  const imagenes = [
    "../assets/img1.jpg"
  ]

    const frases = [
       "El único modo de hacer un gran trabajo es amar lo que haces.",
       "Cree en ti mismo y todo será posible.",
       "No cuentes los días, haz que los días cuenten.",
       "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
       "La vida es 10% lo que te ocurre y 90% cómo reaccionas a ello."
    ]
    const autores = [
       "Steve Jobs",
       "Elena D. Roosevelt",
       "Muhammad Ali",
       "Winston Churchill",
       "Charles R. Swindoll"
    ]

    fm.textContent = frases[0];
    na.textContent = autores[0];

    btn.addEventListener("click", ()=>{
     var num = Math.floor(Math.random ()* 5);
     fm.textContent = frases;
     na.textContent = autores;
     body[0].setAttribute("style","background-imge: url("+imagenes[0]+"")
     /*body[0].style.backgroundImage = imagenes[0];*/
     
    });
})