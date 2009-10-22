
function abrirPopupDespesasFixas(campo){

	campoValLmi = document.getElementById("COLUNA2:"+campo);

	if (campoValLmi != null && campoValLmi.value != '' && campoValLmi.value != '0,00'){
	
		document.getElementById("nmVariavelCob").value = campo;
		
		selecionadoColuna11 = document.getElementById("COLUNA11:" + campo).value;
		carregaCoberturasInformadas(selecionadoColuna11, campo, "Despesas fixas");
	
		selecionadoColuna12 = document.getElementById("COLUNA12:" + campo).value;		
		carregaPeriodoIndenitario(campo, selecionadoColuna12);
	    
	} else {
		
		if(document.getElementById("COLUNA11:"+campo) != null){document.getElementById("COLUNA11:"+campo).value = '';}
		if(document.getElementById("COLUNA12:"+campo) != null){document.getElementById("COLUNA12:"+campo).value = '';}	
		if(document.getElementById("COLUNA13:"+campo) != null){document.getElementById("COLUNA13:"+campo).value = '';}				
	}
	
	verificaLmiCampoHabAux(campo);

}


function abrirPopupCobAssociada(campo){

	campoValLmi = document.getElementById("COLUNA2:"+campo);

	if (campoValLmi != null && campoValLmi.value != '' && campoValLmi.value != '0,00'){
		vrLucrosCessantes = document.getElementById("IVrLucrosCessantes").value;
		
		verificaLmiMaxLucrosCessantes(campo, vrLucrosCessantes);
	
		document.getElementById("nmVariavelCob").value = campo;
	}	else {
		/*
		codCobsAssoc = document.getElementById("cdsCobAssocLucrosCessantes");
		cobASerApagada = eval("document.getElementById('COLUNA11:"+campo+"').value");
		codCobsAssoc.value = codCobsAssoc.value.replace(cobASerApagada+";", "");
		*/	
		if(document.getElementById("COLUNA11:"+campo) != null){document.getElementById("COLUNA11:"+campo).value = '';}
		if(document.getElementById("COLUNA12:"+campo) != null){document.getElementById("COLUNA12:"+campo).value = '';}	
		if(document.getElementById("COLUNA13:"+campo) != null){document.getElementById("COLUNA13:"+campo).value = '';}				
		
		inicializaLucrosCessantes();
	}
	
	verificaLmiCampoHabAux(campo);
	
}

function inicializaLucrosCessantes(){
	var lucrosCessantes = new Array("ILucrosCessantes1",
							   		"ILucrosCessantes2",
							   		"ILucrosCessantes3",
							   		"ILucrosCessantes4", 
							   		"ILucrosCessantes5");
    
    codCobsAssoc = document.getElementById("cdsCobAssocLucrosCessantes");
	if(codCobsAssoc != null ){codCobsAssoc.value = "";}
	
	chave = false;
	
	for (i = 0; i < lucrosCessantes.length; i++){
	
		campo = lucrosCessantes[i];
		habilitaCobLucrosCessantes(campo, chave);
		verificaLmiCampoHabAux(campo);
		codCob = document.getElementById("COLUNA11:"+campo);
		
		if (codCob != null && codCob.value != ''){
			codCobsAssoc.value = codCobsAssoc.value + document.getElementById("COLUNA11:"+campo).value + ";";
		}else{
		     chave = true;
		}

		
	}

}

function habilitaCobLucrosCessantes(campo, chave){

if(chave){
        
        if(document.getElementById("COLUNA2:"+campo) != null){
           document.getElementById("COLUNA2:"+campo).value = '';
           document.getElementById("COLUNA2:"+campo).disabled = true;
        }
		if(document.getElementById("COLUNA11:"+campo) != null){document.getElementById("COLUNA11:"+campo).value = '';}
		if(document.getElementById("COLUNA12:"+campo) != null){document.getElementById("COLUNA12:"+campo).value = '';}	
		if(document.getElementById("COLUNA13:"+campo) != null){document.getElementById("COLUNA13:"+campo).value = '';}	
}else{
   if(document.getElementById("COLUNA2:"+campo) != null){document.getElementById("COLUNA2:"+campo).disabled = false;}
}

}

function abrirPopupInterrPertubNegocios(campo){

	campoValLmi = document.getElementById("COLUNA2:"+campo);

	if (campoValLmi != null && campoValLmi.value != '' && campoValLmi.value != '0,00'){
	
		document.getElementById("nmVariavelCob").value = campo;
		
		selecionadoColuna11 = document.getElementById("COLUNA11:" + campo).value
		carregaCoberturasInformadas(selecionadoColuna11, campo, "Interrupção ou Perturbação de Negócios (Riscos Comerciais)");
	
		selecionadoColuna12 = document.getElementById("COLUNA12:" + campo).value;		
		carregaPeriodoIndenitario(campo, selecionadoColuna12);
	    
	} else {
		
		if(document.getElementById("COLUNA11:"+campo) != null){document.getElementById("COLUNA11:"+campo).value = '';}
		if(document.getElementById("COLUNA12:"+campo) != null){document.getElementById("COLUNA12:"+campo).value = '';}	
		if(document.getElementById("COLUNA13:"+campo) != null){document.getElementById("COLUNA13:"+campo).value = '';}				
	
	}
	
	verificaLmiCampoHabAux(campo);

}

function abrirPopupPerdadeAluguel(campo){

	campoValLmi = document.getElementById("COLUNA2:"+campo);

	if (campoValLmi != null && campoValLmi.value != '' && campoValLmi.value != '0,00'){
	
		document.getElementById("nmVariavelCob").value = campo;
		selecionadoColuna12 = document.getElementById("COLUNA12:" + campo).value;		
		carregaPeriodoIndenitario(campo, selecionadoColuna12);
	    
	} else {
		
		if(document.getElementById("COLUNA11:"+campo) != null){document.getElementById("COLUNA11:"+campo).value = '';}
		if(document.getElementById("COLUNA12:"+campo) != null){document.getElementById("COLUNA12:"+campo).value = '';}	
		if(document.getElementById("COLUNA13:"+campo) != null){document.getElementById("COLUNA13:"+campo).value = '';}				
	
	}
	
	verificaLmiCampoHabAux(campo);

}


function verificaLmiCampoHabAux(campo){

	campoValLmi = document.getElementById("COLUNA2:"+campo);
	
	if (campoValLmi != null && campoValLmi.value != '' && campoValLmi.value != '0,00'){
		mostraEscondeBtAux(campo + "Aux", true);
	} else {
		mostraEscondeBtAux(campo + "Aux", false);
	}
}


function mostraEscondeBtAux(campo, flDisplay){
	campoBt = document.getElementById(campo);
	if (campoBt != null){		
		if (flDisplay ==  true){
			campoBt.style.display="";
		}else {
			campoBt.style.display="none";
			setTitleBtoAux('', campo);	
		}
	}
}

function setTitleBtoAux(descricao, campo){
   
   campoBto = document.getElementById(campo);
   if(campoBto != null){
        campoBto.setAttribute("title", descricao );
   }
   
}

function cancelarCobAssociada(){
	campo = document.getElementById("nmVariavelCob").value;
	document.getElementById("COLUNA2:"+campo).value = '';
	if(document.getElementById("COLUNA11:"+campo) != null){document.getElementById("COLUNA11:"+campo).value = '';}
	if(document.getElementById("COLUNA12:"+campo) != null){document.getElementById("COLUNA12:"+campo).value = '';}	
	if(document.getElementById("COLUNA13:"+campo) != null){document.getElementById("COLUNA13:"+campo).value = '';}				
	mostraEscondeBtAux(campo + "Aux", false);	
	
//	codCobsAssoc = document.getElementById("cdsCobAssocLucrosCessantes");
//	cobASerApagada = eval("document.getElementById('COLUNA11:"+campo+"').value");
//	codCobsAssoc.value = codCobsAssoc.value.replace(cobASerApagada+";", "");

	if (campo.indexOf("ILucrosCessantes") != -1){
	  inicializaLucrosCessantes();	
	}

	divOrigem = document.getElementById("TB_ajaxContent");
	divDestino = document.getElementById("DivAuxiliar");
	if(divDestino != null){
		divDestino.innerHTML = divOrigem.innerHTML;
	}
	TB_remove();

}

function confirmaCobAssociada(){
	
	coberturaSelecionada = document.getElementById("coberturas");
	periodoSelecionado = document.getElementById("periodoInd");	
	abrangCobert = document.getElementById("abrangCob");
	
	if (coberturaSelecionada == null || coberturaSelecionada.value == '' ){
		alert("Selecione a cobertura!");
	} else if (periodoSelecionado == null || periodoSelecionado.value == ''){
		alert("Selecione o período indenitário!");
	} else if (abrangCobert == null || abrangCobert.value  == '' && abrangCobert.disabled == false){
		alert("Selecione a Abrangência da cobertura!");
	}else{
	
		nmVariavel = document.getElementById("nmVariavelCob").value;
		
		if(document.getElementById("COLUNA11:"+nmVariavel) != null){document.getElementById("COLUNA11:"+nmVariavel).value =	coberturaSelecionada.value;}
		if(document.getElementById("COLUNA12:"+nmVariavel) != null){document.getElementById("COLUNA12:"+nmVariavel).value =	periodoSelecionado.value;}	
		if(document.getElementById("COLUNA13:"+nmVariavel) != null){document.getElementById("COLUNA13:"+nmVariavel).value =	abrangCobert.value;}				

		if (nmVariavel.indexOf("ILucrosCessantes") != -1){
			//document.getElementById("cdsCobAssocLucrosCessantes").value = document.getElementById("cdsCobAssocLucrosCessantes").value + coberturaSelecionada.value + ";";
			inicializaLucrosCessantes();	
		}

		
		document.getElementById("nmVariavelCob").value = "";
		
		divOrigem = document.getElementById("TB_ajaxContent");
		divDestino = document.getElementById("DivAuxiliar");
		if(divDestino != null){
			divDestino.innerHTML = divOrigem.innerHTML;
		}
		
		getDscCoberturaAssoc(nmVariavel);
		TB_remove();
		calculaValorCobertura('');
	}
	
}

function confirmaPeriodoInden(){
	
	periodoSelecionado = document.getElementById("periodoInd");	
	
	if (periodoSelecionado == null || periodoSelecionado.value == ''){
		alert("Selecione o periodo indenitário!");
	}else{
	
		nmVariavel = document.getElementById("nmVariavelCob").value;
		
		document.getElementById("COLUNA12:"+nmVariavel).value =	periodoSelecionado.value;		
		document.getElementById("nmVariavelCob").value = "";
		
		divOrigem = document.getElementById("TB_ajaxContent");
		divDestino = document.getElementById("DivAuxiliar");
		if(divDestino != null){
			divDestino.innerHTML = divOrigem.innerHTML;
		}
		
		TB_remove();
		calculaValorCobertura('');
	}

}

function cancelarPeriodoInden(){

	campo = document.getElementById("nmVariavelCob").value;
	document.getElementById("COLUNA2:"+campo).value = '';
	if(document.getElementById("COLUNA11:"+campo) != null){document.getElementById("COLUNA11:"+campo).value = '';}
	if(document.getElementById("COLUNA12:"+campo) != null){document.getElementById("COLUNA12:"+campo).value = '';}	
	if(document.getElementById("COLUNA13:"+campo) != null){document.getElementById("COLUNA13:"+campo).value = '';}				
	mostraEscondeBtAux(campo + "Aux", false);	
	
	divOrigem = document.getElementById("TB_ajaxContent");
	divDestino = document.getElementById("DivAuxiliar");
	if(divDestino != null){
		divDestino.innerHTML = divOrigem.innerHTML;
	}
	TB_remove();

}


function informaResultadoCalculo(){
	vform = document.forms[0];
	
	if(vform.flRetornoCalcular.value == "S"){
	    buscaObsErroSeguro("S");
	}

}


function validaCpfProponente(campo) {
	
	vform = document.forms[0];
	cpf = campo.value;	
	retorno = true;
	if(cpf != "") {
	
	if (cpf != "00000000000" && cpf != "11111111111" && cpf != "22222222222" &&
        cpf != "33333333333" && cpf != "44444444444" && cpf != "55555555555" &&
        cpf != "66666666666" && cpf != "77777777777" && cpf != "88888888888"
        && cpf != "99999999999" && 
        cpf != "00000000000000" && cpf != "11111111111111" && cpf != "22222222222222" &&
        cpf != "33333333333333" && cpf != "44444444444444" && cpf != "55555555555555" &&
        cpf != "66666666666666" && cpf != "77777777777777" && cpf != "88888888888888"
        && cpf != "99999999999999")
      {
      if (!ChecaCPF(cpf) && !validaCgc(cpf)) {  
        alert('CPF/CNPJ inválido!\n Informe um CPF/CNPJ válido para o proponente.'); 
        campo.value = "";
        campo.focus();
        retorno = false;
      }
      if (ChecaCPF(cpf) && vform.ITipoPessoa != null){
          vform.ITipoPessoa.value = 'F';
          carregaInformacoesSeguradoTelaCalculo(cpf);
          validaDadosCondominio(campo);
      }
      if (validaCgc(cpf) && vform.ITipoPessoa != null){
      	  vform.ITipoPessoa.value = 'J';
          carregaInformacoesSeguradoTelaCalculo(cpf);
      }
      
      }else {
       alert('CPF/CNPJ inválido!\n Informe um CPF/CNPJ válido para o proponente.'); 
       campo.value = "";
       campo.focus();
       retorno = false;
      }
      
    }
    return retorno;
}

function habDesDivProduto(valor){

divCompree = document.getElementById("DivCompreensivo");
divValSugerido = document.getElementById("DivValorSugerido");
btoItens = document.getElementById("BtItens");
codStatus = document.forms[0].cdStatusSeguro.value;
IBtoRenovacao = document.getElementById("IBtoRenovacao");
DivIClasseBonus = document.getElementById("IClasseBonusDiv");
DivINuApoliceAntComp = document.getElementById("INuApoliceAntCompDiv");
DivISeguradoraAntComp = document.getElementById("ISegAntCompDiv");
ITipoSeguro = document.getElementById("ITipoSeguro");

	if (valor == '94'){		
        if(divCompree != null ){ divCompree.style.display="";}
        if(btoItens != null && codStatus != "8" ){ btoItens.style.display="";} 
        if(divValSugerido != null ){ divValSugerido.style.display="none";}

       // if(IBtoRenovacao != null ){ IBtoRenovacao.style.display="none";}
        if(DivIClasseBonus != null ){ DivIClasseBonus.style.display="none";}
        if(DivINuApoliceAntComp != null ){ DivINuApoliceAntComp.style.display="";}
        if(DivISeguradoraAntComp != null && ITipoSeguro != null && (ITipoSeguro.value == "2" || ITipoSeguro.value == "3"))
        	{ DivISeguradoraAntComp.style.display="";}        
                        
	} else {	
        if(divCompree != null ){ divCompree.style.display="none";}
        if(btoItens != null ){ btoItens.style.display="none";} 
        if(divValSugerido != null ){ divValSugerido.style.display="";}

        if(IBtoRenovacao != null ){ IBtoRenovacao.style.display="";}
        if(DivIClasseBonus != null ){ DivIClasseBonus.style.display="";}
        if(DivINuApoliceAntComp != null ){ DivINuApoliceAntComp.style.display="none";}
        if(DivISeguradoraAntComp != null )
        	{ DivISeguradoraAntComp.style.display="none";}        
	
	}
	
	//habilitaRenovacao();

}


function habilitaRenovacao(flOnload){
	
	vform = document.forms[0];

	Produto = document.getElementById("Produto");

	ITipoSeguro = document.getElementById("ITipoSeguro");
	cdSeguro = document.getElementById("cdSeguro");	

	btLovISeguradoraAnt = document.getElementById("btLovISeguradoraAnt");
	CODIGOISeguradoraAnt = document.getElementById("CODIGOISeguradoraAnt");
	IFlgGrpSas = document.getElementById("IFlgGrpSas");
	ICodSeguradoraAnt = document.getElementById("ICodSeguradoraAnt");
	ISeguradoraAnt = document.getElementById("ISeguradoraAnt");


	NuOcorrenciasDiv = document.getElementById("INuOcorrenciasDiv");
	FlHouveSinistroDiv = document.getElementById("IFlHouveSinistroDiv");	
	ClasseBonusAntDiv = document.getElementById("IClasseBonusAntDiv");	
	DtInicVigAntDiv = document.getElementById("IDtInicVigAntDiv");	
	
	btoChecaRenovacao = document.getElementById("IBtoChecaRenovacao");		
	ChecouRenovacao = document.getElementById("flChecouRenovacao");
	flgRenovacaoSAS = document.getElementById("flgRenovacaoSAS");	
	
     if (vform.IBtoRenovacao != null){vform.IBtoRenovacao.disabled = true;}	
		
//	if 	(Produto.value != ""){
		if (ITipoSeguro != null && ITipoSeguro.value == "2"){
			if(flOnload != "S"){
			    if(CODIGOISeguradoraAnt != null){CODIGOISeguradoraAnt.value = "";} 
	  		    if(IFlgGrpSas != null){IFlgGrpSas.value = "";} 
	   		    if(ICodSeguradoraAnt != null){ICodSeguradoraAnt.value = "";} 
	   		    if(ISeguradoraAnt != null){ISeguradoraAnt.value = "";} 
   		    }
  		    if (vform.IBtoRenovacao != null){vform.IBtoRenovacao.disabled = false;}
			if (btoChecaRenovacao != null) {btoChecaRenovacao.style.display = ""};		
                  if(flgRenovacaoSAS != null){flgRenovacaoSAS.value = "S";}			
						
		} else if (ITipoSeguro != null && ITipoSeguro.value == "3"){
			if(flOnload != "S"){
			    if(CODIGOISeguradoraAnt != null){CODIGOISeguradoraAnt.value = "";} 
	  		    if(IFlgGrpSas != null){IFlgGrpSas.value = "";} 
	   		    if(ICodSeguradoraAnt != null){ICodSeguradoraAnt.value = "";} 
	   		    if(ISeguradoraAnt != null){ISeguradoraAnt.value = "";} 
   		    }
		    if (vform.IBtoRenovacao != null){vform.IBtoRenovacao.disabled = false;}	
			if (btoChecaRenovacao != null) {btoChecaRenovacao.style.display = "none"};						
                  if(flgRenovacaoSAS != null){flgRenovacaoSAS.value = "N";}			
			
		} else {
			if (vform.IBtoRenovacao != null){vform.IBtoRenovacao.disabled = true;}
		}
		
		if ( Produto.value == "94" ){
				if (FlHouveSinistroDiv != null) {FlHouveSinistroDiv.style.display = "none"};
				if (NuOcorrenciasDiv != null) {NuOcorrenciasDiv.style.display = "none"};
				if (ClasseBonusAntDiv != null) {ClasseBonusAntDiv.style.display = "none"};
				if (DtInicVigAntDiv != null) {DtInicVigAntDiv.style.display = "none"};
			
		} else {
				if (FlHouveSinistroDiv != null) {FlHouveSinistroDiv.style.display = ""};
				if (NuOcorrenciasDiv != null) {NuOcorrenciasDiv.style.display = ""};
				if (ClasseBonusAntDiv != null) {ClasseBonusAntDiv.style.display = ""};
				if (DtInicVigAntDiv != null) {DtInicVigAntDiv.style.display = ""};
		
		}
//	}
		
	

	
	/*if (vform.Produto.value == "35" || vform.Produto.value == "19"){
		if (DivISeguradoraAntComp != null) {DivISeguradoraAntComp.style.display = "none"};
		
		btLovISeguradoraAnt = document.getElementById("btLovISeguradoraAnt");
		CODIGOISeguradoraAnt = document.getElementById("CODIGOISeguradoraAnt");
		IFlgGrpSas = document.getElementById("IFlgGrpSas");
		ICodSeguradoraAnt = document.getElementById("ICodSeguradoraAnt");
		ISeguradoraAnt = document.getElementById("ISeguradoraAnt");
		
		if (ISucursalAntComp != null) {ISucursalAntComp.style.display = "none"};		

	
		if (ITipoSeguro != null && ITipoSeguro.value == "2"){
 		
			if (CODIGOISeguradoraAnt != null){ CODIGOISeguradoraAnt.value = '5118'; }
			if (IFlgGrpSas != null){ IFlgGrpSas.value = 'S'; }
			if (ICodSeguradoraAnt != null){ ICodSeguradoraAnt.value = '5118'; }
			if (ISeguradoraAnt != null){ ISeguradoraAnt.value = 'Sul América'; ISeguradoraAnt.disabled=true;}		
			if (vform.ITipoSeguro != null){vform.IBtoRenovacao.disabled = false;}	
			if (btLovISeguradoraAnt != null) {btLovISeguradoraAnt.style.display = "none"};		
			

			
			
			
			
		} else if (ITipoSeguro != null && ITipoSeguro.value == "3"){
			if (btLovISeguradoraAnt != null) {btLovISeguradoraAnt.style.display = ""};		
			if (ISeguradoraAnt != null){ ISeguradoraAnt.disabled=false;}					
			if (vform.IBtoRenovacao != null){vform.IBtoRenovacao.disabled = false;}
			

		
			
			if (cdSeguro.value == "" || (ICodSeguradoraAnt != null && ICodSeguradoraAnt.value == "5118")){
					if (CODIGOISeguradoraAnt != null){ CODIGOISeguradoraAnt.value = ''; }
					if (IFlgGrpSas != null){ IFlgGrpSas.value = ''; }
					if (ICodSeguradoraAnt != null){ ICodSeguradoraAnt.value = ''; }
					if (ISeguradoraAnt != null){ ISeguradoraAnt.value = ''; }		
			}
			
		} else {
			if (vform.IBtoRenovacao != null){vform.IBtoRenovacao.disabled = true;}
		}
	
	} else if (vform.Produto.value == "94"){
		
		if (vform.IBtoRenovacao != null){vform.IBtoRenovacao.disabled = false;}
		
		btLovISeguradoraAntComp = document.getElementById("btLovISegAntComp");
		CODIGOISegAntComp = document.getElementById("CODIGOISegAntComp");
		IFlgGrpSas = document.getElementById("IFlgGrpSas");
		ICodSegAntComp = document.getElementById("ICodSegAntComp");
		ISeguradoraAntComp = document.getElementById("ISegAntComp");
		
		if (ITipoSeguro != null && ITipoSeguro.value == "2"){
 		
			if (CODIGOISegAntComp != null){ CODIGOISegAntComp.value = '5118'; }
			if (IFlgGrpSas != null){ IFlgGrpSas.value = 'S'; }
			if (ICodSegAntComp != null){ ICodSegAntComp.value = '5118'; }
			if (ISeguradoraAntComp != null){ ISeguradoraAntComp.value = 'Sul América'; ISeguradoraAntComp.disabled=true;}		
			if (DivISeguradoraAntComp != null) {DivISeguradoraAntComp.style.display = ""};
			if (btLovISeguradoraAntComp != null) {btLovISeguradoraAntComp.style.display = "none"};
			
			if (ISucursalAntComp != null) {ISucursalAntComp.style.display = ""};		
			
		} else if (ITipoSeguro != null && ITipoSeguro.value == "3"){
			if (DivISeguradoraAntComp != null) {DivISeguradoraAntComp.style.display = ""};
			if (btLovISeguradoraAntComp != null) {btLovISeguradoraAntComp.style.display = ""};			
			if (ISeguradoraAntComp != null){ ISeguradoraAntComp.disabled=false;}	
			
			if (ISucursalAntComp != null) {ISucursalAntComp.style.display = "none"};		
			
			if (cdSeguro.value == "" || (ICodSegAntComp != null && ICodSegAntComp.value == "5118")){
					if (CODIGOISegAntComp != null){ CODIGOISegAntComp.value = ''; }
					if (IFlgGrpSas != null){ IFlgGrpSas.value = ''; }
					if (ICodSegAntComp != null){ ICodSegAntComp.value = ''; }
					if (ISeguradoraAntComp != null){ ISeguradoraAntComp.value = ''; }			
			}

		} else {
			if (DivISeguradoraAntComp != null) {DivISeguradoraAntComp.style.display = "none"};
		}
	
		
		
	
		if(vform.INuApoliceAntComp != null){
			if(vform.ITipoSeguro != null && (vform.ITipoSeguro.value == "2" || vform.ITipoSeguro.value == "3")){
				vform.INuApoliceAntComp.disabled = false;
			}else {
				vform.INuApoliceAntComp.disabled = true;
				vform.INuApoliceAntComp.value = "";
			}		
		}
	} else {
		if (vform.IBtoRenovacao != null){vform.IBtoRenovacao.disabled = true;}
		if (ISucursalAntComp != null) {ISucursalAntComp.style.display = "none"};
	}*/
	
	habilitaCampoBonusAtual();


}



function abreRenovacao(){

habilitaNuSucursal();

    div = "DivRenovacao";
    TB_show('RENOVAÇÃO','mensagem.jsp?div='+div+'&keepThis=true&height=120&width=510','class=thickbox', "1");
}


function ConfirmaAbreRenovacao(){
	$('#TB_window,#TB_overlay,#TB_HideSelect').remove();
    div = "DivRenovacao";
    TB_show('RENOVAÇÃO','mensagem.jsp?div='+div+'&keepThis=true&height=120&width=510','class=thickbox', "1");
}

function confirma(){
 	if(nmDiv == "DivRenovacao"){
	 	//checarRenovacao();
        validaDadosRenovacao();
     }else {
     	divOrigem = document.getElementById("TB_ajaxContent");
		divDestino = document.getElementById(nmDiv);
		if(divDestino != null){
			divDestino.innerHTML = divOrigem.innerHTML;
			//inicializaDatas();
		}
     	TB_remove();
     }
}


function habilitaNuSucursal(){
var flgGrpSas = document.getElementById("IFlgGrpSas");
var nuSucursal = document.getElementById("ISucursalAnt");

   if(flgGrpSas != null && flgGrpSas.value == 'S'){
    if(nuSucursal != null){nuSucursal.disabled = false; } 
   }else{
    if(nuSucursal != null){
       nuSucursal.value = "";
       nuSucursal.disabled = true; 
       }   
   }
   
   
}


function validaDadosRenovacao(){
	
vform = document.forms[0];
	nmDiv = "DivRenovacao";
	cdProduto = document.getElementById("Produto");	

	if(vform.ITipoSeguro != null && (vform.ITipoSeguro.value == "2" || vform.ITipoSeguro.value == "3")){
		
		mensagem = "";
/*
		if (document.getElementById("flChecouRenovacao") != null && document.getElementById("flChecouRenovacao").value == "N"
			&& vform.ITipoSeguro != null && vform.ITipoSeguro.value == "2"){
			mensagem = "É necessário checar a renovação antes de confirmar!";
		} else*/
		/*if(document.getElementById("INuApoliceAnt") != null && document.getElementById("INuApoliceAnt").value == ""){
			mensagem = "Informe o campo Número apólice ant.!";
		}else */ if(document.getElementById("ISeguradoraAnt") != null && document.getElementById("ISeguradoraAnt").value == ""){
		   mensagem = "Informe o campo Seguradora ant.!";
		}else if(document.getElementById("CODIGOISeguradoraAnt") != null && document.getElementById("CODIGOISeguradoraAnt").value == ""){
		    mensagem = "Informe o campo Seguradora ant. corretamente!";
		}else if(document.getElementById("IClasseBonusAnt") != null && document.getElementById("IClasseBonusAnt").value == ""
				&& document.getElementById("Produto").value != null && document.getElementById("Produto").value != "94"){
		    mensagem = "Informe o campo Classe bônus ant.!";		
		}else if(document.getElementById("IFlgGrpSas") != null && document.getElementById("IFlgGrpSas").value == "S" && document.getElementById("ISucursalAnt") != null && document.getElementById("ISucursalAnt").value == ""){
		    mensagem = "Informe o campo Sucursal Anterior!";		
		}else if(document.getElementById("IFlHouveSinistro") != null && document.getElementById("IFlHouveSinistro").value == ""
			&& document.getElementById("Produto").value != null && document.getElementById("Produto").value != "94"){
		    mensagem = "Informe o campo Houve sinistro!";		
		}else if(document.getElementById("INuOcorrencias") != null && document.getElementById("INuOcorrencias").value == "" && document.getElementById("IFlHouveSinistro") != null && document.getElementById("IFlHouveSinistro").value == "1"
		&& document.getElementById("Produto").value != null && document.getElementById("Produto").value != "94"){
		    mensagem = "Informe o campo Nº de ocorrências!";		
		}/*else if(document.getElementById("IDtInicVigAnt") != null && document.getElementById("IDtInicVigAnt").value == ""){
		    mensagem = "Informe o campo Data início vig. apol. ant.!";		
		}*/else if(document.getElementById("IDtFinalVigAnt") != null && document.getElementById("IDtFinalVigAnt").value == ""){
		    mensagem = "Informe o campo Data final vig. apol. ant.!";		
		} 
		
		if(mensagem != ""){
			//TB_show('CRITICA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "4");
			alert(mensagem);
		}else {
			divOrigem = document.getElementById("TB_ajaxContent");
			divDestino = document.getElementById(nmDiv);
			if(divDestino != null){

				divDestino.innerHTML = divOrigem.innerHTML;
				//inicializaDatas();
			}
			TB_remove();
		}
    }
	
}

function cancela(){

divDestino = document.getElementById(nmDiv);
if(divDestino != null){
	divDestino.innerHTML = htmlDiv;
	//inicializaDatas();
}
}

function setaValoresCoberturaOnLoad(){
	
vform = document.forms[0];
campo = document.getElementById("COLUNA5:ICobertura");
coluna2 = document.getElementById("COLUNA6:ICobertura");
coluna3 = document.getElementById("COLUNA8:ICobertura");

if(campo != null && coluna2 != null  && coluna3 != null ){
	
	if(campo.value == "1"){
		coluna2.style.display = "";
		coluna3.style.display = "";
		coluna2.readOnly=false;
		coluna3.readOnly=false;
	}else if(campo.value == "2"){
		coluna2.style.display = "none";
		coluna3.style.display = "";
		coluna2.readOnly=true;
		coluna3.readOnly=true;
	}else if(campo.value == "3"){
		coluna2.style.display = "";
		coluna3.style.display = "none";
		coluna2.readOnly=true;
		coluna3.readOnly=true;
	}else if(campo.value == "4"){
		coluna2.style.display = "";
		coluna3.style.display = "none";
    	coluna2.readOnly=true;
		coluna3.readOnly=true;
		coluna2.value = "100";
		coluna3.value = "0";
	}else {
		coluna2.style.display = "";
		coluna3.style.display = "";
		coluna2.readOnly=false;
		coluna3.readOnly=false;
	}
}

}

function setaValoresCobertura(nmCampo, nmColuna2, nmColuna3, valorMaximo){
	
vform = document.forms[0];
campo = document.getElementById(nmCampo);
coluna2 = document.getElementById(nmColuna2);
coluna3 = document.getElementById(nmColuna3);

if(campo != null && coluna2 != null  && coluna3 != null ){
	
	if(campo.value == "1"){
		coluna2.style.display = "";
		coluna3.style.display = "";
		coluna2.value = parseInt(valorMaximo) / 2;
		coluna3.value = parseInt(valorMaximo) / 2;
		coluna2.readOnly=false;
		coluna3.readOnly=false;
	}else if(campo.value == "2"){
		coluna2.style.display = "none";
		coluna3.style.display = "";
		coluna2.value = "0";
		coluna3.value = valorMaximo;
		coluna2.readOnly=true;
		coluna3.readOnly=true;
	}else if(campo.value == "3"){
		coluna2.style.display = "";
		coluna3.style.display = "none";
		coluna2.value = valorMaximo;
		coluna3.value = "0";
		coluna2.readOnly=true;
		coluna3.readOnly=true;
	}else if(campo.value == "4"){
		coluna2.style.display = "";
		coluna3.style.display = "none";
		coluna2.value = valorMaximo;
		coluna3.value = "0";
    	coluna2.readOnly=true;
		coluna3.readOnly=true;
	}else {
		coluna2.style.display = "";
		coluna3.style.display = "";
		coluna2.value = "";
		coluna3.value = "";
		coluna2.readOnly=false;
		coluna3.readOnly=false;
	}
}

}

function divideValoresCobertura(nmColunaOrigem, nmColunaDestino, valorMaximo){
	
vform = document.forms[0];
colunaOrigem = document.getElementById(nmColunaOrigem);
colunaDestino = document.getElementById(nmColunaDestino);

if(colunaOrigem != null && colunaDestino != null){
	
	if(colunaOrigem.value == "" && valorMaximo != ""){
		mensagem = "Esse campo não pode ter valor vazio!";
		colunaOrigem.value = parseInt(valorMaximo) / 2;
		colunaDestino.value = parseInt(valorMaximo) / 2;
		alert(mensagem);
		//TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
	}else if(colunaOrigem.value != "" && parseInt(colunaOrigem.value) == 0 && valorMaximo != ""){
		mensagem = "Esse campo não pode ter valor zero!";
		colunaOrigem.value = parseInt(valorMaximo) / 2;
		colunaDestino.value = parseInt(valorMaximo) / 2;
		alert(mensagem);
		//TB_show('ACEITAÇÃO RESTRITA','mensagem.jsp?msn='+mensagem+'&keepThis=true&height='+250+'&width='+300+'','class=thickbox', "3");
	}else if(colunaOrigem.value != "" && valorMaximo != ""){
		colunaDestino.value =  (parseInt(valorMaximo) - parseInt(colunaOrigem.value));
	}
}

}


function inicializaDatas(){

if(htmlDiv.indexOf("nmDatas"+nmDiv) != -1){
nomeDatas = eval("nmDatas"+nmDiv);

while(nomeDatas.indexOf(":") != -1 ){
    
    var nomeCampo = nomeDatas.substring(0, nomeDatas.indexOf(":"));
    if(nomeCampo == ""){
    nomeDatas = "";
    }else {
    nomeBotao = "BtoDate"+nomeCampo;
    if(document.getElementById(nomeBotao) != null && document.getElementById(nomeCampo) != null){
       Sys.Application.add_init(function() { $create(AjaxControlToolkit.CalendarBehavior, {"button":$get("BtoDate"+nomeCampo),"id":"ctl00_SampleContent_calendarButtonExtender"}, null, null, $get(nomeCampo));}); 
    }
    nomeDatas = nomeDatas.substring(nomeDatas.indexOf(":")+1);
    }
}

}
}      

function efetuarCalculo(vform, flGerarNovoCalculo) {  
  vform.action = "calculo";
  
  Modal("show");
  
  if(vform.flGerarCalculoFilho != null){
  	vform.flGerarCalculoFilho.value = flGerarNovoCalculo;
  }
   verificaCamposObrigatorios(vform, "1");  

}  


function primeiroItem(){

	vform = document.forms[0];

	if(document.forms[0].itemAtual.value != "1" ){
	
		verificaCamposObrigatorios(vform, "3"); 
	
	} 

}

function itemAnterior(itemAtual){
		vform = document.forms[0];
		
		if((parseInt(itemAtual) - 1) > 0 ){
		
			verificaCamposObrigatorios(vform, "4");	
			
		}
 
}

function proximaItem(itemAtual){

	vform = document.forms[0];
	
	if((parseInt(itemAtual) + 1) <= parseInt(document.forms[0].total.value)){
		
		verificaCamposObrigatorios(vform, "5");		
		
	   
	}


}

function ultimaItem(itemFinal){

	vform = document.forms[0];
		
	if(document.forms[0].itemAtual.value != itemFinal ){
		
		verificaCamposObrigatorios(vform, "6");	
	
	}

}

function confirmaExlcuiItem(){
vform = document.forms[0];
flConfirmou = 'N';

if(document.forms[0].total.value != "1" ){

  vform.action = "app?cmd=excluiitemimovel";
  vform.submit();
  
}

}


function abreConfirmaExcluiItem(){

    div = "DivExcluiItem";
    TB_show('EXCLUIR ITEM','mensagem.jsp?div='+div+'&keepThis=true&height=80&width=310','class=thickbox', "2");
}

function habilitaNavegacaoItens(){

if(document.forms[0].total.value != "1" ){

divNavegacao = document.getElementById("navegacaoItens");
if(divNavegacao != null){
    divNavegacao.style.display = "";
}

}

}


function escondeMostraBotao(){

vform = document.forms[0];


if(vform != null){
	if(vform.BtDemonstrativo != null){
		if(vform.cdSeguro.value != ""){
			if(vform.flCalculoComErro.value != "S"){
			 	   if(vform.cdStatusSeguro.value == "8"){
					  vform.BtDemonstrativoSup.style.display = "none"; 
					  vform.BtDemonstrativo.style.display = "none"; 
					  vform.BtGerarProposta.style.display = "none";
				   }else{
					  vform.BtDemonstrativoSup.style.display = ""; 
					  vform.BtDemonstrativo.style.display = ""; 
					  vform.BtGerarProposta.style.display = "";
				   }
			 }else {
			  vform.BtDemonstrativoSup.style.display = "none"; 
			  vform.BtDemonstrativo.style.display = "none";
			  vform.BtGerarProposta.style.display = "none";
			 } 
		 }else{
		  vform.BtDemonstrativoSup.style.display = "none"; 
		  vform.BtDemonstrativo.style.display = "none"; 
		  vform.BtGerarProposta.style.display = "none";
		 }
	}
	
	if(vform.BtObservacao != null){
	   if(vform.cdSeguro.value != ""){
	      vform.BtObservacao.style.display = ""; 
	   }else {   
    	   vform.BtObservacao.style.display = "none"; 
	   }
	}
	
	if(vform.BtCalcularSup != null){ 
	   if(vform.cdStatusSeguro.value == "8"){
	    vform.BtCalcularSup.style.display = "none"; 
	   }else{
	    vform.BtCalcularSup.style.display = ""; 
	     if(vform.cdSeguro.value != ""){
	           vform.BtCalcularSup.value = "Recalcular"; 
		   }else {   
	    	   vform.BtCalcularSup.value = "Calcular"; 
		   }
	   } 
	}

	if(vform.BtCalcular != null){
	   if(vform.cdStatusSeguro.value == "8"){
	    vform.BtCalcular.style.display = "none"; 
	   }else{
	    vform.BtCalcular.style.display = "";
	     if(vform.cdSeguro.value != ""){
	           vform.BtCalcular.value = "Recalcular"; 
		   }else {   
	    	   vform.BtCalcular.value = "Calcular"; 
		   }
	   } 
	}

	if(vform.BtCalcularNovo != null){
       if(vform.cdSeguro.value != ""){
	      vform.BtCalcularNovo.style.display = ""; 
	   }else {   
    	   vform.BtCalcularNovo.style.display = "none"; 
	   }
	}
	if(vform.BtReplicar != null){
       if(vform.cdSeguro.value != ""){
	      vform.BtReplicar.style.display = ""; 
	   }else {   
    	   vform.BtReplicar.style.display = "none"; 
	   }
	}


	
/*	if(vform.BtItens != null){
      vform.BtItens.style.display = ""; 
	}*/
}

}


function exibirDemonstrativo() { 
  parent.mostraEscondeGifProcessando('block');
  vform = document.forms[0];
  vform.action = "consultacalculo?cmd=exibedemonstrativo";
  vform.submit();

}

function incluirItemImovel() {

verificaCamposObrigatorios(vform, "2");	

}

function verificaDadosCepItemImovel(){

vform = document.forms[0];
var campos = new Array("FL_CEP_VALIDO",
                           "ITipoLogradouroER",
						   "ILogradouroER",
						   "IBairroER", 
						   "ICidadeER",
						   "IEstadoER");

if(vform.ICep.value != "" && vform.ICep.value.length == 10){

if(vform.CEP_TEMP.value != vform.ICep.value){

vform.CEP_TEMP.value = vform.ICep.value;


	recuperaDadosCEPLocalidade(vform.ICep, campos, vform.ICep.value, 'N', 'INumeroER');
	
	verificaAceitacaoRegiao(campos);
	
}	

}else{

       if(vform.ICep.value != ""){
         alert('Informe o Cep do endereço de risco corretamente!');
         vform.ICep.value = "";
       }
	   for (i=0; i<campos.length; i++){
  		   DWRUtil.setValue(campos[i], "");	
	   }
}

	
}

function habilitaLovCidade(valor){
vform = document.forms[0];

if(valor == ""){
	if(vform.ICidadeER != null){vform.ICidadeER.disabled = true;}
	if(vform.btLovICidadeER != null){vform.btLovICidadeER.disabled = true;}
}else {
	if(vform.ICidadeER != null){vform.ICidadeER.disabled = false;}
	if(vform.btLovICidadeER != null){vform.btLovICidadeER.disabled = false;}
}
	
}

function habilitaQtdeAssistidosOnLoad(){
	
IAssistFuneral = document.getElementById("COLUNA5:IAssistFuneral");	
qtdeAssist = document.getElementById("COLUNA6:IAssistFuneral");

if(IAssistFuneral != null && qtdeAssist != null){
   valor = IAssistFuneral.value;	
   habilitaQtdeAssistidos("COLUNA6:IAssistFuneral", valor);
}
	
}

function habilitaQtdeAssistidos(nmCampo, valor){
	
campo = document.getElementById(nmCampo);




if(campo != null){

  if(valor == "1"){
	campo.disabled = false;
  }else {
	campo.disabled = true;
	campo.value = "";
  }
  nuEmpregados = document.getElementById("INumEmpregados");
  if (nuEmpregados != null){
	  setaQtdAssistidos("COLUNA6:IAssistFuneral", "COLUNA5:IAssistFuneral", nuEmpregados.value);  	
  }
  
}
	
	
}


function habilitaNuOcorrenciasOnLoad(){
	
IFlHouveSinistro = document.getElementById("IFlHouveSinistro");	
INuOcorrencias = document.getElementById("INuOcorrencias");

if(IFlHouveSinistro != null && INuOcorrencias != null){
   valor = IFlHouveSinistro.value;	
   habilitaNuOcorrencias("INuOcorrencias", valor);
}
	
}

function habilitaNuOcorrencias(nmCampo, valor){
	
campo = document.getElementById(nmCampo);

if(campo != null){

  if(valor == "2" || valor == ""){
	campo.disabled = true;
	campo.value = "";
  }else {
	campo.disabled = false;
  }

}
	
	
}


function habilitaEstruturaOnLoad(){
	
tipoCondominio = document.getElementById("ITipoCondominio");	
estrutura = document.getElementById("IEstrutura");


if(tipoCondominio != null && tipoCondominio.value != "" && estrutura != null ){
   document.getElementById("IEstrutura").disabled = false;
}
        
}

function verificaAlteracaoAtividade(){

cdAtividade = document.getElementById("CODIGOIAtividade");
atividade = document.getElementById("IAtividade");
if(atividade != null && cdAtividade != null){
	   cdAtividade.value = ""; 		
}
	
}

function verificaAlteracaoShopping(){

cdShopping = document.getElementById("CODIGOIShopping");
Shopping = document.getElementById("IShopping");
if(Shopping != null && cdShopping != null){
       cdShopping.value = ""; 		
}
	
}

function verificaAlteracaoSeguradoraAnt(){

cdSeguradoraAnt = document.getElementById("CODIGOISeguradoraAnt");
SeguradoraAnt = document.getElementById("ISeguradoraAnt");
if(SeguradoraAnt != null && cdSeguradoraAnt != null){
   cdSeguradoraAnt.value = ""; 		
}
	
}


function encaminhaFuncoesPorProduto(campo){ 

	produto = document.getElementById("Produto");	
	if(produto != null && produto.value == "35"){
	   validaDadosCondominio(campo);
	}else if(produto != null && produto.value == "19"){
		validaContratCobertAtiv(campo);
	} 
}

function limpaDadosCpfCnpj(valor){

	nuCpfCnpj = document.getElementById("ICpfCnpjProponente");
	if(nuCpfCnpj != null){
		nuCpfCnpj.value = "";
	}
}


function habilitaCampoBonusAtual(){

IClasseBonus = document.getElementById("IClasseBonus");
ITipoSeguro = document.getElementById("ITipoSeguro");
/*
if(ITipoSeguro != null && ITipoSeguro.value == "2"  ){
	if(IClasseBonus != null){ IClasseBonus.disabled = false;}
}else {
	if(IClasseBonus != null){ 
	   IClasseBonus.value = "";
	   IClasseBonus.disabled = true;
	   }
}
*/

if(IClasseBonus != null){ IClasseBonus.disabled = true;  }
	
}



function desabilitaDadosLocalidadeOnLoad(){
vform = document.forms[0];	
	if(vform.IEstadoER != null && vform.IEstadoER.value != ""){vform.IEstadoER.disabled = true;}
    if(vform.ICidadeER != null && vform.ICidadeER.value != "" ){ 
       vform.ICidadeER.disabled = true;
       if(vform.btLovICidadeER != null){vform.btLovICidadeER.disabled = true;}
    }
}

function habilitarCampos(vform){

	if(vform.ITipoSeguro != null && (vform.ITipoSeguro.value != "2" && vform.ITipoSeguro.value != "3")){
		if(vform.INuApoliceAnt != null){ vform.INuApoliceAnt.value = ""; }
		if(vform.CODIGOISeguradoraAnt != null){vform.CODIGOISeguradoraAnt.value = "";}
		if(vform.ISeguradoraAnt != null){vform.ISeguradoraAnt.value = "";}
		if(vform.INuOcorrencias != null){vform.INuOcorrencias.value = "";}
		if(vform.IClasseBonusAnt != null){vform.IClasseBonusAnt.value = "";}
		if(vform.IFlHouveSinistro != null){vform.IFlHouveSinistro.value = "";}
		if(vform.IDtInicVigAnt != null){vform.IDtInicVigAnt.value = "";}
		if(vform.IDtFinalVigAnt != null){vform.IDtFinalVigAnt.value = "";}
		if(vform.ISucursalAnt != null){vform.ISucursalAnt.value = "";}
		if(vform.IFlgGrpSas != null){vform.IFlgGrpSas.value = "";}
    }
    
    	if(vform.INuApoliceAnt != null){ vform.INuApoliceAnt.disabled = false; }
		if(vform.CODIGOISeguradoraAnt != null){vform.CODIGOISeguradoraAnt.disabled = false; }
		if(vform.ISeguradoraAnt != null){vform.ISeguradoraAnt.disabled = false; }
		if(vform.INuOcorrencias != null){vform.INuOcorrencias.disabled = false; }
		if(vform.IClasseBonusAnt != null){vform.IClasseBonusAnt.disabled = false; }
		if(vform.IFlHouveSinistro != null){vform.IFlHouveSinistro.disabled = false; }
		if(vform.IDtInicVigAnt != null){vform.IDtInicVigAnt.disabled = false; }
		if(vform.IDtFinalVigAnt != null){vform.IDtFinalVigAnt.disabled = false; }
        if(vform.ISucursalAnt != null){vform.ISucursalAnt.disabled = false; }
        if(vform.IFlgGrpSas != null){vform.IFlgGrpSas.disabled = false; }
        
		if(vform.IEstadoER != null){vform.IEstadoER.disabled = false;}
        if(vform.ICidadeER != null){ vform.ICidadeER.disabled =false;}
		if(vform.IFlagDescAgravo != null){ vform.IFlagDescAgravo.disabled =false;}
}


/*function verificaPergImovelLocaliz(valor){

	vform = document.forms[0];

	if(vform.ILocalizacaoImovelMercado != null && valor == "112") {
		vform.ILocalizacaoImovelMercado.value = "";
		alert("Risco sem aceitação para a opção informada!");
	}
	
}*/



function verificaExtintores(obj){

	vform = document.forms[0];
	
	if (obj != null && (obj.id == 'ISistProtecIncRoubo1'||obj.id == 'ISistProtecIncRouboComp1') && obj.checked == false ){

		alert("Risco sem aceitação para a opção informada!");
		obj.checked = true;
	
	}

}


function habilitaSistProtecIncRoubo(nomeCampo, valor, cheked){

if(valor == "4"){
var quant = 0;
var todosCampos = document.getElementsByName(nomeCampo);

for (i = 0 ; i <= todosCampos.length-1 ; i++) { 
     if(todosCampos[i].type != null && todosCampos[i].type == 'checkbox'){
           quant++;
     }
}
	
if(cheked == true){	
	for ( i=1; i<=quant; i++ ){
		if ( document.getElementById( nomeCampo + i ).value != valor){
             document.getElementById( nomeCampo + i ).disabled = true;     
            if( document.getElementById( nomeCampo + i ).checked == true){
                 document.getElementById( nomeCampo + i ).checked = false;
            }
        }
	}
}else {
   for ( i=1; i<=quant; i++ ){
	  document.getElementById( nomeCampo + i ).disabled = false;     
	}
}
	
}

}

function executaFuncoesCheckBox(){

habilitaCheckBoxsOnLoad('ISistProtecIncRoubo', '4');

}

function habilitaCheckBoxsOnLoad(nomeCampo, valor){

if(document.getElementById( nomeCampo) != null){

cheked = false;
var quant = 0;
var todosCampos = document.getElementsByName(nomeCampo);

for (i = 0 ; i <= todosCampos.length-1 ; i++) { 
     if(todosCampos[i].type != null && todosCampos[i].type == 'checkbox'){
         quant++;
         campo = document.getElementById( nomeCampo + (i+1) );
         if(campo != null){
	         if(campo.value == valor && campo.checked == true){
	            cheked = true;
	         }
	     }    
     }
}

if(cheked == true){	
	for ( i=1; i<=quant; i++ ){
		if ( document.getElementById( nomeCampo + i ).value != valor){
             document.getElementById( nomeCampo + i ).disabled = true;     
            if( document.getElementById( nomeCampo + i ).checked == true){
                 document.getElementById( nomeCampo + i ).checked = false;
            }
        }
	}
}else {
   for ( i=1; i<=quant; i++ ){
	  document.getElementById( nomeCampo + i ).disabled = false;     
	}
}
	
}

}

function verificaNumEmpregados(){

	qtdAssist = document.getElementById("COLUNA6:IAssistFuneral");
	cdAssist = document.getElementById("COLUNA5:IAssistFuneral");
	nuEmpregados = document.getElementById("INumEmpregados");
	campoVidaEmpregados = document.getElementById("COLUNA2:IVidaEmpregados");
	
	if(qtdAssist != null && cdAssist != null && nuEmpregados != null  && nuEmpregados.value != ""){
	  	if(cdAssist.value == "1" && qtdAssist.value != "" ){
			if(parseInt(nuEmpregados.value) > parseInt(qtdAssist.value)){
			   alert("O campo número de assistidos foi alterado para " + nuEmpregados.value + " que é o número de empregados");
			   campo.value = campoNumAss.value;
			}
	  	}else{
  	      setaQtdAssistidos("COLUNA6:IAssistFuneral", "COLUNA5:IAssistFuneral", nuEmpregados.value);  	
	  	}
	}
	
	if (nuEmpregados != null && campoVidaEmpregados != null){
		if (campoVidaEmpregados.value != "" && campoVidaEmpregados.value != "0,00" && nuEmpregados.value == ""){
			alert("A cobertura vida de empregados não deverá ser contratada quando o número de empregados não o for.");
			campoVidaEmpregados.value = "";
		}
	}
}

function setaQtdAssistidos(nmCampo1, nmCampo2, valor){	
	
	qtdAssist = document.getElementById(nmCampo1);
	cdAssist = document.getElementById(nmCampo2);
	
	if(qtdAssist != null && cdAssist != null){
	  	if((cdAssist.value == "1")&&(qtdAssist.value == "")){
			qtdAssist.value = valor;
	  	}
	}
  	
}

function verificaAssFuneral(nmCampo){
	
	campo = document.getElementById(nmCampo);
	campoNumAss = document.getElementById("INumEmpregados");

	if(campo != null && campoNumAss != null && campoNumAss.value != "" ){
		if(parseInt(campo.value) < parseInt(campoNumAss.value)){
			alert("O campo número de assistidos não deve ser menor que é o número de empregados");
			//campoNumAss.value = campo.value;
			campo.value = campoNumAss.value;
		}
	}
}
	

function verificaInformouNumEmpreg(obj){

	campoNumAss = document.getElementById("INumEmpregados");
	
	if (campoNumAss.value == ''){
		alert("Para contratar a cobertura vida de empregados é necessário informar o número de empregados.");
		obj.value = '';
	}

}


function verificaSistProtIncRoubo(obj){

/*	if(obj != null && (obj.id == 'ISistProtecIncRoubo6'||obj.id == 'ISistProtecIncRouboComp6')){
		verificaPergBrigadaIncendio(obj);
	} else if (obj != null && (obj.id == 'ISistProtecIncRoubo7'||obj.id == 'ISistProtecIncRouboComp7')){
		verificaPergFuncTreinados(obj);	
	} else if (obj != null && (obj.id == 'ISistProtecIncRoubo1'||obj.id == 'ISistProtecIncRouboComp1')){
		verificaExtintores(obj);
	}*/
	if(obj != null && (obj.id == 'ISistProtecIncRoubo8'||obj.id == 'ISistProtecIncRouboComp8')){
		verificaPergBrigadaIncendio(obj);
	} else if (obj != null && (obj.id == 'ISistProtecIncRoubo9'||obj.id == 'ISistProtecIncRouboComp9')){
		verificaPergFuncTreinados(obj);	
	} else if (obj != null && (obj.id == 'ISistProtecIncRoubo7'||obj.id == 'ISistProtecIncRouboComp7')){
		verificaExtintores(obj);
	}

}


function verificaPergBrigadaIncendio(obj){

	vform = document.forms[0];
	
	if (obj != null && (obj.id == 'ISistProtecIncRoubo8'||obj.id == 'ISistProtecIncRouboComp8') && obj.checked == false ){

		alert("Risco sem aceitação para a opção informada!");
		obj.checked = true;
	
	}


}

function verificaPergFuncTreinados(obj){
	
	vform = document.forms[0];
	
	if (obj != null && (obj.id == 'ISistProtecIncRoubo9'||obj.id == 'ISistProtecIncRouboComp9') && obj.checked == false ){

		alert("Risco sem aceitação para a opção informada!");
		obj.checked = true;
	
	}

}

function verificaExtintores(obj){

	vform = document.forms[0];
	
	if (obj != null && (obj.id == 'ISistProtecIncRoubo7'||obj.id == 'ISistProtecIncRouboComp7') && obj.checked == false ){

		alert("Risco sem aceitação para a opção informada!");
		obj.checked = true;
	
	}

}



function verificaCobBasicaVr(obj){

	produto = document.getElementById("Produto");	
	if(produto != null && produto.value == "94"){
	
		IValorRisco = document.getElementById("IValorRisco");	
		if (IValorRisco != null){

			verificaCobBasicaVrBasica(obj, IValorRisco);
			
		}
	}

}


function avisaOperacaoCompartilhada(){
vform = document.forms[0];

if(vform.total != null && vform.total.value != '' &&  parseInt(vform.total.value) > 1){
   alert('O valor da operação informado será aplicado para os demais itens!');
}

}

function alteraParaProdEmpresa(flgAltera, flgProdOuSubProd, codigo){

if(flgAltera){
produto = document.getElementById("Produto");	
	if(produto != null ){
		if(flgProdOuSubProd == "P"){
	    	produto.value = codigo;
			populandoComboSubProduto(produto.value, '', document.forms[0].cdPessoaEntidade.value, 'S');
			habDesDivProduto(produto.value);
		}else{
		   subProduto = document.getElementById("SubProduto");
		   subProduto.value = codigo;
		   buscaItens(produto.value, subProduto.value);		
		}
	}
	
}else{
  IValorRisco = document.getElementById("IValorRisco");	
  if (IValorRisco != null){ IValorRisco.value = ""; }
}
	
}


function verificaSeguradoraAnt(){
	vform = document.forms[0];
	ITipoSeguro = document.getElementById("ITipoSeguro");
	
	if (vform.Produto.value == "94" ){
		
		CODIGOISegAntComp = document.getElementById("CODIGOISegAntComp");
		IFlgGrpSas = document.getElementById("IFlgGrpSas");
		ICodSegAntComp = document.getElementById("ICodSegAntComp");
		ISeguradoraAntComp = document.getElementById("ISegAntComp");
		CODIGOISegAntComp = document.getElementById("CODIGOISegAntComp");
		
		if (ITipoSeguro.value == "3" && CODIGOISegAntComp != null && CODIGOISegAntComp.value == "5118" ){
			alert("Seguradora não permitida para o tipo de seguro informado");
			if (CODIGOISegAntComp != null){ CODIGOISegAntComp.value = ''; }
			if (IFlgGrpSas != null){ IFlgGrpSas.value = ''; }
			if (ICodSegAntComp != null){ ICodSegAntComp.value = ''; }
			if (ISeguradoraAntComp != null){ ISeguradoraAntComp.value = ''; }		
		}
		
		habilitaNuSucursal();	
	} else {
	
		CODIGOISeguradoraAnt = document.getElementById("CODIGOISeguradoraAnt");
		btLovISeguradoraAnt = document.getElementById("btLovISeguradoraAnt");
		CODIGOISeguradoraAnt = document.getElementById("CODIGOISeguradoraAnt");
		IFlgGrpSas = document.getElementById("IFlgGrpSas");
		ICodSeguradoraAnt = document.getElementById("ICodSeguradoraAnt");
		ISeguradoraAnt = document.getElementById("ISeguradoraAnt");

		if (ITipoSeguro.value == "3" && CODIGOISeguradoraAnt != null && CODIGOISeguradoraAnt.value == "5118" ){
			alert("Seguradora não permitida para o tipo de seguro informado");
	
			if (CODIGOISeguradoraAnt != null){ CODIGOISeguradoraAnt.value = ''; }
			if (IFlgGrpSas != null){ IFlgGrpSas.value = ''; }
			if (ICodSeguradoraAnt != null){ ICodSeguradoraAnt.value = ''; }
			if (ISeguradoraAnt != null){ ISeguradoraAnt.value = ''; }		
	
		}
	
	}
}
