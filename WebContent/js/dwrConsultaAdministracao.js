function atualiza(campo){
	document.getElementById("existeAlteracao").value = true;
}

function setParametros(){

vform = document.forms[0];
var lista = new Array(vform.elements.length);
	for (i = 0 ; i <= vform.elements.length-1 ; i++) { 
       if(vform.elements[i].name != null && vform.elements[i].value != null && vform.elements[i].type != "button"){
           
           if(vform.elements[i].type == "radio" || vform.elements[i].type == "checkbox"){
           	  if(vform.elements[i].checked == true){
           	    lista[i] = vform.elements[i].name + "="+vform.elements[i].value;
           	  }
           }else {
              lista[i] = vform.elements[i].name + "="+vform.elements[i].value;	
           }
           
       }
    }

    return lista;
}



function montaListaUsuario(){

	var lista = setParametros();
    var nmPessoaEntidade = document.getElementById("nmPessoaEntidade").value;
	FacadeConsultaAdministracaoAjax.montaListaUsuario( lista,nmPessoaEntidade,
                                   {	callback:function(valor) {
		                                setandoListaUsuario(valor);
		                                }
                                   });
}

function setandoListaUsuario(valor){
	
	divLista = document.getElementById("DivListaUsuario");
	divLista.innerHTML = valor[0];
	DWRUtil.setValue("pagAtual", valor[1]);	
	DWRUtil.setValue("pagFinal", valor[2]);
	DWRUtil.setValue("total", valor[3]);
	
	divNavegacao = document.getElementById("DivNavegacao");
	divNavegacao.style.display = "block";
	
}


function montaListaUsuariosAcesso(){

	var lista = setParametros();
	var usuario = document.getElementById("nmApelidoUsuario").value;
	
	FacadeConsultaAdministracaoAjax.montaListaUsuariosAcesso( lista, usuario,
                                   {	callback:function(valor) {
		                                setandoListaUsuariosAcesso(valor);
		                                }
                                   });
}


function incluiNovoUsuariosAcesso(){

	var lista = setParametros();
	FacadeConsultaAdministracaoAjax.incluiUsuariosAcessoLista( lista,
                                   {	callback:function(valor) {
		                                setandoListaUsuariosAcesso(valor);
		                                }
                                   });
}


function setandoListaUsuariosAcesso(valor){
    var	divLista = document.getElementById("DivListaUsuariosAcesso");
    var divMensagem = document.getElementById("DivMensagem");
	if(valor[2] != null){
		alert(valor[2]);
	}else {
		if(valor[0] == ""){
			divMensagem.style.display = '';
			divLista.style.display = 'none';
		}else{
			divLista.innerHTML = valor[0];
			divLista.style.display = '';
			divMensagem.style.display = 'none';
		}
		DWRUtil.setValue("totalLinhas", valor[1]);
	}
	
}






function populandoComboSubProduto(cdProduto){

FacadeConsultaAdministracaoAjax.carregaComboSubProduto( cdProduto,
                                   {	callback:function(listaBean) {
		                                setandoComboSubProduto(listaBean);
		                                }
                                   });
                                   
}

function setandoComboSubProduto(listaBean){
	DWRUtil.removeAllOptions("cdSubProduto");
    DWRUtil.addOptions("cdSubProduto", listaBean, "valorOption", "nomeOption");

	
}


function montaListaItensContratacao(){

	var lista = setParametros();
	FacadeConsultaAdministracaoAjax.montaListaItensContratacao( lista,
                                   {	callback:function(valor) {
		                                setandoListaItensContratacao(valor);
		                                }
                                   });
}


function setandoListaItensContratacao(valor){
	
	divLista = document.getElementById("DivListaItensContratacao");
	divLista.innerHTML = valor[0];
	DWRUtil.setValue("pagAtual", valor[1]);	
	DWRUtil.setValue("pagFinal", valor[2]);
	DWRUtil.setValue("total", valor[3]);
	
	divNavegacao = document.getElementById("DivNavegacao");
	divNavegacao.style.display = "block";
	
}


function populandoComboCidades(estado){

	FacadeConsultaAdministracaoAjax.carregaComboCidades( i,
	                                   {	callback:function(listaBean) {
			                                setandoComboCidades(listaBean);
			                                }
	                                   });
	                                   
	}

	function setandoComboCidades(listaBean){
		DWRUtil.removeAllOptions("descricao");
	    DWRUtil.addOptions("descricao", listaBean, "valorOption", "nomeOption");

		
	}
