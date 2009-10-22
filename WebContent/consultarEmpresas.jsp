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

<s:include value="menu.jsp"/> 

</head>

<body>

<div style="position:absolute; left:209px; top:84px; width:661px; height:132px; z-index:1; width:500"> 




<form action="day.do" method="post">
	<table width="100%" border="0" cellspacing="0" cellpadding="0">
	<div class="conteudo">
	<fieldset id="DadosPessoais" style="display: block">
	<legend>Consultar Por:</legend>
		
	              <div class="modulo">
	                <label>Nome</label>
	                <input onClick="setOrderBy()" type="radio" name="radio" value="1" checked class="radio" />
	              
	                <label>Cnpj</label>
	                <input onclick="setOrderBy()" type="radio" name="radio" value="2" class="radio" />
	              
	                <label>Razao Social</label>
	                <input onClick="setOrderBy()" type="radio" name="radio" value="3" class="radio" />
	              
	                <label>Endereço</label>
	                <input onClick="setOrderBy()" type="radio" name="radio" value="4" class="radio" />
	              </div> 
	              <div class="modulo">
				  <label>Aplicação</label>
				  <s:iterator value="myList">
				  <!-- 
				    <select name="cdAplicacao" id="cdAplicacao" style="width:105px;" class="campos-select" >
				    <%= empresaDAO.getLista() %> 	
				     
				    </select>
				  -->
				  		<s:property/><br>
				     
				 </s:iterator>   
		  	    </div>
		  <tr>	  
		  	 <td><s:submit value="Pesquisar" /></td>
		  </tr>
		  <tr>	
		  
	    	  <td colspan="4">
					<s:iterator value="myList" status="n">
						<s:textfield name="%{n}"/><br>
					</s:iterator>
					
		      </td>
		    </tr>
		  
	</fieldset>
	</table>
	</div>
	
</form>
</div>
</body>
</html>	