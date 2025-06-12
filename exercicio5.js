function buscar(lista, item){
    for (let i = 0; i < lista.lenght; i++){
        if (lista[i] = item){
            return true
        }
    }
    return false
}

console.log(buscar(['banana','maçã','pera'],'banana'))