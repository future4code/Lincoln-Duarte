const postsbank = [];
let i = 0;

function posting(postsbank){
    const posted = document.getElementById("container-de-posts");
    posted.innerHTML += `<p>Escritor: ${postsbank[i].autor.value}</p>`;
    posted.innerHTML += `<p>${postsbank[i].titulo.value}</p>`;
    posted.innerHTML += `<p>${postsbank[i].texto.value}</p>`;
    posted.innerHTML += `<img src="${postsbank[i].imagem.value}" href="imagem" />`;

    postsbank[i].titulo.value = "";
    postsbank[i].autor.value = "";
    postsbank[i].texto.value = "";
    postsbank[i].imagem.value = "";
}

function posts(){
    const post = {
        titulo: document.getElementById("titulo-post"),
        autor: document.getElementById("autor-post"),
        texto: document.getElementById("conteudo-post"),
        imagem: document.getElementById("imagem")
    }

    if(post.titulo.value !== "" && post.autor.value !== "" && post.texto.value !== ""){
        postsbank.push(post);
        posting(postsbank);
    }
    else{
        alert("preencha todos os campos");
    }
}
