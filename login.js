const nome = document.querySelector(".nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario =  document.getElementById("formulario");

formulario.onsubmit = (eveto) =>{
    let dados = JSON.parse(localStorage.getItem("dados"));
    
    dados.forEach(elemento => {
        if(elemento.email === email.value && elemento.senha == senha.value){
            eveto.preventDefault();
            //mensagem.innerHTML="Aguarde redirecionando...";
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
                {
                    email : email.value
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados));
            setTimeout(()=>{
                window.location.assign("catalogo.html");
            }, 3000)
            return true;


        } else{
          alert('OI')
            eveto.preventDefault();
        }

    });
}