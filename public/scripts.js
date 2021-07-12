function validaCPF(){
    var input = document.getElementById("input-cpf").value;
    var cpfValido = new RegExp('/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/');

    if(cpfValido.test(input))
        console.log('CPF Válido');
    else
        console.log('CPF Inválido')
    
    // console.log(input);
}

function onlyNumberKey(){
    var input = document.getElementById("input-cpf").value;
    var cpfValido = new RegExp('/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/');

    if(cpfValido.test(input))
        console.log('CPF Válido');
    else
        console.log('CPF Inválido')
    
    // console.log(input);
}