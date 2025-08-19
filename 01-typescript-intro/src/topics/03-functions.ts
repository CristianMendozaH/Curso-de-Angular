

//Si no se sabe el tipo de retorno, se puede usar `void`
//si no sabe el tipo de datos se puede usar `any`

function addNumbers(a: number, b: number) :number{
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply ( fistNumber: number, secondNumber?: number, base:number = 2) {
    return fistNumber * base;
}   


const resul: number = addNumbers(1, 2);   
const resul2: string = addNumbersArrow(1, 2);
const multiplyResult: number= multiply(5);

console.log({resul, resul2, multiplyResult});


export {};