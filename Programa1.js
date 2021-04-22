

function ingresar2numeros(){

  //Declara las variables
var num1, num2, num3;

//PIDE LOS NUMEROS A COMPARAR
  var num1=prompt('Ingrese el primer numero');
  var out=isNaN(num1)

  //EL OUT=ISNAN VERIFICA SI EL VALOR INGRESADO ES UN NUMERO
  if(out){
    alert('Error, ingresa un numero');
  }

  var num2=prompt('Ingrese el segundo numero');
  var out=isNaN(num2)
  if(out){
    alert('Error, ingresa un numero');
  }

  var num3=prompt('Ingrese el tercero numero');
  var out=isNaN(num3)
  if(out){
    alert('Error, ingresa un numero');
  }

  //COMPARA LOS NUMEROS PARA MOSTRAR EL MAYOR 
if(num1>num2 && num1>num3){
  alert('El numero mayor es'+num1);
  }
   if(num2>num1 && num2>num3){
    alert('El numero mayor es'+num2);
  }
     if(num3>num1 && num3>num2){
       alert('El numero mayor es'+ num3);
         }


        }
  



