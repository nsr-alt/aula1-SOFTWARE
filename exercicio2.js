function calcularMedia(notas){
    let soma = 0;
    for (let i = 0; i < notas.length; i++){
        soma += notas[i]
    }
    return soma / notas.length
}
console.log(calcularMedia([8,7,10]))

//●	O que está errado com esse loop?
//    O array precisa ser sempre menor que a variavel

//●	O que acontece na execução? 
//    O comando <= estava deixando o array ultrapassar o limite