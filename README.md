# Tarjeta de crédito válida / PREAUTORIZACIÓN DE TARJETA

1. INTRODUCCIÓN

El presente proyecto fue elaborado con el objetivo de permitir a clientes de un restaurante realizar un registro de sus datos bancarios en la página de este, en el contexto de una reserva, con la finalidad de realizar un cargo automático a sus cuentas al momento de ir a comer a ese lugar y evitar así el uso de dinero o tarjetas físicas. 
La página corresponde a un restaurante italiano ficticio llamada La Toscana. 

2. INVESTIGACIÓN UX

Hoy en día, la tecnología digital está presente en prácticamente todos los ámbitos de nuestra vida y es utilizada para simplificar nuestra cotidianidad. Desde ese punto de vista, considerando que desde hace mucho tiempo ya es factible pagar a través de medios automatizados, no es extraño pensar que esa digitalización podría anticiparse al momento de la prestación del servicio y realizarse en una etapa previa a la prestación de este. Actualmente existen muchos restaurantes que han implementado tecnología para la ejecución de diversas tareas, como llevar registro de su inventario o de sus comensales a través de reservas, así como también para el despliegue del menú. ¿Por qué no entonces permitir a los usuarios realizar pagos con cargo a sus tarjetas ya registradas a través de una página web segura, de forma simplificada?

2.1 Usuarios del producto digital.

Esta idea fue desarrollada pensando en tres tipos de usuarios:
1° Personas que, en un contexto de medidas sanitarias de pandemia, no desean tener contacto físico con dinero efectivo o tarjetas bancarias, con miras a una sociedad que probablemente dará cada vez mayor importancia a la sanitización de los elementos tangibles con que interactúa día a día. 
2° Personas que valoran en extremo su tiempo, y que por razones laborales o de otra índole, necesitan realizar consumos rápidos, pues tienen un tiempo muy acotado para comer. 
3° Personas que invitan a otras a un restaurante o café y que, por razones de cortesía o delicadeza social, no desean que los comensales invitados sean partícipes del momento de la llegada de la cuenta, para evitar los clásicos ofrecimientos de contribución al pago o simplemente porque no desean que se evidencie el valor de lo consumido. Por ejemplo, en un almuerzo de negocios donde un empresario invita a un potencial inversionista a comer. 

2.2 Objetivos de los usuarios.
Todas las personas mencionadas tienen el mismo problema: quieren vivir la experiencia de asistir a un restaurante y luego retirarse del lugar sin la clásica demora que implica esperar que el camarero preste atención a la clásica señal de “la cuenta, por favor”, la llegada del cobro, la decisión de repartir el pago entre los comensales o no, la elección del medio de pago, el retorno del cambio o vuelto y la recepción de la boleta o comprobante final. 

3.3 Resolución del problema.
El problema de los usuarios se resuelve ingresando previamente los datos de su tarjeta bancaria elegida para el pago en la página del restaurante al momento de realizar su reserva. Este registro podría incluso ir asociado a la creación de un perfil en el sitio web de la empresa, a modo de comunidad virtual erigida en torno de algún restaurante emblemático, por ejemplo. Al realizar este ingreso previo de datos, el usuario simplemente deberá asistir al lugar el día de la ocasión en particular, y finalmente podrá retirarse sabiendo que el restaurante cargará su consumo a la cuenta proporcionada. Podría también añadirse a este esquema una aplicación que permitiera al usuario aprobar el monto de la cuenta desde su celular, por ejemplo, antes de retirarse del lugar. 

3.	PROTOTIPO y FEEDBACK
Primero se realizó un prototipo de baja resolución en papel, que contemplaba la existencia de dos interfaces. La primera contenía el input para el ingreso de los números de la tarjeta a validar, mientras que la segunda contenía el mensaje de aceptación de los datos. 

https://github.com/MarionGarin/SCL018-card-validation/blob/aad1ebbeeaaeb0987b98c3460e2910fc68869dec/FOTOS%20README/Prototipo%20papel.jpg

Posteriormente, ese prototipo se traspasó a Figma, añadiendo una tercera interfaz, la cual hacía alusión al mensaje que se desplegaría en pantalla en caso de no ser válida la tarjeta de crédito. 

https://github.com/MarionGarin/SCL018-card-validation/blob/aad1ebbeeaaeb0987b98c3460e2910fc68869dec/FOTOS%20README/Prototipo%20Figma.jpg

Sin embargo, al momento de crear el diseño web se decidió cambiar el prototipo de Figma, añadiendo una imagen de fondo, para darle un poco de realismo y humanidad a la página, considerando que se refiere a un restaurante donde la interacción con las personas cobra relevancia crucial.
Se decidió también condensar todo el flujo de acciones en una sola interfaz, de manera de evitar sobrecargar la página de información.
El mensaje de retorno se estableció por medio de “alerts”, con la finalidad de evitar retrasos y priorizar el logro de funcionalidad dentro del sprint correspondiente.

4. FUNCIONALIDAD
El desarrollo de las acciones ejecutadas a través del código es el siguiente:
1° En primer lugar, se captura el valor ingresado en el input por medio de un manejador de eventos, a través de una función. 
2° Dicha función analiza el contenido del input y decide qué hacer en base al resultado de este chequeo inicial:
a)	Si se trata de un número entero de 16 dígitos, dará paso al algoritmo de Luhn, para decidir si es válido o no.
b)	Si se ingresa caracteres o espacios en blanco, se genera una alerta que le indica al usuario que debe ingresar un número de 16 dígitos. 
c)	En cuanto a la aplicación del algoritmo de Luhn, se realiza a través de la función isValid. Si el número es válido, se declara entonces un valor booleano “true” y en consecuencia se opera la función Maskify, la que se manifiesta en una alerta que devuelve el número de la tarjeta enmascarado por el carácter “#”, con excepción de las últimas 4 posiciones. 
d)	En relación con los mensajes que recibe el usuario, se consideró más adecuado reemplazar las respuestas “número válido” o “número inválido” por alertas que le hicieran sentido a aquel en relación con las operaciones realizadas. Es decir, se le felicita por un registro exitoso o bien se le invita amablemente a reintentar el ingreso de los números.  
