//esta função é crítica, ela tem uso em várias outras funções; aos poucos
//vamos otimizando as assinaturas de modo a facilitar a futura otimização do ccódigo como um todo.
function recuperaDadosCEPLocalidade(campo, campos, nuCEP, flDesabilita, nmProximoCampoOnFocus){

	FacadeAjax.carregaDadosLocalidade(nuCEP,{
		callback:function(dados) {
			//setValorDadosLocalidade(campo, campos, dados, flDesabilita, nmProximoCampoOnFocus)
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
			   			   
			   if(flDesabilita != "N"){
				   habilitaDesabilitaEndereco(campos);	
				   habilitaDesabilitaBotaoLov(campo);
			   }else {	
				  habilitaDesabilitaEnderecoCalculo(cepValido);
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
	})
}

/*
	Os campos abaixo e as três funções que se seguem tem o objetivo deefetuar a
	desambiguação de campos em caso de mais de um endereço respondendo a um 
	mesmo CEP.
*/

var campoOrigem;
var camposLocalidade;
var camposRetornados;
var flgDesabilita;
var nmProximoCampoOnFocus;

function mostraOpcoesEndereco(campo, campos, dados, flDesabilita, nmProximoCampoOnFocus){

  // campos declarados acima
  campoOrigem = campo;
  camposLocalidade = campos;
  camposRetornados = dados;
  flgDesabilita = flDesabilita;
  nmProximoCampoOnFocus = nmProximoCampoOnFocus;
  
  	   for (i=0; i<campos.length; i++){
	   		if(document.getElementById(campos[i]) != null){
	  		   DWRUtil.setValue(campos[i], "");	
	  		}
	   }
  
  nmDiv = "DivEnderecos";
  var div = document.getElementById(nmDiv);
  div.innerHTML = dados[1];
  TB_show('ENDEREÇOS','mensagem.jsp?div='+nmDiv+'&keepThis=true&height=75&width=590','class=thickbox', "6");

}    

function selecionarEndereco(opcao){

       var campo = campoOrigem; 
       var campos = camposLocalidade;
	   var valor = camposRetornados[opcao];
	   var flDesabilita = flgDesabilita;
	   var nmProximoCampoOnFocus = nmProximoCampoOnFocus;
	   
	   var i = 0;
	   var cepValido = true
	   
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
	   
	   if(flDesabilita != "N"){
		   habilitaDesabilitaEndereco(campos);	
		   habilitaDesabilitaBotaoLov(campo);
	   }else {	
		  habilitaDesabilitaEnderecoCalculo(cepValido);
		  //habilitaDesabilitaEnderecoDaf(campos);  
		  if (document.getElementById('IMesmoEnderCorresp') != null && document.getElementById('IMesmoEnderCorresp').value == '1'){
		      setaEnderecoCorrespondencia("S");
		  }
	   }
	   
	   if(cepValido){
	      if(document.getElementById(nmProximoCampoOnFocus) != null){
    	      document.getElementById(nmProximoCampoOnFocus).focus();
	      }
	   }   
	   TB_remove();
}    

function cancelarEscolhaCep(){

if(campoOrigem != null && campoOrigem.value != null){
  campoOrigem.value = "";
}

}



function habilitaDesabilitaEnderecoCalculo(chave){
vform = document.forms[0];

	if(vform.IEstadoER != null){
	vform.IEstadoER.disabled = chave;
	
		if(vform.ICidadeER.value != ""){
		 
		 if(vform.ICidadeER != null){ vform.ICidadeER.disabled = chave;}
		 if(vform.btLovICidadeER != null){
		   if(chave){
			   vform.btLovICidadeER.disabled = false;
		   }	
		   vform.btLovICidadeER.disabled = chave;
		  }	
		
		}else {
		 if(vform.ICidadeER != null){ vform.ICidadeER.disabled = true;}
		 if(vform.btLovICidadeER != null){ vform.btLovICidadeER.disabled = true;}	
		}
	}
	
	if(vform.ITipoFranquia != null ){
	   populaComboFranquia();
	}
}


function habilitaDesabilitaEndereco(campos){

	vform = document.forms[0];
	var i = 0;
   	for (i=3; i<campos.length; i++){
   		if(document.getElementById(campos[i]) != null){ 
  			if(document.getElementById(campos[i]).value != '' && campos[i] != 'IBairroResSede'  && campos[i] != 'IBairroCorrespondencia' ){ 
  				eval("vform." + campos[i] + ".disabled = true");
  			}else{
  				eval("vform." + campos[i] + ".disabled = false");
  			}  			
  		}
   	}
}


function abrirPopup(nmVariavel, largura, altura){
	
	clienteAplicacao = document.forms[0].cdClienteAplicacao.value;
	FacadeAjax.buscaDsHelpOnline( nmVariavel, clienteAplicacao,
                                   {	callback:function(descricaoAjuda) {
		                                mostraDsHelp(descricaoAjuda, largura, altura);
		                                }
                                   });
	

}

function abrirPopupAgrup(nmVariavel, largura, altura){
	
	FacadeAjax.buscaHelpOnlineAgrupador( nmVariavel, 
                                   {	callback:function(descricaoAjuda) {
		                                mostraDsHelp(descricaoAjuda, largura, altura);
		                                }
                                   });
	

}

function mostraDsHelp(mensagemAjuda, largura, altura ){
	TB_show('AJUDA','mensagem.jsp?msn='+mensagemAjuda+'&keepThis=true&height=50&width='+largura+'','class=thickbox', "3");
}


function verificaPeriodoData(data, tipo){

		FacadeAjax.verificaPeriodoData(data,
                                   {	callback:function(valor) {
		                                criticaPeriodoData(valor, tipo);
		                                }
                                   });
	
}

function criticaPeriodoData(valor, tipo){
	
	if ((tipo == 1)&&(valor == 1)){//Data base é depois de hoje
		alert("A data deve ser anterior a hoje");
	} else if ((tipo == -1)&&(valor == -1)){
		alert("A data deve ser posterior a hoje");
	}

}


function disabledButton(obj){
	obj.disabled = true;
}

//mais uma função usada em outros .js
function buscaObsErroSeguro(flgMostraResCalculo){

	FacadeAjax.buscaObsErroSeguro({
		callback:function(obsHTML){
		
			//mostraObsErroSeguro(obsHTML, flgMostraResCalculo)
			var vform = document.forms[0]
			var nmDiv = "DivObservacao"
		    var div = document.getElementById(nmDiv)		
		
			if(flgMostraResCalculo == "S"){
				if(vform.flRetornoCalcular.value == "S"){
					if(vform.flCalculoComErro.value == "S"){
					    mensagem = "<label> Cálculo com critica! <br> </label>";
			            div.innerHTML = mensagem + obsHTML;
					    TB_show('ALERTA','mensagem.jsp?div='+nmDiv+'&keepThis=true&height='+100+'&width='+400+'','class=thickbox', "3");
					    
					}else {
						
					    if(vform.flSeguroPossuiObs.value == "S"){
					    	mensagem = "<label> Cálculo efetivado com sucesso! <br> </label>";
					    	div.innerHTML = mensagem + obsHTML;
					        TB_show('SUCESSO','mensagem.jsp?div='+nmDiv+'&keepThis=true&height='+100+'&width='+400+'','class=thickbox', "3");
					    }else {
					        mensagem = "Cálculo efetivado com sucesso!";
					        TB_show('SUCESSO','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+100+'&width='+300+'','class=thickbox', "3");
					    }
					}
				} else if (vform.cdStatusSeguro.value == "8") {
					    	mensagem = "<label> Cálculo exportado com sucesso! <br> </label>";
					    	div.innerHTML = obsHTML;
					        TB_show('SUCESSO','mensagem.jsp?div='+nmDiv+'&keepThis=true&height='+100+'&width='+400+'','class=thickbox', "8");
				
				}else if(vform.flErroNoEnvioDAF != null && vform.flErroNoEnvioDAF.value == "S"){
					    	div.innerHTML = obsHTML;
					        TB_show('ALERTA','mensagem.jsp?div='+nmDiv+'&keepThis=true&height='+100+'&width='+400+'','class=thickbox', "3");
				}	
			}else {
				div.innerHTML = obsHTML;
				TB_show('NOTAS','mensagem.jsp?div='+nmDiv+'&keepThis=true&height=80&width=400','class=thickbox', "3");
			}
		}
	})
}
