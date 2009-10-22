/*
 * Thickbox 2.1 - jQuery plugin for displaying content in a box above the page
 * 
 * Copyright (c) 2006, 2007 Cody Lindley (http://www.codylindley.com)
 *
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

// on page load call TB_init
$(document).ready(TB_init);

// add thickbox to href elements that have a class of .thickbox
function TB_init(){
	$("a.thickbox").click(function(event){
		// stop default behaviour
		event.preventDefault();
		// remove click border
		this.blur();
	
		// get caption: either title or name attribute
		var caption = this.title || this.name || "";
		
		// get rel attribute for image groups
		var group = this.rel || false;
		
		// display the box for the elements href
		TB_show(caption, this.href, group);
	});
}

// called when the user clicks on a thickbox link
function TB_show(caption, url, rel, chave) {

	// check if a query string is involved
	var baseURL = url.match(/(.+)?/)[1] || url;

	// regex to check if a href refers to an image
	var imageURL = /\.(jpe?g|png|gif|bmp)/gi;

     //code to show html pages
		
		var queryString = url.match(/\?(.+)/)[1];
		var params = TB_parseQuery( queryString );
		
		TB_WIDTH = (params['width']*1) + 30;
		TB_HEIGHT = (params['height']*1) + 40;
		msn = (params['msn']);
        nmDiv = (params['div']);

		var ajaxContentW = TB_WIDTH - 30,
			ajaxContentH = TB_HEIGHT - 45;
		
		
	// create iframe, overlay and box if non-existent
	if ( !$("#TB_HideSelect").length ) {
		$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window' class='TB-formpopup' style='height:auto;' ></div>");
		//$("#TB_overlay").click(TB_remove);
	}
	// TODO replace or check if event is already assigned
	$(window).scroll(TB_position);
	
	// TODO replace
	TB_overlaySize();
	
	// TODO create loader only once, hide and show on demand
	$("body").append("<div id='TB_load'><img src='images/sulamerica/_carregando.gif' /></div>");
	TB_load_position();
		
		if(url.indexOf('TB_iframe') != -1){				
			urlNoQuery = url.split('TB_');
			$("#TB_window").append("<div id='linha-laranja'><div id='linha-azul'></div></div>");
			$("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent' style='width:100%;height:"+ajaxContentH+"px;' onload='TB_showIframe()' scrolling='no'> </iframe>");
		    if(chave == "1"){
                $("#TB_window").append("<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Confirmar' onclick='confirma();' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancela();' /> </div>");		    	
		    }else if(chave == "2"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='confirmaExlcuiItem();' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='cancela();' /> </div>");
		    }else if(chave == "3"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Fechar' /> </div>");
		    }else if(chave == "4"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Fechar' onclick='ConfirmaAbreRenovacao();' /> </div>");
		    }else if(chave == "5"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Retornar' onclick='' /> </div>");
		    }		    
		} else {
			
		if(chave != "CALCULAR"){	
			$("#TB_window").append("<div id='linha-laranja'><div id='linha-azul'></div></div>");
			$("#TB_window").append("<div id='TB_ajaxWindowTitle' class='imagetopform' style='width:"+ajaxContentW+"px;' >"+caption+"</div>");
			$("#TB_window").append("<div id='TB_ajaxBloco' class='conteudo-bloco' ></div>");
			$("#TB_ajaxBloco").append("<div id='TB_ajaxContent' class='conteudo'  style='width:"+(parseInt(ajaxContentW)-1)+"px;height:"+ajaxContentH+"px' ></div>");
		    
		    if(chave == "1"){
                $("#TB_window").append("<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Confirmar' onclick='confirma();' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancela();' /> </div>");		    	
		    }else if(chave == "2"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='confirmaExlcuiItem();' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='cancela();' /> </div>");
		    }else if(chave == "3"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Fechar' /> </div>");
		    }else if(chave == "4"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Fechar' onclick='ConfirmaAbreRenovacao();' /> </div>");
		    }else if(chave == "5"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Retornar' onclick='' /> </div>");
		    }else if(chave == "6"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancelarEscolhaCep();' /> </div>");
		    }else if (chave == "7"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Enviar Cotação' onclick='enviarCotacao();' /> <input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancela();' /> </div>");
		    }else if (chave == "8"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Ok' onclick='okCotacaoDaf();' /> </div>");
		    }else if (chave == "9"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Ok' onclick='confirmaCobAssociada();' /> <input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancelarCobAssociada();'</div>");
		    }else if(chave == "FLG_ALTERA_EMP"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='alteraParaProdEmpresa(true, \"P\", \"19\");' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='alteraParaProdEmpresa(false, \"P\", \"19\");' /> </div>");
 		        $("#TB_BtSim").click(TB_remove);
		    }else if(chave == "FLG_ALTERA_SUB_PROD_8"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='alteraParaProdEmpresa(true, \"S\", \"8\");' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='alteraParaProdEmpresa(false, \"S\", \"8\");' /> </div>");
 		        $("#TB_BtSim").click(TB_remove);
		    }else if(chave == "FLG_ALTERA_SUB_PROD_9"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit2' type='button' id='TB_BtSim' class='botao3' value='Sim' onclick='alteraParaProdEmpresa(true, \"S\", \"9\");' /><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Não' onclick='alteraParaProdEmpresa(false, \"S\", \"9\");' /> </div>");
 		        $("#TB_BtSim").click(TB_remove);
		    }else if(chave == "OK_DAF"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Ok' /> </div>");
		    }else if (chave == "JANELA_PERIODO_INDEN"){
		    	$("#TB_window").append("<div id='layerbotao'><input name='Submit' type='button' id='TB_BtSim' class='botao3' value='Ok' onclick='confirmaPeriodoInden();' /> <input name='Submit' type='button' id='TB_BtNao' class='botao3' value='Cancelar' onclick='cancelarPeriodoInden();'</div>");
		    }
		    
		 }  
		    
		}
				
		//$("#TB_closeWindowButton").click(TB_remove);
		//$("#TB_BtSim").click(TB_remove);
		$("#TB_BtNao").click(TB_remove);
		
			if(url.indexOf('TB_inline') != -1){	
				$("#TB_ajaxContent").html($('#' + params['inlineId']).html());
				TB_position();
				$("#TB_load").remove();
				$("#TB_window").css({display:"block"}); 
			}else if(url.indexOf('TB_iframe') != -1){
				TB_position();
				if(frames['TB_iframeContent'] == undefined){//be nice to safari
					$("#TB_load").remove();
					$("#TB_window").css({display:"block"});
					$(document).keyup( function(e){ var key = e.keyCode; if(key == 27){TB_remove()} });
				}
			}else{
				$("#TB_ajaxContent").load(url, function(){
					TB_position();
					$("#TB_load").remove();
					$("#TB_window").css({display:"block"}); 
					
					  divOrigem = document.getElementById(nmDiv);
                      divDestino = document.getElementById("TB_ajaxContent");
                      if(divOrigem != null){
                          if(divDestino != null){divDestino.innerHTML = divOrigem.innerHTML;}
                          htmlDiv = "";
	                      htmlDiv = divOrigem.innerHTML;
	                      divOrigem.innerHTML = "";
	                      //inicializaDatas();
	                  }else {
                      	if(divDestino != null){divDestino.innerHTML = msn;} 
                      }
                      if(document.getElementById("TB_BtSim") != null){document.getElementById("TB_BtSim").focus(); }
                      else if(document.getElementById("TB_BtNao") != null){document.getElementById("TB_BtNao").focus(); }
				});
			}
		

	
	$(window).resize(TB_position);
	
	document.onkeyup = function(e){ 	
		if (e == null) { // ie
			keycode = event.keyCode;
		} else { // mozilla
			keycode = e.which;
		}
		if(keycode == 27){ // close
			TB_remove();
		}	
	}
		
}

//helper functions below

function TB_showIframe(){
	$("#TB_load").remove();
	$("#TB_window").css({display:"block"});
}

function TB_remove() {
 	$("#TB_imageOff").unbind("click");
	$("#TB_overlay").unbind("click");
	$("#TB_closeWindowButton").unbind("click");
	$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_HideSelect').remove();});
	$("#TB_window").fadeOut("fast",function(){$('#TB_window').remove();});
	$("#TB_load").remove();
	
	TB_load_position();
	
	return false;
}

function TB_position() {
	var pagesize = TB_getPageSize();	
	var arrayPageScroll = TB_getPageScrollTop();
	var style = {width: TB_WIDTH, left: (arrayPageScroll[0] + (pagesize[0] - TB_WIDTH)/2), top: (arrayPageScroll[1] + (pagesize[1]-TB_HEIGHT)/2)};
	$("#TB_window").css(style);
}

function TB_overlaySize(){
	if (window.innerHeight && window.scrollMaxY || window.innerWidth && window.scrollMaxX) {	
		yScroll = window.innerHeight + window.scrollMaxY;
		xScroll = window.innerWidth + window.scrollMaxX;
		var deff = document.documentElement;
		var wff = (deff&&deff.clientWidth) || document.body.clientWidth || window.innerWidth || self.innerWidth;
		var hff = (deff&&deff.clientHeight) || document.body.clientHeight || window.innerHeight || self.innerHeight;
		xScroll -= (window.innerWidth - wff);
		yScroll -= (window.innerHeight - hff);
	} else if (document.body.scrollHeight > document.body.offsetHeight || document.body.scrollWidth > document.body.offsetWidth){ // all but Explorer Mac
		yScroll = document.body.scrollHeight;
		xScroll = document.body.scrollWidth;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		yScroll = document.body.offsetHeight;
		xScroll = document.body.offsetWidth;
  	}
  	
	$("#TB_overlay").css({"height": yScroll, "width": xScroll});
	$("#TB_HideSelect").css({"height": yScroll,"width": xScroll});
}

function TB_load_position() {
	var pagesize = TB_getPageSize();
	var arrayPageScroll = TB_getPageScrollTop();
	$("#TB_load")
		.css({left: (arrayPageScroll[0] + (pagesize[0] - 100)/2), top: (arrayPageScroll[1] + ((pagesize[1]-100)/2)) })
		.css({display:"block"});
}

function TB_parseQuery ( query ) {
	// return empty object
	if( !query )
		return {};
	var params = {};
	
	// parse query
	var pairs = query.split(/[;&]/);
	for ( var i = 0; i < pairs.length; i++ ) {
		var pair = pairs[i].split('=');
		if ( !pair || pair.length != 2 )
			continue;
		// unescape both key and value, replace "+" with spaces in value
		params[unescape(pair[0])] = unescape(pair[1]).replace(/\+/g, ' ');
   }
   return params;
}

function TB_getPageScrollTop(){
	var yScrolltop;
	var xScrollleft;
	if (self.pageYOffset || self.pageXOffset) {
		yScrolltop = self.pageYOffset;
		xScrollleft = self.pageXOffset;
	} else if (document.documentElement && document.documentElement.scrollTop || document.documentElement.scrollLeft ){	 // Explorer 6 Strict
		yScrolltop = document.documentElement.scrollTop;
		xScrollleft = document.documentElement.scrollLeft;
	} else if (document.body) {// all other Explorers
		yScrolltop = document.body.scrollTop;
		xScrollleft = document.body.scrollLeft;
	}
	arrayPageScroll = new Array(xScrollleft,yScrolltop) 
	return arrayPageScroll;
}

function TB_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight
	arrayPageSize = new Array(w,h) 
	return arrayPageSize;
}
