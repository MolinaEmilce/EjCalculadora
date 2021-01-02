///////ejercicio calculadora!!

let calculadora = {
    sumar : function(num1,num2){
        return num1 + num2;
    },
    restar : function (num1,num2) {
        return num1 - num2;
    },
    multiplicar : function (num1,num2) {
        return num1 * num2;
    },
    dividir : function (num1,num2) {
        if(num1 !== 0 && num2 !== 0){
            return num1 / num2;
        }else{
            let mensaje= 'ERROR';
            return mensaje;
        }

    } 
}

console.log(calculadora.dividir(0,2))