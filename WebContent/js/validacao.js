var ftap="3298765432";
var total=0;
var i;
var resto=0;
var numPIS=0;
var strResto="";

function ChecaPIS(pis)
{

total=0;
resto=0;
numPIS=0;
strResto="";

	numPIS=pis;
			
	if (numPIS=="" || numPIS==null)
	{
		return false;
	}
	
	for(i=0;i<=9;i++)
	{
		resultado = (numPIS.slice(i,i+1))*(ftap.slice(i,i+1));
		total=total+resultado;
	}
	
	resto = (total % 11)
	
	if (resto != 0)
	{
		resto=11-resto;
	}
	
	if (resto==10 || resto==11)
	{
		strResto=resto+"";
		resto = strResto.slice(1,2);
	}
	
	if (resto!=(numPIS.slice(10,11)))
	{
		return false;
	}
	
	return true;
}

function ValidaPis()
{
	pis=document.form1.numPIS.value;
	
	if (!ChecaPIS(pis))
	{
		alert("PIS INVALIDO");
	} else {
		alert("PIS VALIDO");
	}
}



function ValidarCPF(Objcpf){
    var cpf = Objcpf.value;
    retorno = true;
    exp = /\.|\-/g
    cpf = cpf.toString().replace( exp, "" ); 
    var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
    var soma1=0, soma2=0;
    var vlr =11;
    
    for(i=0;i<9;i++){
        soma1+=eval(cpf.charAt(i)*(vlr-1));
        soma2+=eval(cpf.charAt(i)*vlr);
        vlr--;
    }    
    soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
    soma2=(((soma2+(2*soma1))*10)%11);
    
    var digitoGerado=(soma1*10)+soma2;
    if(digitoGerado!=digitoDigitado) {    
        alert('CPF Invalido!');  
        Objcpf.value="";
        Objcpf.focus();
        
    }    
     
}


function ValidarCNPJ(ObjCnpj){
    var cnpj = ObjCnpj.value;
    var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
    var dig1= new Number;
    var dig2= new Number;
    
    exp = /\.|\-|\//g
    cnpj = cnpj.toString().replace( exp, "" ); 
    var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));
        
    for(i = 0; i<valida.length; i++){
        dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);    
        dig2 += cnpj.charAt(i)*valida[i];    
    }
    dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
    dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));
    
    if(((dig1*10)+dig2) != digito) {  
        alert('CNPJ Invalido!');
    	ObjCnpj.value="";
    	ObjCnpj.focus();
    }	
}

//JavaScript Document
//adiciona mascara de cnpj
function MascaraCNPJ(cnpj){
  if(mascaraInteiro(cnpj)==false){
      event.returnValue = false;
  }    
  return formataCampo(cnpj, '00.000.000/0000-00', event);
}



function validaCpf(campo) {
	
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
      }
      if (validaCgc(cpf) && vform.ITipoPessoa != null){
      	  vform.ITipoPessoa.value = 'J';
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



function validaCgc(pcgc)
 { 
       // verifica o tamanho 
 if (pcgc.length != 14) {
  sim=false
  //alert ("Tamanho Invalido de CGC")
  }
 else {sim=true}

  if (sim )  // verifica se e numero
  {
  for (i=0;((i<=(pcgc.length-1))&& sim); i++)
  {
   val = pcgc.charAt(i)
       // alert (val)
   if
((val!="9")&&(val!="0")&&(val!="1")&&(val!="2")&&(val!="3")&&(val!="4") &&
(val!="5")&&(val!="6")&&(val!="7")&&(val!="8")) {sim=false}
   }
   if (sim)  // se for numero continua
   {
    m2 = 2
    soma1 = 0
    soma2 = 0
    for (i=11;i>=0;i--)
    {
     val = eval(pcgc.charAt(i))
       // alert ("Valor do Val: "+val)
     m1 = m2
  if (m2<9) { m2 = m2+1}
  else {m2 = 2}
  soma1 = soma1 + (val * m1)
  soma2 = soma2 + (val * m2)
    }  // fim do for de soma

  soma1 = soma1 % 11
  if (soma1 < 2) {  d1 = 0}
   else { d1 = 11- soma1}

     soma2 = (soma2 + (2 * d1)) % 11
  if (soma2 < 2) { d2 = 0}
   else { d2 = 11- soma2}
        // alert (d1)
       // alert (d2)
    if ((d1==pcgc.charAt(12)) && (d2==pcgc.charAt(13)))
      return true;
    else 
      return false;
   }
 }

 }


function ChecaCPF(pcpf){
if (pcpf.length != 11) {sim=false;}
else {sim=true;}
   
  if (sim)  // valida o primeiro digito
  {
  for (i=0;((i<=(pcpf.length-1))&& sim); i++)
  {
   val = pcpf.charAt(i);
   if

 ((val!="9")&&(val!="0")&&(val!="1")&&(val!="2")&&(val!="3")&&(val!="4")

 &&    (val!="5")&&(val!="6")&&(val!="7")&&(val!="8")) {sim=false}
   }

   if (sim)
  {
    soma = 0;
    for (i=0;i<=8;i++)
    {
     val = eval(pcpf.charAt(i));
     soma = soma + (val*(i+1));
    }

    resto = soma % 11;
    if (resto>9) dig = resto -10;
    else  dig = resto;
    if (dig != eval(pcpf.charAt(9))) { sim=false; }
   else   // valida o segundo digito
    {

     soma = 0;
    for (i=0;i<=7;i++)
     {
     val = eval(pcpf.charAt(i+1));
      soma = soma + (val*(i+1));
    }

     soma = soma + (dig * 9);
    resto = soma % 11;
     if (resto>9) dig = resto -10;
     else  dig = resto;
   if (dig != eval(pcpf.charAt(10))) { sim = false; }
    else sim = true;
   }
   }
  }

  if (sim) { return true }
  else
    return false;
}

function validaCPF(obj) {
  mudaNumeros(obj);
  
  if (!ChecaCPF(obj.value)) {
    alert("CPF inválido!");
    return false;
  }
return true;
}

function eNumeroStr(valor) {
  var numeros = "0123456789";
  if (valor == "")
    return false;
  for(var i=0;i<=valor.length-1;i++){
    if (valor.substr(i,1) != numeros.substr(numeros.indexOf(valor.substr(i,1)),1)){
      return false;
    }
  }
  return true;
}

function eAno(valor) {
  if (valor == "" || valor.length != 4)
    return false;
  return eNumeroStr(valor);
}

function validaAno(obj) {
  mudaNumeros(obj);
  return eAno(obj.value);  
}
  
function validaDataMens(obj) {  
  if (obj.value == "") {
    return false;
  }

  if (!eData(obj.value)) {
    alert("Data Inválida!"+'\n'+"A data deve estar no formato ddmmaaaa");    
    return false;
  } else {
    ano = parseInt(obj.value.substring(6,10), 10); 
	if (ano < 1900){
	  alert("Data Inválida!"+'\n'+"A data deve ser posterior a 1900");    
      return false;
	} else {
	  return true;
	}	
  }
}


function mudaCaracteres(obj) {

  if (obj.value != "") {
  
    cnp = new Array("Á","Ã","Â","À","Ó","Õ","Ô","Ò","É","Ê","È","Í","Î","Ì","Ú","Û","Ù");
    cnp["Á"] = "A";
    cnp["Ã"] = "A";
    cnp["Â"] = "A";
    cnp["À"] = "A";
    cnp["Ó"] = "O";
    cnp["Õ"] = "O";
    cnp["Ò"] = "O";
    cnp["Ô"] = "O";
    cnp["É"] = "E";
    cnp["Ê"] = "E";
    cnp["È"] = "E";
    cnp["Í"] = "I";
    cnp["Î"] = "I";
    cnp["Ì"] = "I";
    cnp["Ú"] = "U";
    cnp["Û"] = "U";
    cnp["Ù"] = "U";

    valor = obj.value;
    
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@./ 0123456789";
    s_chars = "ÁÃÂÀÓÕÔÒÉÊÈÍÎÌÚÛÙ";

    valor = valor.toUpperCase();

    for (k = 0;k<valor.length;k++) 
      if (chars.indexOf(valor.substr(k,1))<0 && s_chars.indexOf(valor.substr(k,1))<0) 
        valor = valor.substr(0,k)+""+valor.substr(k+1,valor.length-k-1);
  
    obj.value = valor;

    for (k = 0 ; k<valor.length ; k++) 
      if (chars.indexOf(valor.substr(k,1))<0 && s_chars.indexOf(valor.substr(k,1))<0) {
        mudaCaracteres(obj);
        break;
      }

    for (k = 0;k<valor.length;k++) 
      if (chars.indexOf(valor.substr(k,1))<0) 
        valor = valor.substr(0,k)+cnp[valor.substr(k,1)]+valor.substr(k+1,valor.length-k-1);
  
    obj.value = valor;

    for (k = 0 ; k<valor.length ; k++) 
      if (chars.indexOf(valor.substr(k,1))<0) {
        mudaCaracteres(obj);
        break;
      }
  }
}

function mudaNumeros(obj) {
  
  valor = obj.value;

  chars = "0123456789";

  valor = valor.toUpperCase();
  for (k = 0;k<valor.length;k++) 
    if (chars.indexOf(valor.substr(k,1))<0) 
      valor = valor.substr(0,k)+valor.substr(k+1,valor.length-k-1);
  
  obj.value = valor;

  for (k = 0 ; k<valor.length ; k++) 
    if (chars.indexOf(valor.substr(k,1))<0) {
      mudaNumeros(obj);
      break;
    }
}

function validaNumero(obj) {
  mudaNumeros(obj);
  if (obj.value == "")    
    return false;
}

function eData(valor) {
  s_dia = valor.substr(0,2);
  s_mes = valor.substr(3,2);
  s_ano = valor.substr(8,4);
 
  meses = new Array(12);
  meses[0] = 31;
  meses[1] = 28;
  meses[2] = 31;
  meses[3] = 30;
  meses[4] = 31;
  meses[5] = 30;
  meses[6] = 31;
  meses[7] = 31;
  meses[8] = 30;
  meses[9] = 31;
  meses[10] = 30;
  meses[11] = 31;
  if (!(valor.length == 10))
    return false;
  if (!eNumeroStr(s_dia) || !eNumeroStr(s_mes) || !eNumeroStr(s_ano))
    return false;
  else {
    dia = parseInt(s_dia,10);    
    mes = parseInt(s_mes,10);    
    ano = parseInt(s_ano,10);    
    if (ano % 4 == 0)   
      meses[1] = 29;

    if ((mes > 12 || dia <= 0 || mes <= 0 || ano < 0) || (dia > meses[mes-1]))
      return false;
    else 
      return true;
  }
}


function FormataData(obj,teclapres){
	var tecla = teclapres.keyCode;
	vr = obj.value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 5 )
			obj.value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
		if ( tam >= 5 && tam <= 10 )
			obj.value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 ); 
	}	

}
function FormataPlaca(obj,teclapres){
	var tecla = teclapres.keyCode;
  vr = obj.value;
	tam = vr.length;
  
  if ( tecla != 9 && tecla != 8 ){  
    var tec = vr.substr( tam-1, tam  );
    //alert(tec +"-"+tam);
      if(tam < 4){
        if(!eLetraStr(tec)){
          obj.value = vr.substr( 0, tam - 1  );
        }
      }else if(!eNumeroStr(tec)){
         obj.value = vr.substr( 0, tam - 1  );
      }
  }
}

function FormataPlacaEspecial(obj,teclapres){
	var tecla = teclapres.keyCode;
  vr = obj.value;
	tam = vr.length;
  
  if ( tecla != 9 && tecla != 8 ){  
    var tec = vr.substr( tam-1, tam  );
    //alert(tec +"-"+tam);
      if(tam < 3){
        if(!eLetraStr(tec)){
          obj.value = vr.substr( 0, tam - 1  );
        }
      }else if(tam == 3){
        if(eNumeroStr(tec)){
          obj.value = vr;
        }else if(eLetraStr(tec)){
          obj.value = vr;
        }else {
           obj.value = vr.substr( 0, tam - 1  );
        }
      }else if(!eNumeroStr(tec)){
         obj.value = vr.substr( 0, tam - 1  );
      }
  }
}

function eLetraStr(valor) {
  var numeros = "ABCDEFGHIJLMNOPQRSTUVXZYWKÇ";
  if (valor == "")
    return false;
  for(var i=0;i<=valor.length-1;i++){
    if (valor.substr(i,1) != numeros.substr(numeros.indexOf(valor.substr(i,1)),1)){
      return false;
    }
  }
  return true;
}

//Formata somente o campo "MM/AAAA"
function FormataDataCartao(obj,teclapres){
	var tecla = teclapres.keyCode;
	vr = obj.value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2){
        obj.value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
	    if (obj.value.charAt(2)!='/')
        obj.value = vr.substr( 0, 2  ) + '/' + vr.substr( 2, tam );
    }
	}	
  
  

}



function validaData(obj){
  var valor = obj.value;  
  if (!eData(valor)) {   
    alert("Data Inválida!");
    obj.value = valor;
    return false;
  }
  else return true;  
}

function tiraFormatoData(obj){
  var valor = obj.value;
  var str = valor.substr(0,2) + valor.substr(3,2)+valor.substr(6,4);   
  obj.value = str;
}

function complemento(){
 if (vform.DS_COMPLEMENTO_COM.value.length == "") {
    alert("O complemento do endereco não pode ser nulo!");
    return false;
  }
}


/*Usada para Formatar CEP, parametros: Objeto(campo), tamanho maximo de caracteres, posição para o Hífen, evento*/
function FormataDado(obj,tammax,pos,teclapres){
	var tecla = teclapres.keyCode;
	vr = obj.value;
	vr = vr.replace( "-", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length ;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){ tam = tam - 1 ; }
			
	if ( tecla == 8 || tecla == 88 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		obj.value = vr ;}
		if ( tam > pos && tam <= tammax ){
			obj.value = vr.substr( 0, tam - pos ) + '-' + vr.substr( tam - pos, tam );}
	}
	
}

function formataCep(s,campo) { 
	for (vlcont = 0 ; vlcont <= 12 ; vlcont++) {
		if (s.charAt(vlcont) == "") {
			var vlPosAtual = vlcont-1;
			break;
		}
	}

	var vlChar = s.charAt(vlPosAtual);
	var vaAux1 = ((vlChar >= "0") && (vlChar <= "9"));

	if(!vaAux1) {
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

function Mascara(tipo, campo, teclaPress) {
	if (window.event)
	{
		var tecla = teclaPress.keyCode;
	} else {
		tecla = teclaPress.which;
	}
 
	var s = new String(campo.value);
	// Remove todos os caracteres ˆ seguir: ( ) / - . e espao, para tratar a string denovo.
	s = s.replace(/(\.|\(|\)|\/|\-| )+/g,'');
 
	tam = s.length + 1;
 
	if ( tecla != 9 && tecla != 8 ) {
		switch (tipo)
		{
		case 'CPF' :
			if (tam > 3 && tam < 7)
				campo.value = s.substr(0,3) + '.' + s.substr(3, tam);
			if (tam >= 7 && tam < 10)
				campo.value = s.substr(0,3) + '.' + s.substr(3,3) + '.' + s.substr(6,tam-6);
			if (tam >= 10 && tam < 12)
				campo.value = s.substr(0,3) + '.' + s.substr(3,3) + '.' + s.substr(6,3) + '-' + s.substr(9,tam-9);
		break;
 
		case 'CNPJ' :
 
			if (tam > 2 && tam < 6)
				campo.value = s.substr(0,2) + '.' + s.substr(2, tam);
			if (tam >= 6 && tam < 9)
				campo.value = s.substr(0,2) + '.' + s.substr(2,3) + '.' + s.substr(5,tam-5);
			if (tam >= 9 && tam < 13)
				campo.value = s.substr(0,2) + '.' + s.substr(2,3) + '.' + s.substr(5,3) + '/' + s.substr(8,tam-8);
			if (tam >= 13 && tam < 15)
				campo.value = s.substr(0,2) + '.' + s.substr(2,3) + '.' + s.substr(5,3) + '/' + s.substr(8,4)+ '-' + s.substr(12,tam-12);
		break;
 
		case 'TEL' :
			if (tam > 2 && tam < 4)
				campo.value = '(' + s.substr(0,2) + ') ' + s.substr(2,tam);
			if (tam >= 7 && tam < 11)
				campo.value = '(' + s.substr(0,2) + ') ' + s.substr(2,4) + '-' + s.substr(6,tam-6);
		break;
 
		case 'DATA' :
			if (tam > 2 && tam < 4)
				campo.value = s.substr(0,2) + '/' + s.substr(2, tam);
			if (tam > 4 && tam < 11)
				campo.value = s.substr(0,2) + '/' + s.substr(2,2) + '/' + s.substr(4,tam-4);
		break;
		}
	}
}

function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e){
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
    if (whichCode == 13) return true;
    key = String.fromCharCode(whichCode); // Valor para o c—digo da Chave
    if (strCheck.indexOf(key) == -1) return false; // Chave inv‡lida
    len = objTextBox.value.length;
    for(i = 0; i < len; i++)
        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) break;
    aux = '';
    for(; i < len; i++)
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) objTextBox.value = '';
    if (len == 1) objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 2) objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        objTextBox.value += aux2.charAt(i);
        objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}

function formatar_mascara(src, mascara) {
	var campo = src.value.length;
	var saida = mascara.substring(0,1);
	var texto = mascara.substring(campo);
	if(texto.substring(0,1) != saida) {
		src.value += texto.substring(0,1);
	}
}

//Formata nœmero tipo moeda usando o evento onKeyDown

function Formata(campo,tammax,teclapres,decimal) {
var tecla = teclapres.keyCode;
vr = Limpar(campo.value,"0123456789");
tam = vr.length;
dec=decimal

if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

if (tecla == 8 )
{ tam = tam - 1 ; }

if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 )
{

if ( tam <= dec )
{ campo.value = vr ; }

if ( (tam > dec) && (tam <= 5) ){
campo.value = vr.substr( 0, tam - 2 ) + "," + vr.substr( tam - dec, tam ) ; }
if ( (tam >= 6) && (tam <= 8) ){
campo.value = vr.substr( 0, tam - 5 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
}
if ( (tam >= 9) && (tam <= 11) ){
campo.value = vr.substr( 0, tam - 8 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; }
if ( (tam >= 12) && (tam <= 14) ){
campo.value = vr.substr( 0, tam - 11 ) + "." + vr.substr( tam - 11, 3 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; }
if ( (tam >= 15) && (tam <= 17) ){
campo.value = vr.substr( 0, tam - 14 ) + "." + vr.substr( tam - 14, 3 ) + "." + vr.substr( tam - 11, 3 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - 2, tam ) ;}
} 

}

function upperMe() {
	  var field = document.forms[0].converter
	  var upperCaseVersion = field.value.toUpperCase()
	  field.value = upperCaseVersion
}

function validaCNS(vlrCNS) {
	// Formul‡rio que contem o campo CNS
	var soma = new Number;
    var resto = new Number;
	var dv = new Number;
    var pis = new String;
    var resultado = new String;
	var tamCNS = vlrCNS.length;
	if ((tamCNS) != 15) {
		alert("Numero de CNS invalido");
		return false;
	}
	pis = vlrCNS.substring(0,11);
	soma = (((Number(pis.substring(0,1))) * 15) +   
	        ((Number(pis.substring(1,2))) * 14) +
		    ((Number(pis.substring(2,3))) * 13) +
		    ((Number(pis.substring(3,4))) * 12) +
            ((Number(pis.substring(4,5))) * 11) +
            ((Number(pis.substring(5,6))) * 10) +
            ((Number(pis.substring(6,7))) * 9) +
            ((Number(pis.substring(7,8))) * 8) +
            ((Number(pis.substring(8,9))) * 7) +
            ((Number(pis.substring(9,10))) * 6) +
            ((Number(pis.substring(10,11))) * 5));
	resto = soma % 11;
    dv = 11 - resto;
	if (dv == 11) {
		dv = 0;
    }
	if (dv == 10) {
		soma = (((Number(pis.substring(0,1))) * 15) +   
	            ((Number(pis.substring(1,2))) * 14) +
		    	((Number(pis.substring(2,3))) * 13) +
		    	((Number(pis.substring(3,4))) * 12) +
            	((Number(pis.substring(4,5))) * 11) +
            	((Number(pis.substring(5,6))) * 10) +
            	((Number(pis.substring(6,7))) * 9) +
            	((Number(pis.substring(7,8))) * 8) +
            	((Number(pis.substring(8,9))) * 7) +
            	((Number(pis.substring(9,10))) * 6) +
            	((Number(pis.substring(10,11))) * 5) + 2);
		resto = soma % 11;
        dv = 11 - resto;
        resultado = pis + "001" + String(dv);
	} else { 
		resultado = pis + "000" + String(dv);
	}
	if (vlrCNS != resultado) {
		alert("Numero de CNS invalido");
      return false;
    } else {
		alert("Numero de CNS v‡lido");
       return true;
	}
}

function checkMail(mail){
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    if(typeof(mail) == "string"){
            if(er.test(mail)){ return true; }
    }else if(typeof(mail) == "object"){
            if(er.test(mail.value)){ 
                                    return true; 
                            }
    }else{
            return false;
            }
}

function ValidaEmail(){
  var obj = eval("document.forms[0].Email");
  var txt = obj.value;
  if ((txt.length != 0) && ((txt.indexOf("@") < 1) || (txt.indexOf('.') < 7)))  {
    alert('Email incorreto');
	obj.focus();
  }
}

