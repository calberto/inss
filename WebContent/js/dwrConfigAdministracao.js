// dwrConfigAdministracao.js

function listarParametrosCanalVenda(){



	cdPessoaCanalVenda = document.getElementById("cdPessoaCanalVenda").value;
	cdClienteAplicacao = document.getElementById("cdClienteAplicacao").value;
	cdProduto = document.getElementById("cdProduto").value;	
	cdSubProduto = document.getElementById("cdSubProduto").value;		
	cdModulo = document.getElementById("cdModulo").value;	
	
	if (cdModulo != '' && cdProduto != '' && cdSubProduto != '' && cdPessoaCanalVenda != '' && cdClienteAplicacao != ''){
		FacadeConfigAdministracaoAjax.listarItensContratacaoCanalVenda(cdModulo, cdProduto, cdSubProduto, 
				cdPessoaCanalVenda, cdClienteAplicacao, 
				{ callback:function(conteudo) {
						setaAbaCriterioConteudo(conteudo);
						}
   				});
	
	}
	
	
//$("div#DivCombos").show();
}

function setaAbaCriterioConteudo(conteudo){
	divCriterioContratacao = document.getElementById("DivCriterioContratacao");
	if(divCriterioContratacao != null){
		divCriterioContratacao.innerHTML = conteudo;
	}
}

function montarComboModulo(cdClienteAplicacao){
	FacadeConfigAdministracaoAjax.montarComboModulo(cdClienteAplicacao,
													{ callback:function(combo) {
		                                						setaComboModulo(combo);
		                                						}
                                   					});
													
}

function montarComboProduto(){
	modulo = document.getElementById("selectModulo").value;
	FacadeConfigAdministracaoAjax.montarComboProduto(modulo,
													 {callback:function(combo){
													 			setaComboProduto(combo);		
													 			}
													 });
}

function montarComboCidades(){
	modulo = document.getElementById("selectModulo").value;
	FacadeConfigAdministracaoAjax.montarComboCidades(modulo,
													 {callback:function(combo){
													 			setaComboCidades(combo);		
													 			}
													 });
}


function montarComboSubProduto(){
	produto = document.getElementById("selectProduto").value;
	FacadeConfigAdministracaoAjax.montarComboSubProduto(produto,
														{callback:function(combo){
													 			setaComboSubProduto(combo);		
													 			}
														});
}

function montarComboFormaPagamento(){
	indicePlano = document.getElementById("selectPlanoPagamento").selectedIndex; 
	opcaoPlano = document.getElementById("selectPlanoPagamento").options[indicePlano].text;
	FacadeConfigAdministracaoAjax.montarComboFormaPagamento(opcaoPlano,
															{callback:function(combo){
													 			setaComboFormaPagamento(combo);		
													 			}
															});
}
function montarComboPlanoPagamento(){
	FacadeConfigAdministracaoAjax.montarComboPlanoPagamento({callback:function(combo){
													 			setaComboPlanoPagamento(combo);		
													 			}
															});
}


function selecionaFormaPagamento(){
	formaPagamento = document.getElementById("selectFormaPagamento").value;	
	FacadeConfigAdministracaoAjax.montaTabelaFormaPagamento(formaPagamento); 
}

function selecionaPlanoPagamento(){
	planoPagamento = document.getElementById("selectPlanoPagamento").value;	

	
}

function mostrarAbas(){
	listarParametrosCanalVenda();
	FacadeConfigAdministracaoAjax.montarConteudoAbas({ callback:function(conteudo) {
		                                						setaAbasItemContratacao(conteudo);
		                                						}
                                   					 });
}

function setaComboModulo(combo){
	divModulo = document.getElementById("DivModulo");
	divProduto = document.getElementById("DivProduto");
	divSubProduto =  document.getElementById("DivSubProduto");
	divCombos = document.getElementById("DivCombos");
	if(divModulo != null){
		divModulo.innerHTML = combo[0];
		divProduto.innerHTML = combo[1];
		divSubProduto.innerHTML = combo[2];
	}
	divCombos.style.display = '';
}

function setaComboProduto(combo){
	divProduto = document.getElementById("DivProduto");
	if(divProduto != null){
		divProduto.innerHTML = " ";
		divProduto.innerHTML = combo[0];
	}
}

function setaComboSubProduto(combo){
	divSubProduto = document.getElementById("DivSubProduto");
	if(divSubProduto != null){
		divSubProduto.innerHTML = " ";
		divSubProduto.innerHTML = combo[0];
	}
}

function setaComboFormaPagamento(combo){
	divFormaPagamento = document.getElementById("DivComboFormaPagamento");
	
	if(divFormaPagamento != null){
		divFormaPagamento.innerHTML = " ";
		divFormaPagamento.innerHTML = combo[0];
	}
}

function setaComboPlanoPagamento(combo){

	divPlanoPagamento = document.getElementById("DivComboPlanoPagamento");
	divFormaPagamento = document.getElementById("DivComboFormaPagamento");
	if(divPlanoPagamento != null){
		divPlanoPagamento.innerHTML = combo[0];
		divFormaPagamento.innerHTML = combo[1];
	}
	divPlanoPagamento.style.display = '';	
	divFormaPagamento.style.display = '';

}

function setaTabelaFormaPlano(conteudo){
	divTabela = document.getElementById("DivTabelaFormaPagamento");
	if(divTabela != null){
		divTabela.innerHTML = " ";
		divTabela.innerHTML = conteudo;
		divTabela.style.display = "";
	}
}

function mostrarBotao(){
	divBotoes = document.getElementById("DivBotoes");
	divBotoes.style.display = '';
}

function setaAbasItemContratacao(conteudo){
	divCriterioContratacao = document.getElementById("DivCriterioContratacao");
	divCoberturas = document.getElementById("DivCoberturas");
	divPerfil = document.getElementById("DivPerfil");
	divAbas = document.getElementById("DivAbas");

	if(divCriterioContratacao != null){
		divCriterioContratacao.innerHTML = conteudo[0];
	}
	if(divCoberturas != null){
		divCoberturas.innerHTML = conteudo[1];
	}
	if(divPerfil != null){
		divPerfil.innerHTML = conteudo[1];
	}
	divAbas.style.display = '';
//	$("div#DivAbas").show();
}

function salvarCanalVenda(){
	
	cdClienteAplicacao = document.getElementById("cdClienteAplicacao").value;
	nmPessoa = document.getElementById("dsPessoaCanalVenda").value;
	nmApelido = document.getElementById("nmApelido").value;
	nuCpfCnpj = document.getElementById("cpfCnpj").value;
	uf = document.getElementById("IEstadoER").value;
	dsMunicipio = document.getElementById("ICidadeER").value;
	fone = document.getElementById("fone").value;


	FacadeConfigAdministracaoAjax.salvarCanalVenda(cdClienteAplicacao, nmPessoa, nmApelido, nuCpfCnpj, 
												uf, dsMunicipio, fone);
}

function incluirFormaPlano(){
	var obj = this;
	indiceForma = document.getElementById("selectFormaPagamento").selectedIndex; 
	indicePlano = document.getElementById("selectPlanoPagamento").selectedIndex; 
	formaPagamento = document.getElementById("selectFormaPagamento").options[indiceForma].text;
	planoPagamento = document.getElementById("selectPlanoPagamento").options[indicePlano].text;
	
	FacadeConfigAdministracaoAjax.checaInclusao(formaPagamento, planoPagamento,
													{ callback:function(valor) {
														obj = valor;
														if(obj){
															FacadeConfigAdministracaoAjax.montaTabelaFormaPagamento(formaPagamento, planoPagamento,
																	{ callback:function(conteudo) {
				                                						setaTabelaFormaPlano(conteudo);
				                                						}
		                                   					 		});
														}else{
															alert("Forma de pagamento já incluída.");
														}
		                                			}
												});
}


function excluirLinhas(conteudo){
	divOrigem = document.getElementById("TB_ajaxContent");
	divDestino = document.getElementById(nmDiv);
	divTabela = document.getElementById(nmDiv);
	divTabela.innerHTML = document.getElementById("DivTabelaFormaPagamento").innerHTML;
/*	if(divTabela != null){
		divDestino.innerHTML = divOrigem.innerHTML;
	}*/
	var element = null;
	var array = divOrigem.getElementsByTagName("input");
	var indice = 0;	
	var linhaIndex = null;
	var arrayIndices = new Array();
	var arrayFormas = new Array();
	var arrayPlanos = new Array();
	var cont = 0;
	var formaPagamento = null;
	var planoPagamento = null;
	var checado = false;
	for(var i=0; i<array.length; i++){
		element = array[i];
		if(element.type == "checkbox"){
			if(element.checked){
				arrayIndices[cont] = indice;
				linhaIndex = document.getElementById("linha"+indice).rowIndex;
				forma = document.getElementById("hiddenForma"+indice).value;
				plano = document.getElementById("hiddenPlano"+indice).value;
				arrayFormas[cont] = forma;
				arrayPlanos[cont] = plano;
				cont++;
				indice++;
				checado = true;
				document.getElementById("tabelaPagamento").deleteRow(linhaIndex);
			}else{
				indice++;
			}
		}
	}
	FacadeConfigAdministracaoAjax.atualizaFormaPagamento(divTabela.innerHTML, arrayFormas, arrayPlanos,
														 {callback:function(tabelaAtualizada) {
                            									setaTabelaFormaPlano(tabelaAtualizada);
                            									}
                       					 				  }	
														 );
	if(!checado){
		alert("Nenhum item selecionado!");
		return false;
	}

}

function excluirFormaPlano(){
	FacadeConfigAdministracaoAjax.excluirFormaPagamento({callback:function(conteudo) {
		                                					excluirLinhas(conteudo);
		                                				}
                                   					 	});
}

function gravarFormaPlano(){

	divOrigem = document.getElementById("TB_ajaxContent");
	divDestino = document.getElementById(nmDiv);
	if(divDestino != null){
		divDestino.innerHTML = divOrigem.innerHTML;
	}
	array = divDestino.getElementsByTagName("input");
	var indice = -1;	
	iArray = 0;
	arrayForma = new Array();
	arrayPlano = new Array();
	for(var i=0; i<array.length; i++){
		element = array[i];
		if(array[i].type == "checkbox"){
			if(array[i].checked){
				forma = document.getElementById("hiddenForma"+indice).value;
				plano = document.getElementById("hiddenPlano"+indice).value;
				arrayForma[iArray] = forma;
				arrayPlano[iArray] = plano;
				iArray = iArray + 1;
				indice++;
			}else{
				indice++;
			}
		}
	}

	FacadeConfigAdministracaoAjax.gravarFormaPagamento(arrayForma, arrayPlano);
	
   	TB_remove();
}

function cancelaPlanoPagamento(){
	divDestino = document.getElementById(nmDiv);
	if(divDestino != null){
		divDestino.innerHTML = htmlDiv;
	}
	FacadeConfigAdministracaoAjax.cancelaFormaPagamento();
	
	TB_remove();
}

