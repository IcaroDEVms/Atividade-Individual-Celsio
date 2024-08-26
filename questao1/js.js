document.getElementById("calc").addEventListener('click', function(event){
    event.preventDefault();

    const base = parseFloat(document.getElementById('tamB').value);
    const altura = parseFloat(document.getElementById('tamH').value);

    const area = base * altura;

    if(base<=0 || altura<=0 || !base || !altura){
        alert("Insira valores positivos");
    }else
        document.getElementById('resultado').innerText = `${area} m²`;

})



