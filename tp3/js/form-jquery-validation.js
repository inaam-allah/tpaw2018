$( document ).ready(function() {

     console.log( "DOM ready!" );

     $("#submit").on("click",function(event){
         event.preventDefault();
         console.log("click");  

         if($("#name").val().length<5 || $("#Prenom").val().length<5 || $("#date").val().length<5 ||
            $("#inputEmail4").val().length<5 || $("#inputAddress").val().length<5 )
         {

            $(".modal-title").text("Désolé");
            $(".modal-body").html('Veuillez Vérifier que vous avez  remplis tout les champs');

         }
         else{

            $(".modal-title").text("Bienvenu   " + $("#name").val());

            $(".modal-body").html(' Votre date de naissance est : ' + $("#date").val() + 
            '</br>'  + 'Et vous habitez : ' + '</br>'  + 
            '<img src="https://maps.googleapis.com/maps/api/staticmap?center=Paris&markers=Paris&size=800x400&zoom=11"  height="260" width="420"/>' 
             + '</br>' + '<a href="http://maps.google.com/maps?q=Paris">' + $("#inputAddress").val() +  '</a>' );

         }

         $("#myModal").modal("show");
     });

 });