function validaCpfProponente(campo) {
	
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
      if (ChecaCPF(cpf) && vform.ITipoPessoa != null){
          if(vform.ITipoPessoa.value != 'F'){
            alert('Número do documento inválido para o tipo de pessoa informado!\n Informe um CNPJ válido para o segurado.'); 
	        campo.value = "";
	        campo.focus();
            retorno = false;
          }else{
            carregaSegurado();
          }
      }
      if (validaCgc(cpf) && vform.ITipoPessoa != null){
          if(vform.ITipoPessoa.value != 'J'){
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


function paraUpperCase(obj){

	obj.value=obj.value.toUpperCase();

}


function proximaPaginaProposta() {  

	vform = document.forms[0];
	vform.action = 'novaproposta?cmd=novaproposta2';    

	if  (vform.IMesmoEnderCorresp.value == '1'){		
			setaEnderecoCorrespondencia();		
	} 

	verificaValidadeCalculo("2", vform);
	
}

//################### ONLOAD

function funcoesOnLoad(){

	carregaCamposDependentesCalculo();

//	desabilitaCamposProduto();

	desabilitaCampos();
	
	verificaMesmoEnderecoCob();
    habilitaRelatorioCalculo(); 
    calculoPeriodoVigSeguro();
}

function habilitaRelatorioCalculo(){
vform = document.forms[0];

	if(vform.ICdCalculo != null && vform.ICdCalculo.value != ""){
	  vform.BtImprimir.disabled = false;
	}else{
	  vform.BtImprimir.disabled = true;
	}
}


function desabilitaCampos(){

	vform = document.forms[0];
	
	// Desabilitando o tipo de pessoa
	if (vform.ITipoPessoa != null){
		vform.ITipoPessoa.disabled = true;
	} 
	
	// Desabilitando os campos de cidade residencial	
	var camposRes = new Array(	"ITpLogradouroResSede",
						   		"IEnderecoResSede",
//						   		"IBairroResSede",
						   		"ICidadeResSede", 
						   		"IUfResSede");
						   		
	habilitaDesabilitaEndereco(camposRes);
	habilitaDesabilitaBotaoLov("ICidadeResSede");
	
	// Desabilitando os campos de cidade correpondencia	
	var camposCorresp = new Array(	"ITpLogradouroCorrespondencia",
						   			"IEnderecoCorrespondencia",
//						  			"IBairroCorrespondencia",
						   			"ICidadeCorresp", 
						   			"IUfCorrespondencia");
	habilitaDesabilitaEndereco(camposCorresp);
	habilitaDesabilitaBotaoLov("ICidadeCorresp");
	
	// Desabilitando campos de acordo com o produto
	desabilitaCamposProduto();
	
	// Caso a data base seja menor que hoje, desabilita tudo
	verificaDataBaseEHojeDwr(document.forms[0].dtProposta.value, null, 'S', document.forms[0].flPropostaComCritica.value);

}

function habilitaDesabilitaBotaoLov(campo){
	
	if(document.getElementById(campo) != null){ 
		if (eval("document.forms[0]." + campo + ".value == ''")){
			eval("document.forms[0].btLov" + campo + ".disabled = false");
		} else {
			eval("document.forms[0].btLov" + campo + ".disabled = true");
		}
	
	}
}

function verificaMesmoEnderecoCob(){

	vform = document.forms[0];

	if (vform.ICepResSede.value == ''){
		vform.IMesmoEnderCorresp.value = '';
	}else if(vform.ICepResSede.value == vform.ICepCorrespondencia.value){
		vform.IMesmoEnderCorresp.value = '1';
		habDesabCamposEndCorresp(true);
	} else {
		vform.IMesmoEnderCorresp.value = '2';
	}
}
//################################################
// COISAS DE CORRESPONDENCIA
function habDesabCamposEndCorresp(valor){

	vform = document.forms[0];

	if (vform.ICepCorrespondencia != null){	
		vform.ICepCorrespondencia.disabled = valor;	
	} 
	
	if (vform.ITpLogradouroCorrespondencia != null){	
		vform.ITpLogradouroCorrespondencia.disabled = valor;		
	} 
	
	if (vform.IEnderecoCorrespondencia != null){	
		vform.IEnderecoCorrespondencia.disabled = valor;	
	} 
	
	if (vform.INumeroCorrespondencia != null){	
		vform.INumeroCorrespondencia.disabled = valor;	
	} 
	
	if (vform.IComplementoCorrespondencia != null){	
		vform.IComplementoCorrespondencia.disabled = valor;			
	} 
	
	if (vform.IBairroCorrespondencia != null){	
		vform.IBairroCorrespondencia.disabled = valor;	
	} 
	
	if (vform.IUfCorrespondencia != null){	
		vform.IUfCorrespondencia.disabled = valor;	
	} 
	
	if (vform.ICidadeCorresp!= null ){	
		vform.ICidadeCorresp.disabled = valor;	
	}
	
	if (vform.btLovICidadeCorresp!= null ){	
		vform.btLovICidadeCorresp.disabled = valor;	
	}

}


function limpaEnderecoCorrespondencia(){

	vform = document.forms[0];

	if (vform.ICepCorrespondencia != null){	
		vform.ICepCorrespondencia.value = '';	
	} 
	
	if (vform.ITpLogradouroCorrespondencia != null){	
		vform.ITpLogradouroCorrespondencia.value = '';		
	} 
	
	if (vform.IEnderecoCorrespondencia != null){	
		vform.IEnderecoCorrespondencia.value = '';	
	} 
	
	if (vform.INumeroCorrespondencia != null){	
		vform.INumeroCorrespondencia.value = '';	
	} 
	
	if (vform.IComplementoCorrespondencia != null){	
		vform.IComplementoCorrespondencia.value = '';			
	} 
	
	if (vform.IBairroCorrespondencia != null){	
		vform.IBairroCorrespondencia.value = '';	
	} 
	
	if (vform.IUfCorrespondencia != null){	
		vform.IUfCorrespondencia.value = '';	
	} 
	
	if (vform.ICidadeCorresp!= null ){	
		vform.ICidadeCorresp.value = '';	
	}

}


function setaEnderecoCorrespondencia(){

	vform = document.forms[0];


	if (vform.IMesmoEnderCorresp.value == '1'){
		if ((vform.ICepResSede != null) && (vform.ICepCorrespondencia != null)){	
			vform.ICepCorrespondencia.value = vform.ICepResSede.value;	
		} 
		
		if ((vform.ITpLogradouroResSede != null) && (vform.ITpLogradouroCorrespondencia != null)){	
			vform.ITpLogradouroCorrespondencia.value = vform.ITpLogradouroResSede.value;		
		} 
		
		if ((vform.IEnderecoResSede != null) && (vform.IEnderecoCorrespondencia != null)){	
			vform.IEnderecoCorrespondencia.value = vform.IEnderecoResSede.value;	
		} 
		
		if ((vform.INumeroResSede != null) && (vform.INumeroCorrespondencia != null)){	
			vform.INumeroCorrespondencia.value = vform.INumeroResSede.value;	
		} 
		
		if ((vform.IComplementoResSede != null) && (vform.IComplementoCorrespondencia != null)){	
			vform.IComplementoCorrespondencia.value = vform.IComplementoResSede.value;			
		} 
		
		if ((vform.IBairroResSede != null) && (vform.IBairroCorrespondencia != null)){	
			vform.IBairroCorrespondencia.value = vform.IBairroResSede.value;	
		} 
		
		if ((vform.IUfResSede != null) && (vform.IUfCorrespondencia != null)){	
			vform.IUfCorrespondencia.value = vform.IUfResSede.value;	
		} 
		
		if ((vform.ICidadeResSede != null) && (vform.ICidadeCorresp!= null)){	
			vform.ICidadeCorresp.value = vform.ICidadeResSede.value;	
		}
	} /*else {
			if (vform.ICepCorrespondencia != null){	
				vform.ICepCorrespondencia.value = '';	
			} 
			
			if (vform.ITpLogradouroCorrespondencia != null){	
				vform.ITpLogradouroCorrespondencia.value = '';		
			} 
			
			if (vform.IEnderecoCorrespondencia != null){	
				vform.IEnderecoCorrespondencia.value = '';	
			} 
			
			if (vform.INumeroCorrespondencia != null){	
				vform.INumeroCorrespondencia.value = '';	
			} 
			
			if (vform.IComplementoCorrespondencia != null){	
				vform.IComplementoCorrespondencia.value = '';			
			} 
			
			if (vform.IBairroCorrespondencia != null){	
				vform.IBairroCorrespondencia.value = '';	
			} 
			
			if (vform.IUfCorrespondencia != null){	
				vform.IUfCorrespondencia.value = '';	
			} 
			
			if (vform.ICidadeCorresp!= null ){	
				vform.ICidadeCorresp.value = '';	
			}
	}*/
}

/*function setaEnderecoCorrespondenciaComEndereco(){

	if (vform.IMesmoEnderCorresp.value = '1'){
		setaEnderecoCorrespondencia();
	}

}*/

//##############################


function verificaDadosCepCorrespondencia(){

vform = document.forms[0];

if(vform.CEP_TEMP_COR.value != vform.ICepCorrespondencia.value){

vform.CEP_TEMP_COR.value = vform.ICepCorrespondencia.value;
	
	var campos = new Array("FL_CEP_VALIDO",
	                       "ITpLogradouroCorrespondencia",
						   "IEnderecoCorrespondencia",
						   "IBairroCorrespondencia",
						   "ICidadeCorresp", 
						   "IUfCorrespondencia");

	recuperaDadosCEPLocalidade(vform.ICepCorrespondencia, campos, vform.ICepCorrespondencia.value, 'S', 'INumeroCorrespondencia');

//	habilitaDesabilitaBotaoLov("ICidadeCorresp");
}

}

function verificaDadosCepSegurado(){

	vform = document.forms[0];

if(vform.CEP_TEMP_RES.value != vform.ICepResSede.value){

vform.CEP_TEMP_RES.value = vform.ICepResSede.value;

	var campos = new Array("FL_CEP_VALIDO",
	                       "ITpLogradouroResSede",
						   "IEnderecoResSede",
						   "IBairroResSede",
						   "ICidadeResSede", 
						   "IUfResSede");


	recuperaDadosCEPLocalidade(vform.ICepResSede, campos, vform.ICepResSede.value, 'S', 'INumeroResSede',
                                   {	callback:function(valor) {
		                                setaEnderecoCorrespondencia();
		                                }
                                   });

	
//	habilitaDesabilitaBotaoLov("ICidadeResSede");
}

}



function setaCorrespondencia(){

	setaEnderecoCorrespondencia();
	if (vform.IMesmoEnderCorresp.value == '1'){
		setaEnderecoCorrespondencia();
		habDesabCamposEndCorresp(true);
	}else {
		//limpaEnderecoCorrespondencia();
		habDesabCamposEndCorresp(false);
	}
}


   
function habilitaCampos(){

	vform = document.forms[0];

	if (vform.ICdCalculo != null){
		vform.ICdCalculo.disabled = false;
	}
	if (vform.IDtContratacao != null){
		vform.IDtContratacao.disabled = false;
	}
	if (vform.IInicioVigencia != null){
		vform.IInicioVigencia.disabled = false;
	}
	if (vform.IFimVigencia != null){
		vform.IFimVigencia.disabled = false;
	}
	if (vform.ICpfCnpjProponente != null){
		vform.ICpfCnpjProponente.disabled = false;
	}
	if (vform.ITipoPessoa != null){
		vform.ITipoPessoa.disabled = true;
	}
	
	if (vform.ITpLogradouroCorrespondencia != null){
		vform.ITpLogradouroCorrespondencia.disabled = false;
	}
	if (vform.IEnderecoCorrespondencia != null){
		vform.IEnderecoCorrespondencia.disabled = false;
	}
	if (vform.IBairroCorrespondencia != null){
		vform.IBairroCorrespondencia.disabled = false;
	}
	if (vform.ICidadeCorresp!= null){
		vform.ICidadeCorresp.disabled = false;
	}
	if (vform.IUfCorrespondencia != null){
		vform.IUfCorrespondencia.disabled = false;
	}
	

	if (vform.ITpLogradouroResSede != null){
		vform.ITpLogradouroResSede.disabled = false;
	}
	if (vform.IEnderecoResSede != null){
		vform.IEnderecoResSede.disabled = false;
	}
	if (vform.IBairroResSede != null){
		vform.IBairroResSede.disabled = false;
	}
	if (vform.ICidadeResSede != null){
		vform.ICidadeResSede.disabled = false;
	}
	if (vform.IUfResSede != null){
		vform.IUfResSede.disabled = false;
	}
	
	if (vform.ICategoria != null){
		vform.ICategoria.disabled = false;
	}
	if (vform.IClausBeneficiaria != null){
		vform.IClausBeneficiaria.disabled = false;
	}

	if (vform.INomeRazaoSocial != null){
		vform.INomeRazaoSocial.disabled = false;
	}

}

function carregaCamposDependentesCalculo(){

vform = document.forms[0];

if(vform.flVoltouPag.value == "N"){
   carregaSegurado();
}
	
 desabilitaCamposProduto();
 habilitaRelatorioCalculo(); 
 calculoPeriodoVigSeguro();
 
}


function replaceAll(string, token, newtoken) {
	while (string.indexOf(token) != -1) {
 		string = string.replace(token, newtoken);
	}
	return string;
}

function desabilitaCamposProduto(){

	vform = document.forms[0];
	buscaItensProposta('2', vform.cdProduto.value,  vform.cdSubProduto.value);

}

function carregaSegurado(){

	vform = document.forms[0];

	if (vform.ICpfCnpjProponente.value != ''){
		
			var campos = new Array  ("ICdProponente", 
									 "INomeRazaoSocial",
									 "IDataFundNasc",
									 //"ITipoPessoa",
									 "ICpfCnpjProponente",
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
						 			 "ICidadeResSede",
						 			 
									 "IMesmoEnderCorresp",
									 
						 			 "ICepCorrespondencia",
						 			 "ITpLogradouroCorrespondencia",
						 			 "IEnderecoCorrespondencia",
						 			 "INumeroCorrespondencia",
						 			 "IComplementoCorrespondencia",
						 			 "IBairroCorrespondencia",
						 			 "IUfCorrespondencia",
						 			 "ICidadeCorresp",
						 			 "IMesmoEnderCorresp"
									);
			
			
			var camposCidade = new Array  (
						 			 "ITpLogradouroResSede",
						 			 "IEnderecoResSede",
						 			 "IComplementoResSede",
						 			 //"IBairroResSede",
						 			 "IUfResSede",
						 			 "ICidadeResSede",

						 			 "ITpLogradouroCorrespondencia",
						 			 "IEnderecoCorrespondencia",
						 			 "IComplementoCorrespondencia",
						 			 //"IBairroCorrespondencia",
						 			 "IUfCorrespondencia",
						 			 "ICidadeCorresp"
									);
			
			carregaInformacoesSegurado(campos, camposCidade, vform.ICpfCnpjProponente.value);
		
		
	}

}

function desabilitaNumUnidades(){

	var vform = document.forms[0];

if(vform.IEmitirCertificado != null && vform.INuUnidades != null){
	if (vform.IEmitirCertificado.value == 'S'){
		vform.INuUnidades.disabled = false;
	}else {
		vform.INuUnidades.disabled = true;
	}
}

}

function verificaDadosSegurado(){

var INomeRazaoSocial = document.getElementById("INomeRazaoSocial");
var ICpfCnpjProponente = document.getElementById("ICpfCnpjProponente");
var INomeProponente = document.getElementById("INomeProponente");
var NU_CPF_CNPJ_CALCULO = document.getElementById("NU_CPF_CNPJ_CALCULO");
var ICdProponente = document.getElementById("ICdProponente");

if(ICdProponente != null && ICdProponente.value != "" && NU_CPF_CNPJ_CALCULO != null && INomeRazaoSocial != null && ICpfCnpjProponente != null && INomeProponente != null){

if(NU_CPF_CNPJ_CALCULO.value == ICpfCnpjProponente.value){
  
  if(INomeRazaoSocial.value.trim() != INomeProponente.value.trim()){
    alert("O \"Nome/razão social\" informado no cálculo para o CPF/CNPJ "+NU_CPF_CNPJ_CALCULO.value+" está diferente da Base de Dados da SulAmérica."+"\n"+"Verifique se os dados informados estão corretos e efetue as alterações necessárias.");  
    INomeRazaoSocial.disabled = false;
  } 

}


}


}


function informaAlteracaoDadosSegurado(){

var INomeRazaoSocial = document.getElementById("INomeRazaoSocial");
var ICpfCnpjProponente = document.getElementById("ICpfCnpjProponente");
var INomeProponente = document.getElementById("INomeProponente");
var NU_CPF_CNPJ_CALCULO = document.getElementById("NU_CPF_CNPJ_CALCULO");

if(document.forms[0].flVoltouPag.value == "N"){

	if(NU_CPF_CNPJ_CALCULO != null && INomeRazaoSocial != null && ICpfCnpjProponente != null && INomeProponente != null){
	
		if(NU_CPF_CNPJ_CALCULO.value == ICpfCnpjProponente.value){
		  
		  if(INomeRazaoSocial.value.trim() != INomeProponente.value.trim()){
		    alert("O \"Nome/razão social\" informado no cálculo para o CPF/CNPJ "+NU_CPF_CNPJ_CALCULO.value+" está diferente da Base de Dados da SulAmérica."+"\n"+"As alterções nos dados do cadastro do segurado serão replicadas para os dados do cálculo.");  
		  } 
		
		}else{
		   alert("As alterções nos dados do cadastro do segurado serão replicadas para os dados do cálculo.");  
		}
	
	}

}

}
   
   
function calculoPeriodoVigSeguro(){

if(document.forms[0].ICdCalculo.value != "" ){
	var inicioVigencia = textoParaDate(document.getElementById('IInicioVigencia').value);
	var fimVigencia = textoParaDate(document.getElementById('IFimVigencia').value);
	var intervaloVigencia = contadorDiasEntreDatas(inicioVigencia,fimVigencia);
	
	if(document.getElementById('diferencaDias') != null ){
	  document.getElementById('diferencaDias').value = intervaloVigencia ;
	}
	
	document.getElementById('DT_INICIO_VIGENCIA').value = document.getElementById('IInicioVigencia').value;
}

} 

function atualizaPeriodoVigSeguro(valorData){

if(document.forms[0].ICdCalculo.value != "" ){

var dateIniVigOriginal = textoParaDate(document.getElementById('DT_INICIO_VIGENCIA').value);
var inicioVigencia = textoParaDate(valorData);
var intervaloVigencia = document.getElementById('diferencaDias').value;
var dataBaseCalculo = textoParaDate(document.getElementById('IDtContratacao').value);
var dataBase = textoParaDate(document.getElementById('dtBase').value);

var anoDataBase = dataBase.getFullYear();
var anoDataBaseCalculo = dataBaseCalculo.getFullYear();
var anoDataInicioVig = inicioVigencia.getFullYear();
var diferencaDiasCalculo = 0;
var diferencaDiasAtual = 0;

	if(anoDataBase == anoDataInicioVig ){
	  diferencaDiasAtual = contadorDiasEntreDatas(dataBase,inicioVigencia);	
	}else if(anoDataInicioVig < anoDataBase ){
	 diferencaDiasAtual = -1;
	}else {
	 diferencaDiasAtual = 100;
	}
/*
	if(anoDataBaseCalculo == anoDataInicioVig ){
	  diferencaDiasCalculo = contadorDiasEntreDatas(dataBaseCalculo,inicioVigencia);	
	}else if(anoDataInicioVig < anoDataBaseCalculo ){
	 diferencaDiasCalculo = -1;
	}else {
	 diferencaDiasCalculo = 100;
	}
*/
	if(diferencaDiasAtual < 0){
		//se vigência inválida, damos a data base para o início e a de fim damos mais um ano.
		DWRUtil.setValue("IInicioVigencia", document.getElementById('DT_INICIO_VIGENCIA').value);
		DWRUtil.setValue("IFimVigencia", dataIncrementaDias(dateIniVigOriginal,intervaloVigencia));
		mensagem = "O início de vigência do Seguro não pode ser inferior a presente data.";
		alert(mensagem);
	}/*else if(diferencaDiasCalculo > 30){
		//se o início for datatado em 30 dias para o futuro, também não devemos deixar passar.
		DWRUtil.setValue("IInicioVigencia", document.getElementById('DT_INICIO_VIGENCIA').value);
		DWRUtil.setValue("IFimVigencia", dataIncrementaDias(dateIniVigOriginal,intervaloVigencia));
        mensagem = "O início de vigência do Seguro não pode ser superior a 30 dias a contar a data do cálculo.";
		alert(mensagem);
	}*/else{
		//tudo correu bem, vamos dar o fim parra daqui a um ano.
		DWRUtil.setValue("IFimVigencia", dataIncrementaDias(inicioVigencia,intervaloVigencia));
	}
  
}


} 

  
   
//Só utilizado na tela de calculo   
function inicializaDatas(){}   
   