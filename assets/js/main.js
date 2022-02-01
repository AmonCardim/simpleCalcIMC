// Capturar envio de submit do formulário
const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso'); // captura dos dados do input de peso 
    const inputAltura = event.target.querySelector('#altura'); // captura dos dados do  input de altura 

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Condição se o usuário não digitar um número
    if (!peso) {
        setResult('Peso inválido.', false);
        return;
    }

    if (!altura) {
        setResult('Altura inválida.', false);
        return;
    }

    // 
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    // Mensagem do  final em caso de nenhum erro
    const msg = `Seu IMC é: ${imc} (${nivelImc}).`;

    setResult(msg, true);
});

// Função para saber o nivel de IMC do usuário
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // Lista de String baseado no valor do IMC 
    //  Condições para saber o nivel de IMC do usuário
    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
}

// Cálculo do IMC 
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Cria um parágrafo dentro do HTML pelo JS
function criaP() {
    const p = document.createElement('p');
    return p;
}

// Mensagem ao usuário no fim da aplicação
function setResult(msg, isValid) {
    const result = document.querySelector('.result');
    result.innerHTML = ''; // Zera HTML do result

    const p = criaP();

    if (isValid) {
        p.classList.add('p-result')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    result.appendChild(p);
};
