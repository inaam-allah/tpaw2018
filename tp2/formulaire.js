function validation(){

    if(document.getElementById("nom").value.length<5 || document.getElementById("prenom").value.length<5 || document.getElementById("dateNaissance").value.length<10 || document.getElementById("adresse").value.length<5 || document.getElementById("mail").value.length<5)
    {
        document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").innerHTML = "La saisie de tout les champs est obligatoire";
    }
    else{
        document.getElementById("error").setAttribute("hidden","hidden");
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    }

}
