function getValoresCamposTela(FILTRO){

vform = document.forms[0];
var lista = new Array(listaItensCamposTela.length + 20);
var contador = 0;

	for (i = 0 ; i <= listaItensCamposTela.length-1 ; i++) {
	    var nmCampo = listaItensCamposTela[i];
 	    var nmFiltro = "";
 	    var flgCampoValido = "S";
 	    
		if(FILTRO != null){ 
		   if(nmCampo.substr(0,FILTRO.length)=== FILTRO ){
		      flgCampoValido = "S";
		   }else{
		      flgCampoValido = "N";
		   }
		}

		if(flgCampoValido == "S"){
		
			 if(document.getElementById(nmCampo) != null){
		      var campo = document.getElementById(nmCampo);
	
				if(campo.disabled == false){
				       if(campo.type == "radio" || campo.type == "checkbox"){
					       if(document.getElementsByName(nmCampo) != null){
						       var campos = document.getElementsByName(nmCampo);
			                      for (a = 0 ; a <= campos.length-1 ; a++) {
			                          campo = campos[a];
							       	  if(campo.checked == true){
							       	    lista[contador] = campo.name + "="+ campo.value;
							       	    contador++;
							       	  }
			                      }
					       }
				       }else{
				          lista[contador] = campo.name + "="+campo.value;	
				          contador++;
				       }
				}       	   
	       	   
		    }else{
	  	      lista[contador] = "";
	  	      contador++;
		    }
		
		}

    }

    return lista;

}


function getTodosValoresCamposTela(FILTRO){

vform = document.forms[0];
var lista = new Array(listaItensCamposTela.length + 20);
var contador = 0;

	for (i = 0 ; i <= listaItensCamposTela.length-1 ; i++) {
	    var nmCampo = listaItensCamposTela[i];
 	    var nmFiltro = "";
 	    var flgCampoValido = "S";
 	    
		if(FILTRO != null){ 
		   if(nmCampo.substr(0,FILTRO.length)=== FILTRO ){
		      flgCampoValido = "S";
		   }else{
		      flgCampoValido = "N";
		   }
		}

		if(flgCampoValido == "S"){
		
			 if(document.getElementById(nmCampo) != null){
		      var campo = document.getElementById(nmCampo);
	
			       if(campo.type == "radio" || campo.type == "checkbox"){
				       if(document.getElementsByName(nmCampo) != null){
					       var campos = document.getElementsByName(nmCampo);
		                      for (a = 0 ; a <= campos.length-1 ; a++) {
		                          campo = campos[a];
						       	  if(campo.checked == true){
						       	    lista[contador] = campo.name + "="+ campo.value;
						       	    contador++;
						       	  }
		                      }
				       }
			       }else{
			          lista[contador] = campo.name + "="+campo.value;	
			          contador++;
			       }
	       	   
		    }else{
	  	      lista[contador] = "";
	  	      contador++;
		    }
		
		}

    }

    return lista;

}


/*
	Função criada para criar uma lista com os campos e seus valores "tokenizados"
*/
/*
function setParametros(){

	var vform = document.forms[0]
	var lista = new Array(vform.elements.length)
	
	for (i = 0 ; i <= vform.elements.length-1 ; i++) {	
       if(vform.elements[i].name != null 
       && vform.elements[i].value != null 
       && vform.elements[i].type != "button" 
       && vform.elements[i].disabled == false){       
           if(vform.elements[i].type == "radio" 
           || vform.elements[i].type == "checkbox"){
           	  if(vform.elements[i].checked == true){
           	    lista[i] = vform.elements[i].name + "="+vform.elements[i].value
           	  }
           }else {
              lista[i] = vform.elements[i].name + "="+vform.elements[i].value
           }          
       }
    }
    return lista
}

function setTodosParametros(){

	var vform = document.forms[0];
	var lista = new Array(vform.elements.length);
	for (i = 0 ; i <= vform.elements.length-1 ; i++) { 
       if(vform.elements[i].name != null && vform.elements[i].value != null && vform.elements[i].type != "button"){
           
           if(vform.elements[i].type == "radio" || vform.elements[i].type == "checkbox"){
           	  if(vform.elements[i].checked == true){
           	    lista[i] = vform.elements[i].name + "="+vform.elements[i].value;
           	  }
           }else {
              lista[i] = vform.elements[i].name + "="+vform.elements[i].value;	
           }
           
       }
    }

    return lista;
}
*/