//Validação do CPF

function VerificaCPF() {
    strCpf = document.getElementById("cpf").value;
    var soma = 0;
    var resto;

    if (strCpf == "00000000000" || strCpf.length != 11) {
        document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(9, 10))) {
        document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
        return false;
    }
    document.getElementById("cpf").style.background = "#f2fdfd";
    return true;
}

// VERIFICANDO INPUTS
function verificaInputs(input) {
    if (input.value == "") {
        input.style.background = "#f6cacc";
    }
}