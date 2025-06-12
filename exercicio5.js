function buscar(lista, item){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == item){
            return true
        }
    }
    return false
}

console.log(buscar(['banana', 'maçã', 'pera'], 'banana'))

//●	Esse código retorna o resultado correto?
//    Não, mas depois de trocar um comando, sim.

//●	Explique a diferença entre = e ===.
//    Porque o comando = significa que a variavel é um valor ou outra variavel, já === significa se todos os valores são tal valor.