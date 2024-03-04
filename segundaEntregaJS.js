class Producto{
    constructor(id, nombre, precio, medida){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.medida = medida;
    }
}

let catalogo=[];
let carrito=[];
let totalCarrito = 0;
let continuarCompra = "";
let productoEntrada = ""; 
let medida = "";
let totalProductos = 0;

function agregarAlCarrito(producto){
    carrito.push(producto);
}

function agregarCantidad(producto,cantidad){
    for(let i=0;i<cantidad;i++){
        carrito.push(producto);
        totalCarrito = totalCarrito + producto.precio;
    }
}

catalogo.push( new Producto(101,"Escoba",290," "));
catalogo.push( new Producto(102,"Barrendero",450," "));
catalogo.push( new Producto(201,"Anden",500,"40"));
catalogo.push( new Producto(202,"Anden",710,"60"));
catalogo.push( new Producto(203,"Anden",950,"80"));
catalogo.push( new Producto(204,"Anden",1150,"100"));
catalogo.push( new Producto(301,"lavacamiones",400));
catalogo.push( new Producto(401,"Pincel",120,"chico"));
catalogo.push( new Producto(402,"Pincel",190,"grande"));

console.log(catalogo);

continuarCompra = prompt("¿Desea comprar? Escriba 'SI'");

while(continuarCompra==="SI"){
    productoEntrada = prompt("Escriba el prodcuto que desea comprar (barrendero, escoba, anden, lavacamiones o pincel)");
    switch(productoEntrada){
        case "escoba":
            agregarCantidad(catalogo[0],parseInt(prompt("Ingrese la cantidad que desea comprar")));
            break;
        case "barrendero":
            agregarCantidad(catalogo[1],parseInt(prompt("Ingrese la cantidad que desea comprar")));
            break;
        case "anden":
            medida = parseInt(prompt("Ingrese la medida del anden en cm: 40, 60, 80 o 100"))
            switch(medida){
                case 40:
                    agregarCantidad(catalogo[2],parseInt(prompt("Ingrese la cantidad que desea comprar")));
                    break;
                case 60:
                    agregarCantidad(catalogo[3],parseInt(prompt("Ingrese la cantidad que desea comprar")));
                    break;
                case 80:
                    agregarCantidad(catalogo[4],parseInt(prompt("Ingrese la cantidad que desea comprar")));
                    break;
                case 100:
                    agregarCantidad(catalogo[5],parseInt(prompt("Ingrese la cantidad que desea comprar")));
                    break;
                default:
                    alert("Error. Esa no es una medida válida de andén")
                    break;
            }

        case "lavacamiones":
            agregarCantidad(catalogo[6],parseInt(prompt("Ingrese la cantidad que desea comprar")));
            break;
        case "pincel":
            medida = prompt("Ingrese la medida del pincel: grande o chica");
            switch(medida){
                case "chica":
                    agregarCantidad(catalogo[7],parseInt(prompt("Ingrese la cantidad que desea comprar")));
                    break;
                case "grande":
                    agregarCantidad(catalogo[8],parseInt(prompt("Ingrese la cantidad que desea comprar")));
                    break;
                default:
                    alert("Error. Esa no es una medida válida de pincel");
                    break;
            }
        default:
            alert("Error. Ese no es un producto válido para comprar");
        }
        continuarCompra = prompt("¿Desea agregar más productos? Esciba 'SI'");
    }
    

    console.log("Su listado de productos es: ");
    for (obj of carrito){
        console.log(obj.nombre+" - $"+obj.precio)
    }

    totalProductos = carrito.length;

    console.log("Y el total es: $"+totalCarrito+" con una cantidad de "+totalProductos+" productos");




