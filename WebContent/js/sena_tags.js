function callLov(nomeLov,maps,params,propriedades,friendly,numRegistros,onSelect,filtroInicial) {  
	  ind = params.indexOf(",");
	  parametros = "";
	  ant = 0;
	  k = 0;
	  while(ant != params.length) { 
		    k++;
		    parametros += "&p" + k + "=" + params.substring(ant,ind);
		    ant = ind + 1;
		    ind = params.indexOf("," , ant);
	  }
	  url = "lovs/lov.jsp?nomeLov="+nomeLov+"&maps="+maps+"&count_p="+k+parametros+"&friendly="+friendly+"&numRegistros="+numRegistros+"&onSelect="+onSelect+"&filtroInicial="+filtroInicial;  
	  janela = window.open(url,"lov",propriedades);

}

function callLovMultiSelect(nomeLov,maps,params,propriedades,friendly,numRegistros,onSelect) {
	  ind = params.indexOf(",");
	  parametros = "";
	  ant = 0;
	  k = 0;
	  while(ant != params.length) {
		    k++;
		    parametros += "&p" + k + "=" + params.substring(ant,ind);
		    ant = ind + 1;
		    ind = params.indexOf("," , ant);
	  }
	  url = "lovs/lovMultiSelect.jsp?nomeLov="+nomeLov+"&maps="+maps+"&count_p="+k+parametros+"&friendly="+friendly+"&numRegistros="+numRegistros+"&onSelect="+onSelect;
	  janela = window.open(url,"lov",propriedades);
}

function clicaLov(vForm, nome){
    	eval(vForm+'.'+nome+'.onclick()');
}

function clicaLovNovo(nome){
    	document.getElementById(nome).onclick();
}


function callLovNovo(nomeLov,maps,params,propriedades,friendly,numRegistros,onSelect,campoFiltroInicial) {  
	  ind = params.indexOf(",");
	  parametros = "";
	  ant = 0;
	  k = 0;
	  filtroInicial = document.getElementById(campoFiltroInicial).value;
	  
	  while(ant != params.length) { 
		    k++;
		    parametros += "&p" + k + "=" + params.substring(ant,ind);
		    ant = ind + 1;
		    ind = params.indexOf("," , ant);
	  }
	  url = "lovs/lov.jsp?nomeLov="+nomeLov+"&maps="+maps+"&count_p="+k+parametros+"&friendly="+friendly+"&numRegistros="+numRegistros+"&onSelect="+onSelect+"&filtroInicial="+filtroInicial;  
	  janela = window.open(url,"lov",propriedades);

}