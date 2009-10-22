function setCampos(FILTRO, vform){

if(vform == null){
  vform = document.forms[0];
}

var lista = new Array(vform.elements.length);

if(FILTRO != null){

	for (i = 0 ; i <= vform.elements.length-1 ; i++) { 
		lista[i] = null;
       if(vform.elements[i].name != null && vform.elements[i].type != "button"
          && vform.elements[i].name.startsWith(FILTRO)){
           if(vform.elements[i].type == "radio" || vform.elements[i].type == "checkbox"){
           	  lista[i] = vform.elements[i].name;
           	}  
           
       }
    }
	

	
}
    return lista;
}


function checkAll(filtro, valor){

	vform = document.forms[0];
	valores = setCampos(filtro, vform);
	for(i=0; i<valores.length; i++){
		if (valores[i] != null){
			document.getElementById(valores[i]).checked = valor;
		}
		
	}

}

function inicializaDatas(){ } 


function excluiReferenciaPerfil(){
	if (document.forms[0].cdPerfilCanalVenda.value != ""){

 		alert("Devido as alterações feitas na configuração dos itens contratacao, esse canal de venda não pertence a nenhum perfil.");
		document.forms[0].cdPerfilCanalVenda.value = "";
		document.forms[0].perfilCanalVenda.value = "";
		document.forms[0].flMantemPerfil.value = "N";
	
	
	}

}

function abrePlanoPagamento(){
	abrirPlanoPagto();
	div = "abrirPlanoPagamento";
    TB_show('PLANO DE PAGAMENTO','mensagem.jsp?div='+div+'&keepThis=true&height=120&width=510','class=thickbox', "1");

}


function confirmaPlanoPagamento(){
	$('#TB_window,#TB_overlay,#TB_HideSelect').remove();
 /*   div = "abrirPlanoPagamento";
    TB_show('PLANO DE PAGAMENTO','mensagem.jsp?div='+div+'&keepThis=true&height=120&width=510','class=thickbox', "1");*/
    
    divOrigem = document.getElementById("TB_ajaxContent");
	divDestino = document.getElementById("abrirPlanoPagamento");
	if(divDestino != null){
		divDestino.innerHTML = divOrigem.innerHTML;
	}
	TB_remove();

}

function marcarTodosCheck(campo){
	array = document.getElementsByTagName("input");
	if(campo.checked){
		for(i=0; array.length; i++){
			element = array[i];
			if(element.name.substring(0,5) == "check"){
				element.checked = true;
			}	
		}
	}else{
		for(i=0; array.length; i++){
			element = array[i];
			if(element.name.substring(0,5) == "check"){
				element.checked = false;
			}	
		}
	} 
}


