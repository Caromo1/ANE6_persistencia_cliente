function guardadatos() {
        const usu = document.getElementById("usuario").value;
        const contr = document.getElementById("contra").value;
        localStorage.setItem("usuario", usu);
        localStorage.setItem("contraseña", contr);

        let usulocal = localStorage.getItem("usuario");
        let contrlocal = localStorage.getItem("contraseña");
        let x = document.getElementById("formulario");

        if (usulocal == "" || contrlocal == "") {
                alert("rellena");
        } else {
                let time=moment().add(2, 'hour').toDate();
                document.cookie = "username"+ usulocal; +",expires=", +time+ "path=/"; 
                
                console.log(time,usulocal, contrlocal);
                x.style.display = "none";
                const jobPromise = axios.get('https://jsonplaceholder.typicode.com/users');
                jobPromise.then((response) => {
                        let i = 1;
                        response.data.forEach(name => {
                                if (usulocal == name.username) {
                                        const caja = document.createElement('div');
                                        document.body.appendChild(caja);
                                        caja.className = 'Cajaglobal';
                                        let CajaDerecha = document.createElement('div');
                                        img3 = i++;
                                        let id = document.createElement('p');
                                        id.textContent = 'ID:' + (name.id);
                                        let nombre = document.createElement('p');
                                        nombre.textContent = 'Nombre:' + (name.name);
                                        caja.appendChild(nombre);
                                        let usuario = document.createElement('p');
                                        usuario.textContent = 'Usuario:' + (name.username);
                                        caja.appendChild(usuario);
                                        let email = document.createElement('p');
                                        email.textContent = 'Email:' + (name.email);
                                        caja.appendChild(email);
                                        let telefono = document.createElement('p');
                                        telefono.textContent = 'Telefono:' + (name.phone);
                                        caja.appendChild(telefono);
                                        let web = document.createElement('p');
                                        web.textContent = 'Web:' + (name.website);
                                        caja.appendChild(web);
                                        let img = document.createElement('img');
                                        img.src = "assets/imagenes/" + img3 + '.jpg';
                                        caja.appendChild(img);
                                        let boton = document.createElement('button');
                                        caja.appendChild(boton);
                                        boton.appendChild(document.createTextNode('borrar'));
                                        boton.addEventListener('click', () => {
                                                document.body.removeChild(document.getElementById(caja.id));
                                        });
                                
                                        caja.appendChild(boton);
                                }
                                
                        });
                });
        }
}


       


