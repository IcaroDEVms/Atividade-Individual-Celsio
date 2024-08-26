document.getElementById("calc").addEventListener('click', function(event){
    event.preventDefault();

    var paes = parseFloat(document.getElementById('paes').value);
    var broas = parseFloat(document.getElementById('broas').value);

    if(!paes)
        paes = 0;

    if(!broas)
        broas = 0;

    const resultado = paes * 0.12 + broas * 1.50;


    if(paes<=0 && broas<=0){
        alert("Insira valores válidos");
    }else
        document.getElementById('resultado').innerText = `${resultado} R$`;
})