<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display" %>
<%@page import="br.com.cadasilva.inss.util.Conexao"%>


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
<script type='text/javascript' src='/inss/dwr/engine.js'></script>
<script type='text/javascript' src='/inss/dwr/util.js'></script>
<script type='text/javascript' src='/inss/dwr/interface/FacadeConsultaAdministracaoAjax.js'></script>
<script type='text/javascript' src='js/combos.js'></script>


<s:head theme="ajax"/>
<meta http-equiv="Cache-Control"
	content="no-cache, must-revalidate, no-store">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link href="css/padraosulamerica.css" rel="stylesheet" type="text/css" />
<!--  Menu -->
<script src="js/menuFrame/MenuBarVertical.js" type="text/javascript"></script>
<script type="text/javascript" src="js/menuFrame/subMenu.js"></script>
<script type="text/javascript" src="js/popup/jquery.js"></script>

<script language="JavaScript" type="text/javascript">
function testeRadio() {
	
	
	vform = document.forms[0];
	if (vform.opcao[0].checked) {
		window.defaultStatus="Selecionando Estados...Ninho";
		teste = "UF";
		
		limpar();
		carregaEstadoConsult();
		document.getElementById("DadosRegraEstados").style.display = "block";
		
	}else if (vform.opcao[1].checked) {
		window.defaultStatus="Selecionando Cidades...Ninho";
		limpar();
		carregaEstadoConsult1();
		document.getElementById("DadosRegraCidade").style.display = "block";
		teste = "Cidades";
		
			
	} else if (vform.opcao[2].checked) {
		window.defaultStatus="Selecionando CEPs...Ninho";
		limpar();
		carregaAgenciaConsultCep();
		document.getElementById("DadosRegraCep").style.display = "block";
		teste = "CEPs";
		document.getElementById("DadosRetornadosPorCep").style.display = "block";
		//alert(teste).value;
		
	} else if (vform.opcao[3].checked) {
		window.defaultStatus="Selecionando CNPJs...Ninho";
		limpar();
		carregaAgenciaConsultCnpj();
		document.getElementById("DadosRegraCnpj").style.display="block";
		teste = "CNPJs";
		document.getElementById("DadosRetornadosPorCnpj").style.display="block";
		//alert(teste).value;
		
	} else if (vform.opcao[4].checked) {
		window.defaultStatus="Selecionando CPFs...Ninho";
		limpar();
		carregaAgenciaConsultCpf();
		document.getElementById("DadosRegraCpf").style.display="block";
		document.getElementById("DadosRetornadosPorCpf").style.display="block";
		teste = "CPFs";
		//alert(teste).value;
	} else {
		teste = "";
		alert("Favor escolher uma opção!!!");

	}
	
}

function limpar() {
	document.forms[0].reset();
	DWRUtil.removeAllOptions("comboEstadoConsult");
	DWRUtil.removeAllOptions("comboUf");
	DWRUtil.removeAllOptions("comboCity");
	DWRUtil.removeAllOptions("comboCpf");
	DWRUtil.removeAllOptions("comboCnpj");
	document.getElementById("DadosRegraCep").style.display = "none";
	document.getElementById("DadosRetornadosPorCep").style.display = "none";
	document.getElementById("DadosRegraCidade").style.display = "none";
	document.getElementById("DadosRegraEstados").style.display = "none";
	document.getElementById("DadosRegraCnpj").style.display="none";
	document.getElementById("DadosRegraCpf").style.display="none";
	
}

</script>
<s:include value="menu.jsp"/> 

</head>

<body>
<div id="Layer1" style="position:absolute; left:150px; top:0px; width:960px; height:376px; z-index:1">

<br><br><br>

	<div class="conteudo">
	

<form action="" method="post" name="form1">

<div id="formPrincipal" style="width: 100%; height: auto; margin: 0px; margin-top:3px;  ">
<div id="linha-laranja"><div id="linha-azul"></div></div>
<div class="imagetopform">Escolha de Consultas Diversas</div>

<div id="conteudo-bloco">

<div class="conteudo">
	
	<div class="modulo">
		<label>UF</label>
	    <input type="radio" name="opcao" value="UF" class="radio"/>
     </div>

	<div class="modulo">
		<label>Cidade</label>
		<input type="radio" name="opcao" value="Cidades" class="radio"/>
	</div>

	<div class="modulo">
		<label>CEP</label>
		<input type="radio" name="opcao" value="CEPs" class="radio"/>
	</div>

	<div class="modulo">
		<label>CNPJ</label>
		<input type="radio" name="opcao" value="CNPJs" class="radio"/>
	</div>
	
	<div class="modulo">
		<label>CPF</label>
		<input type="radio" name="opcao" value="CPFs" class="radio"/>
	</div>


	
	<fieldset id="DadosRegraEstados" style="display: none">
	    <legend>Consulta Geral de Estados</legend>
		<div class="modulo">
			<label>Resultado</label>
    		<select name="comboEstadoConsult" id="comboEstadoConsult" >
        		<option value="">-- Selecione um Estado --</option>
    		</select>
		</div>
	</fieldset>


	<fieldset id="DadosRegraCidade" style="display: none">
	    <legend>Consulta de Cidades por Estado</legend>
	    	<div class="modulo">
				<label>UF</label>
		    	<select name="comboUf" id="comboUf" onclick="carregaCidadeConsult();" onchange="numRecordsConsult();">
		        	<option value="">-- Selecione um Estado --</option>
		    	</select>
			</div>
				
			<div class="modulo">
				<label>Cidades</label>
	    		<select name="comboCity" id="comboCity" >
	        		<option value="">-- Selecione um Estado --</option>
	    		</select>
		
			</div>
			<div class="modulo">
				<label>Nr. Cidades:</label> 
				<input name="textEstados" id="textEstados" value=" "	size="4"  type="text" class="campos"/>
			</div>
	</fieldset>
	
	<fieldset id="DadosRegraCep" style="display: none">
	    <legend>Consulta por Cep:</legend>
		
		<div class="modulo">
			<label>CEP</label> 
			<select name="comboCep" id="comboCep" onclick="carregaCepConsult();">
				<option value="">--Selecione um Cep--</option>
			</select>
		</div>
		
		<fieldset id="DadosRetornadosPorCep" style="display:none">
			<legend>Dados da Empresa</legend>   
			
			<div class="modulo">				
				<label>Código:</label>			
				<input name="txtId" id="txtId" width="5" size="5" type="text"  />				
			</div>
			
			<div class="modulo">
				<label>Nome:</label>			
				<input name="txtAgencia" id="txtAgencia" width="50" size="50" type="text"  />
			</div>
			<div class="modulo">
				<label>Email:</label>
				<input name="txtEmail" id="txtEmail" size="50" type="text" />
			</div>
			<div class="modulo">
				<label>Telefone:</label>
				<input name="txtTelefone" id="txtTelefone" size="20" type="text" />
			</div>
	
		</fieldset>
	
	</fieldset>
	
	<fieldset id="DadosRegraCnpj" style="display: none">
	    <legend>Consulta de Dados por CNPJ:</legend>
		<div class="modulo">
			<label>CNPJ</label> 
			<select name="comboCnpj" id="comboCnpj" onclick="carregaCnpjConsult();">
				<option value="">--Selecione um Cnpj--</option>
			</select>
		</div>
		
		<fieldset id="DadosRetornadosPorCnpj" style="display:none">
			<legend>Dados da Empresa</legend>
			
			<div class="modulo">				
				<label>Código:</label>			
				<input name="txtId" id="txtCnpjId" width="5" size="5" type="text"  />				
			</div>
			
			<div class="modulo">
				<label>Nome:</label>			
				<input name="txtAgencia" id="txtCnpjAgencia" size="50" type="text"  />
			</div>
			<div class="modulo">
				<label>Inscr.Estadual:</label>
				<input name="txtEmail" id="txtCnpjEmail" size="50" type="text" />
			</div>
			<div class="modulo">
				<label>Telefone:</label>
				<input name="txtTelefone" id="txtCnpjTelefone" size="20" type="text" />
			</div>
	
		</fieldset>
	
		
	</fieldset>
	
	<fieldset id="DadosRegraCpf" style="display: none">
	    <legend>Consulta de Dados por CPF:</legend>
		<div class="modulo">
			<label>CPF</label> 
			<select name="comboCpf" id="comboCpf" onclick="carregaCpfConsult();">
				<option value="">--Selecione um Cpf--</option>
			</select>
		</div>	
 	
		<fieldset id="DadosRetornadosPorCpf" style="display:none">
			<legend>Dados da Empresa:</legend>
			
			<div class="modulo">				
				<label>Código:</label>			
				<input name="txtId" id="txtCpfId" width="5" size="5" type="text"  />				
			</div>
			<div class="modulo">
				<label>Nome:</label>			
				<input name="txtAgencia" id="txtCpfAgencia" size="30" type="text"  />
			</div>
			<div class="modulo">
				<label>Pis:</label>
				<input name="txtEmail" id="txtCpfEmail" size="30" type="text" />
			</div>
			<div class="modulo">
				<label>Identidade:</label>
				<input name="txtTelefone" id="txtCpfTelefone" size="10" type="text" />
			</div>
		</fieldset>
		
	</fieldset>
	
	<div id="modulo-limpar"></div>
	
	<div id="layerbotao" >
		<input name="buttonConfirmar" type="button"
		name="confirmar" value="Confirmar" class="botao3"
		onclick="testeRadio();" /></div>
		
		<tr><td>
				<a href="menu.jsp"><b>Retorno</b></a>
		    </td>
		</tr>
	</div>
	
	</div>

</form>

</div>
</div>
</body>
</html>