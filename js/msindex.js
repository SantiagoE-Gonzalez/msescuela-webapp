$( document ).ready(function (){
	$.get('http://localhost:57949/alumnos',function(data){
		for (var i = 0; i < data.length; i++){
			var row = "<tr>"+
			"<td>"+data[i].dni+"</td>"+
			"<td>"+data[i].apellido+"</td>"+
			"<td>"+data[i].nombre+"</td>"+
			"<td>"+data[i].domicilio+"</td>"+
			"<td>"+data[i].localidad+"</td>"+
			"<td>"+data[i].nroTelefono+"</td>"+
			"<td>"+data[i].nroTelefono+"</td>"+
			"<tr>";
			$("#t_alumnos").append(row);
		}
		
    });
	
	
	
	/*
	$("#botonenviar").click( function() {     // Con esto establecemos la acción por defecto de nuestro botón de enviar.
        if(validaForm()){                               // Primero validará el formulario.
            $.post("enviar.php",$("#formdata").serialize(),function(res){
                $("#formulario").fadeOut("slow");   // Hacemos desaparecer el div "formulario" con un efecto fadeOut lento.
                if(res == 1){
                    $("#exito").delay(500).fadeIn("slow");      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
                } else {
                    $("#fracaso").delay(500).fadeIn("slow");    // Si no, lo mismo, pero haremos aparecer el div "fracaso"
                }
            });
        }
    });    
	*/
	
	$( '#formdata' ).on( 'submit', function(e) {
       e.preventDefault();
 
       var dni =  $( '#dni' ).val();
       var apellido =  $( '#apellido' ).val();
       var nombre =  $( '#nombre' ).val();
       var localidad =  $( '#localidad' ).val();
       var domicilio =  $( '#domicilio' ).val();
       var nroTelefono =  $( '#nroTelefono' ).val();
       var JSONObj = {
           "dni"         	 :dni,
           "apellido"  :apellido,
           "nombre"            :nombre,
           "localidad"            :localidad,
           "domicilio"            :domicilio,
           "nroTelefono"            :nroTelefono
       };
 
       var data = JSON.stringify(JSONObj);
       //var url = JP_POST_EDITOR.root;
       var url2 = 'http://localhost:57949/alumnos';
 
       
		$.ajax({
		  type: "POST",
		  url: "http://localhost:57949/alumnos",
		  data: data,
		  success: function(){},
		  dataType: "json",
		  contentType : "application/json"
		});
      
   });
	
	
})

