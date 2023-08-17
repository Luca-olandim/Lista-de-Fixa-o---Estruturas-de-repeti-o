function anoNovo(){
    let num = -1;
    let i = 10
    while( i > num){
        console.log(i)
        i--
    }
    console.log("Feliz ano novo")
}
function tabuada(){
    let num = window.prompt()
    for(let i = 0; i <= 10; i++){
        let x = i*num
        console.log(num ,"X", i ,"=", x)
    }
}
function somaPares(){
    let soma = 0
    let numero = 2 
    while(numero <= 100){
        if(numero%2 == 0 ){
            soma = soma+numero
        }   
    numero++
    }
    alert("A soma dos 50 primeiros números pares é: " + soma)
}
function numPrimo(){
    let num = window.prompt()
    let divisores= 0
    for(let i = 0; i < num; i++){
        if(divisores % num ==0){
            divisores ++
        } 
    }
    if(num%2 == divisores){
        console.log(num+ " é um numero é primo")
        }else {
        console.log(num + " é um numero não é primo")
    }
}