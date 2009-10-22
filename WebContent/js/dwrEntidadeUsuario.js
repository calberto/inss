function populandoComboUsuarioClienteAplic(cdUsuario, cdClienteAplicacao){

FacadeAjax.carregaComboUsuarioClienteAplic( cdUsuario, cdClienteAplicacao,
                                   {	callback:function(listaBean) {
		                                setandoComboUsuarioClienteAplic(listaBean);
		                                }
                                   });
                                   
}

function setandoComboUsuarioClienteAplic(listaBean){
	DWRUtil.removeAllOptions("combousuario");
    DWRUtil.addOptions("combousuario", listaBean, "valorOption", "nomeOption");
    document.forms[0].combousuario.disabled = false;
		
}

function populandoComboCanalVendaUsuario(cdUsuario, cdClienteAplicacao){

FacadeAjax.carregaComboCanalVendaUsuario( cdUsuario, cdClienteAplicacao,
                                   {	callback:function(listaBean) {
		                                setandoComboCanalVendaUsuario(listaBean);
		                                }
                                   });
                                   
}

function setandoComboCanalVendaUsuario(listaBean){
	DWRUtil.removeAllOptions("comboentidade");
    DWRUtil.addOptions("comboentidade", listaBean, "valorOption", "nomeOption");
    document.forms[0].comboentidade.disabled = false;
		
}
