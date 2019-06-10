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
			"<tr>";
			$("#t_alumnos").append(row);
		}
		
    })
	
	
})

