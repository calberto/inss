<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="s" uri="struts-tags" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display" %>

<link href="css/estilo.css" rel="stylesheet" type="text/css">
<link href="css/displaytag.css" rel="stylesheet" type="text/css">

<s:head theme="ajax"/>

<s:include value="menu.jsp"/> 

<div style="position:absolute; left:209px; top:84px; width:661px; height:132px; z-index:1; width:500"> 

	<s:form action="findAllFuncionario.do" method="POST">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr> 
			     <td colspan="1">
			     	<a href="inserir-funcionario.jsp"><b>Cadastrar Funcionários</b></a>
			     </td>
			     <td>
			     	<a href="generateTXTFile.do"><b>Gerar TXT</b></a>
			     </td>
			    
				<td>&nbsp;</td>

	      	</tr>

			<tr>

				<td>

					<s:autocompleter
						name="funcionario.nome" 
						label="Funcionário" 
						list="listFuncionarios" 
						listKey="id"
						listValue="nome" />

				</td>

				<td><s:submit value="Pesquisar" /></td>

			</tr>
		    <tr> 
	    	  <td colspan="4">
				<display:table class="table" pagesize="10" sort="list" name="listFuncionarios" class="table" requestURI="findAllFuncionario.do" decorator="br.com.cadasilva.inss.decorator.FuncionarioDecorator">
					<display:column property="id" title="ID" />
					<display:column property="nome" title="Nome" />
					<display:column property="cpf" title="CPF" />
					<display:column property="cargoInicial" title="Cargo" />
					<display:column property="identidade" title="Identidade" />
					<display:column property="pis" title="PIS" />
					<display:column property="dataInicial" title="Data Inicial"  />
					<display:column property="dataFinal" title="Data Final" />
					<display:column property="tempoServico" title="Tempo de Serviço" />
                    <display:column property="link" title="Opcoes" style="text-align:center"/>
					
				</display:table>
		      </td>
		    </tr>
		  </table>
	</s:form>

</div>