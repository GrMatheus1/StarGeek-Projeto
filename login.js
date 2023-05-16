const formulario =  document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evento) =>{
    if(nome.value == ""){
        evento.preventDefault();
        alert("Digite Seu Nome!")
        nome.focus();
        return null;
    }

    if(email.value == ""){
        evento.preventDefault();
        alert("Digite Seu E-mail!")
        email.focus();
        return null;
    }

    if(senha.value == ""){
        evento.preventDefault();
        alert("Digite Sua Senha!")
        senha.focus();
        return null;
    }
    
    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        nome : nome.value,
        email : email.value,
        senha : senha.value
    })
    localStorage.setItem("dados", JSON.stringify(dados));  
    evento.preventDefault();
    mensagem.innerHTML="<p> Parabens Cadastro Feito com sucesso! </p>";

    setTimeout(()=>{
        window.location.assign("login.html");
    }, 3000);
}