


// Mensagem;
console.log("Ano novo está chegando!!")

// Variável com o nome da Mariah Carey;
let nome = "Mariah Carey"
console.log(nome)

// Variável com a idade da Mariah Carey;
let idade = 54
console.log(idade)

// Ano atual;
let anoAtual = 2023
console.log(anoAtual)

// Data de nascimento da Mariah Carey;
let dataNascimento = anoAtual - idade;
console.log(`A data de nascimento da Mariah Carey é ${dataNascimento}`)

// Variável boolean;
let quartaFeira = true;
console.log(quartaFeira)

// Tipo de dado da variável;
console.log(typeof quartaFeira)

// Condição de idade;
let minhaIdade = 20;
if (minhaIdade >= 18) {
    console.log(`Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.`)
} else {
    console.log(`Sinto muito, mas assistirá da tv globo`)
}

// Condição de aniversário.
let mesAniversario = "Agosto"
let mesAniversario1 = "Dezembro"
let mesAniversario2 = "Junho"
if (mesAniversario === "Agosto" || mesAniversario1 === "Dezembro" || mesAniversario2 === "Junho") {
    console.log(`Uma ou mais opções estão corretas. O mês escolhido foi ${mesAniversario}`)
} else {
    console.log(`Algo de errado não está certo, o mês digitado foi ${mesAniversario2}`)
}
