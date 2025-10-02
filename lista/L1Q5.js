document.getElementById("formCadastro").onsubmit = function (event) {
  event.preventDefault(); 

  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmarSenha").value;

  if (!login || !senha || !confirmar) {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmar) {
    alert("As senhas não conferem!");
    return;
  }

  if (senha.length < 6 || senha.length > 10) {
    alert("A senha deve ter entre 6 e 10 caracteres!");
    return;
  }

  alert("Usuário cadastrado com sucesso!");
}
