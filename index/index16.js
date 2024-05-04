let num = [10, 6, 27, 1]  // Declarando uma variavel com 4 elementos que vai até o indice 3
num.sort()
console.log(`Nosso vetor é o ${num}`) 

num[4] = 50 // Adicionou elemento 50 ao índice 4

console.log(`Nosso vetor é o ${num}`) 

num.push(5000) // Adicionou elemento ao após o último índice que já existia 

console.log(`Nosso vetor é o ${num}`) 

console.log(`A variável num possúi ${num.length} elementos`) // Contabilizando quantos elementos há na variável em cumprimento total

// for (let pos = 0; pos <num.length; pos++) {
//     console.log(`Este elemento de  número ${num[pos]} tem a posição de indice  ${pos}, conforme a ordem do índice`)   // ${num[pos]} vai indicar o elemento e e ${pos} ta indicando o indice    
// }

for (let pos in num) {
   console.log( `Este elemento de  número ${num[pos]} tem a posição de indice  ${pos}, conforme a ordem do índice`)
}

var guardandoposicao = num.indexOf(10) // Variavel que armazena busca elemento pelo valor indicando sua altura/posição no indice

console.log(`O número 10 está no indice ${guardandoposicao}`)




