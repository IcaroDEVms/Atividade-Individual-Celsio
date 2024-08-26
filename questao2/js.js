document.getElementById("calc").addEventListener('click', function(event){
    event.preventDefault();

    const cavalos = parseInt(document.getElementById('cavalos').value);
    

    const resultado = cavalos * 4;

    if(cavalos<=0 || !cavalos){
        alert("Insira valores positivos");
    }else
        document.getElementById('resultado').innerText = `${resultado} Ferraduras`;

})



