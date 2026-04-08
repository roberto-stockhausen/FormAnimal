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
    if (EmailValidator == 0) return alert("E-mail Inválido");
    if (numero.length < 8) return alert("Número Inválido");
    if (idade < 18) return alert("Você precisa de 18 anos ou mais para adotar");
    if (complemento == null) return alert("Informe o complemento");
    if (quintal == null) return alert("Informe se tem um quintal");
    if (antes == null) return alert("Informe se já teve um pet antes");
    if (motivo.length < 10) return alert("Motivo muito curto. Insira pelo menos 10 caraceres.");
    if (termos == null) return alert("CPF Inválido");
    

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!";
})