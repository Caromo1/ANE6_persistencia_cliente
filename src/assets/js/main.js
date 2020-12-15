function guardadatos(){
        const usu=document.getElementById("usuario").value;
        const contr=document.getElementById("contra").value;
        localStorage.setItem("usuario", usu);
        localStorage.setItem("contraseña", contr);
        const data = moment().format('YYYY-MM-DDTHH:mm');
        let usulocal = localStorage.getItem("usuario");
        let contrlocal = localStorage.getItem("contraseña");
        let datalocal = localStorage.getItem(data);
        console.log(data,usulocal,contrlocal,datalocal);
        var x = document.getElementById("formulario");
        if(usulocal=="" || contrlocal==""){      
                alert("rellena")
        }else{
               x.style.display = "none";
               function formObj(contrlocal,usulocal) {
                this.contrlocal=contrlocal;
                this.usulocal=document.usulocal;
                var formularidatos=new formObj(contrlocal,usulocal);
                document.getElementById("musu").textContent=formularidatos.usulocal;
                document.getElementById("mcontra").textContent=formularidatos.contrlocal;
              }
        }
}