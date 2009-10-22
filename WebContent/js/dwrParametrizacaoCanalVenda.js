function setParametros(){

vform = document.forms[0];
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



function montaListaCanalVenda(){

	var lista = setParametros();
	FacadeParametrizacaoCanalVendaAjax.montaListaCanalVenda( lista,
                                   {	callback:function(valor) {
		                                setandoListaCanalVenda(valor);
		                                }
                                   });
}

function setandoListaCanalVenda(valor){
	
	divLista = document.getElementById("DivListaCanalVenda");
	divLista.innerHTML = valor[0];
	DWRUtil.setValue("pagAtual", valor[1]);	
	DWRUtil.setValue("pagFinal", valor[2]);
	DWRUtil.setValue("total", valor[3]);
	
	divNavegacao = document.getElementById("DivNavegacao");
	divNavegacao.style.display = "block";
	
}


function recuperaDadosCEPLocalidade(campo, campos, nuCEP, flDesabilita){

FacadeAjax.carregaDadosLocalidade(nuCEP,
	                                 {
	                                 	callback:function(dados) {
	                                  		setValorDadosLocalidade(campo, campos, dados, flDesabilita);
	                                  	}
                                     });

}

function setValorDadosLocalidade(campo, campos, dados, flDesabilita){
   
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
	   
   }else{
     mostraOpcoesEndereco(campo, campos, dados, flDesabilita);
   }
   
   
}

function habilitaDesabilitaEnderecoCalculo(chave){
vform = document.forms[0];

	if(vform.Estado != null){
	vform.Estado.disabled = chave;
	
		if(vform.Cidade.value != ""){
		 
		 if(vform.Cidade != null){ vform.Cidade.disabled = chave;}
		 if(vform.btLovCidade != null){
		   if(chave){
			   vform.btLovCidade.disabled = false;
		   }	
		   vform.btLovCidade.disabled = chave;
		  }	
		
		}else {
		 if(vform.Cidade != null){ vform.Cidade.disabled = true;}
		 if(vform.btLovCidade != null){ vform.btLovCidade.disabled = true;}	
		}
	}

	
}


var camposCanalVenda = new Array(	"cdClienteAplicacao",
						   			"cdPessoaCanalVenda",
							   		"dsPessoaCanalVenda",
							   		"nmApelido", 
							   		"cpfCnpj",
							   		"Cep",
							   		"TipoLogradouro",
							   		"Logradouro",
							   		"Numero",
							   		"Complemento",
							   		"Bairro", 
							   		"Estado",
							   		"Cidade",
							   		"fone",
							   		"cdPerfilCanalVenda",
							   		"perfilCanalVenda"
							   	);	


function listarParametrosCanalVenda(){

	cdPessoaCanalVenda = document.getElementById("cdPessoaCanalVenda").value;
	cdClienteAplicacao = document.getElementById("cdClienteAplicacao").value;
	cdProduto = document.getElementById("Produto").value;	
	cdSubProduto = document.getElementById("SubProduto").value;		
	cdModulo = document.getElementById("cdModulo").value;	
	flMostraItensSemProduto = document.getElementById("flMostraItensSemProduto").value;		
	
	cdPerfilCanalVenda = document.getElementById("cdPerfilCanalVenda").value;	
	
/*	FacadeParametrizacaoCanalVendaAjax.getInformacoesCanaisDeVenda(cdPessoaCanalVenda, cdClienteAplicacao, 
									{ callback:function(lista) 
										{
											setaCanalVenda(lista, camposCanalVenda);
										}
									});
*/									
	FacadeParametrizacaoCanalVendaAjax.getPlanosPagto(cdClienteAplicacao, cdPessoaCanalVenda, cdPerfilCanalVenda,
									{ callback:function(lista) 
										{
											setandoTabelaPagtos(lista);
										}
									});
	
	if (cdModulo != '' && ((cdProduto != '' && cdSubProduto != '')||flMostraItensSemProduto == 'S') && cdClienteAplicacao != ''){
		FacadeParametrizacaoCanalVendaAjax.listarItensContratacaoCanalVenda(cdModulo, cdProduto, cdSubProduto, 
				cdPessoaCanalVenda, cdPerfilCanalVenda, cdClienteAplicacao, 
				{ callback:function(conteudo) {
						setaAbaCriterioConteudo(conteudo);
						}
   				});
	
	}
									
	//listarItensContratacaoCanalVenda();

}

function listarItensContratacaoCanalVenda(){
	
	cdPessoaCanalVenda = DWRUtil.getValue("cdPessoaCanalVenda");
	cdClienteAplicacao = DWRUtil.getValue("cdClienteAplicacao");
	cdProduto = DWRUtil.getValue("Produto");
	cdSubProduto = DWRUtil.getValue("SubProduto");
	cdModulo = DWRUtil.getValue("cdModulo");
	flMostraItensSemProduto = DWRUtil.getValue("flMostraItensSemProduto");
	cdPerfilCanalVenda = document.getElementById("cdPerfilCanalVenda").value;	
	
	if (cdModulo != '' && ((cdProduto != '' && cdSubProduto != '')||flMostraItensSemProduto == 'S') && cdClienteAplicacao != ''){
		FacadeParametrizacaoCanalVendaAjax.listarItensContratacaoCanalVenda(cdModulo, cdProduto, cdSubProduto, 
				cdPessoaCanalVenda, cdPerfilCanalVenda, cdClienteAplicacao, 
				{ callback:function(conteudo) {
						setaAbaCriterioConteudo(conteudo);
						}
   				});
	
	}
}

function listarItensContratacaoPerfil(){
	
	cdPerfilCanalVenda = DWRUtil.getValue("cdPerfilCanalVenda");
	cdClienteAplicacao = DWRUtil.getValue("cdClienteAplicacao");
	cdProduto = DWRUtil.getValue("Produto");
	cdSubProduto = DWRUtil.getValue("SubProduto");
	cdModulo = DWRUtil.getValue("cdModulo");
	flMostraItensSemProduto = DWRUtil.getValue("flMostraItensSemProduto");
	
	if (cdModulo != '' && ((cdProduto != '' && cdSubProduto != '')||flMostraItensSemProduto == 'S') && cdClienteAplicacao != ''){
	
		FacadeParametrizacaoCanalVendaAjax.listarItensContratacaoPerfil(cdModulo, cdProduto, cdSubProduto, 
				cdPerfilCanalVenda, cdClienteAplicacao, 
				{ callback:function(conteudo) {
						setaAbaCriterioConteudo(conteudo);
						}
   				});
   				
	
	}
}

function setaAbaCriterioConteudo(conteudo){

	divTabela = document.getElementById("DivItensContratacao");
	if(divTabela != null){
		divTabela.style.display="";	
		divTabela.innerHTML  = conteudo;
		initializetabcontent("maintab1");	
		
	}
}

function listarParametrosPerfil(){
	
	cdClienteAplicacao = DWRUtil.getValue("cdClienteAplicacao");
	cdPerfil = DWRUtil.getValue("cdPerfilCanalVenda");

	FacadeParametrizacaoCanalVendaAjax.getPlanosPerfil(cdClienteAplicacao, cdPerfil, 
									{ callback:function(lista) 
										{
											setandoTabelaPagtos(lista);
										}
									});
	listarItensContratacaoPerfil();
	DWRUtil.setValue("flMantemPerfil", "S");

}

function setaCanalVenda(lista, nmCampos){
	for (i=0; i<nmCampos.length; i++){
		 DWRUtil.setValue(nmCampos[i], lista[i]);	
	}
}


function populandoComboSubProdutoPorModulo(cdProduto, chave, flCarregaItens){

	FacadeParametrizacaoCanalVendaAjax.carregaComboSubProduto( cdProduto,
	                                   {	callback:function(listaBean) {
			                                setandoComboSubProdutoPorModulo(listaBean, chave, flCarregaItens);
			                                }
	                                   });
                                   
}

function setandoComboSubProdutoPorModulo(listaBean, chave, flCarregaItens){
	DWRUtil.removeAllOptions("SubProduto");
    DWRUtil.addOptions("SubProduto", listaBean, "valorOption", "nomeOption");
    
    if(listaBean.length > 0){
	   	document.getElementById("DivComboSubProduto").style.display="";	
	   	listarItensContratacaoCanalVenda();
	} else {
	   	document.getElementById("DivComboSubProduto").style.display="none";		
	   	document.getElementById("SubProduto").value='';	  
   	   	document.getElementById("DivItensContratacao").style.display="none";
   	   	document.getElementById("DivItensContratacao").innerHTML  = "";

	}

}

function populandoComboPlanosPagto(cdFormaPagto){
	FacadeParametrizacaoCanalVendaAjax.carregaPlanosPagto(cdFormaPagto, 
									{	callback:function(listaBean) {
			                                setandoComboPlanosPagto(listaBean);
			                                }
	                                   });
}

function setandoComboPlanosPagto(listaBean){

	DWRUtil.removeAllOptions("planoPagto");
    DWRUtil.addOptions("planoPagto", listaBean, "valorOption", "nomeOption");
	
	if(listaBean.length > 0){
	   	document.getElementById("DivComboPlanoPagamento").style.display="";		
	} else {
	   	document.getElementById("DivComboPlanoPagamento").style.display="none";		
	}  
}

function populandoComboProdutosPorModulo(cdModulo){
	FacadeParametrizacaoCanalVendaAjax.carregaProdutosPorModulo(cdModulo, 
									{	callback:function(listaBean) {
			                                setandoComboProduto(listaBean);
			                                }
	                                   });
}

function setandoComboProduto(listaBean){

	DWRUtil.removeAllOptions("Produto");
    DWRUtil.addOptions("Produto", listaBean, "valorOption", "nomeOption");

	if(listaBean.length > 0){
	   	document.getElementById("DivComboProduto").style.display="";		
	   	listarItensContratacaoCanalVenda();
	} else {
		
	   	document.getElementById("flMostraItensSemProduto").value='S';
	   	document.getElementById("DivComboProduto").style.display="none";		
	   	document.getElementById("Produto").value='';
	   	document.getElementById("DivComboSubProduto").style.display="none";
	   	document.getElementById("SubProduto").value='';	   	
	   	document.getElementById("DivItensContratacao").style.display="none";
   	   	document.getElementById("DivItensContratacao").innerHTML  = '';
   	   	
   	   	listarItensContratacaoCanalVenda();
	} 
	
}


/*function populandoComboFormasPagto(cdFormaPagto){
	FacadeParametrizacaoCanalVendaAjax.carregaFormasPagto(cdFormaPagto, 
									{	callback:function(listaBean) {
			                                setandoComboFormasPagto(listaBean);
			                                }
	                                   });
}

function setandoComboFormasPagto(listaBean){

	DWRUtil.removeAllOptions("formaPagto");
    DWRUtil.addOptions("formaPagto", listaBean, "valorOption", "nomeOption");
	
	if(listaBean.length > 0){
	   	document.getElementById("DivComboFormaPagamento").style.display="";		
	} else {
	   	document.getElementById("DivComboFormaPagamento").style.display="none";		
	}  
}*/

function incluirFormaPlano(){
	
	//var formaPagto = DWRUtil.getValue("formaPagto");
	var planoPagto = DWRUtil.getValue("planoPagto");	
	var tipoPagto = DWRUtil.getValue("tipoPagto");
	
	if (planoPagto == ''){
		alert("Informe o plano de pagamento");
	} else if (tipoPagto == ''){
		alert("Informe o tipo de pagamento");
	}/* else if (formaPagto == ''){
		alert("Informe a forma de pagamento");
	}*/ else {
		if (DWRUtil.getValue("cdPerfilCanalVenda") != ''){
			DWRUtil.setValue("flMantemPerfil", "N");
		}
		
		FacadeParametrizacaoCanalVendaAjax.setaPlanoPagto(tipoPagto,  planoPagto, 
									{	callback:function(string) {
				                                setandoTabelaPagtos(string);
				                                }
		                                   });
	}	
}

function setandoTabelaPagtos(string){
	divTabela = document.getElementById("DivTabelaFormaPagamento");
	if(divTabela != null){
		if (string[2] == "S"){
			alert("Esse plano de pagamento já foi incluído.");
		} else {

			divTabela.innerHTML  = string[0];
			DWRUtil.setValue("qtdPagamentos", string[1]);	
		
			if (string[1] == 0){
				document.getElementById("DivBotaoPlanoPagto").style.display="none";
			} else {
				document.getElementById("DivBotaoPlanoPagto").style.display="";
			}
		}
	}
}


function excluirFormaPlano(){
	
	DWRUtil.setValue("flMantemPerfil", "N");
	
	for (i = 1; i <= DWRUtil.getValue("qtdPagamentos"); i++){
	
		campo = document.getElementById("linha" + i);
		if (campo != null && campo.checked){
		
			FacadeParametrizacaoCanalVendaAjax.excluiPlanoPagto(i, 
								{	callback:function(string) {
			                                setandoTabelaPagtos(string);
			                                }
	                                   });
		
		}
	}	
}

function confirma(){
 	
 		if (DWRUtil.getValue("flMantemPerfil") == "N"){
 			alert("Devido as alterações feitas na configuração dos planos de pagamento, esse canal de venda não pertence a nenhum perfil.");
	 		DWRUtil.setValue("cdPerfilCanalVenda", "");
			DWRUtil.setValue("perfilCanalVenda", "");
	 	
 		}
 		
	 	FacadeParametrizacaoCanalVendaAjax.confirmaPlanoPagto();
 	
     	divOrigem = document.getElementById("TB_ajaxContent");
		divDestino = document.getElementById("abrirPlanoPagamento");
		if(divDestino != null){
			divDestino.innerHTML = divOrigem.innerHTML;
			inicializaDatas();
		}
     	TB_remove();

}

function cancela(){

	divDestino = document.getElementById("abrirPlanoPagamento");
	if(divDestino != null){
		divDestino.innerHTML = htmlDiv;
		inicializaDatas();
	}
}

function abrirPlanoPagto(){
	FacadeParametrizacaoCanalVendaAjax.abrirPlanoPagto({	callback:function(string) {
			                                setandoTabelaPagtos(string);
			                                }
	                                   });
}