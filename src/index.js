import validator from "./validator.js";

   document.getElementById("validate").addEventListener("click", checkIn); /*Capturador que activa initialCheckIn*/

   function checkIn() {/*verifica el contenido ingresado y decide qué hacer con él a través de ifs y elses*/
  
     const boxContent = document.getElementById("creditCardNumber").value; /*captura el valor del input*/
     let contentToValidate = boxContent.toString(); /*Convierte el número del input en String, para aplicar método match*/

     if (contentToValidate.match("^[0-9]{16}$")) { /*Match compara el string con un número entero de 16 dígitos*/
         alert("Estamos procesando tu solicitud"); 

           if (validator.isValid(contentToValidate)) {
           alert("Tu tarjeta N°  " + validator.maskify(contentToValidate) + " se ha registrado exitosamente"
           );

          } else {
           alert("Oops... el número ingresado no es válido; por favor intenta nuevamente");
           }

      } else {
        alert("Debes ingresar un número de 16 dígitos");
        throw TypeError("Only numbers allowed");

     }

  }

