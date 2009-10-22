<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display" %>

<%@ page import= "br.com.cadasilva.inss.action.FacadeConsultaAdministracaoAjax" %>
<%@ taglib uri='/WEB-INF/tlds/sena.tld' prefix='sena' %>
<%@ page import= "br.com.cadasilva.inss.dao.CidadesDAO" %>
<%@ page import= "br.com.cadasilva.inss.action.ActionCidades" %>
<%@ page import= "br.com.cadasilva.inss.action.NgcInss" %>
<jsp:useBean id="cidades" scope="session" class="br.com.cadasilva.inss.model.Cidades" />

<%
response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
response.setHeader("Pragma","no-cache"); //HTTP 1.0
response.setDateHeader ("Expires", 0); //prevents caching at the proxy server
%>
<html>
<head>

<link href="css/estilo.css" rel="stylesheet" type="text/css">
<link href="css/displaytag.css" rel="stylesheet" type="text/css">

<link href="css/padraosulamerica.css" rel="stylesheet" type="text/css"/>  
<link href="css/estilo.css" rel="stylesheet" type="text/css">
<link href="css/displaytag.css" rel="stylesheet" type="text/css">	
<script type="text/javascript" src="js/engine.js"></script>
<script type="text/javascript" src="js/util.js"></script>
<script type="text/javascript" src="js/dwr.js"></script>


<s:head theme="ajax"/>
<meta http-equiv="Cache-Control"
	content="no-cache, must-revalidate, no-store">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link href="css/padraosulamerica.css" rel="stylesheet" type="text/css" />
<!--  Menu -->
<script src="js/menuFrame/MenuBarVertical.js" type="text/javascript"></script>
<script type="text/javascript" src="js/menuFrame/subMenu.js"></script>
<script type="text/javascript" src="js/popup/jquery.js"></script>

<script type='text/javascript' src='/inss/dwr/engine.js'></script>
<script type='text/javascript' src='/inss/dwr/util.js'></script>
<script type='text/javascript' src='/inss/dwr/interface/FacadeConsultaAdministracaoAjax.js'></script>
<script type='text/javascript' src='js/combos.js'></script>
<script type="text/javascript" src="js/validacao.js"></script>


<script language="JavaScript" type="text/javascript">





var listaCampos = ['strEstado','strCidade'];

function popular(){
	
	window.location.href=("buscaEstadoAgencia.do?");
}


function popularCityAgenda(id){
	i = id.value;
	opcao = id.value;
	alert(id.value);
	window.location.href=("popularCity.do?idEstado=")+i;
}


function validaCpf(campo) {
	
	vform = document.form1;
	cpf = campo.value;
	
	if(cpf != "") {
	  if (!ChecaCPF(cpf) && !validaCgc(cpf)) {
      
        alert('CPF/CNPJ inválido!\nInforme um CPF/CNPJ válido para o segurado.'); 
        vform.cpfCnpj.focus();
      }
    }
}



function validateUf() {
	vform = document.forms[0]; 
	uf = new String(vform.ajax_uf.value);
	
	//var uf = document.getElementById("ajax_uf");
	
	var url = "/ajaxcidades/uf?uf = " + escape(uf.value);
	alert(url);
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	} else if (window.ActiveXObject()) {
		req = new ActiveXObject("microsoft.XMLHTTP");
	}

	req.open("Get",url,true);
	req.onreadystatechange = callbackUf;
	req.send(null);
}		

function callbackUf() {
	if (req.readystate == 4) {
		if (req.status == 200) {
			ufCheck();
		}
	}		
}

function ufCheck() {
	//nós apenas queremos um boolean de volta, por isso, nenhuma operção de parse é necessário
	ufExists = request.responseText;
	var uf = document.getElementById("ajax_uf");
	if (ufExists == "true") {
		alert("Choose another state, " + uf.value + " exists already");
		uf.value = "";
		uf.focus();
	}

	
}


</script>
<s:include value="menu.jsp"/> 

</head>
<body>

<div id="Layer1" style="position:absolute; left:250px; top:100px; width:516px; height:376px; z-index:1"> 
<div class="conteudo">
	
		
		<s:include value="message.jsp"/>
 
 		<input type="hidden" name="estado.id" value="${estado.id}" />
 		
 
		<s:form action="saveAgenciaEmpregos.do" method="POST"><input type="hidden" name="agenciaEmpregos.id" value="${agenciaEmpregos.id}" />
			<div id="formPrincipal">
				<div class="imagetopform">Cadastrar Agencias de Empregos</div>
				
				<div id="conteudo-bloco">
			
				
					<s:textfield name="agenciaEmpregos.agencia" label="Nome" maxlength="90" size="75"/>
					
					<s:textfield name="agenciaEmpregos.endereco" label="Endereço" maxlength="90" size="75"/>
					
					<s:textfield name="agenciaEmpregos.complemento" label="Complemento" maxlength="90" size="75"/>
					
					<s:textfield name="agenciaEmpregos.bairro" label="Bairro" maxlength="90" size="75" />
					        		
			        <s:textfield name="agenciaEmpregos.cep" label="CEP" maxlength="9"  onkeypress="formatar_mascara(this, '#####-###')" />
					
					<tr><td rowspan="1" colspan="10">
						<a href="javascript:carregaEstado();">Estados</a> <!-- / <a href="javascript:limparEstado();">
					Limpar</a> -->
					<select id="comboEstado" name="agenciaEmpregos.uf" onclick="carregaCidade();" ></select>
					
					
			   		<a href="javascript:carregaCidade();">Cidades</a>  <!-- / <a href="javascript:limparEstado();">
					Limpar</a> -->
					<select id="comboCidade" name="agenciaEmpregos.cidade"></select>
					<br><br>
					
					</td></tr>
						
			   		<s:textfield name="agenciaEmpregos.telefone" label="Telefone" maxlength="14" onkeypress="Mascara('TEL',this,event);"/>
					
					<s:textfield name="agenciaEmpregos.celular" label="Celular" maxlength="14" onkeypress="Mascara('TEL',this,event);"/>
					
					<s:textfield name="agenciaEmpregos.email" label="E-Mail" maxlength="90" size="75" onkeyup="this.value = this.value.toLowerCase()" onblur="ValidaEmail();"/>
					
					<s:textfield name="agenciaEmpregos.site" label="Site" maxlength="90" size="75"/>
					
			</div>
			<s:submit value="Enviar"/>
			
			<a href="menu.jsp"><b>Retorno</b></a>
			</div>
		</s:form>
	
	<!-- 	<s:select list="listUnidades" id="id" listKey="id" listValue="sigla"></s:select>  -->		
		 	
</div>
</div>

</body>
</html>