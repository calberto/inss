function onLoadPropostaDaf(){
   
	vform = document.forms[0];

	carregaSegurado();
	carregaCorretor();


if(vform.flEncaminhadoTelaCalculo.value == "S"){
	  mensagem = "De acordo com as condições solicitadas a presente cotação será encaminhada para a área responsável providenciar a análise. Para envio, faz-se necessário o preenchimento de alguns dados adicionais.";
	  TB_show('ALERTA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+100+'&width='+300+'','class=thickbox', "OK_DAF");

}else{
	if ( vform.cdStatusSeguro.value == "8" || vform.flErroNoEnvioDAF.value == "S"){
		buscaObsErroSeguro("S");	
	}
}

}

function validaCpfProponenteDAF(campo) {
	
	vform = document.forms[0];
	cpf = campo.value;	
	retorno = true;
	if(cpf != "") {
	
	if (cpf != "00000000000" && cpf != "11111111111" && cpf != "22222222222" &&
        cpf != "33333333333" && cpf != "44444444444" && cpf != "55555555555" &&
        cpf != "66666666666" && cpf != "77777777777" && cpf != "88888888888"
        && cpf != "99999999999" && 
        cpf != "00000000000000" && cpf != "11111111111111" && cpf != "22222222222222" &&
        cpf != "33333333333333" && cpf != "44444444444444" && cpf != "55555555555555" &&
        cpf != "66666666666666" && cpf != "77777777777777" && cpf != "88888888888888"
        && cpf != "99999999999999")
      {
      if (!ChecaCPF(cpf) && !validaCgc(cpf)) {  
        alert('CPF/CNPJ inválido!\n Informe um CPF/CNPJ válido para o segurado.'); 
        campo.value = "";
        campo.focus();
        retorno = false;
      }
      if (ChecaCPF(cpf) && vform.ITipoPessoaDaf != null){
          if(vform.ITipoPessoaDaf.value != 'F'){
            alert('Número do documento inválido para o tipo de pessoa informado!\n Informe um CNPJ válido para o segurado.'); 
	        campo.value = "";
	        campo.focus();
            retorno = false;
          }else{
            carregaSegurado();
          }
      }
      if (validaCgc(cpf) && vform.ITipoPessoaDaf != null){
          if(vform.ITipoPessoaDaf.value != 'J'){
            alert('Número do documento inválido para o tipo de pessoa informado!\n Informe um CPF válido para o segurado.'); 
	        campo.value = "";
	        campo.focus();
            retorno = false;
          }else{
            carregaSegurado();
          }
      }
      
      }else {
       alert('CPF/CNPJ inválido!\n Informe um CPF/CNPJ válido para o segurado.'); 
       campo.value = "";
       campo.focus();
       retorno = false;
      }
      
    }
    return retorno;
}

function setaDadosRenovacaoDAF(){
    
    var flgGrpSas = document.getElementById("IFlgGrpSas");
	var segAnt = document.getElementById("ISeguradoraAnt");
	var cdSegAnt = document.getElementById("CODIGOISeguradoraAnt");
	var codSegAnt = document.getElementById("ICodSeguradoraAnt");
	var cdProduto = document.getElementById("Produto");   
    var nuApolAnt = document.getElementById("INuApoliceAntComp");   

	   if(cdProduto != null && cdProduto.value == "94"){
	     if(flgGrpSas != null){ flgGrpSas.value = 'S';}
	     if(cdSegAnt != null){ cdSegAnt.value = '5118';}
	     if(codSegAnt != null){ codSegAnt.value = '7110';}
	     if(segAnt != null){ segAnt.value = 'SUL AMERICA CIA NACIONAL DE SEGUROS'; }
	   }else{
	      if(nuApolAnt != null){ nuApolAnt.value = '';}
	   }

}


var camposCidade = new Array  (
						 			 "IUfResSede",
						 			 "ICidadeResSede",
						 			 "btLovICidadeResSede"
						 	   );

function carregaSegurado(){

	vform = document.forms[0];

	if (vform.ICpfCnpjProponenteDaf.value != ''){
			var campos = new Array  ("ICdProponente", 
									 "INomeRazaoSocial",
									 "IDataFundNasc",
									 //"ITipoPessoaDaf",
									 "ICpfCnpjProponenteDaf",
									 "ITipoDocumento",
						 			 "IDocumento",
						 			 "IOrgaoExpeditor",
						 			 "IDtExpedicaoDocumento",						 			 
						 			 "INatDocumento",

						 			 "IFoneResidencial",
						 			 "IFoneComercial",
						 			 "IFax",
						 			 "ICelular",

									 "IEmail",
						 			 
						 			 "ICepResSede",
						 			 "ITpLogradouroResSede",
						 			 "IEnderecoResSede",
						 			 "INumeroResSede",
						 			 "IComplementoResSede",
						 			 "IBairroResSede",
						 			 "IUfResSede",
						 			 "ICidadeResSede"

									);
			
			

			
			carregaInformacoesSeguradoDaf(campos, camposCidade, vform.ICpfCnpjProponenteDaf.value);
		

	}

}

var camposCepResSede = new Array("", "ITpLogradouroResSede",
						   "IEnderecoResSede",
						   "IBairroResSede",
						   "ICidadeResSede", 
						   "IUfResSede",
						   "btLovICidadeResSede");

function verificaDadosCepSegurado(obj){

	if (obj.id == "ICepResSede"){
		if(vform.CEP_TEMP_RES.value != obj.value){
	       vform.CEP_TEMP_RES.value = obj.value;
	
			recuperaDadosCEPLocalidadeDaf(vform.ICepResSede, camposCepResSede, document.getElementById('ICepResSede').value,'N', 'INumeroResSede');
		 }
	}

}


var camposEndResSede = new Array("ICepResSede",
							"ITpLogradouroResSede",
						    "IEnderecoResSede",
						    "INumeroResSede", 
						    "IComplementoResSede",
						    "IBairroResSede",
						    "ICidadeResSede", 
						    "IUfResSede",
						    "btLovICidadeResSede");


function habDesabCampos(campos, valor){

	for (i=0; i<campos.length; i++){
		if (eval("document.getElementById('" + campos[i] + "') != null")){
			eval("document.getElementById('" + campos[i] + "').disabled = " + valor);
		}
		
	}
}

function habilitaDesabilitaEnderecoDaf(camposCidade){
	var i = 0;
   	for (i=4; i<camposCidade.length; i++){
   		if(document.getElementById(camposCidade[i]) != null){ 
			
			eLov = document.getElementById(camposCidade[i]).name.substr(0, 5)=="btLov" ;
			
			if (eLov){
			
				nomeLov = document.getElementById(camposCidade[i]).name.substr(5, document.getElementById(camposCidade[i]).name.length);
				
			}
			
  			if((document.getElementById(camposCidade[i]).value != '') || 
  				(eLov && document.getElementById(nomeLov).value!='')){ 
  				eval("document.getElementById('" + camposCidade[i] + "').disabled = true");
  			}else{
  				eval("document.getElementById('" + camposCidade[i] + "').disabled = false");
  			}  			
  		}
   	}
}

function enviarCotacao(){

	vform = document.forms[0];	
	document.getElementById("BtEnviarCotacao").disabled = true;
	if (validaDadosPropostaDaf()){
		habDesabCampos(camposCepResSede, false);		
		informaAlteracaoDadosSegurado();
		document.getElementById("ITipoPessoaDaf").disabled=false;
		document.getElementById("INomeRazaoSocial").disabled=false;
	  	vform.action = "app?cmd=incluipropostadaf";
	  	vform.submit();    
	}
	
	
}

function carregaCorretor(){
	
	var campos = new Array  (	"ICodSusep", 
								"IEv",
								"IEa",
								"IUop",
								"IAa",
								"IAcaoVenda",
						 		"ISucursal",
						 		"IContato",
						 		"ITelefoneContato",						 			 
						 		"IEmailAreaComerc",
						 		"IEmailContato");
						 			 			
	carregaInformacoesCorretorDaf(campos);
}

function validaDadosPropostaDaf(){
	
		mensagem = "";
		retorno = true;
		nomes = "";
		
		if(document.getElementById("INomeRazaoSocial") != null && document.getElementById("INomeRazaoSocial").value == ""){
		   mensagem += "Informe o campo Nome/Razão social!" + "\n";
		   nomes += "INomeRazaoSocial=";
		}
		if(document.getElementById("ITipoPessoaDaf") != null && document.getElementById("ITipoPessoaDaf").value == ""){
		   mensagem += "Informe o campo Tipo de pessoa!" + "\n";
		   nomes += "ITipoPessoaDaf=";
		}
		if(document.getElementById("ICpfCnpjProponenteDaf") != null && document.getElementById("ICpfCnpjProponenteDaf").value == ""){
		    mensagem += "Informe o campo CPF/CNPJ!" + "\n";		
		   nomes += "ICpfCnpjProponenteDaf=";
		}
		if(document.getElementById("IFoneResidencial") != null && document.getElementById("IFoneResidencial").value == "" && document.getElementById("ITipoPessoaDaf") != null && document.getElementById("ITipoPessoaDaf").value == "F"){
		    mensagem += "Informe o campo Fone residencial!" + "\n";		
		   nomes += "IFoneResidencial=";
		}
		if(document.getElementById("IFoneComercial") != null && document.getElementById("IFoneComercial").value == "" && document.getElementById("ITipoPessoaDaf") != null && document.getElementById("ITipoPessoaDaf").value == "J"){
		    mensagem += "Informe o campo Fone comercial!" + "\n";		
		   nomes += "IFoneComercial=";
		}
		if(document.getElementById("ICepResSede") != null && document.getElementById("ICepResSede").value == ""){
		    mensagem += "Informe o campo Cep!" + "\n";		
		   nomes += "ICepResSede=";
		}
		if(document.getElementById("ITpLogradouroResSede") != null && document.getElementById("ITpLogradouroResSede").value == ""){
		    mensagem += "Informe o campo Tipo logradouro!" + "\n";
		   nomes += "ITpLogradouroResSede=";
		}
		if(document.getElementById("IEnderecoResSede") != null && document.getElementById("IEnderecoResSede").value == ""){
		    mensagem += "Informe o campo Endereço!" + "\n";		
		   nomes += "IEnderecoResSede=";
		}
		if(document.getElementById("INumeroResSede") != null && document.getElementById("INumeroResSede").value == "" ){
		    mensagem += "Informe o campo Número!" + "\n";
		    mensagem += "Caso o endereço não tenha número, preencha o campo número com 0 e acrescente \"S/N\" no campo logradouro." + "\n";		
		   nomes += "INumeroResSede=";
		}
		if(document.getElementById("IBairroResSede") != null && document.getElementById("IBairroResSede").value == "" ){
		    mensagem += "Informe o campo Bairro!" + "\n";		
		   nomes += "IBairroResSede=";
		}
		if(document.getElementById("IUfResSede") != null && document.getElementById("IUfResSede").value == ""){
		    mensagem += "Informe o campo UF!" + "\n";		
		   nomes += "IUfResSede=";
		}
		if(document.getElementById("ICidadeResSede") != null && document.getElementById("ICidadeResSede").value == ""){
		    mensagem += "Informe o campo Cidade!" + "\n";		
		   nomes += "ICidadeResSede=";
		}
		if(document.getElementById("IEv") != null && document.getElementById("IEv").value == ""){
		    mensagem += "Informe o campo EV!" + "\n";			
		   nomes += "IEv=";
		}
		if(document.getElementById("IContato") != null && document.getElementById("IContato").value == ""){
		    mensagem += "Informe o campo Contato!" + "\n";	
		   nomes += "IContato=";
		}
		if(document.getElementById("ITelefoneContato") != null && document.getElementById("ITelefoneContato").value == ""){
		    mensagem += "Informe o campo Telefone!" + "\n";	
		   nomes += "ITelefoneContato=";
		}
		if(document.getElementById("IEmailContato") != null && document.getElementById("IEmailContato").value == ""){
		    mensagem += "Informe o campo Email para envio da cotação!" + "\n";	
		   nomes += "IEmailContato=";
		}
		if(document.getElementById("ISucursal") != null && document.getElementById("ISucursal").value == ""){
		    mensagem += "Informe o campo Sucursal!" + "\n";	
		   nomes += "ISucursal=";
		}
		if(document.getElementById("IEmailAreaComerc") != null && document.getElementById("IEmailAreaComerc").value == ""){
		    mensagem += "Informe o campo Email área comercial SulAmérica!" + "\n";	
		   nomes += "IEmailAreaComerc=";
		}
    
    	if(mensagem != ""){
    		retorno = false;
			alert(mensagem);
			document.getElementById("BtEnviarCotacao").disabled = false;
		}

        realcaCamposObrigatorios(nomes);
        
    	return retorno;
}

function okCotacaoDaf(){
	vform = document.forms[0];
	
	vform.action = "novocalculo?cmd=novocalculo";
	
	vform.submit();
}



function consultarCalculo() {

  vform = document.forms[0];
  vform.action = "consultacalculo?cmd=calculo";
  vform.submit();

}


function verificaDadosSegurado(){

var INomeRazaoSocial = document.getElementById("INomeRazaoSocial");
var ICpfCnpjProponenteDaf = document.getElementById("ICpfCnpjProponenteDaf");
var INomeProponente = document.getElementById("INomeProponente");
var NU_CPF_CNPJ_CALCULO = document.getElementById("NU_CPF_CNPJ_CALCULO");
var ICdProponente = document.getElementById("ICdProponente");

if(ICdProponente != null && ICdProponente.value != "" && NU_CPF_CNPJ_CALCULO != null && INomeRazaoSocial != null && ICpfCnpjProponenteDaf != null && INomeProponente != null){

if(NU_CPF_CNPJ_CALCULO.value == ICpfCnpjProponenteDaf.value){
  
  if(INomeRazaoSocial.value.trim() != INomeProponente.value.trim()){
    alert("O \"Nome/razão social\" informado no cálculo para o CPF/CNPJ "+NU_CPF_CNPJ_CALCULO.value+" está diferente da Base de Dados da SulAmérica."+"\n"+"Verifique se os dados informados estão corretos e efetue as alterações necessárias.");  
    INomeRazaoSocial.disabled = false;
  } 

}


}


}


function informaAlteracaoDadosSegurado(){

var INomeRazaoSocial = document.getElementById("INomeRazaoSocial");
var ICpfCnpjProponenteDaf = document.getElementById("ICpfCnpjProponenteDaf");
var INomeProponente = document.getElementById("INomeProponente");
var NU_CPF_CNPJ_CALCULO = document.getElementById("NU_CPF_CNPJ_CALCULO");

	if(NU_CPF_CNPJ_CALCULO != null && INomeRazaoSocial != null && ICpfCnpjProponenteDaf != null && INomeProponente != null){
	
		if(NU_CPF_CNPJ_CALCULO.value == ICpfCnpjProponenteDaf.value){
		  
		  if(INomeRazaoSocial.value.trim() != INomeProponente.value.trim()){
		    alert("O \"Nome/razão social\" informado no cálculo para o CPF/CNPJ "+NU_CPF_CNPJ_CALCULO.value+" está diferente da Base de Dados da SulAmérica."+"\n"+"As alterções nos dados do cadastro do segurado serão replicadas para os dados do cálculo.");  
		  } 
		
		}else{
		   alert("As alterções nos dados do cadastro do segurado serão replicadas para os dados do cálculo.");  
		}
	
	}

}
