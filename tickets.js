let tkRes = document.querySelector("#Resum");
tkRes.addEventListener("click", Funo);

let tkBorr = document.querySelector("#BorrarCampos");
tkBorr.addEventListener("click", Fdos);

function Funo(event) {

    event.preventDefault();

    let Valores = document.querySelector(".t_canti");

    if (Number(Valores.value)) {
        let VarCateg = document.querySelector(".clas_categ");
        let Apagar;

        switch (VarCateg.value) {
            case "Estudiante": {
                Apagar = 200 * Valores.value * 0.2;
                break;
            }
            case "Trainee": {
                Apagar = 200 * Valores.value * 0.5;
                break;
            }
            case "Junior": {
                Apagar = 200 * Valores.value * 0.85;
                break;
            }
        }

        document.querySelector(".Otp").textContent = `Total a pagar: $${Apagar}`;
  
  

    } 
    else { 
        alert('Verifique ingresar los datos');
        Valores.value = "";
        Valores.placeholder = "cantidad";
    }

}


function Fdos() {

    document.querySelector(".Otp").textContent = "Total a pagar:"

    document.getElementById('.tV').value=''; 
    document.getElementById('.t_nombre').value='';
    document.getElementById('t_apellido').value='';
    document.getElementById('t_Email').value='';


    
}


