function senhaValida(senha) {
    if (senha.length <= 8 || senha == 12345678){
        return false;
    }
    return true;
}
console.log(senhaValida(12345658))

//●	Qual o problema com o parâmetro senha?

//●	Por que a verificação falha?