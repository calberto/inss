function setParametrosConsulta(){

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



function montanListaSeguro(){
divLista = document.getElementById("DivListaSeguro");
mostraProcessando(divLista);
vform = document.forms[0];

var lista = new Array(16);
	lista[0] = "cdPessoaEntidade" +"="+ vform.cdPessoaEntidade.value; 
	lista[1] = "cdClienteAplicacao"	+"="+ vform.cdClienteAplicacao.value; 
	lista[2] = "cdUsuarioLogado" +"="+ vform.cdUsuarioLogado.value; 
	lista[3] = "cdUsuarioCalculo" +"="+ vform.cdUsuarioCalculo.value; 
	lista[4] = "cdSeguro" +"="+ vform.cdSeguro.value; 
	lista[5] = "cdSeguroPai" +"="+ vform.cdSeguroPai.value; 
	lista[6] = "nmProponente" +"="+ vform.nmProponente.value; 
	lista[7] = "dtDocumento" +"="+ vform.dtDocumento.value; 
	lista[8] = "orderBy" +"="+ vform.orderBy.value; 
	lista[9] = "edpesquisa" +"="+ vform.edpesquisa.value; 
	lista[10] = "ordem" +"="+ vform.ordem.value; 
	lista[11] = "pagAtual" +"="+ vform.pagAtual.value; 
	lista[12] = "pagFinal" +"="+ vform.pagFinal.value; 	
	lista[13] = "cpfCnpj" +"="+ vform.cpfCnpj.value; 
	lista[14] = "Produto" +"="+ vform.Produto.value; 
		

FacadeConsultaAjax.montaListaSeguro( lista,
                                   {	callback:function(valor) {
		                                setandoListaSeguro(valor);
		                                }
                                   });
	
}


function setandoListaSeguro(valor){
	
	divLista = document.getElementById("DivListaSeguro");
	divLista.innerHTML = valor[0];
	DWRUtil.setValue("pagAtual", valor[1]);	
	DWRUtil.setValue("pagFinal", valor[2]);
	DWRUtil.setValue("total", valor[3]);
	
	divNavegacao = document.getElementById("DivNavegacao");
	divNavegacao.style.display = "block";
	
}



function montaListaProposta(){
divLista = document.getElementById("DivListaProposta");
mostraProcessando(divLista);
vform = document.forms[0];

	var lista = new Array(15);
	lista[0] = "cdPessoaEntidade" +"="+ vform.cdPessoaEntidade.value; 
	lista[1] = "cdClienteAplicacao"	+"="+ vform.cdClienteAplicacao.value; 
	lista[2] = "cdUsuarioLogado" +"="+ vform.cdUsuarioLogado.value; 
	lista[3] = "cdUsuarioCalculo" +"="+ vform.cdUsuarioCalculo.value; 
	lista[4] = "cdSeguro" +"="+ vform.cdSeguro.value; 
	lista[5] = "cdPropostaSeg" +"="+ vform.cdPropostaSeg.value; 
	lista[6] = "nmProponente" +"="+ vform.nmProponente.value; 
	lista[7] = "orderBy" +"="+ vform.orderBy.value; 
	lista[8] = "edpesquisa" +"="+ vform.edpesquisa.value; 
	lista[9] = "ordem" +"="+ vform.ordem.value; 
	lista[10] = "pagAtual" +"="+ vform.pagAtual.value; 
	lista[11] = "pagFinal" +"="+ vform.pagFinal.value; 	
	lista[12] = "cpfCnpj" +"="+ vform.cpfCnpj.value; 
	lista[13] = "Produto" +"="+ vform.Produto.value; 
	
	FacadeConsultaAjax.montaListaProposta( lista,
	                                   {	callback:function(valor) {
			                                setandoListaProposta(valor);
			                                }
	                                   });
	
}

function setandoListaProposta(valor){
	
	divLista = document.getElementById("DivListaProposta");
	divLista.innerHTML = valor[0];
	DWRUtil.setValue("pagAtual", valor[1]);	
	DWRUtil.setValue("pagFinal", valor[2]);
	DWRUtil.setValue("total", valor[3]);
	
	divNavegacao = document.getElementById("DivNavegacao");
	divNavegacao.style.display = "block";
	
}


function montaListaHistoricoProposta(){
divLista = document.getElementById("DivListaPropostas");
mostraProcessando(divLista);

vform = document.forms[0];

	var lista = new Array(13);
	lista[0] = "cdPessoaEntidade" +"="+ vform.cdPessoaEntidade.value; 
	lista[1] = "cdClienteAplicacao"	+"="+ vform.cdClienteAplicacao.value; 
	lista[2] = "cdUsuarioLogado" +"="+ vform.cdUsuarioLogado.value; 
	lista[3] = "cdUsuarioCalculo" +"="+ vform.cdUsuarioCalculo.value; 
	lista[4] = "nmSegurado" +"="+ vform.nmSegurado.value; 
	lista[5] = "nuPropostaSeg" +"="+ vform.nuPropostaSeg.value; 
	lista[6] = "cdStatus" +"="+ vform.cdStatus.value; 
	lista[7] = "orderBy" +"="+ vform.orderBy.value; 
	lista[8] = "pagAtual" +"="+ vform.pagAtual.value; 
	lista[9] = "pagFinal" +"="+ vform.pagFinal.value; 	
	lista[10] = "dtInicioVigencia" +"="+ vform.dtInicioVigencia.value; 
	lista[11] = "dtFinalVigencia" +"="+ vform.dtFinalVigencia.value; 
	
	
	FacadeConsultaAjax.montaListaHistoricoProposta( lista,
	                                   {	callback:function(valor) {
			                                setandoListaHistProposta(valor);
			                                }
	                                   });
	
}

function setandoListaHistProposta(valor){
	
	divLista = document.getElementById("DivListaPropostas");
	divLista.innerHTML = valor[0];
	DWRUtil.setValue("pagAtual", valor[1]);	
	DWRUtil.setValue("pagFinal", valor[2]);
	DWRUtil.setValue("total", valor[3]);
	
	divNavegacao = document.getElementById("DivNavegacao");
	divNavegacao.style.display = "block";
	
}

function buscaHistoricoProposta(cdSeguro){

if(cdSeguro == "" ){ cdSeguro = "0";}

FacadeConsultaAjax.buscaBeanHistoricoProposta( cdSeguro, document.forms[0].cdClienteAplicacao.value, 
	                                   {	callback:function(valor) {
			                                retornoHistoricoProposta(valor);
			                                }
	                                   });

}


function retornoHistoricoProposta(valor){

parent.mostraEscondeGifProcessando('none');

if(valor[0] == "S"){
     tamanho = valor[1];
     $('#TB_window,#TB_overlay,#TB_HideSelect').remove();
     TB_show('HISTÓRICO DE PROPOSTA','historicoProposta_ficha.jsp?TB_iframe=true&keepThis=true&height='+(165 + parseInt(tamanho))+'&width='+600+'','class=thickbox', "5");
}else if(valor[0] == "E"){
   alert("Ocorreu um erro ao buscar histórico da proposta");
}
}


function verificaDataEHoje(dtBase, param){

	FacadeAjax.verificaDataBaseEHoje( dtBase, 
	                                   {	callback:function(valor) {
			                                retornoVerificaDataEHoje(valor, param);
			                                }
	                                   } );

}
function retornoVerificaDataEHoje(retorno, param){

	if (retorno == false){
		alert("Não é possível efetuar recalcular a proposta!")
  	}else{
  	    parent.mostraEscondeGifProcessando('block');
  	   	vform = document.forms[0];
	  	vform.action = 'consultacalculo?cmd=buscacalculo&recalculoProposta=S' + param;
	  	document.forms[0].target = "";
		document.forms[0].submit();	  
  	
  	}

}

function mostraProcessando(divLista){

	divLista.innerHTML = parent.parent.document.getElementById("modal").innerHTML;
	divNavegacao = document.getElementById("DivNavegacao");
	divNavegacao.style.display = "none";
}