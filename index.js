class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usando magia";
                break;
            case "guerreiro":
                ataque = "usando espada";
                break;
            case "monge":
                ataque = "usando artes marciais";
                break;
            case "ninja":
                ataque = "usando shuriken";
                break;
            default:
                console.log("Esse herói ainda não está disponível :(");
                return;
        }
        console.log(`O ${this.tipo} ${this.nome} atacou ${ataque}`);
    }    
}

let heroi = new hero ("Gustavo", "19", "guerreiro")

heroi.atacar();