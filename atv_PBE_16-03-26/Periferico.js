class Periferico {
    constructor(nome, tipo, conectado) {
        this.nome = nome;
        this.tipo = tipo;
        this.conectado = conectado;
    }

    conectar() {
        console.log("O periferico 7 está conectado");
        this.conectado = true;
    }

    desconectar() {
        console.log("O periferico está desconectado");
        this.conectado = false;
    }
}

class Computador {
    constructor(marca, processador) {
        this.marca = marca;
        this.processador = processador;
        this.perifericos = [];
    }

    adicionarPeriferico(periferico) {
        this.perifericos.push(periferico)
    }


    removerPeriferico(periferico) {
        this.perifericos = this.perifericos.filter((p) => {
            // periferico é o que foi enviado, nesse caso enviamos o fone para REMOVER
            // p é o periferico da lista, ele vai percorrer 1 a 1...
            // periferico.nome é o FONE
            // p.nome é referentes aos nomes da lista (Mouse, fone...)
            // p.nome esta percorrendo a lista ( podemos pensar na sala, todos os nomes )
            // periferico.nome é quem eu quero REMOVER
            return p.nome !== periferico.nome
        });
        console.log(this.perifericos)
    }

    listarPerifericos() {
        console.log("--- LISTA DE PERIFERICOS ---")
        this.perifericos.forEach((perifericos, index) => {
            console.log(`${index + 1} - ${perifericos.nome}`)
        })
    }
}

const computador = new  Computador("computador", "conectado");
const mouse = new Periferico("Mouse", "desconectado");
const fone = new Periferico("Fone", "conectado");

computador.adicionarPeriferico(fone)
computador.adicionarPeriferico(mouse)
// computador.listarPerifericos()
computador.removerPeriferico(fone)