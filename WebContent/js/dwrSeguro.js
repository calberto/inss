
function populandoComboSubProduto(cdProduto, chave, cdPessoaEntidade, flCarregaItens){
	if(cdProduto != ""){
		FacadeAjax.carregaComboSubProduto( cdProduto, chave, cdPessoaEntidade,{
			callback:function(listaBean) {
				//setandoComboSubProduto(listaBean, chave, flCarregaItens);
				DWRUtil.removeAllOptions("SubProduto");
			    DWRUtil.addOptions("SubProduto", listaBean, "valorOption", "nomeOption");
				
				var divItens = document.getElementById("itensDinamicos");
				if(divItens != null && flCarregaItens == "S" ){
					divItens.innerHTML = '';
					divItens.style.display = 'none';	
				}
						
				if(listaBean.length == 1 && flCarregaItens == "S" ){
				
					var produto = document.getElementById("Produto");
					var subProduto = document.getElementById("SubProduto");
					
					if(produto != null && produto.value != "" && subProduto != null && subProduto.value != ""){
					   var divSubProduto = document.getElementById("SudProdutoDiv");
					   divSubProduto.style.display = 'none';	
					   buscaItens(produto.value, subProduto.value);
					}
				
				}else if(listaBean.length > 1){
				
					var divSubProduto = document.getElementById("SudProdutoDiv");
					divSubProduto.style.display = '';	
				    DWRUtil.setValue("SubProduto", chave);	
				}
			}
		})
	}                                   
}


function populaComboEstrutura(flOnload){

	var produto = document.getElementById("Produto")
	
	if(produto != null && produto.value == "35"){
		var tipoCondominio = document.getElementById("ITipoCondominio")
		if(tipoCondominio != null && tipoCondominio.value != ""){
			FacadeAjax.carregaComboEstrutura( produto.value, tipoCondominio.value,{	
				callback:function(listaBean) {
					//setandoComboEstruturaCondominio(listaBean, flOnload)
					if(document.getElementById("IEstrutura") != null){
						var chave = document.getElementById("IEstrutura").value;
						DWRUtil.removeAllOptions("IEstrutura");
					    DWRUtil.addOptions("IEstrutura", listaBean, "valorOption", "nomeOption");
					    DWRUtil.setValue("IEstrutura", chave);	
					    document.getElementById("IEstrutura").disabled = false;
					}
					
					if(flOnload == null){
						//calculaValorCobertura('');
					}  
				}
			})
	  	}    
	}
}


function populaComboFranquia(){
	
	var produto = document.getElementById("Produto")
	var nuCep = document.getElementById("ICep")
	var franquia = document.getElementById("ITipoFranquia")
	var cep = ''
	if (nuCep != null && nuCep.value == ""){
		cep = "0000000"
	} else {
		cep = nuCep.value
	}

	if(produto != null && produto.value != ""  && franquia != null && cep != "0000000"){
		FacadeAjax.carregaComboFranquia( produto.value, cep,{	
			callback:function(listaBean) {
				//setandoComboFranquia(listaBean)
				if(document.getElementById("ITipoFranquia") != null){
					var chave = document.getElementById("ITipoFranquia").value;
					if(chave == ""){
						chave = "17"
					} // Franquia Normal
					DWRUtil.removeAllOptions("ITipoFranquia");
				    DWRUtil.addOptions("ITipoFranquia", listaBean, "valorOption", "nomeOption");
				    DWRUtil.setValue("ITipoFranquia", chave);	
				    
				    chave = document.getElementById("ITipoFranquia").value;
				    if(chave == ""){
				       chave = "19"; // Franquia Majorada I 
				       DWRUtil.setValue("ITipoFranquia", chave);
				    } 
				}  
			}
		})
	}
}


/**
	Aparentemente esta função é bem utilizada, ficando a mesma com essa cara de
	callback deslocado, mas ela persiste aqui, uam vez que ela recupera os itens
	de forma rápida e clara; rever, todavia, se vale a pena fazermos injeção de
	conteúdo tão intensa. Nota: o callback estripado dela agora reside no seu 
	devido lugar.
*/
function buscaItens(cdProduto, cdSubProduto){
	FacadeAjax.buscaItens( cdProduto, cdSubProduto, listaItensCamposTelaGenericos,{
		callback:function(dados) {
			//mostrandoItensRecuperados(itensHTML, 'itensDinamicos') 
			
			var itensHTML = dados[0]
			var contadorAbas = dados[1]
			listaItensCamposTela = dados[3]
			var divItens = document.getElementById('itensDinamicos')
			if(divItens != null){
			
				divItens.innerHTML = itensHTML
				divItens.style.display = ''	
						
				if(contadorAbas != "0"){
					var agrupadorAba  = ''
					for(i=0; i < parseInt(contadorAbas); i++){
					   agrupadorAba = "maintab"+(i+1)
					   initializetabcontent(agrupadorAba)
					}
				}
				
				DWREngine.beginBatch()
				
				habilitaQtdeAssistidosOnLoad()
				habilitaCampoBonusAtual()
				habilitaEstruturaOnLoad()
		        populaComboFranquia()
		        setaValoresCoberturaOnLoad()
		        inicializaLucrosCessantes()
		        
		        DWREngine.endBatch()
		        
				if(document.forms[0].IDescontoComercial != null){
					if(dados[2] != null && dados[2] == "N"){
					     document.forms[0].IDescontoComercial.disabled = true
					}else {
						 document.forms[0].IDescontoComercial.disabled = false
					}
			    }
			}
		}
	})
}

function buscaItensPorCdRespFiltro(cdRespFiltro){

	var cdProduto = document.forms[0].Produto.value
	var cdSubProduto = document.forms[0].SubProduto.value
	var lista = getValoresCamposTela()
    
	FacadeAjax.buscaItensPorCdRespFiltro( cdProduto, cdSubProduto, cdRespFiltro, lista, listaItensCamposTelaGenericos, {
		callback:function(dados){
			//mostrandoItensRecuperadosPorRespFiltro(dados)
			var nmDiv = dados[0]
			var contadorAbas = dados[1]
			var abasHTML = dados[2]
			listaItensCamposTela = dados[3]
			var divAbas = document.getElementById(nmDiv)
			
			if(divAbas != null && abasHTML != ""){
				divAbas.innerHTML = abasHTML
				if(contadorAbas != "0"){
					for(i=0; i <= parseInt(contadorAbas); i++){
					   agrupadorAba = "maintab"+contadorAbas
					   initializetabcontent(agrupadorAba)	
					}	
				}
			}			
			inicializaLucrosCessantes()
		}
	})
}


function carregaCoberturasInformadas(selecionado, campo, titulo){

	produto = document.getElementById("Produto").value;
	subProduto = document.getElementById("SubProduto").value;	
	
	var lista = setLMICoberturas("COLUNA2:");
	
	cobJaEscolhidas = '';
	
	if (campo.indexOf("LucrosCessantes") != -1){
		cobJaEscolhidas = document.getElementById("cdsCobAssocLucrosCessantes").value;

		var abrangCobDiv = document.getElementById("DivAbrangCob");
	    if(abrangCobDiv != null){ abrangCobDiv.style.display = ""; }
	    
	    var abrangCobert = document.getElementById("abrangCob");
	    if(abrangCobert != null){
	       abrangCobert.disabled = false;
	       if(document.getElementById("COLUNA13:"+campo) != null){
	          abrangCobert.value = document.getElementById("COLUNA13:"+campo).value;
	       }	
	    }
	}else{
		
		var abrangCobDiv = document.getElementById("DivAbrangCob");
	    var abrangCobert = document.getElementById("abrangCob");

        if(abrangCobDiv != null){ abrangCobDiv.style.display = "none"; }
	    if(abrangCobert != null){
	       abrangCobert.disabled = true;
	       abrangCobert.value = "";
	    }

	}
	
	FacadeAjax.carregaComboCoberturas(produto, subProduto, lista, cobJaEscolhidas, selecionado, {callback:function(valores) {
	                                  		setaCoberturas(valores, selecionado, campo, titulo);
	                                  	}
                                     });

}

function setaCoberturas(valores, selecionado, campo, titulo){

	if (valores != null){
		DWRUtil.removeAllOptions("coberturas");
	    DWRUtil.addOptions("coberturas", valores, "valorOption", "nomeOption");
	    DWRUtil.setValue("coberturas", selecionado);
	    
	    if ( document.getElementById("COLUNA2:"+campo).value != ''){
		    mostraEscondeBtAux(campo + "Aux", true);
		    
		    $('#TB_window,#TB_overlay,#TB_HideSelect').remove();
		    div = "DivAuxiliar";		
		    TB_show(titulo,'mensagem.jsp?div='+div+'&keepThis=true&height=100&width=500','class=thickbox', "9");
	    } else {
    	    mostraEscondeBtAux(campo + "Aux", false);
	    }
   		
	} else {
	
		mostraEscondeBtAux(campo + "Aux", false);
	
		document.getElementById("COLUNA2:"+campo).value = '';
		alert("Nenhuma cobertura pode ser associada");

	}

}


function carregaPeriodoIndenitario(nmVariavel, selecionado){

	
	produto = document.getElementById("Produto").value;
	subProduto = document.getElementById("SubProduto").value;	
	
	FacadeAjax.carregaComboPeriodoIndenitario(produto, subProduto, nmVariavel, {callback:function(valores) {
	                                  		setaPeriodoIndenitario(valores, selecionado, nmVariavel);
	                                  	}
                                     });

}

function setaPeriodoIndenitario(valores, selecionado, nmVariavel){
	DWRUtil.removeAllOptions("periodoInd");
    DWRUtil.addOptions("periodoInd", valores, "valorOption", "nomeOption");
    DWRUtil.setValue("periodoInd", selecionado);
    
    if(nmVariavel == "IPerdaPagtoAluguelCompree"){
      abreJanelaSoPeriodoInden(nmVariavel);
    }
}

function abreJanelaSoPeriodoInden(campo){

if(campo == "IPerdaPagtoAluguelCompree" ){titulo = "Perda ou Despesa de Aluguel"; }

    var coberturasAssocDiv = document.getElementById("DivCoberturasAssoc");
    if(coberturasAssocDiv != null){
      coberturasAssocDiv.style.display = "none";
    }



    if ( document.getElementById("COLUNA2:"+campo).value != ''){
	    mostraEscondeBtAux(campo + "Aux", true);
		    
	    $('#TB_window,#TB_overlay,#TB_HideSelect').remove();
	    div = "DivAuxiliar";		
	    TB_show(titulo,'mensagem.jsp?div='+div+'&keepThis=true&height=80&width=250','class=thickbox', "JANELA_PERIODO_INDEN");
    } else {
   	    mostraEscondeBtAux(campo + "Aux", false);
    }
    
}

function getDscCoberturaAssoc(campo){

if(document.getElementById("COLUNA11:"+campo) != null && document.getElementById("COLUNA11:"+campo).value != ""){

	FacadeAjax.carregaDscCobertura(document.getElementById("COLUNA11:"+campo).value, 
	                                    {callback:function(descricao) {
	                                  		setDscCoberturaAssoc(descricao, campo);
	                                  	}
                                     });
}
                                     
}

function setDscCoberturaAssoc(descricao, campo){

if(descricao != ""){descricao = "Cobertura assoc.: "+ descricao; }
setTitleBtoAux(descricao, campo+"Aux");

}


function carregaInformacoesSeguradoTelaCalculo(nuCpf){

	FacadeAjax.carregaInformacoesSeguradoTelaCalculo(nuCpf,
	                                 {
	                                 	callback:function(valor) {
	                                  		setNomeSegurado(valor);
	                                  	}
                                     });

}

function setNomeSegurado(valor){

	if(valor != ""){
	   DWRUtil.setValue("INomeProponente", valor);
	}
   
}



function checarRenovacao(){

	cdProduto = document.getElementById("Produto");	
	dtFinalVigAnt = document.getElementById("IDtFinalVigAnt");	
	cdSucursalAnt = document.getElementById("ISucursalAnt");
	nuApoliceAnt = document.getElementById("INuApoliceAnt");
	cdSeguradoraAnt = document.getElementById("ICodSeguradoraAnt");		
	
	if (cdProduto.value == ''){
		alert("Informe o produto");
	} else if (nuApoliceAnt.value == ''){
		alert("Informe o número da apolice anterior");
	} else if (cdSeguradoraAnt.value == ''){
		alert("Informe a seguradora anterior");
	} else if (cdSucursalAnt.value == ''){
		alert("Informe a sucursal anterior");
	} else if (dtFinalVigAnt.value == ''){
		alert("Informe a data de final de vigência anterior");
	} else {
		Modal("show");
		FacadeAjax.checarRenovacao(cdProduto.value,nuApoliceAnt.value, cdSeguradoraAnt.value, cdSucursalAnt.value, dtFinalVigAnt.value, 
		                                 {
		                                 	callback:function(valor) {
		                                  		setaCamposRenovacao(valor, cdProduto);
		                                  	}
	                                     });
	}
	

}


function setaCamposRenovacao(valores, cdProduto){
	
	var i = 0;

	Modal("hidden");

	if (valores == null){
		
		alert("Houve um erro na aplicação. Por favor tente novamente!");
		
	} else {
		if (valores[0][0] == "ERRO" || valores[0][0] == "NOTFOUND"){
			//alert(valores[0][1]);
		} else {
			for ( i = 0; i < valores.length; i++){
				linha = valores[i];
				
				if (eval("document.getElementById('"+linha[0]+"') != null")){
					if (linha[0].indexOf("ISistProtecIncRoubo") == 0){
						if (linha[1] == "S"){
							document.getElementById(linha[0]).checked = true;
						} else {
							document.getElementById(linha[0]).checked = false;
						}
						
					} else {
						DWRUtil.setValue(linha[0], linha[1]);
					}
				
					
				}   	
			}
			DWRUtil.setValue("flChecouRenovacao", "S");
			DWRUtil.setValue("flRetornoCalcular", "N");
			
			if (cdProduto.value != "94"){
				NuOcorrenciasDiv = document.getElementById("INuOcorrenciasDiv");
				FlHouveSinistroDiv = document.getElementById("IFlHouveSinistroDiv");	
				ClasseBonusAntDiv = document.getElementById("IClasseBonusAntDiv");	
				DtInicVigAntDiv = document.getElementById("IDtInicVigAntDiv");	
			    
				if (FlHouveSinistroDiv != null) {FlHouveSinistroDiv.style.display = ""};
				if (NuOcorrenciasDiv != null) {NuOcorrenciasDiv.style.display = ""};
				if (ClasseBonusAntDiv != null) {ClasseBonusAntDiv.style.display = ""};
				if (DtInicVigAntDiv != null) {DtInicVigAntDiv.style.display = ""};
			}
			iniciarTela();
			//calculaValorCobertura("");
			
		}		
		
	}
	


    
   
	
}

