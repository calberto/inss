<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>

<jsp:useBean id="empresa" scope="session" class="br.com.cadasilva.inss.model.Estado" />

 <link href="css/padraosulamerica.css" rel="stylesheet" type="text/css"/>   


<s:include value="menu.jsp"/>



<html> 


<script type="text/javascript" src="js/validacao.js"></script>
<script type="text/javascript" src="js/regrasItens.js"></script>

<title>Estados</title>

<s:head/>

<link href="css/estilo.css" rel="stylesheet" type="text/css">

<body>



<div id="Layer1" style="position:absolute; left:250px; top:100px; width:416px; height:376px; z-index:1"> 
<div class="conteudo">
	<fieldset>

		<legend><strong>Atualizar Estado</strong></legend>

		<s:include value="message.jsp"/>



		<s:form action="updateEstado" method="POST" validate="true">
			
			<s:hidden name="estado.id"/>
			
			<s:textfield name="estado.sigla" label="UF" maxlength="10" size="10"/>

			<s:textfield name="estado.descricao" label="Descrição" maxlength="90" size="75"/>
		
				<s:submit value="Enviar"/>
                <a href="menu.jsp"><b>Retorno</b></a>

		</s:form>



	</fieldset>
</div>
</div>



</body>

</html>



