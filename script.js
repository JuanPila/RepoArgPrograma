


/*let nombre = "Pepe"
if(true){
    let nombre = "Lucas"
    console.log(nombre)
}
console.log(nombre)*/


//Mostrar por consola del 1 al 100 todos los numeros pares

/*for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i + " es par")
    }
}*/


/*const averiguarPares = (inicio, final) =>{
    for(let i = inicio; i <= final; i = i + 1){
        if(i % 2 == 0){
            console.log(i + " es par")
        }else{
            console.log(i + " es impar")
        }
    }
}

averiguarPares(77, 99)*/


/*let contador = 0*/

/*contador++
contador++
console.log(++contador)*/


/*contador += 5
contador += 5*/


/*const nombres = ["Pepe", "Maria", "Lucas", "Juan"]*/

/*for(let i = 0; i < nombres.length; i++){
    let nombre = nombres[i]
    console.log(nombre)
}*/

//FOR..OF
/*for(let nombre of nombres){
    console.log(nombre)
}*/


/*const ganancias = [25000, 30000, 33000, 40000]**/

//Recorrer el array y calcular la ganancia total.

/*let gananciaTotal = 0

for(let ganancia of ganancias){
    gananciaTotal += ganancia
}

console.log("La ganancia total del dia es: " + gananciaTotal)*/


let dinero = 5
let tengoSueno = true

/*if(dinero > 10){
    console.log("Voy a comprar")
}else{
    console.log("No voy a comprar")
}*/

//Voy a comprar si tengo mas de 10 pesos y no tenga sueno

/*if(dinero > 10 && !tengoSueno){
    console.log("Voy a comprar")
}else{
    console.log("No voy a comprar")
}*/

//Voy a comprar si tengo mas de 10 pesos o no tengo sueno

if(dinero > 10 || !tengoSueno){
    console.log("Voy a comprar")
}else{
    console.log("No voy a comprar")
}