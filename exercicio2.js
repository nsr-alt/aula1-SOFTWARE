function calcularMedia(notas){
    let soma = 0;
    for (let i = 0; i <= notas.lenght; i++){
        soma += notas[i]
    }
    return soma / notas.lenght
}
console.log(calcularMedia([0,1,2,3]))

//●	O que está errado com esse loop?

//●	O que acontece na execução?