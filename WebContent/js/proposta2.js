// ####################################################
function voltaPaginaProposta() {  
	parent.mostraEscondeGifProcessando('block');
	vform = document.forms[0];
	vform.action = 'novaproposta?cmd=voltaproposta';    
	  
	vform.submit();
	
}

function incluiProposta() {  
	
	vform = document.forms[0];

	vform.action = 'proposta?cmd=incluiproposta';    
	verificaCamposObrigatoriosProposta("4", vform);
    //habilitaCampos();
}


function funcoesOnLoad(){
    
    var av = document.getElementById('IAcaoVenda'); 
   
    if(av != null){
    	av.value = 0;
    } 

	habilitaDivsOnLoad();
	
	carregaMelhorDia();	
	
	carregaDataPagamentoFca();
	
	carregaValorPagamentos();

	setaCampos();
	
	carregaPlanosPagto();
	
	habilitaDadosInspecao();
	
//	habilitaDesabilitaDigito();
	
	var campos = new Array(	"BtGerarProposta", "IDemaisParcela", "IPrimParcela");
	verificaDataBaseEHojeDwr(document.forms[0].dtProposta.value, campos, 'S', document.forms[0].flPropostaComCritica.value);	
	

}

function habilitaDadosInspecao(){
vform = document.forms[0];

if(vform.FlgInspecao.value == 'S'){
	if(document.getElementById("DivInspecao") != null){
	   document.getElementById("DivInspecao").style.display = "";
	}
	if(document.getElementById("DivInspecaoSpan") != null){
	   document.getElementById("DivInspecaoSpan").style.display = "";
	}
}else {
	if(document.getElementById("DivInspecao") != null){
	   document.getElementById("DivInspecao").style.display = "none";
	}
	if(document.getElementById("DivInspecaoSpan") != null){
	   document.getElementById("DivInspecaoSpan").style.display = "none";
	}
}

} 



function carregaDataPagamentoFca(){
	vform = document.forms[0];
	vform.ICdBanco.disabled = true;
	vform.ICdBanco.value = '409';	
	carregaDataFca(vform.dtInicioVigencia.value);
}

function setaCampos(){

	vform = document.forms[0];
	
	if (vform.cdFormaPagtoPrim.value != ''){
		vform.IPrimParcela.value = vform.cdFormaPagtoPrim.value;
	} 
	if (vform.cdFormaPagtoDemais.value != ''){
		vform.IDemaisParcela.value = vform.cdFormaPagtoDemais.value;	
	}
	
	selecionaPlanoPagto('N');
	
}

function selecionaPlanoPagto(flCritica){

if(flCritica == 'S'){
var codUnidOper = document.getElementById("IUop"); 
var qtdPrest = document.getElementById("IQtdParcelas");
var cdDemaisParcela = document.getElementById("IDemaisParcela");
var cdPrimParcela = document.getElementById("IPrimParcela");

if(codUnidOper != null && codUnidOper.value == ''){
    alert('É necessário informar a UOP antes de selecionar as formas de pagamento!');
    if(cdDemaisParcela != null){ cdDemaisParcela.value = "";}
    if(cdPrimParcela != null){ cdPrimParcela.value = "";}    
}else if( qtdPrest != null && qtdPrest.value == '' ){
    alert('É necessário informar as quantidades de parcelas  antes de selecionar as formas de pagamento!');
    if(cdDemaisParcela != null){ cdDemaisParcela.value = "";}
    if(cdPrimParcela != null){ cdPrimParcela.value = "";}       
}else{
   habilitaDesabilitaDemaisParcelas();
}


}else {
   habilitaDesabilitaDemaisParcelas();
}
	

}

function habilitaDesabilitaDemaisParcelas(){

	vform = document.forms[0];
/*
	if (document.getElementById("IVlDemais").value == '0,00'){
			document.getElementById("IDemaisParcela").disabled = true;		
			document.getElementById("IDemaisParcela").value = '';
	} else if (document.getElementById("IPrimParcela").value == '1') {//DCC
			document.getElementById("IDemaisParcela").disabled = true;		
			document.getElementById("IDemaisParcela").value = '1';			
	} else {
			document.getElementById("IDemaisParcela").disabled = false;		
	}
*/

	if(document.getElementById("IQtdParcelas") != null && parseInt(document.getElementById("IQtdParcelas").value) <= 12 ){
	   if(document.getElementById("IPrimParcela") != null ){
	      document.getElementById("IPrimParcela").value = '';
	      document.getElementById("IPrimParcela").disabled = true;
	   }	
	}else if(document.getElementById("IQtdParcelas") != null && parseInt(document.getElementById("IQtdParcelas").value) > 12 ){
	  if(document.getElementById("IPrimParcela") != null){document.getElementById("IPrimParcela").disabled = false;	}	
	}	
	
	habilitaFcaDebitoConta();

}

function carregaMelhorDia(){

	carregaComboMelhorDia(document.getElementById("dtInicioVigencia").value, document.getElementById("IDia").value);

}

function carregaPlanosPagto(){

	carregaComboPlanosPagto(document.getElementById("IPagamento").value, document.forms[0].IQtdParcelas.value);
	
}

function carregaValorPagamentos(){

	carregaTextValorPagamentos(document.getElementById("IQtdParcelas").value);	
	
}

function habilitaDadosPagamento(){

if(document.getElementById("IPagamento") != null){

	if (document.getElementById("IPagamento").value == '1'){
	    if(document.getElementById("IQtdParcelas") != null ){
 	       document.getElementById("IQtdParcelas").value = '13';
	       document.getElementById("IQtdParcelas").disabled = true;	
	    }		
		if(document.getElementById("IDemaisParcela") != null ){
		   document.getElementById("IDemaisParcela").value = '';
		   document.getElementById("IDemaisParcela").disabled = true;
		}
		if(document.getElementById("IDia") != null ){
		   document.getElementById("IDia").value = '';
		   document.getElementById("IDia").disabled = true;
		}		
	} else {
		if(document.getElementById("IQtdParcelas") != null ){document.getElementById("IQtdParcelas").disabled = false;	}		
		if(document.getElementById("IDemaisParcela") != null ){document.getElementById("IDemaisParcela").disabled = false;	}	
		if(document.getElementById("IDia") != null ){
		   document.getElementById("IDia").disabled = false;	
		   selecionaPrimeiraOpcaoDoCombo(document.getElementById("IDia"), "S");
		}	
		
		if(document.getElementById("IQtdParcelas") != null && parseInt(document.getElementById("IQtdParcelas").value) <= 12 ){
		   if(document.getElementById("IPrimParcela") != null ){
		      document.getElementById("IPrimParcela").value = '';
		      document.getElementById("IPrimParcela").disabled = true;	
		   }	
		}else if(document.getElementById("IQtdParcelas") != null && parseInt(document.getElementById("IQtdParcelas").value) > 12 ){
		  if(document.getElementById("IPrimParcela") != null){document.getElementById("IPrimParcela").disabled = false;	}	
		}		
	}
}




}

function habilitaDivsOnLoad(){
    habilitaDadosPagamento();
	habilitaFcaDebitoConta();
	habilitaRenovacao();
}

function habilitaRenovacao(){

	if (document.getElementById("isRenovacao").value == 'N'){//Novo

		document.getElementById("DivRenovacao").style.display="none";	
		if (document.getElementById("DivRenovacaoSpan") != null){
			document.getElementById("DivRenovacaoSpan").style.display="none";
		}
		
	} else {
	
		document.getElementById("DivRenovacao").style.display="";	
		if (document.getElementById("DivRenovacaoSpan") != null){
			document.getElementById("DivRenovacaoSpan").style.display="";
		}
	
	}

}

/*function habilitaDesabilitaDigito(){

	if (document.getElementById("ICdBancoDebito").value == '237'){
	
		document.getElementById("IDvAgencia").disabled = true;		
		document.getElementById("IDvContaCorrente").disabled = true;				
	
	}

}*/



function habilitaFcaDebitoConta(){
	if (document.getElementById("IPrimParcela").value == '3'){// Fca
     if (document.getElementById("DivDadosFca") != null){
		document.getElementById("DivDadosFca").style.display="";	
		if (document.getElementById("DivDadosFcaSpan") != null){
			document.getElementById("DivDadosFcaSpan").style.display="";
		}
	  }	
	} 
	if ((document.getElementById("IPrimParcela").value == '1')||(document.getElementById("IDemaisParcela").value == '1')){// Debito em conta
		if(document.getElementById("IPrimParcela").value == '1'){
		   if(document.getElementById("IPagamento") != null && document.getElementById("IPagamento").value != '1'){
		      document.getElementById("IDemaisParcela").value = '1';
		   }
		   document.getElementById("IDemaisParcela").disabled = true;
		}else {
		  //if(document.getElementById("IPagamento") != null && document.getElementById("IPagamento").value != '1'){
		     habilitaDadosPagamento();
		  //}   
		}
		
		if (document.getElementById("DivDadosDebitoConta") != null){
			document.getElementById("DivDadosDebitoConta").style.display="";
			if (document.getElementById("DivDadosDebitoContaSpan") != null){
				document.getElementById("DivDadosDebitoContaSpan").style.display="";
			}
		}	
	} 
	if (document.getElementById("IDemaisParcela").value == '2'){// Carnet
       if (document.getElementById("DivDadosCarnet") != null){
		   document.getElementById("DivDadosCarnet").style.display="";	
		   if (document.getElementById("DivDadosCarnetSpan") != null){
			  document.getElementById("DivDadosCarnetSpan").style.display="";
		   }
		}
	} 
	if ( document.getElementById("IPrimParcela").value != '3' ){
		if (document.getElementById("DivDadosFca") != null){
			document.getElementById("DivDadosFca").style.display="none";
			if (document.getElementById("DivDadosFcaSpan") != null){
				document.getElementById("DivDadosFcaSpan").style.display="none";
			}
	    }
	}
	if ((document.getElementById("IPrimParcela").value != '1')&&(document.getElementById("IDemaisParcela").value != '1')){
		if (document.getElementById("DivDadosDebitoConta") != null){		
			document.getElementById("DivDadosDebitoConta").style.display="none";
			if (document.getElementById("DivDadosDebitoContaSpan") != null){
				document.getElementById("DivDadosDebitoContaSpan").style.display="none";
			}
	    }
	}
	if (document.getElementById("IDemaisParcela").value != '2'){
       if (document.getElementById("DivDadosCarnet") != null){
		   document.getElementById("DivDadosCarnet").style.display="none";	
		   if (document.getElementById("DivDadosCarnetSpan") != null){
			  document.getElementById("DivDadosCarnetSpan").style.display="none";
		   }
		}
	} 
	if ((document.getElementById("IPrimParcela").value == '')&&(document.getElementById("IDemaisParcela").value == '')){
		if (document.getElementById("DivDadosDebitoConta") != null){
			document.getElementById("DivDadosDebitoConta").style.display="none";
			if (document.getElementById("DivDadosDebitoContaSpan") != null){
				document.getElementById("DivDadosDebitoContaSpan").style.display="none";
			}
		}
		if (document.getElementById("DivDadosFca") != null){
			document.getElementById("DivDadosFca").style.display="none";
			if (document.getElementById("DivDadosFcaSpan") != null){
				document.getElementById("DivDadosFcaSpan").style.display="none";
			}
	    }
	    if (document.getElementById("DivDadosCarnet") != null){
		   document.getElementById("DivDadosCarnet").style.display="none";	
		   if (document.getElementById("DivDadosCarnetSpan") != null){
			  document.getElementById("DivDadosCarnetSpan").style.display="none";
		   }
		}
	    
	}
	
}



function habilitaCampos(){


	if (document.getElementById("IDemaisParcela") != null){
		document.getElementById("IDemaisParcela").disabled = false;
	}
	
	if (document.getElementById("ICdBanco") != null){
		document.getElementById("ICdBanco").disabled = false;
	}
	
	if (document.getElementById("IDvAgencia") != null){
		document.getElementById("IDvAgencia").disabled = false;
	}
	
	if (document.getElementById("IDvContaCorrente") != null){
		document.getElementById("IDvContaCorrente").disabled = false;
	}
	
	if (document.getElementById("IDtCobranca") != null){
		document.getElementById("IDtCobranca").disabled = false;
	}

    if (document.getElementById("INuFca") != null){
		document.getElementById("INuFca").disabled = false;
	}
	
	if(document.getElementById("IQtdParcelas") != null ){document.getElementById("IQtdParcelas").disabled = false;	}		
	if(document.getElementById("IDia") != null ){document.getElementById("IDia").disabled = false;	}	
    if(document.getElementById("IPrimParcela") != null ){ document.getElementById("IPrimParcela").disabled = false;	}	

}

function chamaPopulaComboBanco(){

var demaisParcelas = document.getElementById("IDemaisParcela");
var primeiraParcela = document.getElementById("IPrimParcela");

// DCC
if(primeiraParcela != null && primeiraParcela.disabled == false && primeiraParcela.value == "1"){
   populaComboBanco(primeiraParcela);
}else if(demaisParcelas != null && demaisParcelas.disabled == false && demaisParcelas.value == "1"){
   populaComboBanco(demaisParcelas);
}   

// Carnet
if(demaisParcelas != null && demaisParcelas.disabled == false && demaisParcelas.value == "2"){
   populaComboBanco(demaisParcelas);
}   

}
