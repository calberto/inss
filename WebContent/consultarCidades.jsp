<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:useBean id="cidades" scope="session" class="br.com.cadasilva.inss.model.Cidades" />


<%@ taglib prefix="s" uri="struts-tags" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display" %>
<%@ page import= "br.com.cadasilva.inss.dao.CidadesDAO" %>
<%@ page import= "br.com.cadasilva.inss.action.ActionCidades" %>


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


<s:head theme="ajax"/>

<s:include value="menu.jsp"/> 

</head>

<body>

<div style="position:absolute; left:209px; top:84px; width:661px; height:132px; z-index:1; width:500"> 




<form action="findAllCidades.do" method="post">
	
	<div class="conteudo">
		<input type="hidden" name="cidades.id" value="${cidades.id}" />
	    Cidades:
		<select name="cidades.id" id="id" size="1" >
			<c:forEach var="cidades" items="${listCidade}">
				<option value="<c:out value="${cidades.id}"/>"><c:out value="${cidades.cidade}"/></option>
				
				
			</c:forEach>
		</select>
		<input type="submit"/>
		<br/>
		<s:select label="Descrição" 
					name="descricao"
					headerKey="1"
					headerValue="-- Please Select --"
				    list="#{listCidade}" >
		</s:select>
			
		<br/>	
		Nome:
		<input type="text" name="cidades.estado" value="${cidades.estado }" />
		Descricao:
		<input type="text" name="cidades.cidade" value="${cidades.cidade }" />
	
	
	</div>
	
</form>
</div>
</body>
</html>