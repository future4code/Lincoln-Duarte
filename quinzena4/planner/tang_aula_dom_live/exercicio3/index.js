function adicionarItemLista() {

  const meuInput = document.getElementById('input-compras');
  const valorInput = meuInput.value;
  if(valorInput !== '') {
    const lista = document.getElementById('lista-compras');
    lista.innerHTML += `<li>${valorInput}</li>`
    meuInput.value = '';
  }else{
    alert('Insira um valor no campo vazio!')
  }
};



