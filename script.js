botao.addEventListener('click', function(){
    var nomeCliente = nome.value;
    var quantiaSorvete = quantidade.value;
    var saborSorvete = sabores.value;

    // Define o conteúdo dos elementos <p> existentes com os IDs correspondentes
    pedidoNome.textContent = "Nome: " + nomeCliente;
    pedidoQuantia.textContent = "Quantidade: " + quantiaSorvete;
    pedidoSabor.textContent = "Sabor: " + saborSorvete;
});
