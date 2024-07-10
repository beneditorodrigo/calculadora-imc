document.getElementById('calcular').addEventListener('click', function() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (!isNaN(altura) && !isNaN(peso)) {
        const imc = (peso / (altura * altura)).toFixed(2);
        document.getElementById('resultado-imc').textContent = `IMC: ${imc}`;
        showAlertAfter10Seconds();
    } else {
        alert('Por favor, preencha ambos os campos corretamente.');
    }
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('resultado-imc').textContent = 'IMC: ';
});

function showAlertAfter10Seconds() {
    setTimeout(function() {
        alert("Obrigado por testar minha aplicação! ❤️");
    }, 500);
}
