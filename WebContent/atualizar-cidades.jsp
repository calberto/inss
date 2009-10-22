<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>

<jsp:useBean id="cidades" scope="session" class="br.com.cadasilva.inss.model.Cidades" />

 <link href="css/padraosulamerica.css" rel="stylesheet" type="text/css"/>   


<s:include value="menu.jsp"/>



<html> 


<script type="text/javascript" src="js/validacao.js"></script>
<script type="text/javascript" src="js/regrasItens.js"></script>

<title>Cidades</title>

<s:head/>

<link href="css/estilo.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
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
</script>
<body>



<div id="Layer1" style="position:absolute; left:250px; top:100px; width:416px; height:376px; z-index:1"> 
<div class="conteudo">
	<fieldset>

		<legend><strong>Atualizar Cidades</strong></legend>

		<s:include value="message.jsp"/>



		<s:form action="updateCidades" method="POST" validate="true">
			
			<s:hidden name="cidades.id"/>
			
			<s:textfield name="cidades.estado" label="UF" maxlength="10" size="10"/>

			<s:textfield name="cidades.cidade" label="Cidade" maxlength="90" size="75"/>
			
			<s:textfield name="cidades.uf.idestado" label="Código" maxlength="10" size="10"/>
		
				<s:submit value="Enviar"/>
                <a href="menu.jsp"><b>Retorno</b></a>

		</s:form>



	</fieldset>
</div>
</div>



</body>

</html>



