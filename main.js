const btn = document.getElementById('btn-c');
const p = document.getElementById('p');
const q = document.getElementById('q');
const e = document.getElementById('e');
const titulo = document.querySelector('h1');

function typeWriter(elemento) {

    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {

    setTimeout(() => elemento.innerHTML += letra , 75*i)
   
    });
}

function verificaPrimo(value) {
    var num = document.getElementById('p').value;

    var d = sqrt(num);
 
    for (let i = 2; i < d; i++) {
        if(num%i == 0) return 0;
    }

    return 1;
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(p.value == ''){
        p.classList.add('errorInput');
    }
    else if (q.value == '')
    {
        q.classList.add('errorInput');
    }
    else if (e.value == '')
    {
        e.classList.add('errorInput');
    }
});

typeWriter(titulo);


