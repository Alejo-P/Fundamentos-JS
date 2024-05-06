/*----------Tipos de variables----------*/

// Cadena de caracteres
let nombreProducto = "Sérum Effaclar Ultra Concentré Piel Grasa 30 Ml Unidad"
typeof nombreProducto //String

// Tipo numerico
let precio = 34.91
typeof precio //number

// Booleanos
let disponible = true
typeof disponible //boolean

// Undefined
let sinDefinir
typeof sinDefinir //undefined

// Null
let nulo = null
typeof nulo //null

/*----------Variables String----------*/
/* Uso de la pagina web para extraer la infromacion */
let nombre_producto = document.getElementsByClassName("product-name")[0].innerHTML
console.log(nombre_producto) // Sérum Effaclar Ultra Concentré Piel Grasa 30 Ml Unidad
typeof nombre_producto //String

/*----------Variables Number----------*/
/* Uso de la pagina web para extraer la infromacion */
let precioOferta = parseFloat(document.getElementsByClassName("value")[0].attributes.content.nodevalue)
console.log(precioOferta) // 34.91
typeof precioOferta // number