
function carregaInformacoesSeguradoDaf(campos, camposCidade, nuCpf){

	FacadeAjax.carregaInformacoesSegurado(nuCpf,
	                                 {
	                                 	callback:function(valor) {
	                                  		setSeguradoDaf(campos,camposCidade, valor);
	                                  	}
                                     });

}

function setSeguradoDaf(campos, camposCidade,valor){  

	var i = 0;
	
	if (valor[0] != "VAZIO"){

		for (i=0; i<campos.length; i++){
		
			if (eval("document.getElementById('"+ campos[i] +"') != null")){
				DWRUtil.setValue(campos[i], valor[i]);
			}	
		}
		
		if(document.getElementById("CEP_TEMP_RES") != null){document.getElementById("CEP_TEMP_RES").value = document.getElementById("ICepResSede").value;}
	}

	var i = 0;
   	for (i=0; i<camposCidade.length; i++){
   		if(document.getElementById(camposCidade[i]) != null){ 
  			if((document.getElementById(camposCidade[i]).value != '')){ 
  				eval("document.getElementById('" + camposCidade[i] + "').disabled = true");
  			}else{
  				eval("document.getElementById('" + camposCidade[i] + "').disabled = false");
  			}  			
  		}
   	}

	
	if(document.getElementById("ICidadeResSede") != null && document.getElementById("btLovICidadeResSede") != null){ 
  		if((document.getElementById("ICidadeResSede").value != '')){ 
	  		document.getElementById("btLovICidadeResSede").disabled=true;
  		}
  	}

   verificaDadosSegurado();
}


function recuperaDadosCEPLocalidadeDaf(campo, campos, nuCEP, flDesabilita, nmProximoCampoOnFocus){

FacadeAjax.carregaDadosLocalidade(nuCEP,
	                                 {
	                                 	callback:function(valor) {
	                                  		setValorDadosLocalidadeDaf(campo, campos, valor, flDesabilita, nmProximoCampoOnFocus);
	                                  	}
                                     });

}

function setValorDadosLocalidadeDaf(campo, campos, dados, flDesabilita, nmProximoCampoOnFocus){
   
   if(dados[0] == "N"){
	  	var valor = dados[2];
		var i = 0;
		var cepValido = true;
		for (i=0; i<campos.length; i++){
			if(campos[i] == "FL_CEP_VALIDO"){
		  		if(valor[i] == "S"){
		  			cepValido = true;
		  		}else {
		  			cepValido = false;
		  		}
		  	}else if(document.getElementById(campos[i]) != null){
		  		DWRUtil.setValue(campos[i], valor[i]);	
		  	}
		}
		
	   if(cepValido){
	      if(document.getElementById(nmProximoCampoOnFocus) != null){
   	      document.getElementById(nmProximoCampoOnFocus).focus();
	      }
	   }
	   
	}else{
     	mostraOpcoesEndereco(campo, campos, dados, flDesabilita, nmProximoCampoOnFocus);
   }

   
}





function carregaInformacoesCorretorDaf(campos){

	FacadeAjax.carregaInformacoesCorretor({
	                                 	callback:function(valor) {
	                                  		setCorretor(campos, valor);
	                                  	}
                                     });

}

function setCorretor(campos, valor){
	if (valor[0] != "VAZIO"){

		for (i=0; i<campos.length; i++){
		
			DWRUtil.setValue(campos[i], valor[i]);
		}
	}
}

