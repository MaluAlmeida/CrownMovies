//função para validar o login

/*criando a função validar */
function validar() {
    /* declarando as variáveis*/
    let usuario = document.getElementById('idemail').value;
    let senha = document.getElementById('idsenha').value;
  
    /*fazendo  if e else para validar os campos */
    if (usuario == 'Admin' && senha == '1234') {
      //chama a tela do index
      window.open('perfis.html');
      //fecha a tela login
       window.close('index.html');
    } else {
      alert('usuarío ou senha inválidos');
    }
  }
  
  //mundando a cor de fundo
  function trocar(cor) {
    document.body.style.background = cor;
  }
  