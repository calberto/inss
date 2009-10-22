<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>

<script type='text/javascript' src='js/teste.js'></script>
<link href="css/displaytag.css" rel="stylesheet" type="text/css">

<div id="Layer1" style="position:absolute; left:194px; top:-2px; width:520px; height:5px; z-index:1; background-color: #FFFFFF; layer-background-color: #FFFFFF; border: 1px none #000000;"> 
  <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
    <tr>
      <td><table width="100%" border="0" cellpadding="0" cellspacing="2" bordercolor="snow">
          <tr> 
            <td colspan="1" bgcolor="whiteSmoke"><strong>Menu</strong></td>
            <td colspan="1" bgcolor="whiteSmoke"><strong><s:a href="logout.do"><%=session.getAttribute("login_user")%> (logout)</s:a></strong></td>
          </tr>
          <tr> 
            <td bgcolor="whiteSmoke"> <div align="center"><strong><a href="consultar-empresas.jsp">Empresas</a></strong></div></td>
            <td bgcolor="whiteSmoke"> <div align="center"><strong><a href="consultasDiversas.jsp">Consultas Diversas</a></strong></div></td>   
            <td bgcolor="whiteSmoke"> <div align="center"><strong><a href="consultar-funcionario.jsp">Funcionários</a></strong></div></td>
            <td bgcolor="whiteSmoke"> <div align="center"><strong><a href="consultar-cidades.jsp">Cidades</a></strong></div></td>
           <!--  <td bgcolor="whiteSmoke"> <div align="center"><strong><a href="findAllListaTodasCidades.do">Estados</a></strong></div></td>  -->
        	<td bgcolor="whiteSmoke"> <div align="center"><strong><a href="testesConsultas.jsp">Testes</a></strong></div></td>
        	<td bgcolor="whiteSmoke"> <div align="center"><strong><a href="testeJQueryUi.jsp">Estados</a></strong></div></td>  	    
		
            <td bgcolor="whiteSmoke"> &nbsp;</td>
          </tr>
        </table></td>
    </tr>
  </table>
</div>
