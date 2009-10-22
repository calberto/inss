<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>

<jsp:useBean id="agenciaEmpregos" scope="session" class="br.com.cadasilva.inss.model.AgenciaEmpregos" />

 <link href="css/padraosulamerica.css" rel="stylesheet" type="text/css"/>   


<s:include value="menu.jsp"/>



<html> 

<script type='text/javascript' src='/inss/dwr/engine.js'></script>
<script type='text/javascript' src='/inss/dwr/util.js'></script>
<script type='text/javascript' src='/inss/dwr/interface/FacadeConsultaAdministracaoAjax.js'></script>
<script type='text/javascript' src='js/combos.js'></script>


<script type="text/javascript" src="js/validacao.js"></script>
<script type="text/javascript" src="js/regrasItens.js"></script>

<title>Agência Empregos</title>

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

		<legend><strong>Atualizar Agências Empregos</strong></legend>

		<s:include value="message.jsp"/>



		<s:form action="updateAgenciaEmpregos" method="POST" validate="true">
			
			<s:hidden id="id" name="agenciaEmpregos.id"/>
			
			<s:textfield name="agenciaEmpregos.agencia" label="Nome" maxlength="90" size="75"  onfocus="loadOnlyAState();"/>

			<s:textfield name="agenciaEmpregos.endereco" label="Endereço" maxlength="90" size="75"/>
			
			<s:textfield name="agenciaEmpregos.complemento" label="Complemento" maxlength="90" size="75"/>
			
			<s:textfield name="agenciaEmpregos.bairro" label="Bairro" maxlength="90" size="75" onblur="loadOnlyAState();"/>
			
			<tr><td rowspan="1" colspan="10">
						<a href="javascript:carregaEstado();">Estados</a> <!-- / <a href="javascript:limparEstado();">
					Limpar</a> -->
					<select id="comboEstado" name="agenciaEmpregos.uf" onclick="carregaCidade();" ></select>
					
					
			   		<a href="javascript:carregaCidade();">Cidades</a>  <!-- / <a href="javascript:limparEstado();">
					Limpar</a> -->
					<select  id="comboCidade" name="agenciaEmpregos.cidade"></select>
					<br><br>
					
			</td></tr>
					
			<s:textfield name="agenciaEmpregos.cep" label="CEP" maxlength="9" onkeypress="formatar_mascara(this, '#####-###')"/>
			
			<s:textfield name="agenciaEmpregos.telefone" label="Telefone" maxlength="14" onkeypress="Mascara('TEL',this,event);"/>
			
			<s:textfield name="agenciaEmpregos.celular" label="Celular" maxlength="14" onkeypress="Mascara('TEL',this,event);"/>
			
			<s:textfield name="agenciaEmpregos.email" label="E-Mail" maxlength="90" size="75" onkeyup="this.value = this.value.toLowerCase()"/>
			
			<s:textfield name="agenciaEmpregos.site" label="Site" maxlength="90" size="75"/>
	
			<s:submit value="Enviar"/>
            
            <a href="menu.jsp"><b>Retorno</b></a>

		</s:form>



	</fieldset>
</div>
</div>



</body>

</html>



