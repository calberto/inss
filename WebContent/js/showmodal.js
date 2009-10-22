function Modal(valor){
	if (valor ==  "show"){
		document.getElementById('modal').style.display = 'block';
		document.getElementById('process').style.display = 'block';
	} else {
		document.getElementById('modal').style.display = 'none';
		document.getElementById('process').style.display = 'none';
	}	
}

function AbrirModalDiv(titulo, nmDiv, chave, style, msg){

	if (document.getElementById(nmDiv) != null){

		var html = "";
		html = gerarHtmlModalDiv(titulo, nmDiv, chave, style, msg);
		document.getElementById('modal').style.display = 'block';
	    document.getElementById('divshowmodal').style.display = 'block';
		
		document.getElementById("divshowmodal").innerHTML = html;
	
	}  else if (msg != ""){
	
		var html = "";
		html = gerarHtmlModalMsg(titulo, chave, style, msg);
		document.getElementById('modal').style.display = 'block';
	    document.getElementById('divshowmodal').style.display = 'block';
		
		document.getElementById("divshowmodal").innerHTML = html;
	
	}
}

function CancelarModalDiv(nmDiv){

		document.getElementById('modal').style.display = 'none';
		document.getElementById('divshowmodal').style.display = 'none';
		
		document.getElementById("divshowmodal").innerHTML = "";
		
}

function SalvarModalDiv(nmDiv){

	if (document.getElementById(nmDiv) != null){
	
		document.getElementById('modal').style.display = 'none';
		document.getElementById('divshowmodal').style.display = 'none';
		
		document.getElementById(nmDiv).innerHTML = document.getElementById("TB_ajaxContent").innerHTML;
		document.getElementById("divshowmodal").innerHTML = "";
		
	}

}


function gerarHtmlModalDiv(titulo, nmDiv, chave, style){
	var html = "";
	
	html = html + "<div class='TB-formpopup' style='height:auto;' >";
	html = html + "<div id='linha-laranja'><div id='linha-azul'></div></div>";
	html = html + "<div class='imagetopform'  >"+titulo+"</div>";
	html = html + "<div id='conteudo-bloco'>";
	html = html + "<div id='TB_ajaxContent' class='conteudo'  style='"+style+"' >"
	html = html + document.getElementById(nmDiv).innerHTML;
	html = html + "</div>";
	html = html + "</div>";
	html = html + anexaBotoesFinal(chave);
	html = html + "</div>";
	return html;	
}

function gerarHtmlModalMsg(titulo, chave, style, msg){

	var html = "";
	
	html = html + "<div class='TB-formpopup' style='height:auto;' >";
	html = html + "<div id='linha-laranja'><div id='linha-azul'></div></div>";
	html = html + "<div class='imagetopform'  >"+titulo+"</div>";
	html = html + "<div id='conteudo-bloco'>";
	html = html + "<div id='TB_ajaxContent' class='conteudo'  style='"+style+"' >"
	html = html + msg;
	html = html + "</div>";
	html = html + "</div>";
	html = html + anexaBotoesFinal(chave);
	html = html + "</div>";
	return html;	

}

function anexaBotoesFinal(chave){

	var retorno;

	if(chave == "1"){
    	retorno = "<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Confirmar' onclick='confirma();' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancela();' /> </div>";		    	
	}else if(chave == "2"){
	  	retorno = "<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='confirmaExlcuiItem();' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='cancela();' /> </div>";
	}else if(chave == "3"){
	   	retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Fechar' onclick='fechar();' /> </div>";
	}else if(chave == "4"){
	   	retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Fechar' onclick='ConfirmaAbreRenovacao();' /> </div>";
	}else if(chave == "5"){
	  	retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Retornar'  /> </div>";
	}else if(chave == "6"){
	   	retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancelarEscolhaCep();' /> </div>";
	}else if (chave == "7"){
	   	retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Enviar Cotação' onclick='enviarCotacao();' /> <input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancela();' /> </div>";
	}else if (chave == "8"){
	   	retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Ok' onclick='okCotacaoDaf();' /> </div>";
	}else if (chave == "9"){
	  	retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Ok' onclick='confirmaCobAssociada();' /> <input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancelarCobAssociada();'</div>";
	}else if(chave == "FLG_ALTERA_EMP"){
		retorno = "<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='alteraParaProdEmpresa(true, \"P\", \"19\");' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='alteraParaProdEmpresa(false, \"P\", \"19\");' /> </div>";
	}else if(chave == "FLG_ALTERA_SUB_PROD_8"){
		retorno = "<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='alteraParaProdEmpresa(true, \"S\", \"8\");' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='alteraParaProdEmpresa(false, \"S\", \"8\");' /> </div>";
	}else if(chave == "FLG_ALTERA_SUB_PROD_9"){
		retorno = "<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='alteraParaProdEmpresa(true, \"S\", \"9\");' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='alteraParaProdEmpresa(false, \"S\", \"9\");' /> </div>";
	}else if(chave == "OK_DAF"){
		retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Ok' onclick='fechar();' /> </div>";
	}else if (chave == "JANELA_PERIODO_INDEN"){
		retorno = "<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Ok' onclick='confirmaPeriodoInden();' /> <input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancelarPeriodoInden();'</div>";
	}
	
	return retorno;
		    

}