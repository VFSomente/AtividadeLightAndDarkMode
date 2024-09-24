const botao = document.getElementById('botaoTrocaCor');
const elementoColorido = document.querySelector('.elemento-colorido');

botao.addEventListener('click', () => {
  elementoColorido.classList.toggle('cor-padrao');
});