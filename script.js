var nomeCompleto =  document.getElementById("nomeCompleto")
var cpf = document.getElementById("cpfInput")
var rg = document.getElementById("rgInput")
var email =  document.getElementById("emailInput")
var NumeroTel = document.getElementById("celTelInput")

//aqui fica a valdição do site
//onde verifica toda parte escrita
function validar(){
    if(nomeCompleto.value == "" || cpf.value == "" || rg.value == ""|| email.value == ""){
        alert("preencha todos os campos")
        
    }else{
        alert("formulario preenchido com sucesso")
    }
}

//aqui n deixa colocar numeros no input de letras
nomeCompleto.addEventListener("keypress", function(e){

    const keyCode = (e.keyCode ? e.keyCode : e.witch )

    console.log(keyCode)

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault()
    }
})

//inicando as mascaras de cpf e celular
// mascara do telefone
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");            
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    
    return v;
}
function id( el ){
	return document.getElementById( el );
}


//cpf mascara aqui

function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
    }

//mascara de rg aqui

function Rg(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
    return v;
}
//aqui carrega as funçoes quando a janela carrega
window.onload = function(){
	id('celTelInput').onkeypress = function(){
		mascara( this, mtel );
	}
    id('cpfInput').onkeypress = function(){
        mascara(this, mCPF)
    }
    id('rgInput').onkeypress = function(){
        mascara(this, Rg)
    }
}    