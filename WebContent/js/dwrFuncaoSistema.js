function carregaCodigoFuncao(flMenu){
	FacadeAjax.retornaCodigoFuncao(flMenu,{
		callback:function(listBean) {
			DWRUtil.removeAllOptions("superior")
			DWRUtil.addOptions("superior", listBean, "valorOption", "nomeOption")
		}
	})
}


function atualiza(campo){
	document.getElementById("existeAlteracao").value = true;
}

function salvar() {
	var existeAlteracao = document.getElementById("existeAlteracao").value;
	if (document.forms[0].cdPerfil.value == ''){
	    alert("Informe o usuário!");
	} else {
		
		if(existeAlteracao){
			document.forms[0].action = "app?cmd=atualizarperfilusuario";
     		document.forms[0].target = "";
	    	document.forms[0].submit();
		}else{
			alert("Nenhuma alteração realizada!");			
		}
	}
	document.getElementsByName("existeAlteracao").value = false;
	
}

function checaracesso(item){
    if (!item.checked)
      item.checked = true;   
}

function checarconsulta(arg, arg1, arg2){
  if (!arg.checked) {
    if (arg1 != null) {
      arg1.checked = false;    
      arg2.checked = false;    
    }
  }
}

function listaFuncaoSistema() {
	if (document.forms[0].nmApelido.value == "") {
	  	alert("Nenhum Usuário foi selecionado ! ");
	}else{
	  	document.forms[0].flConsulta.value = "S";
	  	document.forms[0].dsFuncaoSistema.value = "";
	  	vform = document.forms[0];
	  	var cdPerfil = vform.cdPerfil.value;
	  	var cdPessoaUsuario = vform.cdPessoaUsuario.value;
	  	var nmApelido = vform.nmApelido.value;
	  	FacadeFuncaoSistemaAjax.listaFuncaoSistema(cdPerfil ,cdPessoaUsuario, nmApelido,
	  											{callback:function(tabela){
	  														setaTabelaFuncoes(tabela);
	  													  }
	  											});
	}
}



function atualizaListaPerfilUsuario(){
	var dsFuncaoSistema = document.getElementById("dsFuncaoSistema").value;
	var cdFuncaoSistema = document.getElementById("cdFuncaoSistema").value;
	document.getElementById("existeAlteracao").value = true;
	FacadeFuncaoSistemaAjax.atualizaListaPerfilUsuario(dsFuncaoSistema, cdFuncaoSistema,
												{callback:function(tabela){
								  					setaTabelaFuncoes(tabela);
								  					}
												});
	
}

function checaElementos() {
  	vform = document.forms[0];

	if (vform.flConsulta.value != "S") {
		alert("Nenhum Usuário foi consultado !");
		vform.cdFuncaoSistema.value = "";
		vform.dsFuncaoSistema.value = "";
  	}else{
		flag = 0;
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
     		atualizaListaPerfilUsuario();
     		document.forms[0].dsFuncaoSistema.value = '';
      	}	
  	}
}
function excluiFuncaoSistema(myArray){
	var vform = document.forms[0];
	var cdPessoaUsuario = document.forms[0].cdPessoaUsuario.value;
	var cdClienteAplicacao = document.forms[0].cdClienteAplicacao.value;
	FacadeFuncaoSistemaAjax.excluiFuncaoSistema(cdClienteAplicacao, cdPessoaUsuario, myArray, 
												{callback:function(tabela){
	  													setaTabelaFuncoes(tabela);
	  												}
												})
}

function atualizaUsuario() {
	var cdClienteAplicacao = document.getElementById("cdClienteAplicacao").value;
	var cdPerfil = document.getElementById("cdPerfil").value;
	var cdPessoaUsuario = document.getElementById("cdPessoaUsuario").value;
	var cdFuncaoSistema = document.getElementById("cdFuncaoSistema").value;
	var restaurar = null;
	if(document.getElementById("restaurar").checked){
		restaurar =	"S";
	}else{
		restaurar =	"";
	}
	var arrayCodigos = new Array();
	var arraySelecionar = new Array();
	var arrayIncluir = new Array();
	var arrayAtualizar = new Array();
	var arrayExcluir = new Array();
	var contCod = 0;
	var contSel = 0;
	var contInc = 0;
	var contAtu = 0;
	var contExc = 0;
	var inputs = document.getElementsByTagName("input");
	var element = null;
	for(i=0; i<inputs.length; i++){
		element = inputs[i];
		if(element.type == "hidden"){
			if(element.name.substring(0,6) == 'Codigo'){
    			arrayCodigos[contCod] = element.value;
				contCod++;
			}
		}else if(element.type == "checkbox"){
			if(element.name.substring(0,12) == 'FLSELECIONAR'){
    			arraySelecionar[contSel] = element.name;				
    			contSel++;
			}else if(element.name.substring(0,9) == 'FLINCLUIR'){
				arrayIncluir[contInc] = element.name;
				contInc++;
			}else if(element.name.substring(0,11) == 'FLATUALIZAR'){
				arrayAtualizar[contAtu] = element.name;
				contAtu++;
			}else if(element.name.substring(0,9) == 'FLEXCLUIR'){
			    arrayExcluir[contExc] = element.name;
			    contExc++;
			}
		}
	}
	
	FacadeFuncaoSistemaAjax.atualizaFuncaoSistema(cdClienteAplicacao, cdPerfil, cdPessoaUsuario, cdFuncaoSistema, restaurar,
				arrayCodigos, arraySelecionar, arrayIncluir, arrayAtualizar, arrayExcluir,
				{callback:function(tabela){
  						setaTabelaFuncoes(tabela);
  						}
				});
  	/*document.forms[0].action = "app?cmd=atualizarperfilusuario";
  	document.forms[0].submit();*/
}

function incluiFuncaoSistema(){
	vform = document.forms[0];
  	var cdFuncaoSistema = document.forms[0].cdFuncaoSistema.value;
  	var dsFuncaoSistema = document.forms[0].dsFuncaoSistema.value;
  	var cdPerfil = document.forms[0].cdPerfil.value;
  	
  	FacadeFuncaoSistemaAjax.incluiFuncaoSistema(cdFuncaoSistema, dsFuncaoSistema,cdPerfil,
  												{callback:function(tabela){
	  														setaTabelaFuncoes(tabela);
	  													  }
	  											});
	document.forms[0].dsFuncaoSistema.value = "";  	
											
}

function setaTabelaFuncoes(tabela){
	divTabelaFuncoes = document.getElementById("DivTabelaFuncoes");
	var divMensagem = document.getElementById("DivMensagem");

	if(divTabelaFuncoes != null){
		divTabelaFuncoes.innerHTML = tabela;
		if(tabela == ""){
			divMensagem.style.display = ''
			divTabelaFuncoes.style.display = 'none';
		}else{
			divTabelaFuncoes.innerHTML = tabela;
			divTabelaFuncoes.style.display = '';
			divMensagem.style.display = 'none';
		}	
	}	
	
}