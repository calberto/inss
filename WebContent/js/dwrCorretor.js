/*---------------------------------------CORRETOR-----------------------------------------------*/

function validarDadosCorretor(vform){

nuEV = document.getElementById("IEv"); 
nuAV = document.getElementById("IAcaoVenda"); 
nuEA = document.getElementById("IEa"); 
nuAA = document.getElementById("IAa"); 
//nuUOP = document.getElementById("IUop"); 
//nuSUSEP = document.getElementById("ICodSusep"); 
//nuSucursal = document.getElementById("ISucursal"); 

if(nuEV != null && nuAV != null && nuEA != null && nuAA != null && 
   nuEV.value != '' && nuAV.value != '' && nuEA.value != '' && nuAA.value != '' ){

	FacadeAjax.validaDadosCorretor(nuEV.value, nuAV.value, nuEA.value, nuAA.value,  
	                               {	callback:function(valor) {
		                                setaRetornoDadosCorretor(valor, vform);
		                                }
                                   });

}

}

function setaRetornoDadosCorretor(valor, vform){

	if(valor[0] == "S" ){	
		mensagem = valor[1];
  	    alert(mensagem);
    } else {
        DWRUtil.setValue("INmCorretor", valor[2]);	
        DWRUtil.setValue("ICodSusep", valor[3]);
		vform.confirmar.disabled = false;
	}
	
	
}

function validarDadosCorretorSucursal(vform){

nuEV = document.getElementById("IEv"); 
nuAV = document.getElementById("IAcaoVenda"); 
nuEA = document.getElementById("IEa"); 
nuAA = document.getElementById("IAa"); 

if(nuEV != null && nuAV != null && nuEA != null && nuAA != null && 
   nuEV.value != '' && nuAV.value != '' && nuEA.value != '' && nuAA.value != '' ){

	FacadeAjax.validaDadosCorretor(nuEV.value, nuAV.value, nuEA.value, nuAA.value,  
	                               {	callback:function(valor) {
		                                setaRetornoDadosCorretorSucursal(valor, vform);
		                                }
                                   });

}

}

function setaRetornoDadosCorretorSucursal(valor, vform){

	if(valor[0] == "S" ){	
		mensagem = valor[1];
  	    alert(mensagem);
    } else {
        vform.confirmar.disabled = false;
        div = document.getElementById("DivCanalVenda");
	    if(div != null){ div.style.display = ""; }
	     DWRUtil.setValue("empresaCorretora", valor[2]);
       	 DWRUtil.setValue("numSucursal", valor[4]);
   	     DWRUtil.setValue("comboSucursal", valor[4]);	
	}
	
	
}


function validarDadosCorretorCadastroUsuario(vform){

nuEV = document.getElementById("IEv"); 
nuAV = document.getElementById("IAcaoVenda"); 
nuEA = document.getElementById("IEa"); 
nuAA = document.getElementById("IAa"); 

if(nuEV != null && nuAV != null && nuEA != null && nuAA != null && 
   nuEV.value != '' && nuAV.value != '' && nuEA.value != '' && nuAA.value != '' ){

	FacadeAjax.validaDadosCorretor(nuEV.value, nuAV.value, nuEA.value, nuAA.value,  
	                               {	callback:function(valor) {
		                                setaRetornoDadosCorretorCadastroUsuario(valor, vform, nuEV.value);
		                                }
                                   });

}

}


function setaRetornoDadosCorretorCadastroUsuario(valor, vform, numEV){

	if(valor[0] == "S" ){	
		mensagem = valor[1];
  	    alert(mensagem);
    } else {
        vform.confirmar.disabled = false;
         botao = document.getElementById("confirmar");
	    if(botao != null){ botao.style.display = ""; }
	     DWRUtil.setValue("nmUsuario", valor[2]);
	     DWRUtil.setValue("empresaCorretora", valor[2]);
     	 DWRUtil.setValue("dsApelido", numEV);
      	 DWRUtil.setValue("numSucursal", valor[4]);
   	     DWRUtil.setValue("comboSucursal", valor[4]);
	}
	
	
}


function validarDadosCorretorTelaCadastroUsuario(vform){

nuEV = document.getElementById("IEv"); 
nuAV = document.getElementById("IAcaoVenda"); 
nuEA = document.getElementById("IEa"); 
nuAA = document.getElementById("IAa"); 

if(nuEV != null && nuAV != null && nuEA != null && nuAA != null && 
   nuEV.value != '' && nuAV.value != '' && nuEA.value != '' && nuAA.value != '' ){

	FacadeAjax.validaDadosCorretor(nuEV.value, nuAV.value, nuEA.value, nuAA.value,  
	                               {	callback:function(valor) {
		                                setaRetornoDadosCorretorTelaCadastroUsuario(valor, vform, nuEV.value);
		                                }
                                   });

}

}


function setaRetornoDadosCorretorTelaCadastroUsuario(valor, vform, numEV){

	if(valor[0] == "S" ){	
		mensagem = valor[1];
  	    alert(mensagem);
    } else {
         vform.BtSalvar.disabled = false;
      	 DWRUtil.setValue("numSucursal", valor[4]);
   	     DWRUtil.setValue("comboSucursal", valor[4]);
	}
	
	
}
/*---------------------------------------FIM CORRETOR-----------------------------------------------*/
