let counter = 0;
let EmailValidator = 0;

document.getElementById("formadocao").addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true; // Variável que define se todas as informações estão válidas;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let numero = document.getElementById("numero").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    let cidade = document.getElementById("cidade").value;
    let complemento = document.querySelector('input[name="compl"]:checked');
    let quintal = document.querySelector('input[name="quint"]:checked');
    let antes = document.querySelector('input[name="petan"]:checked');
    let horasozinho = document.getElementById("horas").value;
    let motivo = document.getElementById("motive").value;
    let termos = document.getElementById("terms").value;

    if (nome.length < 3) return alert("Nome Inválido");
    
    while (counter < email.length) // Eu podia ter usado o input email mas agora dane-se
    {
        if (email[counter] == "@" ){
            EmailValidator = 1;
        }
    counter += 1;
    }
    if (EmailValidator == 0) return alert("E-mail Inválido")

    
        
    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!";
})