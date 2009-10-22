<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="s" uri="struts-tags" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display" %>
<%@ page import= "br.com.cadasilva.inss.dao.EmpresaDAO" %>
<%@ page import= "br.com.cadasilva.inss.action.ActionEmpresa" %>
<% EmpresaDAO empresaDAO = new EmpresaDAO(); %>

<%
response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
response.setHeader("Pragma","no-cache"); //HTTP 1.0
response.setDateHeader ("Expires", 0); //prevents caching at the proxy server
%>
<html>
<head>
<link href="css/estilo.css" rel="stylesheet" type="text/css">
<link href="css/displaytag.css" rel="stylesheet" type="text/css">
<!--
<link href="css/padraosulamerica.css" rel="stylesheet" type="text/css"/>  
 -->

<s:head theme="ajax"/>



</head>
<body>
	<div id="Layer1" style="position:absolute; left:250px; top:100px; width:416px; height:376px; z-index:1"> 
	<div class="conteudo">
	<fieldset>
	
	<s:form action="update" method="post">
	
		<s:iterator value="listEmpresas" status="emp">
		
			<s:hidden name="listEmpresas[%{#emp.index].id"
			value="%{listEmpresas[#emp.index].id}"/>
			<s:textfield label="Name"
			name="listEmpresas[%{#emp.index].nome"
			value="%{listEmpresas[#emp.index].nome}"/>
			<s:textfield label="Cidade"
			name="listEmpresas[%{#emp.index].cidade"
			value="%{listEmpresas[#emp.index].cidade}"/>
			<s:textfield name="cidades.estado" label="UF" maxlength="10" size="10"/>
		<br/>	
		</s:iterator>
		<s:submit value="Update"/>
	</s:form>		
			
	</fieldset>
	</div>
	</div>		
		
		
	
	
	
</body>
</html>