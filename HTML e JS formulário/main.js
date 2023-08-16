const form = document.getElementById('formNum');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const n1 = document.getElementById('numero1');
    const n2 = document.getElementById('numero2');

    if(n1.value < n2.value){
        alert('Formulário válido');
    }
    
    else if(n1.value === n2.value){
        alert('Invalido, números iguais');
    }
    
    else {
        alert('Formulário inválido');
    }
});