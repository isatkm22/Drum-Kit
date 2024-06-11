const calcular = document.getElementById('calcular')
const limpar = document.getElementById('limpar')

function imc(){
    const nome = document.getElementById('nome').value; 
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome != '' && altura !== '' && peso !== ''){
        const valorImc = (peso/ (altura*altura)).toFixed(2);
        
        let classificacao = ''
        if (valorImc < 18.5){
            classificacao = "abaixo do peso"
        }else if (valorImc < 25 ){
            classificacao =  "Você está no peso ideal"
        }else if (valorImc < 30){
            classificacao = "Você está acima do peso"
        }else if (valorImc < 35){
            classificacao = "com obsidade grau I"
        }else if (valorImc < 40){
            classificacao = "como obesidade grau II"
        }else{
            classificacao = "com obesidade grau III, Cuidado!!!!!!"
        }
            
        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;
    }
    else{
        resultado.textContent = "Preencha todos os campos";
    }
}

calcular.addEventListener('click', imc)

limpar.addEventListener('click',function(){
    resultado.textContent = ''
    resultado.classList.add('result')
    resultado.value =''
    nome.value =''
    peso.value=''
    altura.value=''
})