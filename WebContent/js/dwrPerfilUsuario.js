function checaracesso(item){
    if (!item.checked)
      item.checked = true;   
}

function marcarTodosCheck(campo){
	if(campo.checked){
		for(i=0; document.forms[0].elements.length; i++){
			element = document.forms[0].elements[i];
			if(element.name.substring(0,10) == "FLCHECKBOX"){
				element.checked = true;
			}	
		}
	}else{
		for(i=0; document.forms[0].elements.length; i++){
			element = document.forms[0].elements[i];
			if(element.name.substring(0,10) == "FLCHECKBOX"){
				element.checked = false;
			}	
		}
	} 
}

function checarconsulta(arg, arg1, arg2){
  if (!arg.checked) {
    if (arg1 != null) {
      arg1.checked = false;    
      arg2.checked = false;    
    }
  }
}

function setDsPerfil() {
  if (document.forms[0].dsPerfil.value != "") {
//    window.parent.filtro.document.forms[0].dsPerfil.value = document.forms[0].dsPerfil.value;
    var divPefil = document.getElementById("perfil");
    if( divPefil != null ){
    	divPefil.style.display = "";
    }
  }
}

function cadastrarPerfilUsuario() {
	var divNovoPerfil = document.getElementById("DivNovoPerfil");
	var divCadastroUsuario = document.getElementById("DivCadastroUsuarioFuncoes");;
	document.getElementById("dsPerfil2").value = document.getElementById("dsPerfil").value;
	var dsPerfil = document.getElementById("dsPerfil2").value;
	var divBotao = document.getElementById("DivBotaoConfirmar");
	if(divNovoPerfil != null){
		divNovoPerfil.style.display = 'none';
	}
	if(divCadastroUsuario != null){
		divCadastroUsuario.style.display = '';
		divBotao.style.display = ''; 
	}
	
	FacadePerfilUsuarioAjax.incluirPerfil(dsPerfil,{callback:function(codigo){
												 		setaCdPerfil(codigo);
												 		}
												 });
}


function setaCdPerfil(codigo){
   	    DWRUtil.setValue("cdPerfil", codigo);		
}

/*function incluiPerfil() {
  	vform = document.forms[0];
  	vform.action = "app?cmd=incluirperfilusuario";
  	vform.submit();
}*/

function setPaginas() {
	document.forms[0].pagAtual.value = 1;
  	document.forms[0].pagFinal.value = "";
}

function atualizaListaPerfil(){
	var dsFuncaoSistema = document.getElementById("dsFuncaoSistema").value;
	var cdFuncaoSistema = document.getElementById("cdFuncaoSistema").value;
	document.getElementById("existeAlteracao").value = true;
	FacadePerfilUsuarioAjax.atualizaListaPerfil(dsFuncaoSistema, cdFuncaoSistema,
												{callback:function(tabela){
								  					setaTabelaFuncoes(tabela);
								  					}
												});
	
}

function atualiza(campo){
	document.getElementById("existeAlteracao").value = true;
}


function salvar() {
 	var existeAlteracao = document.getElementById("existeAlteracao").value;
	if (document.forms[0].cdPerfil.value == '' && document.forms[0].dsPerfil.value == ''){
		alert("Informe o perfil do usuário!");
	} else {

		if(existeAlteracao == 'true'){
			document.forms[0].action = "app?cmd=atualizarperfilusuario";
     		document.forms[0].target = "";
	    	document.forms[0].submit();
			
		}else if (document.forms[0].cdPerfil.value == '' && existeAlteracao == 'false'){
			alert("Informe as funções sistema que o novo perfil terá acesso!");					
		}else{
			alert("Nenhuma alteração realizada!");			
		}
	}
	document.getElementsByName("existeAlteracao").value = false;
}


function excluiPerfilFunc() {
	var inputs = document.getElementsByTagName("input");
	var element = null;
	var arrayCodigos = new Array();
	var cont = 0;
	var cdPerfil = document.getElementById("cdPerfil").value;
	var cdClienteAplicacao = document.getElementById("cdClienteAplicacao").value;
	
	
	for(i=0; i<inputs.length; i++){
		element = inputs[i];
	    if(element.type == "checkbox"){
			if(element.name.substring(0,10) == 'FLCHECKBOX'){
				if(element.checked){
					arrayCodigos[cont] = document.getElementById("Codigo"+element.name.substring(10,element.name.length)).value;				
         			cont++;
				}
			}
		}
	}
	
	FacadePerfilUsuarioAjax.excluiPerfil(arrayCodigos, cdPerfil, cdClienteAplicacao, 
										{callback:function(tabela){
												setaTabelaFuncoes(tabela);
						  						}
										});
	 	
	
  	/*document.forms[0].action = "app?cmd=excluirperfilusuario";
  	document.forms[0].submit();*/
}

function listaFuncaoSistema() {
  	if (document.form1.dsPerfil.value == "") {
    	alert("Nenhum Perfil foi selecionado ! ");
  	}else{
	    document.form1.flConsulta.value = "S";
	    document.form1.dsFuncaoSistema.value = "";
	    vform = document.form1;
	    cdPerfil = vform.cdPerfil.value;
	    dsPerfil = vform.dsPerfil.value;
	    FacadePerfilUsuarioAjax.listarFuncaoSistemaPerfil(cdPerfil, dsPerfil,
	    											{callback:function(tabela){
	    														setaFuncoesSistema(tabela);
	    													}
	    											});
	    											
	   /* vform.action = "app?cmd=listarfuncaosistema";
	    vform.submit();*/
	}
}

/*function listaFuncaoSistema() {
  	vform = document.forms[0];
  	vform.action = "app?cmd=listarfuncaosistema";
  	setPaginas();
  	vform.submit();
}*/

function checaElementos() {
  	var vform = document.forms[0];
  	//lform = parent.lista.document.forms[0];
  	var flag = 0;
  	for (i = 0; i < vform.length; i++) {
  		campo = vform.elements[i].name;
    	if(campo.substring(0,6) == "Codigo") {
			if (vform.elements[i].value == vform.cdFuncaoSistema.value) {
				flag = 1;
        		alert("Função do Sistema já esta incluída !");
        		document.forms[0].dsFuncaoSistema.value = '';
		        break;
			}
	    }
  	}
  	if (flag == 0){
  	    atualizaListaPerfil();
  	    document.forms[0].dsFuncaoSistema.value = '';
	}   
	document.getElementsByName("existeAlteracao").value = true;
}

function incluiFuncaoSistema(){
	vform = document.forms[0];
	var cdFuncaoSistema = vform.cdFuncaoSistema.value;
	var dsFuncaoSistema = vform.dsFuncaoSistema.value;
	var cdPerfil = vform.cdPerfil.value;
	FacadePerfilUsuarioAjax.incluirPerfilFuncaoSistema(cdPerfil, cdFuncaoSistema, dsFuncaoSistema,
												 {callback:function(tabela){
												 		setaFuncoesSistema(tabela);
												 		}
												 });
	
/*	vform.action = "app?cmd=incluirfuncaosistema";
	vform.cdFuncaoSistema.value = document.forms[0].cdFuncaoSistema.value;
	vform.dsFuncaoSistema.value = document.forms[0].dsFuncaoSistema.value;
	vform.submit();
*/
}	

function setaTabelaFuncoes(tabela){
	var divTabelaFuncoes = document.getElementById("DivTabelaFuncoes");
	var divMensagem = document.getElementById("DivMensagem");
	if(divTabelaFuncoes != null){
		divTabelaFuncoes.style.display = '';
		divTabelaFuncoes.innerHTML = tabela;
		if(tabela == ""){
			if(divMensagem != null){
				divMensagem.style.display = ''
			}
			
			divTabelaFuncoes.style.display = 'none';
		}else{
			divTabelaFuncoes.innerHTML = tabela;
			divTabelaFuncoes.style.display = '';
			if(divMensagem != null){
				divMensagem.style.display = 'none';
			}
			
		}	
	}
	
	
}



function setaFuncoesSistema(tabela){
	var divTabelaFuncoes = document.getElementById("DivTabelaFuncoes");
	var divMensagem = document.getElementById("DivMensagem");
	
	if(divTabelaFuncoes != null){
		if(tabela[0] == ""){
			divMensagem.style.display = ''
			divTabelaFuncoes.style.display = 'none';
		}else{
			divTabelaFuncoes.innerHTML = tabela[0];
			divTabelaFuncoes.style.display = '';
			divMensagem.style.display = 'none';
		}
   	    DWRUtil.setValue("totalLinhas", tabela[1]);		
	}
}





function verificaPerfilUsuarioExiste(nome){
	
	FacadePerfilUsuarioAjax.verificaPerfilUsuarioExiste(nome,
												 {callback:function(tabela){
												 		verificaTemPerfilUsuario(tabela);
												 		}
												 });

}


function verificaTemPerfilUsuario(perfilExiste){
	
	vform = document.forms[0]; 
	
	if(perfilExiste == true) {
		alert("Perfil do usuário já existe.");
		vform.btIncluirPerfil.style.display = "none";
	} else {
		vform.btIncluirPerfil.style.display = "";	
		if(document.getElementById("dsPerfil").value != ""){
			document.getElementById("btlov1").disabled = false;
			document.getElementById("dsFuncaoSistema").disabled = false;
		}else{
			document.getElementById("btlov1").disabled = true;
			document.getElementById("dsFuncaoSistema").disabled = true;
		}	

		vform.btIncluirPerfil.style.display = "";		
	}
}