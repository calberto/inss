var ModalDialogWindow;
var ModalDialogInterval;
var ModalDialog = new Object;

ModalDialog.value = '';
ModalDialog.eventhandler = ''; 

function ModalDialogMaintainFocus(){
  try  {
    if (ModalDialogWindow.closed)     {
        window.clearInterval(ModalDialogInterval);
        eval(ModalDialog.eventhandler);       
        return;
     }
    ModalDialogWindow.focus(); 
  }  catch (everything) {   }
}
        
 function ModalDialogRemoveWatch() {
    ModalDialog.value = '';
    ModalDialog.eventhandler = '';
 }

function comparaDatas(dataIni,dataFim,mensagem){

     ano1 = dataIni.substring(6,10);
     mes1 = dataIni.substring(3,5);
     dia1 = dataIni.substring(0,2);

     ano2 = dataFim.substring(6,10);
     mes2 = dataFim.substring(3,5);
     dia2 = dataFim.substring(0,2);
     
//     mensagem = 'Data Inicial não pode ser maior que a Data Final !';

     if (ano1>ano2){
//      alert('Ano'); 
      alert(mensagem);       
      return false;          
     } else if (ano1==ano2){
        if (mes1>mes2){
//          alert('Mes'); 
          alert(mensagem);       
          return false;          
        } else if (mes1==mes2) {
              if (dia1>dia2){
//                alert('Dia'); 
                alert(mensagem);       
                return false;          
              }
        }
     } 
     
     return true;



/*
   dtInicial = Date.parse(dataIni);
   dtFinal = Date.parse(dataFim); 
   
   if (dtInicial > dtFinal){
     alert('Data Inicial não pode ser maior que a final');
     return false; 
   }
   return true;
   */
}

function validaData(objData){
    //alert('nome-'+nome);
    //alert('valor-'+valor);
    if (objData.value !== null && objData.value!='' )
      if (!validaDataMens(objData)) {
       objData.focus();
      }
}

/*
 Função para habilitar/desabilitar o botão de perfil de acordo com
 a seleção do campo Tipo de Perfil.
 
 Seguradora: Sul América
*/
/*function habilitaBotaoPerfil(valor){        
 vform = document.forms[0];
 if (valor == 1) {   
    vform.I04BotaoPerfilComercial.disabled  = true;
    vform.I04BotaoPerfilParticular.disabled = false;
 } else if (valor == 2) {    
    vform.I04BotaoPerfilComercial.disabled  = false;
    vform.I04BotaoPerfilParticular.disabled = true;
 }


}*/


function Limpar(valor, validos) { 
  //retira caracteres invalidos da string 
  var result = ""; 
  var aux; 
  for (var i=0; i < valor.length; i++) { 
    aux = validos.indexOf(valor.substring(i, i+1)); 
    if (aux>=0) { 
      result += aux; 
    } 
  } 
  return result; 
}

function FormataValor(campo,tammax,teclapres) { 
  var tecla = teclapres.keyCode; 
  vr = Limpar(campo.value,"0123456789"); 
  tam = vr.length; 
  if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; } 

  if (tecla == 8 ){ tam = tam - 1 ; } 

  if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){ 
  if ( tam <= 2 ){ 
  campo.value = vr ;  
  } 
  if ( (tam > 2) && (tam <= 5) ){ 
  campo.value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ); } 
  if ( (tam >= 6) && (tam <= 8) ){ 
  campo.value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ); } 
  if ( (tam >= 9) && (tam <= 11) ){ 
  campo.value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ); } 
  if ( (tam >= 12) && (tam <= 14) ){ 
  campo.value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ); } 
  if ( (tam >= 15) && (tam <= 17) ){ 
  campo.value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam );} 
  } 
}

//Permite a digitação de Numeros e um caractere passado no parametro
function soNumChar(s,campo,param) { 
	for (vlcont = 0 ; vlcont <= 12 ; vlcont++) {
		if (s.charAt(vlcont) == "") {
			var vlPosAtual = vlcont-1;
			break;
		}
	}

	var vlChar = s.charAt(vlPosAtual);
	var vaAux1 = ((vlChar >= "0") && (vlChar <= "9"));
  var vaAux2 = (vlChar == param);

	if(!vaAux1 && !vaAux2) {
    var vlNewChar = "";
    for (vlcont = 0 ; vlcont <= vlPosAtual ; vlcont++) {
      if (vlcont != vlPosAtual) {
        vlNewChar = vlNewChar + s.charAt(vlcont);
      }
    }
		eval("document.forms[0]." + campo + ".value = vlNewChar");
		return false;
	}
	return true;
}



//Permite a digitação de Numeros e Vírgula
function soNumeros(s,campo) { 
	for (vlcont = 0 ; vlcont <= 12 ; vlcont++) {
		if (s.charAt(vlcont) == "") {
			var vlPosAtual = vlcont-1;
			break;
		}
	}

	var vlChar = s.charAt(vlPosAtual);
	var vaAux1 = ((vlChar >= "0") && (vlChar <= "9"));
  var vaAux2 = (vlChar == ",");

	if(!vaAux1 && !vaAux2) {
    var vlNewChar = "";
    for (vlcont = 0 ; vlcont <= vlPosAtual ; vlcont++) {
      if (vlcont != vlPosAtual) {
        vlNewChar = vlNewChar + s.charAt(vlcont);
      }
    }
		eval("document.forms[0]." + campo + ".value = vlNewChar");
		return false;
	}
	return true;
}

//Permite a digitação somente de Numeros
function soNumero(s,campo) { 
	
	posCursor = getCaretPosition(eval("document.forms[0]." + campo));
	
	var vlNewChar = "";
	var vaAux1 = false;	
	var alterou = false;
	
	for (vlcont = 0 ; vlcont <= eval("document.forms[0]." + campo + ".value.length") ; vlcont++) {
		
		if((posCursor - 1) == vlcont) {
		
			vlChar = s.charAt(vlcont);
			vaAux1 = ((vlChar >= "0") && (vlChar <= "9"));
			
			if(vaAux1) {
				vlNewChar += s.charAt(vlcont);
			} else  {
				
				alterou = true;
			}
		} else {			
		
			vlNewChar += s.charAt(vlcont);
		}
	}
	
	if(alterou) {
	
		eval("document.forms[0]." + campo + ".value = vlNewChar");
	}
	
	return true;
}

function getCaretPosition(objTextBox){ 

    var objTextBox = window.event.srcElement;
    var i = objTextBox.value.length; 
    if (objTextBox.createTextRange){ 
        objCaret = document.selection.createRange().duplicate(); 
        while (objCaret.parentElement()==objTextBox && 
               objCaret.move("character",1)==1) --i; 
    } 
    return i; 
  } 


//Verifica caracteres especiais que são diferentes de números
//como virgula , ponto, exclamação, interrogação, espaço em branco 
//no meio da string etc.
function CriticaValorNumerico(valor,campo) { 
//  alert(campo);
  var result = ""; 
  var controle="";
  var aux; 
  validos="0123456789";
  for (var i=0; i < valor.length; i++) { 
    aux = validos.indexOf(valor.substring(i, i+1)); 
    if (aux>=0) { 
    result += aux; 
    } else {
    //  alert('result-'+result);
      controle="S";
    }
  } 
  if (controle=="S") {
    alert('Só é permitido valores numéricos'); 
    campo.focus();
//    eval("document.forms[0]." + campo + ".focus()");
  }
   
  return result; 
} 

function abreFuncao(){
  parent.consulta.imprimir();
}

function AtualizarMenuSuperior(){
  self.parent.parent.parent.Topo.Form1.submit();
}

/*
Ultimate Age calculator script- By JavaScript Kit (http://www.javascriptkit.com)
Over 200+ free scripts here!
Credit must stay intact for use

Sample usage
displayage (dtFinal, hoje, unit, decimals, rounding)
Unit can be "years", "months", or "days"
Decimals specifies demical places to round to (ie: 2)
Rounding can be "roundup" or "rounddown"
displayage(1997, 11, 24, "years", 0, "rounddown")
*/
function calculaIdade(dtFinal, hoje, unit, decimal, round){
var one_day=1000*60*60*24;
var one_month=1000*60*60*24*30;
var one_year=1000*60*60*24*30*12;
	hojeStr = new String(hoje);
	hojeTmp = hojeStr.split('/');
	ano = hojeTmp[2];
	mes = hojeTmp[1];
	dia = hojeTmp[0];
	today=new Date(ano, mes-1, dia);
	
	dtFinalStr = new String(dtFinal);
	dtFinalTmp = dtFinalStr.split('/');
	yr = dtFinalTmp[2];
	mon = dtFinalTmp[1];
	day = dtFinalTmp[0];
	
	var pastdate=new Date(yr, mon-1, day);    
	var countunit=unit;
	var decimals=decimal;
	var rounding=round;

	finalunit=(countunit=="days")? one_day : (countunit=="months")? one_month : one_year;
	decimals=(decimals<=0)? 1 : decimals*10;

	if (unit!="years"){
		if (rounding=="rounddown")
			return (Math.floor((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals+" "+countunit);
		else
			return (Math.ceil((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals+" "+countunit);
	} else {
		yearspast=today.getFullYear()-yr-1;
		tail=(today.getMonth()>mon-1 || today.getMonth()==mon-1 && today.getDate()>=day)? 1 : 0;
		pastdate.setFullYear(today.getFullYear());
		pastdate2=new Date(today.getFullYear()-1, mon-1, day);
		tail=(tail==1)? tail+Math.floor((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals : Math.floor((today.getTime()-pastdate2.getTime())/(finalunit)*decimals)/decimals;
		return (yearspast+tail);
	}
}

function obterPontoCentral(medidaTela, medidaJanela){	
	resposta = (medidaTela - medidaJanela) / 2;
	if (resposta < 0) {
		resposta = 0;
	}
	return resposta;
}

/** Função que retira os carateres '.' da string passada */
function retiraPontos(field) {
	
	stringParam = field.value;

	caracteresInvalidos = stringParam.match(/\W/g);
		
	if(caracteresInvalidos != null && caracteresInvalidos.length > 0) {
		stringParam = stringParam.replace(/\W/g, "");
	}
	
	field.value = stringParam;
}

function eCaractere(campo) {
  	 
      listaA = new Array('á', 'à', 'ä', 'ã', 'â');      
      listaE = new Array('é', 'è', 'ë', 'ê');      
      listaI = new Array('í', 'ì', 'ï', 'î');
      listaO = new Array('ó', 'ò', 'ö', 'õ', 'ô');
      listaU = new Array('ú', 'ù', 'ü', 'û');
      
      textoCampo = campo.value.toLowerCase();
  	  ultimoCaractere = textoCampo.charAt(textoCampo.length - 1);
	  
	  if(listaContemCaractere(listaA, ultimoCaractere)) {
	  	  textoCampo = textoCampo.replace(ultimoCaractere, "a");
	  } else if(listaContemCaractere(listaE, ultimoCaractere)) {
	  	  textoCampo = textoCampo.replace(ultimoCaractere, "e");
	  } else if(listaContemCaractere(listaI, ultimoCaractere)) {
	  	  textoCampo = textoCampo.replace(ultimoCaractere, "i");
	  } else if(listaContemCaractere(listaO, ultimoCaractere)) {
		  textoCampo = textoCampo.replace(ultimoCaractere, "o");	  
	  } else if(listaContemCaractere(listaU, ultimoCaractere)) {
	  	  textoCampo = textoCampo.replace(ultimoCaractere, "u");
	  } else if(ultimoCaractere == 'ç') {
	  	  textoCampo = textoCampo.replace(ultimoCaractere, "c");
	  }
	  
	  campo.value = textoCampo.toUpperCase();
  }
  
  function listaContemCaractere(lista, caractere) {
  	  
  	  for(i = 0; i < lista.length; i++) {
  	  	  if(lista[i] == caractere) {
  	  	  	  return true;
  	  	  }
  	  }
  	  
  	  return false;
  }
