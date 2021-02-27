let cuentas = [
    { nombre: 'Hugo', saldo: 500, password: 'siono' },
    { nombre: 'Paco', saldo: 300, password: 'po33ee' },
    { nombre: 'Luis', saldo: 200, password: 'tevale' },
];


function ingresar() {

    let user = document.getElementById("idUsuario").value //.value por que nos queremos traer solo ele valor del elemento
    console.log(user);
    let password = document.getElementById("idPassword").value
    console.log(password);
    
    let autenticado=false;

    for (let i = 0; i < cuentas.length; i++) {//busca dentro de recorriendolos de uno en uno 
        console.log(cuentas[i]); //muestra que hay  en posicion 
     if (user == cuentas[i].nombre && password == cuentas[i].password) { //en cada posicion busca en el campo nombre y comparalos
         console.log("etsito");//si concuerdan mandame este mensaje
        document.getElementById("exampleModalLabel").innerText="Bienvenido a tu banca";       
        document.getElementById("modal-body").innerText="Ahora puedes realizar tus operaciones";       

        document.getElementById("inicial").style.display="none"; //inicial con comillas por que es un texto que busco en html
        document.getElementById("cuentas").style.display="block"; //inicial con comillas por que es un texto que busco en html
        autenticado=true;
    }  
    }

    if (!autenticado) {//! el signo es una negacion 
        document.getElementById("exampleModalLabel").innerText="Por favor revisa tus credenciales";       
        document.getElementById("modal-body").innerText="Alguno de tus datos no concuerda con nuestros registros"; 

    }
}