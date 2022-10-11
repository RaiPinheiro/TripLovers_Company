//func p/ limpar o formulário (ñ funciona se não utilizar essa função)
const limparFormulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//preenche os campos (relativos com a API)
const preencherFormulario = (rua) => {
    document.getElementById('rua').value = rua.logradouro;
    document.getElementById('bairro').value = rua.bairro;
    document.getElementById('cidade').value = rua.localidade;
    document.getElementById('estado').value = rua.uf;
}



//text retorna true ou false
// /^[0-9]+$/ -> testa se o caractere é um número
const numTester = (numero) => /^[0-9]+$/.test(numero);

//validação do cep
const cepVal = (cep) => cep.length == 8 && numTester(cep);

const pesquisarCep = async () => {
    limparFormulario();

    
     //pegando o número do cep
     const cep = document.getElementById('cep').value;

    //link da url da api
    const site = `https://viacep.com.br/ws/${cep}/json/`;

    if(cepVal(cep)){
        //fetch é um tipo de solicitação
        //await é igual no c#
        const dados = await fetch(site);
        const rua = await dados.json();

        //testar se a const endereco recebeu um erro
        if(rua.hasOwnProperty('erro')){
            document.getElementById('rua').innerHTML = "CEP não encontrado";
        }else{
            preencherFormulario(rua);
        }
    }else{
        document.getElementById('rua').value = "CEP incorreto";
    }
}

//adiciona um evento no input cep 
document.getElementById('cep').addEventListener('focusout',pesquisarCep);

//função para mostrar um pop-up com o pacote escolhido
// function pacoteEscolhido(){
    
//     const aviso = document.querySelector(".aviso-compra");
//     aviso.classList.add("show");
//     setTimeout(() => {
//         aviso.classList.remove("show");
//     }, 1000);

//     var ele = document.getElementsByName('pacote');
//       for(i = 0; i < ele.length; i++) {
//      if(ele[i].checked) document.getElementById("result").innerHTML = "Pacote Escolhido: "+ele[i].value;
//     }
// }

// $(document).ready(function() {
//     setTimeout(function() {
//         $(".compra-pacote").fadeOut(1500);
//     }, 2000);

//     $('#btnConfirmar').click(function() {
//         $(".compra-pacote").show();
//         setTimeout(function() {
//             $(".compra-pacote").fadeOut(1500);
//         }, 2000);
//     });
// });

var pacote;
var getNome;
var getSobrenome;
var getEmail;
var getCep;
var getEndereco;
var getNumero;
var getBairro;
var getCidade;
var getEstado;

function pacoteEscolhido(){    
    let getSelectedValue = document.querySelector( 'input[name="pacote"]:checked'); 
     
    
    if(getSelectedValue != null) {  
         setTimeout((alert("Pacote escolhido: " + getSelectedValue.value)), 2500) 
         var pacote = getSelectedValue.value;   
    }    
    return pacote;
}

function inforCompra(){
    getNome = document.getElementById("firstname")
    getSobrenome = document.getElementById("lastname")
    getEmail = document.getElementById("email")
    getCep = document.getElementById("cep")
    getEndereco = document.getElementById("rua")
    getNumero = document.getElementById("numero")
    getBairro = document.getElementById("bairro")
    getCidade = document.getElementById("cidade")
    getEstado = document.getElementById("estado")
}

function mostrarInfo(){
    document.getElementById('paragrafo-firstname').innerHTML = getNome;
}


