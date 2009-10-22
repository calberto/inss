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
				alert("Convênio Inválido");
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
			//se vigência inválida, damos a data base para o início e a de fim damos mais um ano.
			var msg  = 'A data de início de vigência não pode ser inferior a data de hoje.';
				//msg +='\nDeseja alterar o início de vigência para a data de hoje ?';
				msg +='\n[OK] - para alterar a data de início de vigência para a data de hoje ';
				msg +='\n[Cancelar] - para alterar manualmente a data de início de vigência ';
			if(confirm(msg)){		
				DWRUtil.setValue("IInicioVigencia", dateParaTexto(base));
				DWRUtil.setValue("IFimVigencia", dataIncrementaDias(base,diferencaDias));
				retornoValidacaoCamposProposta(vform, cdModulo);
			}else{
			   document.getElementById('IInicioVigencia').style.background = "#ff9000";
			   document.getElementById('IInicioVigencia').focus(); 
			}

		}else if(diferencaDiasEntreDataAtualeVig > 30){
			var msg	 = 'A data de início de vigência pode ser posterior à entrada da proposta em 30 dias.';
				//msg +='\nDeseja alterar o início de vigência para a data de hoje ?';
				msg +='\n[OK] - para alterar a data de início de vigência para a data de hoje ';
				msg +='\n[Cancelar] - para alterar manualmente a data de início de vigência ';
			if(confirm(msg)){		
				//se o início for datatado em 30 dias para o futuro, também não devemos deixar passar.
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
			//se vigência inválida, damos a data base para o início e a de fim damos mais um ano.
			var msg  = 'A data de início de vigência não pode ser inferior a data de hoje.';
				msg +='\nDeseja alterar o início de vigência para a data de hoje ?';
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
			var msg	 = 'A data de início de vigência pode ser posterior à entrada da proposta em 30 dias.';
				msg +='\nDeseja alterar o início de vigência para a data de hoje ?';
			if(confirm(msg)){		
				//se o início for datatado em 30 dias para o futuro, também não devemos deixar passar.
				DWRUtil.setValue("IInicioVigencia", dateParaTexto(base));
				DWRUtil.setValue("IFimVigencia", dataIncrementaDias(base,diferencaDias));
			}
		}else if(diferencaDias != intervaloVigencia){
			var msg  = 'O período entre o início e o término de vigência deve permanecer igual ao cálculo.';
				msg += '\nDeseja alterar o fim de vigência para a data correspondente';
				msg += '\nao intervalo de vigência do cálculo ?';
			if(confirm(msg)){
				//se o intervalo entre as vigências for diferente do cálculo, também não devemos deixar passar.
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