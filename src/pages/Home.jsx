export const Home = () =>{

    const user = ""

    return(
        <div>
            <h1>Bem vindo(a) a Pet Care  {(user != "")? user : ""}</h1>
        </div>
    )
}






// ### **O que deve conter:**

// - Mensagem de boas-vindas
// - Chamada à Fake API (GET /pets) via axios
//     - Exibir os **3 pets mais recentes** com: nome, raça e tutor

// Para cada pet, mostrar **uma imagem aleatória de cachorro** com:

// GET https://dog.ceo/api/breeds/image/random

// - 
// - Botão: **"Entrar como Funcionário"** (vai para /login)

// ---