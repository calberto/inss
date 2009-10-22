<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>

<link href="css/padraosulamerica.css" rel="stylesheet" type="text/css"/>  

<s:include value="menu.jsp"/>

<html> 
<script type='text/javascript' src='/inss/dwr/engine.js'></script>
<script type='text/javascript' src='/inss/dwr/util.js'></script>
<script type='text/javascript' src='/inss/dwr/interface/FacadeConsultaAdministracaoAjax.js'></script>
<script type='text/javascript' src='js/combos.js'></script>

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
		<legend><strong>Cadastrar Cidades</strong></legend>
		<s:include value="message.jsp"/>
 
		<s:form action="saveCidades.do" method="POST" validate="true">
		
			<a href="javascript:carregaEstado();">Estados</a> <!-- / <a href="javascript:limparEstado();">
					Limpar</a> -->
					<select id="comboEstado" name="agenciaEmpregos.uf" onclick="carregaCidade();" ></select>
					
		
			<s:textfield name="cidades.estado" label="UF" maxlength="10" size="10" value="document.getElementById(comboEstado).value"/>

			<label>Cidade</label>
					<select id="comboCidade" name="agenciaEmpregos.cidade"></select>
			
			<s:textfield name="cidades.idestado" label="Código" maxlength="10" size="10"/>
			
			<s:submit value="Enviar"/>
			<a href="menu.jsp"><b>Retorno</b></a>
		</s:form>
	
	</fieldset>
</div>
</div>

</body>
</html>