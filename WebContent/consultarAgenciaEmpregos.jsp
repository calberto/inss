<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="s" uri="struts-tags" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display" %>

<link href="css/estilo.css" rel="stylesheet" type="text/css">
<link href="css/displaytag.css" rel="stylesheet" type="text/css">

<s:head theme="ajax"/>

<s:include value="menu.jsp"/> 

<div style="position:absolute; left:209px; top:84px; width:661px; height:132px; z-index:1; width:500"> 

<s:form action="findAllAgenciaEmpregos.do" method="POST">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr> 
			     <td colspan="1">
			     	<a href="inserir-agenciaEmpregos.jsp"><b>Cadastrar Agência Empregos</b></a>
			     </td>
			     <td>
			     	<a href="generateTXTFile.do"><b>Gerar TXT</b></a>
			     </td>
			    
				<td>&nbsp;</td>

	      	</tr>

			<tr>

				<td>

					<s:autocompleter
						name="agenciaEmpregos.agencia" 
						label="Nome" 
						list="listAgenciaEmpregos" 
						listKey="id"
						listValue="agencia" />

				</td>

				<td><s:submit value="Pesquisar" /></td>

			</tr>
		    <tr> 
	    	  <td colspan="4">
					<display:table class="table" pagesize="10" sort="list" name="listAgenciaEmpregos" class="table" requestURI="findAllAgenciaEmpregos.do" decorator="br.com.cadasilva.inss.decorator.AgenciaEmpregosDecorator">
						<display:column property="id" title="ID" />
						<display:column property="agencia" title="Nome" />
						<display:column property="endereco" title="Endereço" />
						<display:column property="complemento" title="Complemento" />
						<display:column property="bairro" title="Bairro" />
						<display:column property="cidade" title="Cidade" />
						<display:column property="uf" title="UF" />
						<display:column property="cep" title="CEP" />
						<display:column property="telefone" title="Telefone" />
						<display:column property="celular" title="Celular" />
						<display:column property="email" title="E-mail" />
						<display:column property="site" title="Site" />
						
						
                    	<display:column property="link" title="Opcoes" style="text-align:center"/>	
					</display:table>
		      </td>
		    </tr>
		  </table>
</s:form>
</div>
