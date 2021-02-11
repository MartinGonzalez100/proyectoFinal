//rellenando tarjetas
const containerTarjeta = document.querySelector("#containerTarjeta");

//direccionar una pagina

const direccionarA = (htmlNombre) => {
  window.location.href = "../" + htmlNombre;
};

// traer los datos de todas las publicaciones a las tarjetas
var miDato = [{}];

fetch("http://localhost:8080")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // console.log(data[0].imagenurl)

    miDato = data;
    console.log(miDato);
    containerTarjeta.innerHTML = "";
    data.forEach((elemento) => {
      // console.log(elemento.id);
      // console.log(elemento.detalle);
      // console.log("esta es la imagen ", elemento.imagenurl);
      console.log(elemento.precio);
      containerTarjeta.innerHTML += `
        <div id="cargaDinamica" OnClick='editarDatosModal("${elemento.publicacion}","${elemento.detalle}","${elemento.imagenurl}","${elemento.precio}","${elemento.condicion}","${elemento.rubro}")' class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div id="unaTrajeta" class="card">
          <div id="publicacionBandera" style="display:none">${elemento.id}</div>
          <img id="imgTarjeta" src=${elemento.imagenurl} class="card-img-top" alt="...">
          <div id="cuerpoTrajeta" class="card-body">
            <h5 id="cardTitle" class="card-title">${elemento.publicacion}</h5>
            <p id="cardText"class="card-text">
              ${elemento.detalle} <br> <hr />
              <strong>  -Precio:  </strong> ${elemento.precio} <br>
              <strong>  -Condicion:  </strong> ${elemento.condicion}  <br>
              <strong>  -Rubro:  </strong> ${elemento.rubro}
            </p>
            <p align="right"><strong> ${elemento.tipo} </strong></p>            
          </div>
        </div>
      </div>
        `;
    });
  });

// traer solo las tarjetas de servicios con el boton del menu

const menuProductos = document.getElementById("MenuProductos");
const menuServicios = document.getElementById("MenuServicios");
var MenuTodos = document.getElementById("MenuTodos");

menuServicios.addEventListener("click", () => {
  fetch("http://localhost:8080/filtroServicios")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // console.log(data[0].imagenurl)
      console.log("me hiciste click");

      miDato = data;

      containerTarjeta.innerHTML = "";
      data.forEach((elemento) => {
        // console.log(elemento.id);
        // console.log(elemento.detalle);
        // console.log("esta es la imagen ", elemento.imagenurl);
        console.log(elemento.precio);
        containerTarjeta.innerHTML += `
        <div id="cargaDinamica" OnClick='editarDatosModal("${elemento.publicacion}","${elemento.detalle}","${elemento.imagenurl}","${elemento.precio}","${elemento.condicion}","${elemento.rubro}")' class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div id="unaTrajeta" class="card">
          <div id="publicacionBandera" style="display:none">${elemento.id}</div>
          <img id="imgTarjeta" src=${elemento.imagenurl} class="card-img-top" alt="...">
          <div id="cuerpoTrajeta" class="card-body">
            <h5 id="cardTitle" class="card-title">${elemento.publicacion}</h5>
            <p id="cardText"class="card-text"> <br>
            ${elemento.detalle} <br> <hr />
            <strong>  -Precio:  </strong> ${elemento.precio} <br>
            <!--    <strong>  -Condicion:  </strong> ${elemento.condicion}  <br>  --!>
            <strong>  -Rubro:  </strong> ${elemento.rubro}
            </p>            
            <p align="right"><strong> ${elemento.tipo} </strong></p>
          </div>
        </div>
      </div>
        `;
      });
    });
});

// traer solo las tarjetas de productos con el boton del menu

menuProductos.addEventListener("click", () => {
  fetch("http://localhost:8080/filtroProductos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // console.log(data[0].imagenurl)

      miDato = data;

      containerTarjeta.innerHTML = "";
      data.forEach((elemento) => {
        // console.log(elemento.id);
        // console.log(elemento.detalle);
        // console.log("esta es la imagen ", elemento.imagenurl);
        console.log(elemento.precio);
        containerTarjeta.innerHTML += `
        <div id="cargaDinamica" OnClick='editarDatosModal("${elemento.publicacion}","${elemento.detalle}","${elemento.imagenurl}","${elemento.precio}","${elemento.condicion}","${elemento.rubro}")' class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div id="unaTrajeta" class="card">
          <div id="publicacionBandera" style="display:none">${elemento.id}</div>
          <img id="imgTarjeta" src=${elemento.imagenurl} class="card-img-top" alt="...">
          <div id="cuerpoTrajeta" class="card-body">
            <h5 id="cardTitle" class="card-title">${elemento.publicacion}</h5>
            <p id="cardText"class="card-text">
              ${elemento.detalle} <br> <hr />
              <strong>  -Precio:  </strong> ${elemento.precio} <br>
              <strong>  -Condicion:  </strong> ${elemento.condicion}  <br>
              <!--    <strong>  -Rubro:  </strong> ${elemento.rubro}  --!>
            </p>            
            <p align="right"><strong> ${elemento.tipo} </strong></p>
          </div>
        </div>
      </div>
        `;
      });
    });
});

// traer todas las tarjetas con el boton todos

MenuTodos.addEventListener("click", () => {
  fetch("http://localhost:8080")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // console.log(data[0].imagenurl)
      console.log("me hiciste click");

      miDato = data;

      containerTarjeta.innerHTML = "";
      data.forEach((elemento) => {
        // console.log(elemento.id);
        // console.log(elemento.detalle);
        // console.log("esta es la imagen ", elemento.imagenurl);
        console.log(elemento.precio);
        containerTarjeta.innerHTML += `
        <div id="cargaDinamica" OnClick='editarDatosModal("${elemento.publicacion}","${elemento.detalle}","${elemento.imagenurl}","${elemento.precio}","${elemento.condicion}","${elemento.rubro}")' class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div id="unaTrajeta" class="card">
          <div id="publicacionBandera" style="display:none">${elemento.id}</div>
          <img id="imgTarjeta" src=${elemento.imagenurl} class="card-img-top" alt="...">
          <div id="cuerpoTrajeta" class="card-body">
            <h5 id="cardTitle" class="card-title">${elemento.publicacion}</h5>
            <p id="cardText"class="card-text">
              ${elemento.detalle} <br> <hr />
              <strong>  -Precio:  </strong> ${elemento.precio} <br>
              <strong>  -Condicion:  </strong> ${elemento.condicion}  <br>
              <strong>  -Rubro:  </strong> ${elemento.rubro}
            </p>            
          </div>
        </div>
      </div>
        `;
      });
    });
});

const imagenNavbarPerfil = document.querySelector("#imagenNavbarPerfil");
const obtenerPerfilusuario = () => {
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
    return {
      telefono: user.displayName,
      email: user.email,
      avatarUrl: user.photoURL,
      uid: user.uid,
    };
  }
  // console.log("desde f obtenerusuario()", name,email, photoUrl)
};
