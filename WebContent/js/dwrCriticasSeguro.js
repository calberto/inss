function validaDataInicioVigencia(dataBase, dataVigencia){

	var base = textoParaDate(dataBase)
	var vigencia = textoParaDate(dataVigencia)
	
	//dias no ano 
	var diasBase = base.getdiasNoAno()	
	var diasVigencia = vigencia.getdiasNoAno()
	
	if(vigencia.getTime() < base.getTime()){
		//se vigência inválida, damos a data base para o início e a de fim damos mais um ano.
		DWRUtil.setValue("IInicioVigencia", dataBase)
		var mes = base.getMonth()+1
		mes = ""+mes
		if(mes.length < 2)
			mes = "0"+mes
		DWRUtil.setValue("IFimVigencia", dateParaTexto(base,1))
		mensagem = "A data de início de vigência não pode ser inferior a data do cálculo."
		alert(mensagem)
	}else if(diasVigencia > diasBase+30){
		//se o início for datatado em 30 dias para o futuro, também não devemos deixar passar.
		DWRUtil.setValue("IInicioVigencia", dataBase)
		DWRUtil.setValue("IFimVigencia", dateParaTexto(base,1))
		mensagem = "A data de início de vigência não pode ser superior a 30 dias a contar a data do cálculo."
		alert(mensagem)
	}else{
		//tudo correu bem, vamos dar o fim parra daqui a um ano.
		DWRUtil.setValue("IFimVigencia", dateParaTexto(vigencia,1))
	}
	
//	FacadeCriticaSeguroAjax.validaDataInicioVigencia(dataBase, dataVigencia,{
//		callback:function(valor) {
//			if(valor[0] == "2" ){
//				DWRUtil.setValue("IInicioVigencia", dataBase);
//				DWRUtil.setValue("IFimVigencia", valor[1]);
//				mensagem = "A data de início de vigência não pode ser inferior a data do cálculo.";
//				alert(mensagem);
//   		}else if (valor[0] == "3"){
//				DWRUtil.setValue("IInicioVigencia", dataBase);
//				DWRUtil.setValue("IFimVigencia", valor[1]);
//				mensagem = "A data de início de vigência não pode ser superior a 30 dias a contar a data do cálculo.";
//				alert(mensagem);
//				//TB_show('CRITICA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
//				      
//			}else {
//				DWRUtil.setValue("IFimVigencia", valor[1]);
//			}
//		}
//	})
}

function validaDataFinalVigencia(dataInicioVigencia, dataFimVigencia){

	var vigInicio = textoParaDate(dataInicioVigencia)
	var vigFim = textoParaDate(dataFimVigencia)
	
	var intervalo = vigFim.getDiasNoAno() - vigInicio.getDiasNoAno()
	
	var diferencaAnos = vigFim.getFullYear()-vigInicio.getFullYear()
	
	if(diferencaAnos>0)
		intervalo += 365 * diferencaAnos
	
	if(intervalo < 30){
		alert("O prazo do seguro não pode ser inferior a 30 dias")
		DWRUtil.setValue("IFimVigencia", "")
	}else if(intervalo > 365){
		alert("O prazo do seguro deve ser de no máximo 1 ano")
		DWRUtil.setValue("IFimVigencia", "")
	}
		
//	FacadeCriticaSeguroAjax.validaDataFinalVigencia(dataInicioVigencia, dataFimVigencia,{
//		callback:function(valor){
//			validaFinalVigencia(valor)
//		}
//	})	
}


//function validaFinalVigencia(valor){
//	if(valor[0] == "S" ){
//	  DWRUtil.setValue("IFimVigencia", "");
//    mensagem = valor[1];
//      alert(mensagem);
        //TB_show('CRITICA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
//	}
//}

/*
	Esta função deve validar se é uma data e produz uma data 1 ano no futuro.
*/
function validaDataInicioVigenciaAnt(dataIniVigencia){

	var fim = textoParaDate(dataIniVigencia)
	DWRUtil.setValue("IDtFinalVigAnt", dateParaTexto(fim,1));

//	FacadeCriticaSeguroAjax.validaDataInicioVigenciaAnt(dataIniVigencia,{
//	 	callback:function(valor) {
//	  		if(valor[0] == "S" ){
//				DWRUtil.setValue("IDtFinalVigAnt", valor[1]);
//			}
//	  	}
//	})
}

//vai em sessão ver qual é o valor máximo de desconto 
//XXX: talvez essa informação possa vir de outro lugar...
function validaDescComercial(vlDesconto){
	if(vlDesconto != ""){
		FacadeCriticaSeguroAjax.validaDescontoComercial(vlDesconto,{
	     	callback:function(valor) {
	      		if(valor[0] == "S" ){
				  DWRUtil.setValue("IDescontoComercial", "");
				  mensagem = valor[1];
			      alert(mensagem);
				  //TB_show('CRITICA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
				}
	      	}
		})
	}
}

//mais uma que vai em sesssão ver alguns valores. Nota: embora seja um overhead
//temos que julgar quando é aceittável deixar assim em nome da segurança do negócio.
function validaContratCobertAtiv(campo){

	var produto = document.getElementById("Produto");	
	var subProduto = document.getElementById("SubProduto");
	var atividade = document.getElementById("CODIGOIAtividade");
	
	if(produto != null && subProduto != null && atividade != null && 
	  produto.value != "" && subProduto.value != "" && atividade.value != "" &&
	  campo.value != "" && campo.name != null){	

		FacadeCriticaSeguroAjax.validaContratacaoCobertutaAtividade(produto.value, subProduto.value, atividade.value, campo.name, campo.value,{
       		callback:function(valor) {
	        	//retornaValidaContratCobertAtiv(valor, campo)
	        	if(valor[0] == "N" ){
				  //$('#TB_window,#TB_overlay,#TB_HideSelect').remove();	
				  campo.value = "";
				  mensagem = valor[1];
			      alert(mensagem);
				  //TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
				}else {
				//	calculaValorCobertura(campo.name);
				}

				habilitaDesabilitaBotaoCalcular(false);
	        }
		})
	}else {
		habilitaDesabilitaBotaoCalcular(false);
	}
}

//function retornaValidaContratCobertAtiv(valor, campo){

//	if(valor[0] == "N" ){
	  //$('#TB_window,#TB_overlay,#TB_HideSelect').remove();	
//	  campo.value = "";
//	  mensagem = valor[1];
  //    alert(mensagem);
	  //TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
//	}else {
	//	calculaValorCobertura(campo.name);
//	}

//	habilitaDesabilitaBotaoCalcular(false);
//}


//Função coletora de campos
function setLMICoberturas(FILTRO, vform){

	if(vform == null){//XXX: se o form tiver name, usar o name!
	  vform = document.forms[0];
	}

	var lista = new Array(vform.elements.length);

	if(FILTRO != null){
	
		for (i = 0 ; i <= vform.elements.length-1 ; i++) { 
           if(vform.elements[i].name != null && vform.elements[i].value != null && vform.elements[i].type != "button" && vform.elements[i].type != null
	          && vform.elements[i].name.startsWith(FILTRO)){
	           if(vform.elements[i].type == "radio" || vform.elements[i].type == "checkbox"){
	           	  if(vform.elements[i].checked == true){
	           	    lista[i] = vform.elements[i].name + "="+vform.elements[i].value;
	           	  }
	           }else {
	              lista[i] = vform.elements[i].name + "="+vform.elements[i].value;	
	           }
	       }
	    }
		
	}else{
		
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
	}	
	return lista;
}

//função sem ocorrências no workspace mas que é chamada pelos campos dinâmicos
function validaContratAtividade(){

	var produto = document.getElementById("Produto")	
	var subProduto = document.getElementById("SubProduto")
	var atividade = document.getElementById("CODIGOIAtividade")
	
	if(produto != null && subProduto != null && atividade != null && 
	  produto.value != "" && subProduto.value != "" && atividade.value != ""){	
	
		var lista = getValoresCamposTela("COLUNA2:")
		FacadeCriticaSeguroAjax.validaContratacaoAtividade(produto.value, subProduto.value, atividade.value, lista,{
			callback:function(valores) {
				//retornaValidaContratAtividade(valores)
				var cdAtividade = document.getElementById("CODIGOIAtividade");
				var atividade = document.getElementById("IAtividade");
				if(valores[0] == "1") {
				if(cdAtividade != null){ cdAtividade.value = ""; }
				if(atividade != null){ atividade.value = ""; }
				var mensagem = valores[1];
				alert(mensagem);
				//TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
					
				}else if(valores[0] == "2") {
					var mensagem = valores[1]
					//trataRetornoNomeCampos(valores[2])
					var nomes = valores[2]
					if(nomes.indexOf("=") != -1){
							while(nomes.indexOf("=") != -1 ){    
							    var nomeCampo = nomes.substring(0, nomes.indexOf("="));
							    if(nomeCampo == ""){
							       nomes = "";
							    }else {
							    	if(document.getElementById(nomeCampo) != null ){
								        document.getElementById(nomeCampo).value = ""; 
								    }
								    nomes = nomes.substring(nomes.indexOf("=")+1);
							    }
							}
						}
					alert(mensagem)
					//TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
				}
				
				if(cdAtividade.value != ""){
					     buscaItensPorCdRespFiltro(cdAtividade.value);
					    // calculaValorCobertura('');
				}
			}
		})
	}
}

//function retornaValidaContratAtividade(valores){

//	var cdAtividade = document.getElementById("CODIGOIAtividade");
//	var atividade = document.getElementById("IAtividade");
//	if(valores[0] == "1") {
//	if(cdAtividade != null){ cdAtividade.value = ""; }
//	if(atividade != null){ atividade.value = ""; }
//	mensagem = valores[1];
//	alert(mensagem);
	//TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
		
//	}else if(valores[0] == "2") {
//		mensagem = valores[1];
//		trataRetornoNomeCampos(valores[2]);	
//		alert(mensagem);
		//TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
//	}
	
//	if(cdAtividade.value != ""){
//		     buscaItensPorCdRespFiltro(cdAtividade.value);
		    // calculaValorCobertura('');
//	}
	
//}


//function trataRetornoNomeCampos(nomes){ 
//	if(nomes.indexOf("=") != -1){
//		while(nomes.indexOf("=") != -1 ){    
//		    var nomeCampo = nomes.substring(0, nomes.indexOf("="));
//		    if(nomeCampo == ""){
//		       nomes = "";
//		    }else {
//		    	if(document.getElementById(nomeCampo) != null ){
//			        document.getElementById(nomeCampo).value = ""; 
//			    }
//			    nomes = nomes.substring(nomes.indexOf("=")+1);
//		    }
//		}
//	}
//}

function validaDadosCondominio(campo){

	var produto = document.getElementById("Produto")
	var idadeCondominio = document.getElementById("INuIdadeCondominio")
	var nuCpfCnpj = document.getElementById("ICpfCnpjProponente")
	var cdTipoPessoa = document.getElementById("ITipoPessoa")

	if(produto != null && idadeCondominio != null && nuCpfCnpj != null && cdTipoPessoa != null && 
	  produto.value != "" && idadeCondominio.value != "" && nuCpfCnpj.value != "" && cdTipoPessoa.value != "" &&
	  campo.name != null && campo.value != "" && produto.value == "35"){	
	
		var lista = getValoresCamposTela("COLUNA2:")
		FacadeCriticaSeguroAjax.validaIdadeCondominio(idadeCondominio.value, nuCpfCnpj.value, cdTipoPessoa.value, lista,{
			callback:function(valor) {
				//retornaValidaDadosCondominio(valor, campo);
				if(valor[0] == "S" ){
				  campo.value = "";
				  var mensagem = valor[1];
			      alert(mensagem);
				  //TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
				}else {
					if(campo.name.startsWith("COLUNA2:")){
					    //calculaValorCobertura(campo.name);	
					}else {
						//calculaValorCobertura("");
					}	
				}	
				habilitaDesabilitaBotaoCalcular(false);
			}
		})
	}else {
		habilitaDesabilitaBotaoCalcular(false);
	}
}

//function retornaValidaDadosCondominio(valor, campo){

//	if(valor[0] == "S" ){
//	  campo.value = "";
//	  mensagem = valor[1];
  //    alert(mensagem);
	  //TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
//	}else {
//		if(campo.name.startsWith("COLUNA2:")){
		    //calculaValorCobertura(campo.name);	
//		}else {
			//calculaValorCobertura("");
//		}
		
//	}

//	habilitaDesabilitaBotaoCalcular(false);
//}

function validaValoresCoberturas(campo){

	var produto = document.getElementById("Produto");	
	var subProduto = document.getElementById("SubProduto");
	var campoNumEmpregados = document.getElementById("INumEmpregados");
	
	var numEmpregados = 0;
	if (campoNumEmpregados != null){
		numEmpregados = campoNumEmpregados.value;
	}

    var valorCampo = campo.value.replace(',', '');
        valorCampo = valorCampo.replace('.', '');
   
   if(produto != null && subProduto != null && produto.value != "" && subProduto.value != "" && 
	  campo.name != "" && campo.value != "" && parseInt(valorCampo) > 0){	
		  	
		var lista = getValoresCamposTela("COLUNA2:");
	
		FacadeCriticaSeguroAjax.validaValoresCoberturas(campo.name, produto.value, subProduto.value, numEmpregados, lista,{
			callback:function(valor) {
				//retornaValidaValoresCoberturas(valor, campo, produto);
				if(valor[0] == "S" ){
			  		//$('#TB_window,#TB_overlay,#TB_HideSelect').remove();	
			  		var mensagem = valor[1];
			  		campo.value = ""; 
		      		alert(mensagem);
			  		//TB_show('CRITICA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
		      		habilitaDesabilitaBotaoCalcular(false);
			    }else {
			    	if(produto != null && produto.value == "35"){
				       validaDadosCondominio(campo);
				   }else if(produto != null && produto.value == "19"){
					   validaContratCobertAtiv(campo);
				   }else if(produto != null && produto.value == "94"){
					   validaContratCobertAtiv(campo);
				   }  
			    }
			}
		})                             
	} else {
		habilitaDesabilitaBotaoCalcular(false);
		if(campo.value == "" || parseInt(valorCampo) <= 0){
		    nmColunaCampo = campo.name.replace('COLUNA2:', '')
		    nmColunaPremio = nmColunaCampo+"COLUNA4"
			nmColunaFranquia = nmColunaCampo+"COLUNA3"
			DWRUtil.setValue(nmColunaPremio, "")
	        DWRUtil.setValue(nmColunaFranquia, "")
		}
	}
}

/*
function retornaValidaValoresCoberturas(valor, campo, produto){

	if(valor[0] == "S" ){
	  //$('#TB_window,#TB_overlay,#TB_HideSelect').remove();	
	  mensagem = valor[1];
	  campo.value = ""; 
      alert(mensagem);
	  //TB_show('CRITICA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
      habilitaDesabilitaBotaoCalcular(false);
    }else {
    	if(produto != null && produto.value == "35"){
	       validaDadosCondominio(campo);
	   }else if(produto != null && produto.value == "19"){
		   validaContratCobertAtiv(campo);
	   }else if(produto != null && produto.value == "94"){
		   validaContratCobertAtiv(campo);
	   }  
//    }
  //    
//}*/

function verificaCamposObrigatorios(vform, chave){
	
	//MostrarDiv('mostrar','','show'); 
	var produto = vform.Produto.value;	
	var subProduto = vform.SubProduto.value;
	var flDescAgravo = "";
	var vlDescontoAgravo = "";
	if(vform.IFlagDescAgravo != null){ flDescAgravo = vform.IFlagDescAgravo.value; }
	if(vform.IDescontoAgravo != null){ vlDescontoAgravo = vform.IDescontoAgravo.value; }
	
	
	var lista = getValoresCamposTela();
	var listaCoberturas = getValoresCamposTela("COLUNA2:");
	
	FacadeCriticaSeguroAjax.verificaCamposTelaCalculo(produto, subProduto, lista, listaCoberturas, flDescAgravo, vlDescontoAgravo, 
		                                 {
		                                 	callback:function(valor) {
		                                  		retornaVerificaCamposObrigatorias(valor, vform, chave);
		                                  	}
	                                     });

}

function retornaVerificaCamposObrigatorias(valor, vform, chave){

	if(valor[0] == "S" ){
      Modal("hidden");
	  mensagem = valor[1];
      alert(mensagem);
	  if(valor[2] != null && valor[2] != "" ){
        realcaCamposObrigatorios(valor[2]);
      }
      
	  //TB_show('CRITICA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
    }else {
	  retornoValidacaoCampos(vform, chave);
	}

}


function retornoValidacaoCampos(vform, chave){ 

	if(chave == "1"){
		  vform.action = "calculo";
	}else if(chave == "2"){
	      vform.action = "app?cmd=incluiitemimovel";	
	}else if(chave == "3"){
		  document.forms[0].itemAtual.value = "1";
          document.forms[0].flAtualizaItem.value = "S";
          vform.action = "app?cmd=incluiitemimovel";
	}else if(chave == "4"){
		  document.forms[0].itemAtual.value = parseInt(document.forms[0].itemAtual.value) -1 ;
		  document.forms[0].flAtualizaItem.value = "S";
		  vform.action = "app?cmd=incluiitemimovel";
	}else if(chave == "5"){
		  document.forms[0].itemAtual.value = parseInt(document.forms[0].itemAtual.value) + 1 ;
		  document.forms[0].flAtualizaItem.value = "S";
		  vform.action = "app?cmd=incluiitemimovel";
	}else if(chave == "6"){
		  document.forms[0].itemAtual.value = document.forms[0].itemFinal.value;
		  document.forms[0].flAtualizaItem.value = "S";
		  vform.action = "app?cmd=incluiitemimovel";
	}
	
	habilitarCampos(vform);

	mensagem = "";

//    TB_show('','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "CALCULAR");
	vform.submit();
}


function calculaValorCobertura(nmColunaCampo){ 
	
vform = document.forms[0];

produto = document.getElementById("Produto");	
subProduto = document.getElementById("SubProduto");
tipoSeguro = document.getElementById("ITipoSeguro");
codSeguro = vform.cdSeguro.value;


if( (produto != null && produto.value != "" && subProduto != null && subProduto.value != "" && tipoSeguro != null && tipoSeguro.value != "") 
     && ( (produto.value != "94") || (produto.value == "94" && codSeguro != "") ) 
   ) {



var lista = getValoresCamposTela();

		FacadeCriticaSeguroAjax.calculaPremioCobertura(produto.value, subProduto.value, lista, nmColunaCampo, 
		                                 {
		                                 	callback:function(listaCoberturas) {
		                                  		retornaCalculaValorCobertura(listaCoberturas);
		                                  	}
	                                     });
		
}else{
	if(nmColunaCampo != null && nmColunaCampo != ""){
		    nmColunaPremio = nmColunaCampo+"COLUNA4";
			nmColunaFranquia = nmColunaCampo+"COLUNA3";
			DWRUtil.setValue(nmColunaPremio, "");
	        DWRUtil.setValue(nmColunaFranquia, "");
	}
}

}

function retornaCalculaValorCobertura(listaCoberturas){
	for (i=0; i<listaCoberturas.length; i++){
		var cobertura = listaCoberturas[i];
		if(cobertura[0] == "N"){
			alert(cobertura[1]);
		}else {
			
			if(cobertura[1] == "G"){
			  nmColunaPremio = cobertura[0]+"COLUNA4";
			  nmColunaFranquia = cobertura[0]+"COLUNA3";
			  DWRUtil.setValue(nmColunaPremio, cobertura[2]);
	          DWRUtil.setValue(nmColunaFranquia, cobertura[3]);	
			}else {
			   nmColunaPremio = cobertura[0]+"COLUNA7";
			   DWRUtil.setValue(nmColunaPremio, cobertura[2]);
	       }
			
		}
	}
}



function recuperaValorDescAgravo(valorSugerido){ 
	
vform = document.forms[0];

if(vform.VL_SUGERIDO_TEMP.value != valorSugerido){

if(vform.FLG_DESC_AGRAV.value == ""){	
	
	produto = document.getElementById("Produto");	
	subProduto = document.getElementById("SubProduto");
	valorPremioLiquido = document.getElementById("IPremioLiquido");
	dtInicioVig = document.getElementById("IInicioVigencia");
	flDispensaIOF = document.getElementById("IDispensaIOF");
	vlPremioAssist24 = document.getElementById("IAssistencia24hCOLUNA7");
    vlPremioAssistFun = document.getElementById("IAssistFuneralCOLUNA7");
    
    valorPremioAssistencia24h = 0;
    valorPremioAssistenciaFuneral = 0;
    
    if (vlPremioAssist24 != null){
    
    	valorPremioAssistencia24h = vlPremioAssist24.value;
    
    }
    
    if (vlPremioAssistFun != null){
	
	    valorPremioAssistenciaFuneral  = vlPremioAssistFun.value;

	}	
		
	if(produto != null && produto.value != "" && subProduto != null && subProduto.value != "" 
	&& valorPremioLiquido != null && dtInicioVig != null && flDispensaIOF != null 
	&& valorPremioLiquido.value != "" && dtInicioVig.value != "" && valorSugerido != "" ){
		
		vform.VL_SUGERIDO_TEMP.value = valorSugerido;
		 
		FacadeCriticaSeguroAjax.calculaDescontoAgravo(produto.value, subProduto.value, valorSugerido, valorPremioLiquido.value, dtInicioVig.value, flDispensaIOF.value, valorPremioAssistencia24h, valorPremioAssistenciaFuneral,
		                                 {
		                                 	callback:function(valores) {
		                                  		retornaRecuperaValorDescAgravo(valores);
		                                  	}
	                                     });
		
	}else{
		DWRUtil.setValue("IDescontoAgravo", "");
	    DWRUtil.setValue("IFlagDescAgravo", "");
	    vform.VL_SUGERIDO_TEMP.value = valorSugerido;
	}

}else{
	
		if(valorSugerido != ""){
			alert("É necessário efetivar o cálculo sem valor sugerido antes de informar essa opção novamente!");
		}
	    
		DWRUtil.setValue("IDescontoAgravo", "");
	    DWRUtil.setValue("IFlagDescAgravo", "");
	    DWRUtil.setValue("IValorDesejado", "");
	}

}

}


function retornaRecuperaValorDescAgravo(valores){

	if(valores[0] == "S"){
	    DWRUtil.setValue("IDescontoAgravo", valores[1]);
	    DWRUtil.setValue("IFlagDescAgravo", valores[2]);
	}else {
		DWRUtil.setValue("IDescontoAgravo", "");
	    DWRUtil.setValue("IFlagDescAgravo", "");
		alert(valores[1]);
	}
	
}


function validaValorVRBasica(valorVR){

produto = document.getElementById("Produto");
subProduto = document.getElementById("SubProduto");

if(valorVR != "" && produto != null && subProduto != null && produto.value != "" && subProduto.value != "" ){


 	FacadeCriticaSeguroAjax.validaValorVRBasica(valorVR, produto.value, subProduto.value,
		                                 {
		                                 	callback:function(retorno) {
		                                  		retornaValidaValorVRBasica(retorno);
		                                  	}
	                                     });
}

}

function retornaValidaValorVRBasica(valor){

	if(valor[0] == "P" ){
	  mensagem = valor[1];
	  TB_show('ALERTA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+60+'&width='+300+'','class=thickbox', "FLG_ALTERA_EMP");
    }else if(valor[0] == "S8" ){
	  mensagem = valor[1];
	  TB_show('ALERTA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+60+'&width='+300+'','class=thickbox', "FLG_ALTERA_SUB_PROD_8");
    }else if(valor[0] == "S9" ){
	  mensagem = valor[1];
	  TB_show('ALERTA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+60+'&width='+300+'','class=thickbox', "FLG_ALTERA_SUB_PROD_9");
    }else if(valor[0] == "S" ){
	  mensagem = valor[1];
	  alert(mensagem);    
    }

}

function verificaCobBasicaVrBasica(basica, vr){

	FacadeCriticaSeguroAjax.verificaVrBasMaiorCobBas(basica.value, vr.value,{
	                                 	callback:function(valor) {
	                                  		getRetornoCobBasVr(basica, valor);
	                                  	}
                                     });
}


function getRetornoCobBasVr(basica, valor){

	if (valor[0] == "S"){
		alert(valor[1]);
		basica.value = '';
	}

}



function verificaLmiMaxLucrosCessantes(nmLucrosCessante, vrLucrosCessantes){

	var lista = setLMICoberturas("COLUNA2:"+nmLucrosCessante);  	
	FacadeCriticaSeguroAjax.verificaVrLucrosCessantes(lista,vrLucrosCessantes, 
														{
		                                 	callback:function(valores) {
		                                  		getRetornoLucrosCessantes(valores, nmLucrosCessante);
		                                  	}
	                                     });

}

function getRetornoLucrosCessantes(valor, nmLucrosCessante){

	if (valor == false){
		alert("LMR das coberturas lucros cessantes não pode ser maior que VR Lucros cessantes");
		
		codCobsAssoc = document.getElementById("cdsCobAssocLucrosCessantes");
		
		cobASerApagada = eval("document.getElementById('COLUNA11:"+nmLucrosCessante+"').value");
		
		codCobsAssoc.value = codCobsAssoc.value.replace(cobASerApagada+";", "");
			
		if(document.getElementById("COLUNA11:"+campo) != null){document.getElementById("COLUNA11:"+campo).value = '';}
		if(document.getElementById("COLUNA12:"+campo) != null){document.getElementById("COLUNA12:"+campo).value = '';}	
		if(document.getElementById("COLUNA13:"+campo) != null){document.getElementById("COLUNA13:"+campo).value = '';}	
		
		document.getElementById("COLUNA2:" + nmLucrosCessante).value = '';
		mostraEscondeBtAux(nmLucrosCessante + "Aux", false);
	} else {

		selecionadoColuna12 = document.getElementById("COLUNA12:" + nmLucrosCessante).value;		
		carregaPeriodoIndenitario(nmLucrosCessante, selecionadoColuna12);
		
		selecionadoColuna11 = document.getElementById("COLUNA11:" + nmLucrosCessante).value
		carregaCoberturasInformadas(selecionadoColuna11, nmLucrosCessante, "Lucros cessantes");
	}
}

function verificaAceitacaoRegiao(campos){

	cdProduto = document.getElementById("Produto").value;
	ICep = document.getElementById("ICep").value;

	FacadeCriticaSeguroAjax.verificaAceitacaoRegiao(cdProduto, ICep, {
		                                 	callback:function(valor) {
		                                  		getRetornoVerificaAceitacaoRegiao(valor, campos);
		                                  	}
	                                     });
}

function getRetornoVerificaAceitacaoRegiao(valor, campos){

	if (valor == 'N' ){
		alert("Produto não abrange esta região. Não será possível realizar a cotação.");
		for (i = 0; i < campos.length; i++){
			if (document.getElementById(campos[i]) != null){
				document.getElementById(campos[i]).value = '';
			}
			
		}
		document.getElementById("ICep").value = '';
	}
	
}
