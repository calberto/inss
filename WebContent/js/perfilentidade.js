// Função para montagem da tela de consulta de configuração de canal de venda
function montaTelaCanalVenda() {
  document.forms[0].action = "app?cmd=montatelaconfcanalvenda";
  document.forms[0].submit();  
}

function montaTelaPerfilCanalVenda(operacao) {
  
  if(operacao == 1) {
      document.forms[0].action = "app?cmd=adotaperfilconfcanalvenda";
  } else if(operacao == 2) {
  	  document.forms[0].action = "app?cmd=adotaperfilincluiconfcanalvenda";
  } else if(operacao == 3) {
  	  document.forms[0].action = "app?cmd=montatelaperfilcanalvenda";
  }
  
  document.forms[0].submit();  
}

//Função chamada quando for uma consulta somente por seguradora
function  montaTelaSeguradora(){
  montaTela('S');
}

//Função chamada quando for uma consulta por perfil de entidade
function  montaTelaPerfil(){
  montaTela('P');
}

//Função chamada quando for uma consulta por perfil de entidade
function  montaTelaCadastroPerfil(){
  montaTela('C');
}

//Função chamada quando for uma consulta por entidade(canal devenda)
function  montaTelaEntidade(){
  montaTela('E');
}

function montaTela(tpconsulta){
  //O Tipo de consulta passado por parâmetro indica se a consulta é do tipo:
  //C: consulta somente por cliente de aplicação
  //P: consulta por perfil de entidade
  //E: consulta por entidade(canal devenda)
  document.forms[0].action = "app?cmd=montatelaperfilentidade&TPCONSULTA="+tpconsulta;
  document.forms[0].submit(); 
}

function carregaCombos(nmVariavel, valor, idSeguradora){
  vform = document.forms[0];
  
  if (idSeguradora == "") {
    parent.hiddenFrame.location.replace("popula_combo_dependente.jsp?CDPESSOASEGURADORA="+vform.idPessoaSeguradora.value+"&CDSEGURADORA="+vform.cdSeguradora.value+"&NMVARIAVEL="+nmVariavel+"&VALOR="+valor);    
  } else {
    parent.hiddenFrame.location.replace("popula_combo_dependente.jsp?CDPESSOASEGURADORA="+vform.idPessoaSeguradora.value+"&CDSEGURADORA="+idSeguradora+"&NMVARIAVEL="+nmVariavel+"&VALOR="+valor);    
  }
  
}


function carregaComboDependente() {  
  //Faz um laço em todos os componentes do form,
  //esses componentes são os combos dependentes(podem ser mais de um)
  hform = parent.hiddenFrame.document.forms[0];
  for (i = 0 ; i< hform.elements.length ; i++){
    componente = hform.elements[i];
    eval("select = document.forms[0]."+componente.name+";");
    eval("while (0 < select.length) { "+
    "  document.forms[0]."+componente.name+".options[0] = null; "+
    "}");  
    for (k = 0; k < componente.length ; k++) {
      eval("document.forms[0]."+componente.name+".options[k] = new Option(parent.hiddenFrame.document.forms[0]."+componente.name+".options[k].text,parent.hiddenFrame.document.forms[0]."+componente.name+".options[k].value);");
      /*Caso retorne algum registro, habilita o Combo*/
      if(k !=0 ){
        eval("  document.forms[0]."+componente.name+".disabled = false;");
      }
    }
  }
}

function guardaCamposICEmBranco() { 
  vform = document.forms[0];
  vform.camposICEmBanco.value = '';
  for (i = 0 ; i< vform.elements.length ; i++){
    componente = vform.elements[i];
    if (componente.name.charAt(0)=='I'){
      if (componente.value == '')
        vform.camposICEmBanco.value = vform.camposICEmBanco.value + componente.name +'|'
    }
  }  
} 
  
  function AbrirJanelaSeguradoraConfig() {
  	  cw = (screen.availWidth/2) - (400/2);
	  ch = (screen.availHeight/2) - (183/2);
  
      window.open('seguradoras_config.jsp', 'popup', 'width='+400+',height='+183+',top='+ch+',left='+cw);   
  }
  
    function AbrirJanelaSeguradoraSeg(vForm) {
  	  cw = (screen.availWidth/2) - (400/2);
	  ch = (screen.availHeight/2) - (183/2);
  
      window.open('seguradoras_seg.jsp?cd_segmento='+vForm.B_CdSegmCliente.value+'&foiSalvo='+vForm.foiSalvo.value, 'popup', 'width='+400+',height='+183+',top='+ch+',left='+cw);   
  }