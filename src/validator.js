
const validator = {
  
    isValid(contentToValidate){

        let digitsForLuhn = contentToValidate.split ("").reverse(); /*se forma un array y se revierten los números*/
                              
        let evenPosition = []; /*array con posiciones pares*/
        let oddPosition = []; /*array con posiciones impares*/

            for (let i = 0; i < digitsForLuhn.length;i++){ 
                 if ((i+1) % 2 === 0){
                 evenPosition.push(digitsForLuhn[i]);
              
                } else {
                 oddPosition.push(digitsForLuhn[i]);
                }

             }
            
        let duplicatedDigits = []; /*array con los números de posiciones pares duplicados*/
            evenPosition.forEach (item => {
            duplicatedDigits.push(item*2);
            });
        
        let twoDigits = duplicatedDigits.filter(item => item > 9);//array con números de 2 dígitos, con comprobación ">9"
        let oneDigit = duplicatedDigits.filter(item => item <= 9);//eligiendo números de 1 dígitos, con comprobación "<=9"

        let twoDigitsSumed = []; //array con la suma de los dígitos dobles, con método indirecto de restar 9
            twoDigits.forEach (item => {
            twoDigitsSumed.push(item-9);
            });

        let allToIntegers = (twoDigitsSumed.concat(oneDigit,oddPosition)).map(Number); //se convierte todo a enteros
       
        let totalSum=0; //suma de todos los números para aplicar módulo de 10

        for(let i of allToIntegers) totalSum+=i; /*función que aplica comprobación final y retorna booleans*/
            if (totalSum % 10 === 0) { 
            return true; 

        } else {
            return false;
            
          }
          
            
        },
            
                     
    maskify (contentToValidate){

        return contentToValidate.slice(0,-3).replace(/.(?=.)/g, '#').concat(contentToValidate.slice(-3, contentToValidate.length));
        
    }

    

    
};

export default validator;





