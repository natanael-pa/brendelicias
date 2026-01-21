// Altere o número abaixo para o seu (DDD + Número) sem espaços ou parênteses
const SEU_NUMERO = "5511999999999"; 

function abrirWhatsapp() {
    const mensagem = encodeURIComponent("Olá! Gostaria de ver o cardápio e fazer um pedido.");
    window.open(`https://wa.me/${SEU_NUMERO}?text=${mensagem}`, '_blank');
}

function fazerPedido(produto) {
    const mensagem = encodeURIComponent(`Olá! Gostaria de encomendar: ${produto}`);
    window.open(`https://wa.me/${SEU_NUMERO}?text=${mensagem}`, '_blank');
}
