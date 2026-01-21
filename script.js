
// Efeito de aparacere e desaparecer conteúdo
function revelarAoScroll() {
  const elementos = document.querySelectorAll('.reveal');

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Se o elemento estiver visível na tela, ativa
    if (top < windowHeight - 100 && bottom > 100) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', revelarAoScroll);
window.addEventListener('load', revelarAoScroll);


const contato = document.querySelector('#contato');
const redesSociais = document.querySelector('.redessociais');


function atualizarCorDeFundo() {
  const contatoRect = contato.getBoundingClientRect();
  const redesRect = redesSociais.getBoundingClientRect();

  const visivel = (rect) =>
  rect.top < window.innerHeight * 0.88 && rect.bottom > 0;

  if (visivel(redesRect)) {
    document.body.style.backgroundColor = '#cfcfcf'; // cinza mais escuro ao tom padrão
  } else if (visivel(contatoRect)) {
    document.body.style.backgroundColor = '#8a4f23'; // marrom
  } else {
    document.body.style.backgroundColor = '#f0e8e8'; // cor padrão
  }
}

window.addEventListener('scroll', atualizarCorDeFundo);
window.addEventListener('load', atualizarCorDeFundo);



