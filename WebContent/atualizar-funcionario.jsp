<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>

<jsp:useBean id="funcionario" scope="session" class="br.com.cadasilva.inss.model.Funcionario" />

 <link href="css/padraosulamerica.css" rel="stylesheet" type="text/css"/>   


<s:include value="menu.jsp"/>



<html> 

<script type="text/javascript" src="js/validacao.js"></script>
<script type="text/javascript" src="js/regrasItens.js"></script>

<title>Funcionários</title>

<s:head/>

<link href="css/estilo.css" rel="stylesheet" type="text/css">

<body>



<div id="Layer1" style="position:absolute; left:250px; top:100px; width:416px; height:376px; z-index:1"> 
<div class="conteudo">
	<fieldset>

		<legend><strong>Atualizar Funcionários</strong></legend>

		<s:include value="message.jsp"/>



		<s:form action="updateFuncionario" method="POST" validate="true">
			
			<s:hidden name="funcionario.id"/>
			<s:textfield name="funcionario.nome" label="Nome" maxlength="90" size="75"/>

			<s:textfield name="funcionario.cargoInicial" label="Cargo Inicial" maxlength="90" size="75"/>
			
			<s:textfield name="funcionario.cargoFinal" label="Cargo Final" maxlength="90" size="75"/>           
			
			<s:datetimepicker name="funcionario.dataInicial" label="Data Inicial" displayFormat="dd-MM-yyyy" />
			
			<s:datetimepicker name="funcionario.dataFinal" label="Data Final" displayFormat="dd-MM-yyyy" />
						
			<s:textfield name="funcionario.cpf" label="CPF" maxlength="14"  onkeydown="soNumero(this.value,this.name)" onkeyup="soNumero(this.value,this.name);getCpfExiste()" onblur="validaCpf(this)" />
			
			<s:textfield name="funcionario.identidade" label="Identidade" maxlength="20" size="20"/>
			
			<s:textfield name="funcionario.cartProfissional" label="Cart Profissional" maxlength="10"/>
			
			<s:textfield name="funcionario.nrSerie" label="Nr Série" maxlength="5" />
			
			<s:textfield name="funcionario.orgaoExpCartProf" label="UF Origem Cart Prof" maxlength="4" />
			
			<s:textfield name="funcionario.pis" label="PIS" maxlength="14" />
			
			<s:textfield name="funcionario.salInicial" label="Salário Inicial" maxlength="14" onkeydown="Formata(this,14,event,2)"/>
			
			<s:textfield name="funcionario.salFinal" label="Salário Final" maxlength="14" onkeydown="Formata(this,14,event,2)"/>
			
			<s:textfield name="funcionario.tempoServico" label="Temp Serviço" maxlength="14" />

				<s:submit value="Enviar"/>
                <a href="menu.jsp"><b>Retorno</b></a>

		</s:form>



	</fieldset>
</div>
</div>



</body>

</html>