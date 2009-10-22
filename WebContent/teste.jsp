<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ taglib prefix="s" uri="struts-tags" %>
<link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/themes/base/jquery-ui.css" />
<meta name="keywords" content="jquery,user interface,ui,widgets,interaction,javascript" />
<meta name="description" content="jQuery UI is jQuery's user interface library that comes with many widgets, interaction modules and themes." />
<meta name="author" content="Paul Bakaus" />
	
	<link rel="shortcut icon" href="/images/favicon.ico" />
	<link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
	
			<link rel="stylesheet" href="http://static.jquery.com/ui/css/base2.css" type="text/css" media="all" />
			<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css" type="text/css" media="all" />
			<link rel="stylesheet" href="http://static.jquery.com/ui/css/demo-docs-theme/ui.theme.css" type="text/css" media="all" />
			<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
			<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js" type="text/javascript"></script>
			<script src="http://jquery-ui.googlecode.com/svn/tags/latest/external/bgiframe/jquery.bgiframe.min.js" type="text/javascript"></script>
			<script src="http://jquery-ui.googlecode.com/svn/tags/latest/ui/minified/i18n/jquery-ui-i18n.min.js" type="text/javascript"></script>
			<script src="/js/demos.js" type="text/javascript"></script>
			<script src="/themeroller/themeswitchertool/" type="text/javascript"></script>
<script src="../../lib/jquery.js" type="text/javascript"></script>

<script src="../../jquery.validate.js" type="text/javascript"></script>

<link href="css/estilo.css" rel="stylesheet" type="text/css">
<link href="css/displaytag.css" rel="stylesheet" type="text/css">
<script>jQuery.noConflit();</script>

<link href="css/padraosulamerica.css" rel="stylesheet" type="text/css"/>  
<link href="css/estilo.css" rel="stylesheet" type="text/css">
<link href="css/displaytag.css" rel="stylesheet" type="text/css">	
<script type='text/javascript' src='/inss/dwr/engine.js'></script>
<script type='text/javascript' src='/inss/dwr/util.js'></script>
<script type='text/javascript' src='/inss/dwr/interface/FacadeConsultaAdministracaoAjax.js'></script>
<script type='text/javascript' src='js/combos.js'></script>



<s:head theme="ajax"/>


<script type="text/javascript">
	$(function() {
		$("#tabs").tabs();
	});

	function Estado() {
		
		
		vform = document.forms[0];
		
			window.defaultStatus="Selecionando Estados...Ninho";
			//limpar();
			carregaEstadoConsult();
			document.getElementById("DadosRegraEstados").style.display = "block";

	}
	function cidades() {
	
		window.defaultStatus="Selecionando Cidades...Ninho";
		//limpar();
		carregaCidadeConsult();
		numRecordsConsult();
		
		//document.getElementById("DadosRegraCidade").style.display = "block";
		//teste = "Cidades";	
	}	

	function limpar() {
		document.forms[0].reset();
		DWRUtil.removeAllOptions("comboEstadoConsult");
		//DWRUtil.removeAllOptions("comboUf");
		DWRUtil.removeAllOptions("comboCity");
		DWRUtil.removeAllOptions("comboCpf");
		DWRUtil.removeAllOptions("comboCnpj");
		document.getElementById("DadosRegraCep").style.display = "none";
		document.getElementById("DadosRetornadosPorCep").style.display = "none";
		//document.getElementById("DadosRegraCidade").style.display = "none";
		document.getElementById("DadosRegraEstados").style.display = "none";
		document.getElementById("DadosRegraCnpj").style.display="none";
		document.getElementById("DadosRegraCpf").style.display="none";
		
	}
		
</script>
	
</head>

<body>
<div id="Layer1" style="position:absolute; left:150px; top:0px; width:960px; height:376px; z-index:1">

<br><br><br>

<div class="conteudo">
		

<form action="" method="post" name="form1">

<div id="formPrincipal" style="width: 100%; height: auto; margin: 0px; margin-top:3px;  ">


<div class="demo">

<div id="tabs">
	<ul>
		<li><a href="#tabs-1">Estados</a></li>
		<li><a href="#tabs-2">Cidades</a></li>
		<li><a href="#tabs-3">CEP's</a></li>
		<li><a href="#tabs-4">Cnpj's</a></li>
		<li><a href="#tabs-5">Cpf's</a></li>
	</ul>
	<div id="tabs-1">
		
	<fieldset id="DadosRegraEstados" style="display:block" >
		<legend>Consulta Geral de Estados</legend>
		<div class="modulo">
			<label>Resultado</label>
	</fieldset>	
    		<select name="comboEstadoConsult" id="comboEstadoConsult" onblur="Estado();" >
        		<option value="">-- Selecione um Estado --</option>
    		</select>
		</div>
	</div>
	<div id="tabs-2" >	
			
	<fieldset id="DadosRegraCidade" style="display:block" onclick="carregaEstadoConsult1();">
	    <legend>Consulta de Cidades por Estado</legend>
	    <div class="modulo">
			<label>UF</label>
			<select name="comboUf" id="comboUf"  onclick="cidades();">
		     	<option value="">-- Selecione um Estado --</option> 	
		    </select>
		</div>
	</fieldset>		
	<fieldset id="DadosDadosRetornadosPorCidade" style="display: block" onchange="carregaEstadoConsult1();">
		<div class="modulo">
			<label>Cidades</label>
	    	<select name="comboCity" id="comboCity" onchange ="numRecordsConsult();">
	        	<option value="">-- Selecione um Estado --</option>
	    	</select>
		</div>
			
		<div class="modulo">
			<label>Nr. Cidades:</label> 
			<input name="textEstados" id="textEstados" value=" "	size="4"  type="text" class="campos"/>
		</div>
	</fieldset>
	</div>	
	<div id="tabs-3">
	<fieldset id="DadosRegraCep" style="display: block" onclick="carregaAgenciaConsultCep();">
		 <legend>Consulta por Cep:</legend>	
		 <div class="modulo">
			<label>CEP</label> 
			<select name="comboCep" id="comboCep" onchange="carregaCepConsult();">
				<option value="">--Selecione um Cep--</option>
			</select>
		</div>
	</fieldset>
	<fieldset id="DadosRetornadosPorCep" style="display:block">
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
	</div>
	<div id="tabs-4">
	<fieldset id="DadosRegraCnpj" style="display: block" onclick="carregaAgenciaConsultCnpj();">
	    <legend>Consulta de Dados por CNPJ:</legend>
		<div class="modulo">
			<label>CNPJ</label> 
			<select name="comboCnpj" id="comboCnpj" onchange="carregaCnpjConsult();">
				<option value="">--Selecione um Cnpj--</option>
			</select>
		</div>
	</fieldset>	
	<fieldset id="DadosRetornadosPorCnpj" style="display:block">
	<legend>Dados Por Cnpj's </legend>	
		<table>
			<tr>
				<td>	
					<div class="modulo">				
						<label>Código:</label></td><td>			
						<input name="txtId" id="txtCnpjId" width="5" size="5" type="text"  />				
					</div>
				</td>
				<td>		
					<div class="modulo">
						<label>Nome:</label></td><td >
						<input name="txtAgencia" id="txtCnpjAgencia" size="30" type="text" align="left"/>
					</div>
				</td>
				<td>
					<div class="modulo">
						<label>Razão Social:</label></td><td>
						<input name="txtRazaoSocial" id="txtCnpjRazaoSocial" size="30" type="text" />
					</div>
				</td></tr>
				<tr><td>
					<div class="modulo">
						<label>Inscr.Estadual:</label></td><td>
						<input name="txtEmail" id="txtCnpjEmail" size="30" type="text" />
					</div>
				</td>
				<td>
					<div class="modulo">
						<label>Endereço:</label></td><td>
						<input name="txtEndereco" id="txtCnpjEndereco" size="30" type="text" />
					</div>
				</td>
				<td>
					<div class="modulo">
						<label>Complemento:</label></td><td>
						<input name="txtComplemento" id="txtCnpjComplemento" size="30" type="text" />
					</div>
				</td></tr>
				<tr><td>
					<div class="modulo">
						<label>Bairro:</label></td><td>
						<input name="txtBairro" id="txtCnpjBairro" size="30" type="text" />
					</div>
				</td>
				<td>
					<div class="modulo">
						<label>Cidade:</label></td><td>
						<input name="txtCidade" id="txtCnpjCidade" size="30" type="text" />
					</div>
				</td>
				<td>
					<div class="modulo">
						<label>UF:</label></td><td>
						<input name="txtEstado" id="txtCnpjEstado" size="2" type="text" />
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="modulo">
						<label>Telefone:</label></td><td>
						<input name="txtTelefone" id="txtCnpjTelefone" size="20" type="text" />
					</div>
				</td>
				<td>
					<div class="modulo">
						<label>Status:</label></td><td>
						<input name="txtStatus" id="txtCnpjStatus" size="15" type="text" />
					</div>
				</td>
			</tr>
		</table>
	</fieldset> 	
	</div>
	
	<div id="tabs-5">
	<fieldset id="DadosRegraCpf" style="display: block"  onclick="carregaAgenciaConsultCpf();">
	    <legend>Consulta de Dados por CPF:</legend>
		<div class="modulo">
			<label>CPF</label> 
			<select name="comboCpf" id="comboCpf" onchange="carregaCpfConsult();">
				<option value="">--Selecione um Cpf--</option>
			</select>
		</div>	
 	</fieldset>
	<fieldset id="DadosRetornadosPorCpf" style="display:block">
		<legend>Dados da Empresa:</legend>		
		
		<table width="95%" class="linhatable" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td>
		<div class="modulo">				
			<label>Código:</label>			
			<input name="txtId" id="txtCpfId" width="5" size="5" type="text"  />				
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Nome:</label></td><td width="32" height="44">			
			<input name="txtAgencia" id="txtCpfAgencia" size="30" type="text"  />
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Pis:</label></td><td>
			<input name="txtEmail" id="txtCpfEmail" size="30" type="text" />
		</div>
		</td></tr>
		<tr><td>
		<div class="modulo">
			<label>Identidade:</label></td><td>
			<input name="txtTelefone" id="txtCpfTelefone" size="10" type="text" />
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Órgão Expedidor:</label></td><td>
			<input name="txtOrgaoExpCartProf" id="txtOrgaoExpCartProf" size="5" type="text" />
		</div>
		</td>
		<td></td>
		<td>
		<div class="modulo">
			<label>Cart. Profissional:</label></td><td>
			<input name="txtCartProfissional" id="txtCartProfissional" size="10" type="text" />
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Nr. Série:</label></td><td>
			<input name="txtNrSerie" id="txtNrSerie" size="5" type="text" />
		</div>
		</td>
		</tr>
		<tr><td>
		<div class="modulo">
			<label>Data Inicial:</label></td><td>
			<input name="txtDataInicial" id="txtDataInicial" size="10" type="text" />
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Data Final:</label></td><td>
			<input name="txtDataFinal" id="txtDataFinal" size="10" type="text" />
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Cargo inicial:</label></td><td>
			<input name="txtCargoInicial" id="txtCargoInicial" size="10" type="text" />
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Cargo Final:</label></td><td>
			<input name="txtCargoFinal" id="txtCargoFinal" size="10" type="text" />
		</div>
		</td></tr>
		<tr><td>
		<div class="modulo">
			<label>Salário Inicial:</label></td><td>
			<input name="txtSalarioInicial" id="txtSalarioInicial" size="10" type="text" />
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Salário Final:</label></td><td>
			<input name="txtSalarioFinal" id="txtSalarioFinal" size="10" type="text" />
		</div>
		</td>
		<td>
		<div class="modulo">
			<label>Tempo Serviço:</label></td><td>
			<input name="txtTempoServico" id="txtTempoServico" size="10" type="text" />
		</div>
		</td>
		
		</tr>
		</table>
	</fieldset>	
	</div>
		
	</div><!-- End demo -->

	<div class="demo-description" style="display: none; ">

	<p>Click tabs to swap between content that is broken into logical sections.</p>

	</div><!-- End demo-description -->

	</div>
</form>
</div>
</div>
</body>
