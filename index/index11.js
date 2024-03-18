var idade = 65
if ( idade < 16) { // São estruturas condicionais aninhadas. 
    console.log ('Não vota')
} else if  (idade <18 || idade >= 65)  { // A BARRA INDICA QUE OS DOIS VALORES, A EQSUERDA E A DIREITA, SÃO VERDADEIROS
    console.log ('Voto opcional')      
} else {
    console.log('Voto obrigatório')
}