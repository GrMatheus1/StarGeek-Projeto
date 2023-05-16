const formulario = document.getElementById("formulario");
const nome = document.getElementById("inome");
const email = document.getElementById("iemail");
const cemail = document.getElementById("cemail")
const senha = document.getElementById("isenha");
const csenha = document.getElementById("csenha")

formulario.onsubmit = (evento) =>{
    if(nome.value == ""){
        evento.preventDefault();
        alert("Digite seu nome!")
        senha.focus();
        return null;
    }
    if(email.value ==""){
        evento.preventDefault();
        alert("Digite seu Email!")
        senha.focus();
        return null;
    }
    if(cemail.value == ""){
        evento.preventDefault();
        alert("Confirme seu Email!")
        senha.focus();
        return null;
    }
    if(senha.value == ""){
        evento.preventDefault();
        alert("Digite sua senha!")
        senha.focus();
        return null;
    }
    if(csenha.value == ""){
        evento.preventDefault();
        alert("Confirme sua senha")
        senha.focus();
        return null;
    }
    if(cemail.value != email.value){
        evento.preventDefault();
        csenha.focus();
        alert("EMAIL DIFERENTE ANIMAL")
        return null;
}
    if(csenha.value != senha.value){
            evento.preventDefault();
            csenha.focus();
            alert("Senhas Incompatíveis")
            return null;
    }
    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        nome : nome.value,
        email : email.value,
        cemail: cemail.value,
        senha : senha.value,
        csenha: csenha.value
    })
    localStorage.setItem("dados", JSON.stringify(dados));  
    evento.preventDefault();
    alert("Dados cadastrados com sucesso");

    setTimeout(()=>{
        window.location.assign("login.html");
    }, 3000);
}