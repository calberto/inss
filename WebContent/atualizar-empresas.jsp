<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="struts-tags" %>


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


	


function show(){
	alert('Estou na show()')
    document.location.href ="comboEmpresa.do?id="+1;
}

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
<s:include value="menu.jsp"/> 

</head>
<body>



<div id="Layer1" style="position:absolute; left:250px; top:100px; width:416px; height:376px; z-index:1"> 
<div class="conteudo">
	<fieldset>

		<legend><strong>Atualizar Empresas</strong></legend>

		<s:include value="message.jsp"/>



		<s:form action="updateEmpresa" method="POST" validate="true">
			
			<s:hidden name="empresa.id"/>
			
			<s:textfield name="empresa.nome" label="Nome" maxlength="90" size="75"/>

			<s:textfield name="empresa.razaoSocial" label="Razão Social" maxlength="90" size="75"/>
			
			<s:textfield name="empresa.endereco" label="Endereço" maxlength="90" size="75"/>
				
			<s:textfield name="empresa.complemento" label="Complemento" maxlength="90" size="75"/>            
			
			<s:textfield name="empresa.bairro" label="Bairro" maxlength="90" size="75"/>
			
			<s:select id="comboEstado" emptyOption="true" list="listUf" listKey="id" listValue="sigla" name="empresa.uf" value="empresa.uf" label="UF" onclick="carregaCidadeEmpresa();"/>
			 <tr><td>
			 <label>Cidade:</label></td>
			 <td>
			 <select id="comboCidade" name="empresa.cidade"></select>
			</td></tr>
			
			
			<s:textfield name="empresa.telefone" label="Telefone" maxlength="14" onkeypress="Mascara('TEL',this,event);"/>
			
			<s:textfield name="empresa.cnpj" label="CNPJ" maxlength="18"  onkeydown="soNumero(this.value,this.name)" onkeyup="soNumero(this.value,this.name)" onblur="validaCpf(this)" />
			
			<s:textfield name="empresa.insc_estadual" label="Inscr Estadual" />
			
			<s:textfield name="empresa.status" label="Status" />
		
			<s:submit value="Enviar"/>
            <a href="menu.jsp"><b>Retorno</b></a>

	

		</s:form>

	</fieldset>
</div>
</div>



</body>

</html>



