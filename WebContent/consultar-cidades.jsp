<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="s" uri="struts-tags" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display" %>

<link href="css/estilo.css" rel="stylesheet" type="text/css">
<link href="css/displaytag.css" rel="stylesheet" type="text/css">

<s:head theme="ajax"/>

<s:include value="menu.jsp"/> 

<div style="position:absolute; left:209px; top:84px; width:661px; height:132px; z-index:1; width:500"> 

	<s:form action="findAllCidades.do" method="POST">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr> 
			     <td colspan="1">
			     	<a href="inserir-cidades.jsp"><b>Cadastrar Cidades</b></a>
			     </td>
			     <td>
			     	<a href="generateTXTFile.do"><b>Gerar TXT</b></a>
			     </td>
			    
				<td>&nbsp;</td>

	      	</tr>

			<tr>

				<td>

					<s:autocompleter
						name="cidades.cidade" 
						label="Nome" 
						list="listCidades" 
						listKey="id"
						listValue="cidade" />

				</td>

				<td><s:submit value="Pesquisar" /></td>

			</tr>
		    <tr> 
	    	  <td colspan="4">
					<display:table class="table" pagesize="10" sort="list" name="listCidades" class="table" requestURI="findAllCidades.do" decorator="br.com.cadasilva.inss.decorator.CidadeDecorator">
						<display:column property="id" title="ID" />
						<display:column property="estado" title="UF" />
						<display:column property="cidade" title="Cidade" />
						<display:column property="idestado" title="Código" />
                    	<display:column property="link" title="Opcoes" style="text-align:center"/>	
					</display:table>
		      </td>
		    </tr>
		  </table>
	</s:form>

</div>