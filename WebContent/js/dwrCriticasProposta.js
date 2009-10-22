// ---------------------------------------- PROPOSTA -----------------------------------------------

function verificaValidadeCalculo(cdModulo, vform){


dtBaseCalculo = vform.IDtContratacao.value;
nuProposta = vform.cdProposta.value;

cdProduto = vform.cdProduto.value;

if(dtBaseCalculo != "" && nuProposta == "" ){

	FacadeCriticaSeguroAjax.verificaDataCalculoVigencia(cdProduto, dtBaseCalculo, 
		                                 {
		                                 	callback:function(valor) {
		                                  		retornaVerificaValidadeCalculo(valor, cdModulo, vform );
		                                  	}
	                                     });

}else {
   verificaCamposObrigatoriosProposta(cdModulo, vform );
}	                                     
	                                     

}

function retornaVerificaValidadeCalculo(valor, cdModulo, vform ){

	if(valor[0] == "S" ){
	  mensagem = valor[1];
	  alert(mensagem);
    }else {
	  verificaCamposObrigatoriosProposta(cdModulo, vform );
	}

}



function verificaCamposObrigatoriosProposta(cdModulo, vform){

if(cdModulo == "2"){

	var lista = getTodosValoresCamposTela();
	
	FacadeCriticaSeguroAjax.verificaCamposTelaProposta(cdModulo, lista, 
		                                 {
		                                 	callback:function(valor) {
		                                  		retornaVerificaCamposObrigatoriasProposta(valor, vform, "", cdModulo);
		                                  	}
	                                     });
}else{
	var lista = getValoresCamposTela();
	
	FacadeCriticaSeguroAjax.verificaCamposTelaProposta(cdModulo, lista, 
		                                 {
		                                 	callback:function(valor) {
		                                  		retornaVerificaCamposObrigatoriasProposta(valor, vform, "", cdModulo);
		                                  	}
	                                     });


}	                                     
	                                     

}

function retornaVerificaCamposObrigatoriasProposta(valor, vform, chave, cdModulo){

	if(valor[0] == "S" ){
	  if(cdModulo == "4" && vform.BtGerarProposta != null){
	  	  vform.BtGerarProposta.disabled = false;
  	  }
	  mensagem = valor[1];
	  alert(mensagem);
      if(valor[2] != ""){
        realcaCamposObrigatorios(valor[2]);
      }
    }else {
    	if(cdModulo == "2"){
			validaConvenio(document.getElementById('IConvenio'), vform, cdModulo);
		}else{
			retornoValidacaoCamposProposta(vform, cdModulo);
		}
	}

}


function retornoValidacaoCamposProposta(vform, cdModulo){ 
    if(cdModulo == "2"){
       informaAlteracaoDadosSegurado();
    }
    parent.mostraEscondeGifProcessando('block');
	habilitaCampos(vform);
	vform.submit();

}

function validaConvenio(campo, vform, cdModulo){
	FacadeCriticaSeguroAjax.validaConvenio(campo.value, {callback:function(valor) {
			if(!valor){
				alert("Conv�nio Inv�lido");
			}else{
				validaDataVigenciaProposta(vform, cdModulo);
			}
		}
	});
};

function validaDataVigenciaProposta(vform, cdModulo){
    
    if(!document.getElementById('INomeProponente').disabled){
		var base = textoParaDate(document.getElementById('dtBase').value);
		var inicioVigencia = textoParaDate(document.getElementById('IInicioVigencia').value);
		var fimVigencia = textoParaDate(document.getElementById('IFimVigencia').value);
		var diferencaDias = document.getElementById('diferencaDias').value;
	
		var anoDataBase = base.getFullYear();
	    var anoDataInicioVig = inicioVigencia.getFullYear();
	    var diferencaDiasEntreDataAtualeVig = 0;
	
		if(anoDataBase == anoDataInicioVig ){
		  diferencaDiasEntreDataAtualeVig = contadorDiasEntreDatas(base,inicioVigencia);	
		}else if(anoDataInicioVig <  anoDataBase){
		  diferencaDiasEntreDataAtualeVig = -1;
		}else {
		  diferencaDiasEntreDataAtualeVig = 100;
		}
	
	
		if(diferencaDiasEntreDataAtualeVig < 0){
			//se vig�ncia inv�lida, damos a data base para o in�cio e a de fim damos mais um ano.
			var msg  = 'A data de in�cio de vig�ncia n�o pode ser inferior a data de hoje.';
				//msg +='\nDeseja alterar o in�cio de vig�ncia para a data de hoje ?';
				msg +='\n[OK] - para alterar a data de in�cio de vig�ncia para a data de hoje ';
				msg +='\n[Cancelar] - para alterar manualmente a data de in�cio de vig�ncia ';
			if(confirm(msg)){		
				DWRUtil.setValue("IInicioVigencia", dateParaTexto(base));
				DWRUtil.setValue("IFimVigencia", dataIncrementaDias(base,diferencaDias));
				retornoValidacaoCamposProposta(vform, cdModulo);
			}else{
			   document.getElementById('IInicioVigencia').style.background = "#ff9000";
			   document.getElementById('IInicioVigencia').focus(); 
			}

		}else if(diferencaDiasEntreDataAtualeVig > 30){
			var msg	 = 'A data de in�cio de vig�ncia pode ser posterior � entrada da proposta em 30 dias.';
				//msg +='\nDeseja alterar o in�cio de vig�ncia para a data de hoje ?';
				msg +='\n[OK] - para alterar a data de in�cio de vig�ncia para a data de hoje ';
				msg +='\n[Cancelar] - para alterar manualmente a data de in�cio de vig�ncia ';
			if(confirm(msg)){		
				//se o in�cio for datatado em 30 dias para o futuro, tamb�m n�o devemos deixar passar.
				DWRUtil.setValue("IInicioVigencia", dateParaTexto(base));
				DWRUtil.setValue("IFimVigencia", dataIncrementaDias(base,diferencaDias));
				retornoValidacaoCamposProposta(vform, cdModulo);
			}else{
			   document.getElementById('IInicioVigencia').style.background = "#ff9000";
			   document.getElementById('IInicioVigencia').focus(); 
			}

		}else{
			retornoValidacaoCamposProposta(vform, cdModulo);
		}
	}else{
		retornoValidacaoCamposProposta(vform, cdModulo);
	}
};


/*
function validaDataVigenciaProposta(vform, cdModulo){
    
    if(!document.getElementById('INomeProponente').disabled){
    
		var base = textoParaDate(document.getElementById('dtBase').value);
		base.setHours('00'); 
		base.setMinutes('00'); 
		base.setSeconds('00');
		 
		var objDiferencaDias = document.getElementById('diferencaDias');
		var diferencaDias = objDiferencaDias.value;
		
		var inicioVigencia = textoParaDate(document.getElementById('IInicioVigencia').value);
		inicioVigencia.setHours('00'); 
		inicioVigencia.setMinutes('00'); 
		inicioVigencia.setSeconds('00');
		
		var fimVigencia = textoParaDate(document.getElementById('IFimVigencia').value);
		var intervaloVigencia = diasDecorridos(inicioVigencia,fimVigencia);
	
		//dias no ano 
		var diasBase = base.getdiasNoAno();
		var diasInicioVigencia = inicioVigencia.getdiasNoAno();
		var diasFimVigencia = fimVigencia.getdiasNoAno();
		
		if(diferencaDias == ''){
			diferencaDias = intervaloVigencia;	
			objDiferencaDias.value = diferencaDias;
		}
		
		if(inicioVigencia.getTime() < base.getTime()){
			//se vig�ncia inv�lida, damos a data base para o in�cio e a de fim damos mais um ano.
			var msg  = 'A data de in�cio de vig�ncia n�o pode ser inferior a data de hoje.';
				msg +='\nDeseja alterar o in�cio de vig�ncia para a data de hoje ?';
			if(confirm(msg)){		
				DWRUtil.setValue("IInicioVigencia", dateParaTexto(base));
				var mes = base.getMonth()+1;
				mes = ""+mes;
				if(mes.length < 2)
					mes = "0"+mes;
				DWRUtil.setValue("IFimVigencia", dataIncrementaDias(base,diferencaDias));
			}
			var vig = document.getElementById('IInicioVigencia');
			vig.disabled = false;
			vig.readOnly = false;
			vig.className = 'campos';
			/*if(document.all){ 
            	vig.attachEvent('onkeypress', txtBoxFormat(vig, vig.value, '99/99/9999', event)); 
        	 }else{ 
    	        vig.addEventListener('keypress', txtBoxFormat(vig, vig.value, '99/99/9999', event), false); 
	         }/ 
		}else if(diasDecorridos(base, inicioVigencia) > 30){
			var msg	 = 'A data de in�cio de vig�ncia pode ser posterior � entrada da proposta em 30 dias.';
				msg +='\nDeseja alterar o in�cio de vig�ncia para a data de hoje ?';
			if(confirm(msg)){		
				//se o in�cio for datatado em 30 dias para o futuro, tamb�m n�o devemos deixar passar.
				DWRUtil.setValue("IInicioVigencia", dateParaTexto(base));
				DWRUtil.setValue("IFimVigencia", dataIncrementaDias(base,diferencaDias));
			}
		}else if(diferencaDias != intervaloVigencia){
			var msg  = 'O per�odo entre o in�cio e o t�rmino de vig�ncia deve permanecer igual ao c�lculo.';
				msg += '\nDeseja alterar o fim de vig�ncia para a data correspondente';
				msg += '\nao intervalo de vig�ncia do c�lculo ?';
			if(confirm(msg)){
				//se o intervalo entre as vig�ncias for diferente do c�lculo, tamb�m n�o devemos deixar passar.
				DWRUtil.setValue("IFimVigencia", dataIncrementaDias(inicioVigencia,diferencaDias));
			}
		}else{
			retornoValidacaoCamposProposta(vform, cdModulo);
		}
	}else{
		retornoValidacaoCamposProposta(vform, cdModulo);
	}
};
*/