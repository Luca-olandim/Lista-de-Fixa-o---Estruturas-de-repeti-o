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
function primos() {
    let num = window.prompt()
    let divisores = 0;
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores++;
        }
    }
    
    if (divisores === 2) {
        console.log(num + " é primo");
    } else {
        console.log(num + " não é primo");
    }
}
function fibonacci() {
    let n = window.prompt()
    let a = 0
    let b = 1
    let c = 0
    console.log(a);
    console.log(b);
    while ((n-2) > 0) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
        n--
    }
}