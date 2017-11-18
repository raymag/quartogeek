var carrinho = 0.0; //Quantidade de itens no carrinho
var total = 0.0; //Total a pagar

function updateCar(){ //Atualiza frase de Status
  status = document.getElementById('status').innerHTML;
  document.getElementById('status').innerHTML = 'Você possui ' + carrinho.toString() + ' itens <br> no Carrinho (R$ '+total.toString()+' )';

}
function resetCar(){ //Resetar Carrinho
  carrinho = 0.0;
  total = 0.0;
  updateCar();
}
function addCar(price){ //Adicionar Carrinho
  total += price;
  total = parseFloat(total.toFixed(2));
  carrinho += 1;
  updateCar();
}
function buyCar(){ //Comprar Carrinho
  document.getElementById('cover').style.display = 'Block';
}
function closeCover(){
  document.getElementById('cover').style.display = 'None';
  carrinho = 0.0;
  total = 0.0;
  updateCar();
}
function confirm(){
  document.getElementById('buycar').innerHTML = '<h1>Obrigado pela compra, estamos processando o seu pedido. <a href="index.html">Clique aqui para Sair</a>.</h1>'
}
