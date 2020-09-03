//menu
function call()
{
    alert("Página em construção");
}
//verifica email
function email()
{
    var x = document.getElementById("name").value;
    var test = /@/.test(x);

    if(test == false)
    {
        alert("Email inválido");
    }

    else
    {
        document.getElementById("welcome").innerHTML = "Bem vindo " + x + "!";
        alert("O email " + x + " foi enviado")
    }
}