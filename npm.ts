class GenericsValue { 

    value: number; 

    constructor(arg: number) { 

         this.value = arg; 

    } 

    getValue(): number { 

        return this.value; 

    } 

} 

let genericsValue = new GenericsValue(123); 

console.log(genericsValue.getValue() ); 