<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>

<%@ page import="br.com.cadasilva.inss.action.ActionEmpresa"%>
<%@ page import="br.com.cadasilva.inss.dao.EmpresaDAO"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Select Tag Example</title>
</head>
<body>
	<h1><span style="background-color:#FFFFcc">Select Tag Example!</span></h1>
	<s:form>
		
		
		
      			
		
		<s:select label="Select Month"
			name="monthname"
			headerKey="1"
			headerValue="__ Please Select __"
			list="#{'01':'January','02':'February','03':'March','04':'April','05':'May','06':'June','07':'July','08':'August',
			'09':'September','10':'Octuber','11':'November','12':'December' }"
		/>	
		
		<label>Empresas</label>
            	<select name='day' id='day' class='campos-select' >
				<%= ActionEmpresa.getInstancia().getLista() %>
				</select>
         
      			<div class="modulo">
					<label>Tipo Resposta</label> 
					<select name="tipoResposta" id="tipoResposta" class="campos-select" >
					       <%= ActionEmpresa.getInstancia().getLista() %> 
					 </select>
				</div>
		
		
	</s:form>

</body>
</html>