function sentenceIf(anioActual, anioPersona){
// guardo en una variable el resultado de la resta
const resultado = anioActual - anioPersona;
//verificar mediante un if si la persona es mayor de edad
if (resultado >= 18) {
    console.log("La persona es mayor de edad y tiene:", resultado,"años");
} else { console.log ("La persona es menor de edad y no puede acceder")}
}
sentenceIf(2023,2010);

