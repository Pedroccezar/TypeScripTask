type StatusRequisicao = 'sucesso' | 'erro' | 'carregando'; 

function mostrarMensagemStatus(status: StatusRequisicao) {
    if (status === "sucesso")
        return 'Suas informações foram carregadas com sucesso!';
    else if (status === "carregando")
        return 'Aguarde... Carregando seus dados!';
    else
        return 'Houve um erro ao carregar suas informações!';
}

const tentativa = mostrarMensagemStatus('sucesso');
console.log(tentativa);