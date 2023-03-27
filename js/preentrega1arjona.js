//  Poductos
 alert('¡Bienvenido a Lider! Donde encontraras tus productos al mejor precio! ')

alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-Harina $4000 2-Aceite $3000 3-Leche $2000 4-Azucar $1000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
    return cant * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Harina, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 4000)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Aceite, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Leche, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2000)
            break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Azucar, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1000)
            break;

        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-Harina $4000 2-Aceite $3000 3-Leche $2000 4-Azucar $1000 "))
}

alert("el total de la compra es de: " + total)

// Envios y Pagos
const envio = () => {
    if (total >= 10000) {
        alert("El envio es gratuito y sin costo")
    } else {
        total += 1000
        alert("el costo de envio es de 1000, el total es: " + total)
    }
}

envio()

const metodoDePago = () => {
    let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
    if (metodo == "tarjeta") {
        total += 1000
        console.log(total);
        alert("tenes un recargo de 1000, el total es:" + total)
    } else if (metodo == "efectivo") {
        total -= 1000
        alert("tenes un descuento de 1000, el total es:" + total)
    }


}

metodoDePago()