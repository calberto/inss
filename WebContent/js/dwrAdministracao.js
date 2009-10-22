function vericarValorMax(flgSubmit){
	var vlDescontoMax = document.getElementById("vlDescontoMax").value;
	var index = document.getElementById("Produto").selectedIndex;
	var produto = document.forms[0].Produto[index].value;

	if(vlDescontoMax != ""){
		FacadeAdministracaoAjax.vericarValorMax(produto, vlDescontoMax, { callback:function(retorno) {
		                                					verificandoValorMaxDesc(retorno, flgSubmit);
		                                				}
                                   				});
    }                                				
}

function verificandoValorMaxDesc(retorno, flgSubmit){
	if(retorno[1] == "false"){
		alert("O valor do desconto não deve ultrapassar o limite máximo de "+retorno[0]);
		document.getElementById("vlDescontoMax").value = "";
	
	}else {
		if(flgSubmit == "S"){
		  vform = document.forms[0];
		  vform.action = "app?cmd=atualizaniveisdesconto";
		  vform.submit();
		}
	}
}

function checaUsuario(username){
			
		FacadeAdministracaoAjax.checaUsuario(username, { callback:function(usuarioExiste) {
		                                					verificandoUsuario(usuarioExiste);
		                                				}
                                   				});	
			
}

function verificandoUsuario(usuarioExiste){

	if (usuarioExiste == true){
		
		alert("Usuário Já Cadastrado");
		document.forms[0].dsUsuario.focus();
		document.forms[0].BtSalvar.disabled = true;
	
	} else {
		
		document.forms[0].dsUsuario.focus();
		document.forms[0].BtSalvar.disabled = false;
	
	}

}

function getCpfExiste(nuCpf){
			
		FacadeAdministracaoAjax.checaCpf(nuCpf, { callback:function(cpfExiste) {
		                                					verificandoCpf(cpfExiste);
		                                				}
                                   				});	
			
}

function verificandoCpf(cpfExiste){

	if (cpfExiste == true){
		
		alert("CPF Já Cadastrado");
		document.forms[0].nuCpf.focus();
		document.forms[0].BtSalvar.disabled = true;
	
	}

}

function getDsClienteAplicacao(cdCliente){
			
		FacadeAdministracaoAjax.getDsClienteAplicacao(cdCliente, { callback:function(valor) {
		                                					setaClienteAplicacao(valor);
		                                				}
                                   				});	
			
}

function setaClienteAplicacao(valor) {
	
	DWRUtil.setValue("cdClienteAplicacaoDefault", valor[0]);	
	DWRUtil.setValue("dsClienteAplicacaoDefault", valor[1]);		

}

function verificaClienteDefault(){

	FacadeAdministracaoAjax.getClienteDefault( { callback:function(retorno) {
		                                			setaClienteAplicacao(retorno);
		                                				}
                                   				});	

}

function getValorMaxDescontoNivelAlcada(cdProduto, cdNivelAlcada){

	FacadeAdministracaoAjax.getValorMaxDescontoNivelAlcada(cdProduto, cdNivelAlcada,  { callback:function(retorno) {
		                                			setaValorDescMax(retorno);
		                                				}
                                   				});	

}

function setaValorDescMax(valor) {
	
	DWRUtil.setValue("vlDescontoMax", valor);	
}


function montaTelaItensContratacao(){

	FacadeAdministracaoAjax.montaTelaItensContratacao(
                                   {	callback:function(html) {
		                                setaTelaItemContratacao(html);
		                                }
                                   });

}

function setaTelaItemContratacao(html){
	divItens = document.getElementById("DivItensContratacao");
	if(divItens != null){
	
		divItens.innerHTML = html;
		divItens.style.display = '';
	}

}