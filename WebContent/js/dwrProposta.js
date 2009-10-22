
function buscaItensProposta(cdModulo, cdProduto, cdSubProduto){

	FacadeAjax.buscaItensProposta( cdModulo, cdProduto, cdSubProduto, listaItensCamposTelaGenericos, {
		callback:function(dados) {
			//mostrandoItensPropostaRecuperados(itensHTML, 'itensDependentesProduto');
			var itensHTML = dados[0];
			var contadorAbas = dados[1];
			listaItensCamposTela = dados[2];
			divItens = document.getElementById('itensDependentesProduto')
			if(divItens != null){
			
				divItens.innerHTML = itensHTML;
				divItens.style.display = '';	
						
				if(contadorAbas != "0"){
					for(i=0; i <= parseInt(contadorAbas); i++){
					   agrupadorAba = "maintab"+contadorAbas;
					   initializetabcontent(agrupadorAba);	
					}	
				}
				desabilitaNumUnidades();	
			}
		}
	})
}

function carregaComboMelhorDia(dtIniVigencia, selecionado){

	FacadeAjax.carregaComboMelhorDia(dtIniVigencia,{
		callback:function(listBean) {
			//setComboMelhorDia(valor, diaSelecionado);
			DWRUtil.removeAllOptions("IDia");
			DWRUtil.addOptions("IDia", listBean, "valorOption", "nomeOption");
		    
		    if (selecionado != ''){
				document.getElementById("IDia").value = selecionado;
		   	}
		   	
		   	if(document.getElementById("IDia").value == "" && document.getElementById("IDia").disabled == false && listBean[0] != null){
		     	var valores = listBean[0];
		        if(valores["valorOption"] != null){
		        	DWRUtil.setValue("IDia", valores["valorOption"]);
		        }      	
		   	}
	 	}
	})
}


function carregaComboPlanosPagto(cdPagamento, selecionado){

	FacadeAjax.carregaComboPlanosPagto(cdPagamento,{
		callback:function(listBean) {
			//setComboPlanosPagto(listBean, selecionado)
			DWRUtil.removeAllOptions("IQtdParcelas")
			DWRUtil.addOptions("IQtdParcelas", listBean[0], "valorOption", "nomeOption")
			
			if (selecionado != ''){
				document.getElementById("IQtdParcelas").value = selecionado
			} else {
			    document.getElementById("IQtdParcelas").value = listBean[1]
			}
			
			habilitaDadosPagamento()
			carregaTextValorPagamentos(	document.getElementById("IQtdParcelas").value)
		}
	})
}


function carregaTextValorPagamentos(cdQtdParcelas){

	FacadeAjax.carregaTextValorPagamentos(cdQtdParcelas,{
		callback:function(valor) {
			//setValorPagamento(valor)
			DWRUtil.setValue("IVlPrimeira", valor[0]);
		  	DWRUtil.setValue("IVlDemais", valor[1]);
		  	DWRUtil.setValue("IValorTotal", valor[2]);  	
		  	
		  	if (!(document.forms[0].flDataBaseEHoje.value == 'N')){
		
				if(document.getElementById("IQtdParcelas") != null 
				&& parseInt(document.getElementById("IQtdParcelas").value) <= 12 ){
					if(document.getElementById("IPrimParcela") != null ){
						document.getElementById("IPrimParcela").disabled = true	
					}	
				}else if(document.getElementById("IQtdParcelas") != null 
				&& parseInt(document.getElementById("IQtdParcelas").value) > 12 ){
					if(document.getElementById("IPrimParcela") != null){
				  		document.getElementById("IPrimParcela").disabled = false
				  	}	
				}
			  	habilitaDesabilitaDemaisParcelas();
			}
		}
	})
}


function carregaInformacoesSegurado(campos, camposCidade, nuCpf){
	
	FacadeAjax.carregaInformacoesSegurado(nuCpf,{
		callback:function(valor) {
			//setSegurado(campos,camposCidade, valor)
			var i = 0;
			
			if (valor[0] != "VAZIO"){
			
				for (i=0; i<campos.length; i++){
			  			  DWRUtil.setValue(campos[i], valor[i]);		    
				}
			}
			
			habilitaDesabilitaEndereco(camposCidade);			
			
			if (vform.ICidadeResSede.value == ''){
				vform.btLovICidadeResSede.disabled = false;
			} else {
				vform.btLovICidadeResSede.disabled = true;
			}
				
			if (vform.ICidadeCorresp.value == ''){
				vform.btLovICidadeCorresp.disabled = false;
			} else {
				vform.btLovICidadeCorresp.disabled = true;
			}
			
			if (vform.ICepResSede.value == ''){
				if (vform.IMesmoEnderCorresp != null){ vform.IMesmoEnderCorresp.value = ''; }
			}else if (vform.IMesmoEnderCorresp != null && vform.IMesmoEnderCorresp.value == '1'){
				//vform.IMesmoEnderCorresp.value = '1';
				habDesabCamposEndCorresp(true);
			} else {
				//vform.IMesmoEnderCorresp.value = '2';
				habDesabCamposEndCorresp(false);
			}
			
			  verificaDadosSegurado();
		}
	})
}


/*
	Esta função vai ao servidor verificar se ainda se pode mexer na proposta, 
	ou algo assim. Poderíamos considerar o uso de um campo hidden na tela, assim
	evitaríamos uma requisição.
*/
function verificaDataBaseEHojeDwr(dtBase, campos, flTodos, flPropostaComCritica){

	if(flPropostaComCritica != "S" && document.forms[0].cdProposta.value != "" ){
		FacadeAjax.verificaDataBaseEHoje( dtBase,{
			callback:function(valor) {
				//habilitaDesabilitaTudo(valor, campos, flTodos)
				if (valor == false){
					if (flTodos == 'S'){
						desabilitaTudo();
					}
					if (campos != null){
						var i;
						for (i=0; i<campos.length; i++){
							if (eval("document.forms[0]." + campos[i]) != null){
							 	eval("document.forms[0]." + campos[i] + ".disabled = true");		
							}
						}		
					}
					
					document.forms[0].flDataBaseEHoje.value = 'N';
					
				} else {
					document.forms[0].flDataBaseEHoje.value = 'S';
				}
			}
		})
	}
}


function carregaDataFca(data){

	var dateFCA = textoParaDate(data);
	DWRUtil.setValue("IDtCobranca", dataIncrementaDias(dateFCA,5));


/*
	FacadeAjax.carregaDataFca(data, 
                                   {	callback:function(valor) {
		                                setaDataFca(valor);
		                                }
                                   });
*/

}

/*
function setaDataFca(valor){

	DWRUtil.setValue("IDtCobranca", valor);
}


/*
function buscaItensPorCdRespFiltroProposta(cdRespFiltro){
	cdProduto = document.forms[0].cdProduto.value;
	cdSubProduto = 0;
	var lista = getValoresCamposTela();
    
	FacadeAjax.buscaItensPorCdRespFiltroProposta( cdProduto, cdSubProduto, cdRespFiltro, lista,
                                   {	callback:function(valor) {
		                                mostrandoItensRecuperadosPorRespFiltroProposta(valor);
		                                }
                                   });
}


function mostrandoItensRecuperadosPorRespFiltroProposta(valor){
	
	var nmDiv = 'itensDependentesProduto';
	
	var divCamposProduto = document.getElementById(nmDiv);
	divCamposProduto.innerHTML = valor;
	
	desabilitaNumUnidades();
	
}

*/
function populaComboBanco(sigTipoDoc){

var codUnidOper = document.getElementById("IUop"); 
var premioPrimStr = document.getElementById("IVlPrimeira");
var premioDemaisStr = document.getElementById("IVlDemais");
var qtdPrest = document.getElementById("IQtdParcelas");
var nmListaBanco = '';

if(sigTipoDoc.name == 'IDemaisParcela' && sigTipoDoc.value == '1'){
   nmListaBanco = 'ICdBancoDebito';
}else if(sigTipoDoc.name == 'IDemaisParcela' &&  sigTipoDoc.value == '2'){ 
   nmListaBanco = 'ICdBancoCarnet';
}else if(sigTipoDoc.name == 'IPrimParcela'  && sigTipoDoc.value == '1' ){ 
   nmListaBanco = 'ICdBancoDebito';
}else if(sigTipoDoc.name == 'IPrimParcela'  && sigTipoDoc.value == '3' ){ 
  alert('O pagamento da primeira parcela será efetuado através de FCP \n' +
        'gerada ao término do envio desta proposta. \n' +
        'Não será permitido o pagamento através de FCP avulsa.');
}

if(nmListaBanco != '' && sigTipoDoc.value != '' &&  codUnidOper != null && premioPrimStr != null && premioDemaisStr != null && qtdPrest != null &&
   codUnidOper.value != '' && premioPrimStr.value != '' && premioDemaisStr.value != '' && qtdPrest.value != '' ){

FacadeAjax.carregaComboBanco( codUnidOper.value, premioPrimStr.value, premioDemaisStr.value, qtdPrest.value, sigTipoDoc.value, sigTipoDoc.name,
                                   {	callback:function(listaBean) {
		                                setandoComboBanco(listaBean, nmListaBanco);
		                                }
                                   });
                                   
}


}

function setandoComboBanco(listaBean, nmListaBanco){
	DWRUtil.removeAllOptions(nmListaBanco);

    if(listaBean[0] != null && listaBean[0] == "S"){
       alert(listaBean[1]); 
    }else{
       DWRUtil.addOptions(nmListaBanco, listaBean, "valorOption", "nomeOption");
    }
		
}
