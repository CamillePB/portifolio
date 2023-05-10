//variaveis de escobpo global(utilizada para qualquer função)
//const nome = document.querySelector("#txtNome");
//const email = document.querySelector("#txtEmail");
//const cep = document.querySelector("#cep");


function validarNome() {
  //consultar seletor
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome muito claro";
    txtNome.style.color = "red";
    nomeOk = false;
  } else {
    txtNome.innerHTML = "Correto";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validarEmailRegEx() {
  //formato de email
  let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

  let txtEmail = document.querySelector("#txtEmail");

  //procurar por caracteres em uma string
  if (email.value.match(regex)) {
    txtEmail.innerHTML = "Correto";
    txtEmail.style.color = "green";
    emailOk = true;
  } else {
    txtEmail.innerHTML = "Email inválido";
    txtEmail.style.color = "red";
    emailOk = false;
  }
}

//validação do formulario
function enviarFormulario() {
  if (nomeOk === true && emailOk === true) {
    alert(nome.value + ", obrigado pela sua mensagem");
  } else {
    alert(nome.value + ", por favor, preencha o formuário corretamente");
  }
}

function consultarCep() {
  let cep = document.querySelector("#cep");
  const url = `https://viacep.com.br/ws/${cep.value}/json/`;

  fetch(url)
    .then((response) => response.json())//resposta da requisição
    .then((jsonBody) => {//resposta convertida para json
      document.getElementById("dados").innerHTML =
        jsonBody.logradouro +
        "\n" +
        jsonBody.bairro +
        "\n" +
        jsonBody.localidade +
        "\n" +
        jsonBody.uf
    })
    .catch((error) => {//pega o erro
      alert("CEP não encontrado!");
    });

}