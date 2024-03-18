var hoje = new Date()
var diaSem = hoje.getDay()

// diaSem = 5 Neste caso seria para alterar o valor do diaSem. 

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça-feira')
        break;
    case 3:
        console.log('Quarta-feira')
        break; case 0:
    case 4:
        console.log('Quinta-feira')
        break;
    case 5:
        console.log('Sexta-feira')
        break;
    case 6:
        console.log('Sábado')
        break;
    default:
        console.log('ERROR - Dia inválido')
        break;
}