// // Codigo firebase Carlos
// var firebaseConfig = {
//     apiKey: "AIzaSyCmRFONWKjnYGHrny9AqeXqJS7FxfC4R9E",
//     authDomain: "localstorage-e6721.firebaseapp.com",
//     projectId: "localstorage-e6721",
//     storageBucket: "localstorage-e6721.appspot.com",
//     messagingSenderId: "719797837765",
//     appId: "1:719797837765:web:6cf7cce3a249d07edbf5ac",
// };

//base martin
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyDEHn6TxLcKUoJ-n9362w0HNaVBTuffpe0",
    authDomain: "proyectofinal-9b976.firebaseapp.com",
    projectId: "proyectofinal-9b976",
    storageBucket: "proyectofinal-9b976.appspot.com",
    messagingSenderId: "935267993825",
    appId: "1:935267993825:web:57e3a7957dcbe64bd60fa0",
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//traer el formulario
let formularioProducto = document.getElementById("formularioProducto");

//cuando aprete el botón enviar datos se ejecutara esta funcion
formularioProducto.addEventListener("submit", function (e) {
    e.preventDefault();
    //traigo los datos del formulario
    let datos = new FormData(formularioProducto);

    //funcion para tomar los datos del check "condicion"
    let condicionCheck = "";
    let nuevo = document.getElementById("nuevo");
    let usado = document.getElementById("usado");
    let indistinto = document.getElementById("indistinto");

    if (nuevo.checked) {
        condicionCheck = nuevo.value;
    } else if (usado.checked) {
        condicionCheck = usado.value;
    } else {
        condicionCheck = indistinto.value;
    }

    console.log(condicionCheck);

    //funcion "precio" dependiendo si esta
    //presionado el check o no
    let precio = "";
    let precioCheck = document.getElementById("acordarVendedor");

    if (precioCheck.checked) {
        precio = "a acordar con el vendedor";
    } else {
        precio = datos.get("precio");
    }

    console.log("este es mi ", precio);

    //Recojo los datos para enviarlos al servidor
    let _data = {
        publicacion: datos.get("publicacion"),
        detalle: datos.get("detalle"),
        precio: precio,
        zona: datos.get("zona"),
        imagenurl: srcImagen,
        rubro: "",
        condicion: condicionCheck,
        idusuario: "",
        tipo: "producto"
    };

    fetch("http://localhost:8080/ingresarproducto", {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));

    // console.log para apreciar la obra de arte que hice
    console.log(datos);
    console.log("publicacion: ", datos.get("publicacion"));
    console.log("precio: ", precio);
    console.log("zona:", datos.get("zona"));
    console.log("condicion:", condicionCheck);
    console.log("imagen: ", blobImagen);
});

// Cargado de la imagen

//  Funcion que se ejecuta cuando se carga una imagen
var blobImagen = "";
imagenurl.addEventListener("change", function (e) {
    //  Recoje el archivo subido
    archivo = e.target.files[0];
    // se convierte en BLOB
    const imgCodified = URL.createObjectURL(archivo);
    //se imprime en el formulario
    pruebasrc.src = imgCodified;
    console.log(imgCodified);
    blobImagen = imgCodified;

    //  Elimina el icono para que no se pise con la imagen
    var padre = document.getElementById("IngresarImagenBoton");
    var hijo = document.getElementById("iconoDescarga");
    padre.removeChild(hijo);
});


//FIREBASE

function iniciar() {

    // Consigo el ultimo ID
    var ultimoId = "";
    fetch("http://localhost:8080/ultimoId")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elemento) => {
                elemento.UId;
                maxId = elemento.UId;
                console.log(maxId);

                // Cambio el nombre de la imagen por el del ID + 1 
                // para ligarla con el formulario que sigue
                nombreImagen = "imagen" + (maxId + 1);
                console.log("este es el nombre: ", nombreImagen);

                var imagenurl = document.getElementById("imagenurl");
                imagenurl.addEventListener("change", function (e) {
                    //tomar archivo
                    var archivo = e.target.files[0];

                    //crear referencia storage
                    var storageRef = firebase.storage().ref("imagenes/" + nombreImagen);

                    // subir archivo
                    storageRef.put(archivo);

                    console.log("imagen subida a firebase");

                    // Cambia el src de la imagen en el documento
                    // por la URL de la imagen en firebase
                    srcImagen = `https://firebasestorage.googleapis.com/v0/b/localstorage-e6721.appspot.com/o/imagenes%2F${nombreImagen}?alt=media&token=9c172991-c595-4817-82a5-589496d554e1`;

                    console.log(pruebasrc);
                });
            });
        });
}

// Inicia la funcion cuando carga la pagina
window.onload = iniciar;


//redireccionar a cuerpo
const botonPublicarBusqueda = document.querySelector("#botonPublicarBusqueda");

botonPublicarBusqueda.addEventListener("click", () => {
    setTimeout(() => {
        location.href = "http://localhost:8080/cuerpo.html";
    }, 500);
});
