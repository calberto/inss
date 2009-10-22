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


	
</script>
<s:include value="menu.jsp"/> 

</head>

<body >

<div id="Layer1" style="position:absolute; left:150px; top:100px; width:916px; height:376px; z-index:1">

<br><br><br>

	<div class="conteudo">
	
	
		<form action="" method="post" name="form1">
			
			<div class="imagetopform">Escolha de Estados e Cidades</div>
				
			<div id="conteudo-bloco">
				
			<div class="conteudo">
				
						
				<a href="javascript:carregaEstado();">Estados</a> <!-- / <a href="javascript:limparEstado();">
				Limpar</a> -->
				<select id="comboEstado" name="agenciaEmpregos.uf" onclick="carregaCidade();" onchange="numRecords();"></select>
					
			   	<label>Cidade</label>
				<select id="comboCidade" name="agenciaEmpregos.cidade" ></select>
					
			<div class="modulo">
				<label>Nr. Cidades:</label> 
				<input name="textEstados" id="textEstados" value="estados"	size="10"  type="text" class="campos"/>
			</div>			
	        
	           
			</div>
			</div>
			
	</form>

	</div>
</div>
</body>
</html>