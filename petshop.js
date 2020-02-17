let listaDePets = ["Bob", "menino", "tico"];


function addPet(nome){
    listaDePets.push(nome)
    return "Pet cadastro com sucesso!";
}


function listarPets(){
    let conteudo = "";

    listaDePets.forEach(function(petNome){
        //conteudo+= "-------------\n nome do pet: "+ petNome

        conteudo +=  `
            --------------------
            Nome do Pet: ${petNome}    
            `
    })

    return conteudo
}


module.exports = {listarPets, addPet}

