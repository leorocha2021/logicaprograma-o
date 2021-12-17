var listapecas = ["filtro de ar","motor","amortecedor","filtor de oleo","correia dentada","pivo","terminal direção","articulação",
"filtro de combustivel","embreagem"]

if (listapecas.length < 10) {
        console.log ("é possivel cadastrar mais peças")
} else {
        console.log("não tem mais espaço na lista")
}


let peso = 200
if(peso<100){
        console.log("A peça deve pesar no minimo 100g")
} else {
        console.log("A peça possui peso adequado")
}

let NomePeca = "disco de freio"
if (NomePeca.length>3){
        console.log("Nome de peça está adequado para o cadastro")
}else{
        console.log("Nome deve ter mais de 3 caracteres, digite um nome adequado")
}



