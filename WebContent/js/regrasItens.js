// JavaScript Document

// Somente n�mero no campo de texto, opcional passar o tamanho m�ximo do campo
function checarcampo( evt, limitCampo ) {
    
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    
    // Trata o caso das teclas "especiais" os meta-caracteres. (enter, ctrl, shift, etc)
	if (charCode == 13 || evt.ctrlKey || (window.Event && evt.keyCode)) return true;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "Este campo aceita somente n�meros"
        return false
    }
    status = ""
    return true
}

// Campos de texto com regras
/***
* Descri��o.: formata um campo do formul�rio de acordo com a m�scara informada...
* Par�metros:
* - objForm (o Objeto Form)
* - strField (string contendo o nome do textbox)
* - sMask (mascara que define o  formato que o dado ser� apresentado:
* "9" para definir n�meros
* "x" para definir somente letras maiusculas e minusculas SEM espa�o
* "!" para qualquer caracter
*
* - evtKeyPress (evento)
* Uso...: <input type="textbox"
* name="xxx".....
* onkeypress="return txtBoxFormat(document.rcfDownload, 'str_cep', '99999-999', event);">
*
* Caracteres aceitos para mascara : -,;:./() espa�o
*
* Observa��o: As m�scaras podem ser representadas como os exemplos abaixo:
* CEP -> 99.999-999
* CPF -> 999.999.999-99
* CNPJ -> 99.999.999/9999-99
* Data -> 99/99/9999
* Tel Resid -> (99) 999-9999
* Tel Cel -> (99) 9999-9999
* Processo -> 99.999999999/999-99
* C/C -> 999999-!
* Hora -> 99:99:99
* Placa -> xxx - 9999
* N� Apolice -> 999999-9
***/

function txtBoxFormat(obj, fieldValue, sMask, evtKeyPress) {
     var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;
     nTecla = (evtKeyPress.which) ? evtKeyPress.which : evtKeyPress.keyCode;
     sValue = fieldValue;
     // Limpa todos os caracteres de formata��o que
     // j� estiverem no campo.
     expressao = /[\.\/\-\(\)\,\;\: ]/gi;
     sValue = sValue.toString().replace(expressao, '');
     fldLen = sValue.length;
     mskLen = sMask.length;

     i = 0;
     nCount = 0;
     sCod = "";
     mskLen = fldLen;

     while (i <= mskLen) {
       bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/") || (sMask.charAt(i) == ",") || (sMask.charAt(i) == ";") || (sMask.charAt(i) == ":"))
       bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))

       if (bolMask) {
         sCod += sMask.charAt(i);
         mskLen++; }
       else {
         sCod += sValue.charAt(nCount);
         nCount++;
       }

       i++;
     }

     obj.value = sCod;

     if (nTecla != 8 && nTecla != 13)
      { // backspace enter
       if (sMask.charAt(i-1) == "9")
       { // apenas n�meros...
         return ((nTecla > 47) && (nTecla < 58));
       } // n�meros de 0 a 9
       else
       {
            if (sMask.charAt(i-1) == "x")
           { // apenas letras... Sem espaco
             return ((nTecla > 64) && (nTecla < 123));
           } // maiusculas e minusculas de A a z sem acentos
           else
           { // qualquer caracter...
            return true;
          }
       }
      }
     else
     {
       return true;
     }
   }
//Fim da Fun��o M�scaras Gerais

// selcionar check

function Selecionar(formName, checkName, btObservar)
  {
      // quantidade de checkbox
      var qtdCheck = 0;

      // quantidade de elementos 'input'
      var qtdElementos = document.getElementsByTagName("input");
      
      // formul�rio
      var formName = document.getElementById(formName);

      // verifica se � para 'chekar' ou 'deschekar'
      if ( btObservar )
      {
          for (i=0; i<qtdElementos.length; i++) // loop para 'chekar'
          {
              if ( qtdElementos[i].getAttribute("name") == checkName )
                  eval("formName."+checkName+"["+ qtdCheck++ +"].checked = true;");
          }
      }
      else
      {
          for (i=0; i<qtdElementos.length; i++) // loop para 'chekar'
              if ( qtdElementos[i].getAttribute("name") == checkName )
                  eval("formName."+checkName+"["+ qtdCheck++ +"].checked = false;");
      }
  }


//---

//-- excluir celula
	function deleteRow(i)
	{
	document.getElementById('minhatabela').deleteRow(i)
	}
//--

 //valor  de moeda R$

function FormataReais(fld, milSep, decSep, e) {

	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;
	
	if (whichCode == 13) return true;
	key = String.fromCharCode(whichCode);  // Valor para o c�digo da Chave
	if (strCheck.indexOf(key) == -1) return false;  // Chave inv�lida
	len = fld.value.length;
	
	for(i = 0; i < len; i++)
		if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
	aux = '';
	for(; i < len; i++)
		if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
	aux += key;
	len = aux.length;

	if (len == 0) fld.value = '';
	if (len == 1) fld.value = '0'+ decSep + '0' + aux;
	if (len == 2) fld.value = '0'+ decSep + aux;
	if (len > 2) {
		aux2 = '';
		for (j = 0, i = len - 3; i >= 0; i--) {
			if (j == 3) {
				aux2 += milSep;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}
		fld.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
			fld.value += aux2.charAt(i);
		fld.value += decSep + aux.substr(len - 2, len);
	}
	
	return false;
}
//Fim da Fun��o FormataReais  onKeyPress="return(FormataReais(this,'.',',',event))" -->


// Critica se o campo num�rico 'campo' com a descricao 'descricao' possuir algum valor n�o num�rico.
// Ocorre no caso do usu�rio colar algo nesse campo.
function criticaCampoNumerico( campo, descricao ){
	var valor = document.getElementById( campo ).value;
	if ( isNaN(valor) ){
		alert( "Campo " + descricao + " com valores incorretos" );
		document.getElementById( campo ).focus();
	}
}

// N�o permite n�meros no campo de texto
function checarCampoLetras(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode    
    if ( charCode > 31 && ( charCode >= 48 && charCode <= 57 ) ) {
        status = "Este campo somente aceita letras"
        return false
    }
    status = "";
    return true;
}

// Verifica se um campo placa est� com valores v�lidos.
function verificaCampoPlaca( campo ){
	var valor = document.getElementById( campo ).value;
	if ( valor.length == 0 ){
		return;
	} else if ( valor.length != 10 ){
		alert( 'Placa inv�lida.' );
		document.getElementById( campo ).focus();
	} else {
		var letras = valor.substring( 0, 3 );
		if ( !isNaN( letras ) ){
			alert( 'Sigla da placa inv�lida.' );
			document.getElementById( campo ).focus();
		}
		var numeros = valor.substring( 6 );
		if ( isNaN( numeros ) ){
			alert( 'N�mero da placa inv�lido.' );
			document.getElementById( campo ).focus();
		}
	}
}

function verificaCampoData( campo ){
	var data = document.getElementById( campo );
 	var strdata = data.value;
 	var alertaData = '';
	
	// Verifica se o campo da data foi informado
	if ( strdata.length == 0 ){
		return;
	// Verifica se a quantidade de digitos informada � igual a dez e a m�scara da data dd/mm/aaa
	} else if ( strdata.length != 10 || strdata.substr( 2, 1 ) != "/" || strdata.substr( 5, 1 ) != "/" ){
		alertaData += "Formato da data n�o � v�lido. (dd/mm/aaaa)" ;
	// Se o formato da data � valido, verificar a validade da data
	} else {

		var dia = strdata.substr( 0, 2 ); // Cont�m o dia da data informada
	 	var mes = strdata.substr( 3, 2 ); // Cont�m o m�s da data informada
	 	var ano = strdata.substr( 6, 4 ); // Cont�m o ano da data informada
		//Verifica o dia
	 	if ( isNaN( dia ) || dia > 31 || dia < 1 ){
			alertaData += "Dia informado n�o v�lido.";
		// Verifica se a quantidade informada de dias pode estar contida dentro do m�s informado
		} else if ( mes == 4 || mes == 6 || mes == 9 || mes == 11 ){
			if ( dia == "31" ){
				alertaData += "Dia inv�lido para o m�s informado.";
	 		}
	 	// Verifica o caso especial do m�s fevereiro, o qual pode ter 28 ou 29 dias
	 	} else if ( mes == "02" ){
			bissexto = ano % 4;
			if ( bissexto == 0 ) {
				if ( dia > 29 ){
					alertaData += "Dia inv�lido para o m�s informado.";
				}
			} else if (dia > 28) {
	 			alertaData += "Dia inv�lido para o m�s informado.";
			}
	 	//Verifica o m�s
	 	} else if ( isNaN( mes ) || mes > 12 || mes < 1 ){
			alertaData += "M�s inv�lido.";
		//Verifica o ano
		} else if ( isNaN( ano ) ){
			alertaData += "Ano inv�lido.";
		} else if ( ano < 1901 ){
			alertaData += "A data deve ser posterior a 1900.";
		}	
	}
	if ( alertaData != '' ){
		alert( alertaData );
		data.focus();
	}
}

function verificaCampoTelefone( campo ){
	var valor = document.getElementById( campo ).value;
	var parenteses1 = valor.substring( 0, 1 );
	var parenteses2 = valor.substring( 3, 4 );
	var espaco = valor.substring( 4, 5 );
	var traco = valor.substring( 9, 10 );
	
	if ( valor.length == 0 ){
		return;
	} else if ( valor.length != 14 || parenteses1 != '(' || parenteses2 != ')' || espaco != ' ' || traco != '-' ){
		alert( 'Telefone inv�lido. O formato correto � (XX) XXXX-XXXX' );
		document.getElementById( campo ).focus();
	} else {
		var ddd = valor.substring( 1, 3 );
		if ( isNaN( ddd ) ){
			alert( 'DDD inv�lido.' );
			document.getElementById( campo ).focus();
		}
		var numeros1 = valor.substring( 5, 9 );
		var numeros2 = valor.substring( 10 );
		if ( isNaN( numeros1 ) || isNaN( numeros2 ) ){
			alert( 'N�mero de telefone inv�lido.' );
			document.getElementById( campo ).focus();
		}
	}
}


function verificaCampoNuApolice( campo ){
	var valor = document.getElementById( campo ).value;
	var valorNumerico = valor.substring( 0, 6 );
	var traco = valor.substring( 6, 7 );
	var valorLetra = valor.substring( 7, 8 );
	
	
	if ( valor.length == 0 ){
		return;
	} else if ( valor.length != 8 || traco != '-' ){
		alert( 'N�mero de Ap�lice inv�lido. O formato correto � XXXXXX-X' );
		document.getElementById( campo ).focus();
	} else {
		if ( isNaN( valorNumerico ) ){
			alert( 'Os seis primeiros campos devem ser valores num�ricos!' );
			document.getElementById( campo ).focus();
		}else if ( isNaN( valorLetra )){
			alert( 'O ultimo digito deve ser num�rico!' );
			document.getElementById( campo ).focus();
		}
	}
}

// Formata um campo para o tipo moeda com um tamanho m�ximo definido.
function FormataReaisTamanhoMaximo(fld, milSep, decSep, tamanho, e) {

	if ( tamanho == fld.value.length ){
		return false;
	}
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;
	
	if (whichCode == 13) return true;
	key = String.fromCharCode(whichCode);  // Valor para o c�digo da Chave
	if (strCheck.indexOf(key) == -1) return false;  // Chave inv�lida
	len = fld.value.length;
	
	for(i = 0; i < len; i++)
		if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
	aux = '';
	for(; i < len; i++)
		if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
	aux += key;
	len = aux.length;

	if (len == 0) fld.value = '';
	if (len == 1) fld.value = '0'+ decSep + '0' + aux;
	if (len == 2) fld.value = '0'+ decSep + aux;
	if (len > 2) {
		aux2 = '';
		for (j = 0, i = len - 3; i >= 0; i--) {
			if (j == 3) {
				aux2 += milSep;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}
		fld.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
			fld.value += aux2.charAt(i);
		fld.value += decSep + aux.substr(len - 2, len);
	}
	return false;
}

// Formata um campo para o tipo moeda com um tamanho m�ximo definido.
function FormataReaisTamanhoMaximoNegativo(fld, milSep, decSep, tamanho, e) {
	
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;
	var inicio = fld.value.charAt( 0 ) == '-' ? 1 : 0;
	
	if ( fld.value == '' ){
		fld.value == '0,00';
	}
	
	if (whichCode == 13){
		return true;
	}
	
	key = String.fromCharCode( whichCode );  // Valor para o c�digo da Chave
	
	if ( tamanho <= fld.value.length && key != '-' ){
		return false;
	}
	
	if ( key != '-' ){
		if ( strCheck.indexOf( key ) == -1 ){ // Chave inv�lida
			return false;
		}
	} else {
		if ( fld.value.charAt( 0 ) == '-' ){
			fld.value = fld.value.substring( 1 );
		} else {
			fld.value = '-' +  fld.value;
		}
		return false;
	}
	
	len = fld.value.length;

	for(i = inicio; i < len; i++){
		if ( (fld.value.charAt(i) != '0' ) && ( fld.value.charAt(i) != decSep ) ){
			break;
		}
	}

	aux = '';
	for( ; i < len; i++ ){
		if ( strCheck.indexOf( fld.value.charAt( i ) ) !=-1 ){
			aux += fld.value.charAt( i);
		}
	}

	aux += key;
	len = aux.length;

	if (len == 0) fld.value = '';
	if (len == 1) fld.value = '0'+ decSep + '0' + aux;
	if (len == 2) fld.value = '0'+ decSep + aux;
	if (len > 2) {
		aux2 = '';
		for (j = 0, i = len - 3; i >= 0; i--) {
			if (j == 3) {
				aux2 += milSep;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}
		fld.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
			fld.value += aux2.charAt(i);
		fld.value += decSep + aux.substr(len - 2, len);
	}
	
	if ( inicio == 1 ){
		fld.value = '-' + fld.value;
	}
	
	return false;
}
/*
	Muda o foco para o campo consecutivo no item telefone, podendo este ser o campo
	Ddd ou Tel.
	param1: idCampoOrigem - Identificador do campo onde est� o foco.
 	param2: idCampoDestino - Identificador do campo que ganhar� o foco.
 	param3: tamMax - Tamanho m�ximo do campo onde est� o foco (Opcional).
 		
	December 11, 2007.
	Joc�lio Ot�vio.
*/
function mudarFocoTelefone( campoAtual, idCampo, tamMax ){
	if ( campoAtual.id == idCampo+'Ddd' ){
		var campoOrigem = document.getElementById( idCampo+'Ddd' );
		mudarFocoTamanhoMaximo( campoOrigem, idCampo+'Tel' );
	} else if ( campoAtual.id == idCampo+'Tel' ){
		var campoOrigem = document.getElementById( idCampo+'Tel' );	
		mudarFocoTamanhoMaximo( campoOrigem, idCampo+'Ram', tamMax );
	}
}
/*
	Muda o foco para o campo consecutivo, salvo quando o campo de origem esteja selecionado.
	param1: origem - Refer�ncia ao campo onde est� o foco.
 	param2: idCampoDestino - Identificador do campo que ganhar� o foco.
 	param3: tamMax - Tamanho m�ximo do campo onde est� o foco (Opcional).
 		
	December 11, 2007.
	Joc�lio Ot�vio.
*/
function mudarFocoTamanhoMaximo( origem, idCampoDestino , tamMax){
	var tam = tamMax != null ? tamMax : origem.maxLength; // Verifica se o par�metro 'tamMax' foi passado. 
	var selected_text = "";
	// Verifica se o conte�do do campo est� selecionado.
    if ( document.selection ) {
		selected_text = document.selection.createRange().text;
	} else {
		selected_text = origem.value.substring(origem.selectionStart, origem.selectionEnd);
	}	
	// S� muda o foco se o conte�do n�o estiver selecionado.
	if ( origem.value.length >= tam && selected_text!=origem.value){
		var destino = document.getElementById( idCampoDestino );
		destino.focus();
		destino.select();		
	}
}
/*
	Fun��o que serve para remover um determinado caracter de um determinado campo.
	
	December 11, 2007.
	Joc�lio Ot�vio
*/
function removeCaracter( campoTel , character ) {
	campoTel.value = campoTel.value.replace( character, "" );
	campoTel.select();
}
/*
	Fun��o que serve para formatar o campo telefone ao sair do mesmo.
	
	December 11, 2007.
	Joc�lio Ot�vio
*/
function FormataTelefone( campoTel ) {
	var vrCampo = campoTel.value;
	if ( vrCampo.length > 4 ) {
		vrCampo = vrCampo.substring( 0, 4 ) + "-" + vrCampo.substring( 4, vrCampo.length );
		campoTel.value = vrCampo;
	}	
}
/*
	Fun��o que serve para remover os pontos de um n�mero do tipo moeda.
	
	December 05, 2007.
	Marcelo Henrique.
*/
function RemovePontos( fld, flSeleciona ) {
	/*
		Verificando se existem pontos no campo e removendo
	*/
	while( fld.value.indexOf('.') != -1 )
		fld.value = fld.value.replace('.', '');
	
	if(flSeleciona == "S"){
	   fld.select();		
	}
	
}

/*
	M�todo que serve para restringir e validar
	campos do tipo moeda.
	
	December 03, 2007.
	Marcelo Henrique.
*/
function ValidaMoedaTamanhoMax( id, decSep, tam, e ) {
	
	var key = '';
	var strCheck = '0123456789'+decSep; // Valores v�lidos para ser digitados pelo usu�rio
	var ini, end;
	var posVirgula, posVirgulaTextoSel;
	var whichCode = (window.Event) ? e.which : e.keyCode;
	
	// Trata o caso das teclas "especiais" os meta-caracteres. (enter, ctrl, shift, etc)
	if (whichCode == 13 || e.ctrlKey || (window.Event && e.keyCode)) return true;
	
	key = String.fromCharCode(whichCode);  // Valor para o c�digo da Chave
	if (strCheck.indexOf(key) == -1) return false;  // Chave inv�lida

	/*
		Trecho que pega o texto selecionado dentro do textfield
		e substitui pela tecla digitada caso seja v�lida.
	*/
	if(id.constructor == String)
		id = document.getElementById(id);
	
	var selected_text = "";
    if(document.selection)
		selected_text = document.selection.createRange().text;
    else
		selected_text = id.value.substring(id.selectionStart, id.selectionEnd);
    
    posVirgula = id.value.indexOf(','); // Posi��o da v�rgula no texto todo do campo
    posVirgulaTextoSel = selected_text.indexOf(decSep); // Posi��o de uma v�rgula no texto selecionado
    /*
    	Esse teste � o seguinte, se o campo completo tem uma virgula
    	e o texto selecionado n�o cont�m essa v�rgula ent�o n�o permitir�
    	digitar outra vez a v�rgula
    */
    if( ( posVirgula != -1 ) && ( posVirgulaTextoSel == -1 ) )
    	if( key == decSep )
    		return false;
    
    if(selected_text != '')
    	return true;
    // Se o atributo 'maxlength' estiver setado, seu valor ser� usado como limite
	if ( id.maxLength > 0 && id.maxLength < 2000) {
		tam = id.maxLength;
	}
	tam = tam - 3; // 2 casas decimais + 1 v�rgula = 3 retirados.
	/*
		Trecho que trata a quantidade m�xima de caracteres.
	*/
	if(posVirgula != -1) {
		// Pegando a posi��o do cursor.
		if(id.createTextRange) {
			var range = document.selection.createRange();
			var bookmark = range.getBookmark();
			ini = bookmark.charCodeAt(2) - 2;
		} else {
			ini = id.selectionStart;
			end = id.selectionEnd;
		}
		/*
			Testando se o usu�rio est� tentando digitar um
			n�mero antes ou depois da v�rgula.
		*/
		if( ini <= posVirgula ) {
			if(posVirgula < tam) {
				return true;
			}
		} else {
			if( posVirgula > ( id.value.length - 3 ) ) {
				return true;
			}
		}
	} else {
		if(id.value.length < tam) {
			return true;
		} else if( key == decSep ) {
			return true;
		}
	}
	
	return false;
}

/*
	M�todo que serve para restringir e validar
	campos do tipo moeda.
	
	December 06, 2007.
	Marcelo Henrique.
*/
function ValidaMoedaTamanhoMaxNegativo( id, decSep, tam, e ) {
	
	var key = '';
	var strCheck = '-0123456789'+decSep; // Valores v�lidos para ser digitados pelo usu�rio
	var ini, end;
	var posVirgula;
	var whichCode = (window.Event) ? e.which : e.keyCode;
	
	// Trata o caso das teclas "especiais" os meta-caracteres. (enter, ctrl, shift, etc)
	if (whichCode == 13 || e.ctrlKey || (window.Event && e.keyCode)) return true;
	
	key = String.fromCharCode(whichCode);  // Valor para o c�digo da Chave
	if (strCheck.indexOf(key) == -1) return false;  // Chave inv�lida

	if(id.constructor == String)
		id = document.getElementById(id);
	
	/*
		Trecho respons�vel por tratar o pressionamento da tecla '-'.
	*/
	if( key == '-' ) {
		if( id.value.indexOf('-') == -1 ) {
			id.value = key+id.value;
			if(id.createTextRange) {
				var range = document.selection.createRange();
				var bookmark = range.getBookmark();
				ini = bookmark.charCodeAt(2) - 2;
				if (window.XMLHttpRequest) {
        			// IE 7, mozilla, safari, opera 9
        			var range = id.createTextRange(); 
	        		range.move('character', ini+1); 
    	    		range.select();
        		} else {
        			// IE6, older browsers
        			var range = id.createTextRange(); 
        			range.move('character', ini+2); 
        			range.select();
        		}
			} else {
				ini = id.selectionStart;
				end = id.selectionEnd;
				id.focus();
        		id.setSelectionRange(ini+1, ini+1);
			}
		} else { 
			id.value = id.value.replace(key, '');
			if(id.createTextRange) {
				var range = document.selection.createRange();
				var bookmark = range.getBookmark();
				ini = bookmark.charCodeAt(2) - 2;
				if (window.XMLHttpRequest) {
        			// IE 7, mozilla, safari, opera 9
        			var range = id.createTextRange(); 
	        		range.move('character', ini); 
    	    		range.select();
        		} else {
        			// IE6, older browsers
        			var range = id.createTextRange(); 
        			range.move('character', ini+1); 
        			range.select();
        		}
			} else {
				ini = id.selectionStart;
				end = id.selectionEnd;
				id.focus();
        		id.setSelectionRange(ini+1, ini+1);
			}
		}
		return false;
	}
	
	/*
		Trecho que pega o texto selecionado dentro do textfield
		e substitui pela tecla digitada caso seja v�lida.
	*/
	// Trecho respons�vel por pegar o texto selecionado.
	var selected_text = "";
    if(document.selection)
		selected_text = document.selection.createRange().text;
    else
		selected_text = id.value.substring(id.selectionStart, id.selectionEnd);
    
    posVirgula = id.value.indexOf(','); // Posi��o da v�rgula no texto todo do campo
    if( ( posVirgula != -1 ) && ( selected_text.indexOf(decSep) == -1 ) )
    	if( key == decSep )
    		return false;
    
    if((selected_text != ''))
    	return true;
	
	/*
		Trecho que valida se o usu�rio digitou uma v�rgula
		e n�o permite mais do que dois caracteres ap�s a v�rgula.
	*/
	/*
		Trecho que trata a quantidade m�xima de caracteres.
	*/
	if(posVirgula != -1) {
		// Pegando a posi��o do cursor.
		if(id.createTextRange) {
			var range = document.selection.createRange();
			var bookmark = range.getBookmark();
			ini = bookmark.charCodeAt(2) - 2;
		} else {
			ini = id.selectionStart;
			end = id.selectionEnd;
		}
		/*
			Testando se o usu�rio est� tentando digitar um
			n�mero antes ou depois da v�rgula.
		*/
		if( ini <= posVirgula ) {
			if(posVirgula < tam)
				return true;
		} else
			if( posVirgula > ( id.value.length - 3 ) )
				return true;
	} else {
		if(id.value.length < tam) {
			return true;
		} else if( key == decSep ) {
			return true;
		}
	}
	
	return false;
}
/*
	Fun��o que serve para formatar textfields do tipo moeda ap�s a perda do foco.
	
	December 04, 2007.
	Marcelo Henrique
*/
function FormataMoeda( fld, milSep, decSep ) {
	RemovePontos( fld, 'N' );
	var valorCampo = fld.value;
	var tam = valorCampo.length;
	var posVirgula = valorCampo.indexOf(decSep);
	
	/*
		Tratando o caso dos zeros a esquerda.
	*/
	if(valorCampo.charAt(0) == '-')
		while( ( valorCampo.charAt(1) == '0' ) && ( valorCampo.charAt(2) != decSep ) )
			valorCampo = '-'+valorCampo.substring(2);
	else
		while( ( valorCampo.charAt(0) == '0' ) && ( valorCampo.charAt(1) != decSep ) )
			valorCampo = valorCampo.substring(1);
	/*
		Tratando o caso das v�rgulas o auto-complete ao perder o foco.
	*/

	if(valorCampo.charAt(0) == '-') {
		if( posVirgula == -1 ) {
			valorCampo += ",00";
			posVirgula = valorCampo.indexOf(decSep);
			tam = valorCampo.length;
		}
		if(posVirgula == 1) {
			valorCampo = "-0"+valorCampo.substring(1);
			posVirgula = valorCampo.indexOf(decSep);
			tam = valorCampo.length;
		}
		if(posVirgula == (tam - 1)) {
			valorCampo += "00";
			posVirgula = valorCampo.indexOf(decSep);
			tam = valorCampo.length;
		}
		if(posVirgula == (tam - 2)) {
			valorCampo += "0";
			posVirgula = valorCampo.indexOf(decSep);
			tam = valorCampo.length;
		}
	} else {
		if( posVirgula == -1 ) {
			valorCampo += ",00";
			posVirgula = valorCampo.indexOf(decSep);
			tam = valorCampo.length;
		}
		if(posVirgula == 0) {
			valorCampo = "0"+valorCampo;
			posVirgula = valorCampo.indexOf(decSep);
			tam = valorCampo.length;
		}
		if(posVirgula == (tam - 1)) {
			valorCampo += "00";
			posVirgula = valorCampo.indexOf(decSep);
			tam = valorCampo.length;
		}
		if(posVirgula == (tam - 2)) {
			valorCampo += "0";
			posVirgula = valorCampo.indexOf(decSep);
			tam = valorCampo.length;
		}
	}
	valorCampo = ( valorCampo == '-0,00' ) ? '0,00' : valorCampo;
		
	/*
		Tratando o caso dos separadores das grandezas.
	*/
	posVirgula = valorCampo.indexOf(',');
	var posInserirSep = posVirgula - 3;
	var ini, end;
	if(valorCampo.charAt(0) == '-')
		while(posInserirSep > 1) {
			ini = valorCampo.substr(0, posInserirSep);
			end = valorCampo.substring(posInserirSep);
			valorCampo = ini+'.'+end;
			posInserirSep -= 3;
		}
	else
		while(posInserirSep > 0) {
			ini = valorCampo.substr(0, posInserirSep);
			end = valorCampo.substring(posInserirSep);
			valorCampo = ini+'.'+end;
			posInserirSep -= 3;
		}
	fld.value = valorCampo;
	// S� p/ Firefox
	try	{
		criarEventoDOM2( fld.id, "change" );
	} catch (e) {}
}
/* Fun��es implementadas no DOM n�vel 2, ultilizadas no Firefox e demais browsers(� IE) que implementam
	a interface EventTarget 
*/
function criarEventoDOM2( nmCampo, dsEvento ) {
	var ea = document.createEvent( "Events" );
	ea.initEvent( dsEvento, true, false );	
	document.getElementById( nmCampo ).dispatchEvent( ea );
}

function criarEventoMouseDOM2( nmCampo, dsEvento ) {
	var ea = document.createEvent( "MouseEvents" );
	ea.initMouseEvent( dsEvento, 1, 1, window, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, null );	
	document.getElementById( nmCampo ).dispatchEvent( ea );
}

function validaDataCartaoCredito( nmCartaoCredito ){
	var campoDataCartao = document.getElementById( nmCartaoCredito );
	if ( campoDataCartao != null ){ // Se o campo existe na tela.
		var mesAno = campoDataCartao.value;
		if ( mesAno != '' ){ // Se o campo n�o � vazio.
			var mes = mesAno.substring( 0, 2 );
			if ( !( !isNaN( mes ) && ( mes >= 1 && mes <= 12 ) ) ){ // Verifica se o m�s do cart�o est� numa faixa correta. 
				alert( 'M�s/Ano do cart�o inv�lido.' );
				campoDataCartao.value = '';
				campoDataCartao.focus();
			}
		}
	}
}


function realcaProximaAba(mainTab, nmAba){

if(document.getElementById(mainTab) != null){

var LIlist=document.getElementById(mainTab).getElementsByTagName("li"); //get list of LIs corresponding to the tab contents
for (var i=0; i<LIlist.length; i++){
     var alist = LIlist[i].getElementsByTagName("a");
     for (var a=0; a<alist.length; a++){
        var thetab = alist[a];
        if (thetab.getAttribute("rel") == nmAba){
            LIlist[i].className= "nexttab"
        }
     }
}

}

}

function verificaPergRespSemAceitacao(campo, valorSemAceitacao){

	if(campo.value == valorSemAceitacao) {
		campo.value = "";
		alert("Risco sem aceita��o para a op��o informada!");
	}
	
}

function selecionaPrimeiraOpcaoDoCombo(campo, flgVerificaCampoRespondido){

	if(campo.options[0] != null){
	   if((flgVerificaCampoRespondido == "S" && campo.value == "") || flgVerificaCampoRespondido == "N" ){
	      campo.value = campo.options[0].value;	   
	   }
	}

}

function realcaCamposObrigatorios(nomes){

	for (i = 0 ; i <= vform.elements.length-1 ; i++) { 
       if(vform.elements[i].name != null && vform.elements[i].value != null && vform.elements[i].type != "button" && vform.elements[i].style != null){
            if(vform.elements[i].style.background == "#ff9000"){
              vform.elements[i].style.background = "#fff";	
            }	
       }
    }

if(nomes.indexOf("=") != -1){
while(nomes.indexOf("=") != -1 ){
    
    var nomeCampo = nomes.substring(0, nomes.indexOf("="));
    if(nomeCampo == ""){
       nomes = "";
    }else {
    
    	if(document.getElementById(nomeCampo) != null ){
	        document.getElementById(nomeCampo).style.background = "#ff9000"; 
	    }
	    nomes = nomes.substring(nomes.indexOf("=")+1);
    }
}

}

}


function removeApostofolo( campo ) {

while(campo.value.indexOf("'") != -1 ){
	campo.value = campo.value.replace( "'", " " );
}

}


//FIXME: ver outro lugar para isso
Date.prototype.getdiasNoAno=function(){
	var month = this.getMonth()
	var year = this.getFullYear()
	var retDays = 0
	//temos regras �nicas para cada m�s
	if(month>0)//jan
		retDays+=31
	if(month>1)//fev
		retDays+=28
	if(year % 400 == 0 || (year%4 == 0 && year%100!=0))//ano bissexto
		retDays+=1
	if(month>2)//mar	
		retDays+=31
	if(month>3)//abr
		retDays+=30
	if(month>4)//mai
		retDays+=31
	if(month>5)//jun
		retDays+=30
	if(month>6)//jul
		retDays+=31
	if(month>7)//ago
		retDays+=31//a regra vira
	if(month>8)//set
		retDays+=30
	if(month>9)//out
		retDays+=31
	if(month>10)//nov
		retDays+=30
	retDays+=this.getDate()//se for dezembro s� nos resta pegar o dia do m�s
	return retDays
}
Date.prototype.getDiasNoAno=Date.prototype.getdiasNoAno

//FIXME: ver um lugar melhor para isso depois
/*
	recebemos um texto no formato dd/mm/aaaa e devolvemos um objeto date.
	se der errado vamo ter uma data com o a data atual.
*/
function textoParaDate(valorAlegadamenteData){
	var dta = new Date()
	var padrao = new RegExp("[0-9]{1,2}/[0-9]{1,2}/[0-9]{2,4}")//XXX: melhorar esse regex
	
	if(valorAlegadamenteData.match(padrao)){
		var valor = valorAlegadamenteData.split("/")
		dta.setFullYear(valor[2],(valor[1]-1),valor[0])
	}
	return dta
}

function dateParaTexto(valorDate,incrementoAno){
	var dia = valorDate.getDate()
	var mes = valorDate.getMonth()+1
	var ano = valorDate.getFullYear()
	if(incrementoAno)
		ano+=incrementoAno
	var texto = ""
	
	if((""+dia).length<2)
		texto+="0"+dia+"/"
	else
		texto+=dia+"/"
	
	if((""+mes).length<2)
		texto+="0"+mes+"/"
	else
		texto+=mes+"/"
	//XXX: pro ano non faremos...
	texto+=ano
	return texto
}


function getUltimoDiaMes(mes, ano){
	var ultimoDiaMes = 0;
	
	//temos regras �nicas para cada m�s
	if(mes == 1){//jan
		ultimoDiaMes=31
    }else if(mes == 2 ){//fev
		if(ano % 400 == 0 || (ano%4 == 0 && ano%100!=0)){//ano bissexto
			ultimoDiaMes=29
		}else{
			ultimoDiaMes=28
		}	
	}else if(mes == 3 ){//mar	
		ultimoDiaMes=31
	}else if(mes == 4 ) {//abr
		ultimoDiaMes=30
	}else if(mes == 5 ){//mai
		ultimoDiaMes=31
	}else if(mes == 6 ){//jun
		ultimoDiaMes=30
	}else if(mes == 7 ){//jul
		ultimoDiaMes=31
	}else if(mes == 8 ){//ago
		ultimoDiaMes=31
	}else if(mes == 9 ){//set
		ultimoDiaMes=30
	}else if(mes == 10 ){//out
		ultimoDiaMes=31
	}else if(mes == 11){//nov
		ultimoDiaMes=30
    }else if(mes == 12){//nov
        ultimoDiaMes = 31
    }
	
	return ultimoDiaMes;
}


function dataIncrementaDias(valorDate,incrementoDia){
	var dia = valorDate.getDate()
	var mes = valorDate.getMonth()+1
	var ano = valorDate.getFullYear()
    var ultimoDiaMes = getUltimoDiaMes(mes, ano);
    var novoDia = parseInt(dia) + parseInt(incrementoDia);    
    
	if( novoDia > ultimoDiaMes) {

		while(novoDia > ultimoDiaMes){
         novoDia = novoDia - ultimoDiaMes;
         if(mes == 12){
           mes = 1;       
           ano +=1; 
         }else{
           mes +=1;
         }
         
         ultimoDiaMes = getUltimoDiaMes(mes, ano);
		}


	}
	
	var texto = ""
	
	if((""+novoDia).length<2)
		texto+="0"+novoDia+"/"
	else
		texto+=novoDia+"/"
	
	if((""+mes).length<2)
		texto+="0"+mes+"/"
	else
		texto+=mes+"/"
	//XXX: pro ano non faremos...
	texto+=ano
	return texto
};

function contadorDiasEntreDatas(valorDateIni, valorDateFim){

var contadorDias = 0;
var flgContadorNegativo = "N";

if(valorDateIni.getTime() < valorDateFim.getTime()){
	while(dateParaTexto(valorDateIni) != dateParaTexto(valorDateFim) ){
	  valorDateIni = textoParaDate(dataIncrementaDias(valorDateIni,1));
	  contadorDias++;
	}
}else if(valorDateIni.getTime() > valorDateFim.getTime()){
    flgContadorNegativo = "S";
	while(dateParaTexto(valorDateIni) != dateParaTexto(valorDateFim) ){
	  valorDateFim = textoParaDate(dataIncrementaDias(valorDateFim,1));
	  contadorDias++;
	}
}

if(flgContadorNegativo == "S"){
contadorDias = contadorDias * (-1);
}

return contadorDias;

}

function diasDecorridos(dt1, dt2){
    // vari�veis auxiliares
    var minuto = 60000; 
    var dia = minuto * 60 * 24;
    var horarioVerao = 0;
    
    // ajusta o horario de cada objeto Date
    dt1.setHours(0);
    dt1.setMinutes(0);
    dt1.setSeconds(0);
    dt2.setHours(0);
    dt2.setMinutes(0);
    dt2.setSeconds(0);
    
    // determina o fuso hor�rio de cada objeto Date
    var fh1 = dt1.getTimezoneOffset();
    var fh2 = dt2.getTimezoneOffset(); 
    
    // retira a diferen�a do hor�rio de ver�o
    if(dt2 > dt1){
      horarioVerao = (fh2 - fh1) * minuto;
    } 
    else{
      horarioVerao = (fh1 - fh2) * minuto;    
    }
    
    var dif = Math.abs(dt2.getTime() - dt1.getTime()) - horarioVerao;
    return Math.ceil(dif / dia);
};