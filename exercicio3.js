function senhaValida(senha) {
    if (senha.length < 8 || senha == 12345678){
        return true;
    }
    return false;
}
console.log(senhaValida(12345678))

//●	Qual o problema com o parâmetro senha?
//    Que o parâmetro 'senha.length' estava com o comando < (menor) ao invés de <= (menor ou igual)

//●	Por que a verificação falha?
//    Porque os valores true e false estavam invertidos