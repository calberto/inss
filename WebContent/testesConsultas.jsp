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

function executaMetodo() {
	alert('executaMetodo()');
	FacadeConsultaAdministracaoAjax.getFuncionario({
			callback:function(funcionario) {
				alert('Nome : ' + funcionario.nome);
				alert('Pis  : ' + funcionario.pis);
			}
		})
}
</script>
</head>
<body>
Olá DWR. <a href="javascript:executaMetodo()">Executar Teste</a>
</body>
</html>