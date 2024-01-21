const img= document.getElementById('img');
const buttons= document.getElementById("buttons");


const funcaoprincipal = (event) =>{
       
      turnOn[event.target.id]();
}

const mudancadecor= ()=>{
   console.log("Mudança de Cor!");
}

const turnOn={
    'red': ()=>img.src= './img/vermelho.png',
    'yellow': () =>img.src='./img/amarelo.png',
    'green': () => img.src='./img/verde.png',
    'automatic': () => setInterval(mudancadecor, 1000),
}


buttons.addEventListener('click',funcaoprincipal);