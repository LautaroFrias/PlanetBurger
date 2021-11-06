let stockHamburguesas = [
    { id: 1, nombre: "venus", precio: 600, desc: "carne 170gr, mayonesa PB, rúcula, cebolla con aceto de frutos rojos, mollejas, cheddar", tamaño: "simple", img: './imagenes/menu/1.png' },
    { id: 2, nombre: "marte", precio: 750, desc: "doble carne, doble cheddar, bbq con miel, cebolla crispy, bondiola de cerdo desmechada", tamaño: "doble", img: './imagenes/menu/2.png' },
    { id: 3, nombre: "saturno", precio: 700, desc: "pan tostado al revés con manteca, doble carne, triple cheddar, panceta sweet, cebolla morada, salsa PB", tamaño: "doble", img: './imagenes/menu/3.png' },
    { id: 4, nombre: "neptuno", precio: 600, desc: "hamburguesa de chorizo, mayonesa de chimichurri ahumada, rúcula, queso lincoln, doble panceta", tamaño: "simple", img: './imagenes/menu/4.png' },
    { id: 5, nombre: "la_tierra", precio: 550, desc: "pan negro, salmon burguer 170gr, salsa PB, ananá grillada, palta + tomate + cilantro, cebolla morada, brotes frescos", tamaño: "simple", img: './imagenes/menu/5.png' },
    { id: 6, nombre: "marte", precio: 650, desc: "200gr de carne, langostinos, togarashi, queso filadelfia, shitakes salsa, teriyaki, palta, cebolla de verdeo", tamaño: "simple", img: './imagenes/menu/6.png' },
]


// Login y Registro

const nombre = document.getElementById('nombre');
const pw = document.getElementById('pw');


// Login 
function store() {
    localStorage.setItem('nombre', nombre.value);
    localStorage.setItem('pw', pw.value);
}


// Registro
function check() {

    const storedNombre = localStorage.getItem('nombre');
    const storedPw = localStorage.getItem('pw');

    const userNombre = document.getElementById('userNombre');
    const userPw = document.getElementById('userPw');

    if (userNombre.value !== storedNombre || userPw.value !== storedPw) {
        alert('Error, el usuario no existe');
    } else {
        alert('Usted se ha logeado con éxito');
    }
}