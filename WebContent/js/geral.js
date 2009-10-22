// JavaScript Document


<!-- /\/\/\/\/\/\/ Inicio do código de expandir janela-->

var abilitajanela="on" //Salvando o estatus na estrutura usando a seção cookies? (on/off)
var visaojanela="no" //Visualizando aberto quando pressionado? (yes/no)

if (document.getElementById){
document.write('<style type="text/css">')
document.write('.mostraconteudo{display:none;}')
document.write('</style>')
}

function getElementbyClass(classname){
ccollect=new Array()
var inc=0
var alltags=document.all? document.all : document.getElementsByTagName("*")
for (i=0; i<alltags.length; i++){
if (alltags[i].className==classname)
ccollect[inc++]=alltags[i]
}
}

function contractcontent(omit){
var inc=0
while (ccollect[inc]){
if (ccollect[inc].id!=omit)
ccollect[inc].style.display="none"
inc++
}
}

function expandijanela(cid){
if (typeof ccollect!="undefined"){
if (visaojanela=="yes")
contractcontent(cid)
document.getElementById(cid).style.display=(document.getElementById(cid).style.display!="block")? "block" : "none"
}
}

function revivecontent(){
contractcontent("omitnothing")
selectedItem=getselectedItem()
selectedComponents=selectedItem.split("|")
for (i=0; i<selectedComponents.length-1; i++)
document.getElementById(selectedComponents[i]).style.display="block"
}

function get_cookie(Name) { 
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) { 
offset += search.length
end = document.cookie.indexOf(";", offset);
if (end == -1) end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}

function getselectedItem(){
if (get_cookie(window.location.pathname) != ""){
selectedItem=get_cookie(window.location.pathname)
return selectedItem
}
else
return ""
}

function saveswitchstate(){
var inc=0, selectedItem=""
while (ccollect[inc]){
if (ccollect[inc].style.display=="block")
selectedItem+=ccollect[inc].id+"|"
inc++
}

document.cookie=window.location.pathname+"="+selectedItem
}

function do_onload(){
getElementbyClass("mostraconteudo")
if (abilitajanela=="on" && typeof ccollect!="undefined")
revivecontent()
}


if (window.addEventListener)
window.addEventListener("load", do_onload, false)
else if (window.attachEvent)
window.attachEvent("onload", do_onload)
else if (document.getElementById)
window.onload=do_onload

if (abilitajanela=="on" && document.getElementById)
window.onunload=saveswitchstate
<!-- -- FIM do código de expandir janela-->
<!--/\/\/\/\/\/\/\ POP UP centralizado estilo Showmodal -->

	function modelesswin(url,mwidth,mheight){
		if (document.all&&window.print) //if ie5
			eval('window.showModelessDialog(url,"","help:0;resizable:0;status:0;dialogWidth:'+mwidth+'px;dialogHeight:'+mheight+'px")')
		else
			eval('window.open(url,"","width='+mwidth+'px,height='+mheight+'px,resizable=0,scrollbars=0,status=0")')
			}

<!-- FIM  ---  POP UP centralizado estilo Showmodal -->

<!--/\/\/\/\/\/\/\ Abas e efeito do marcadores de texto -->

var iniciaraba=[1, "bemSegurado"]
	function cascadedstyle(el, cssproperty, csspropertyNS){
		if (el.currentStyle)
		return el.currentStyle[cssproperty]
		else if (window.getComputedStyle){
		var elstyle=window.getComputedStyle(el, "")
		return elstyle.getPropertyValue(csspropertyNS)
		}
	}

	var visualizaaba=""
	function expandiaba(cid, aobject){
		if (document.getElementById){
			movaba(aobject)
			detectaraba(aobject)
		if (visualizaaba!="")
			document.getElementById(visualizaaba).style.display="none"
			document.getElementById(cid).style.display="block"
			visualizaaba=cid
		if (aobject.blur)
			aobject.blur()
		return false
		}
		else
		return true
		}

		function movaba(aobject){
			if (typeof tabobjlinks=="undefined")
				abalinks()
				for (i=0; i<tabobjlinks.length; i++)
					tabobjlinks[i].style.backgroundColor=initTabcolor
					var themecolor=aobject.getAttribute("theme")? aobject.getAttribute("theme") : initTabpostcolor
					aobject.style.backgroundColor=themecolor;
					document.getElementById("molduratabela").style.backgroundColor="#FFFFFF"
			}

		function abalinks(){
			var tabobj=document.getElementById("tablist");			
			tabobjlinks = null;			
			if (tabobj != null){
				tabobjlinks=tabobj.getElementsByTagName("A");
			}		
		}

		function detectaraba(aobject){
			for (i=0; i<tabobjlinks.length; i++){
			if (aobject==tabobjlinks[i]){
				tabsourceindex=i 
			break
		}
		}
		}

		function aba_onload(){
			var cookiecheck=window.get_cookie && get_cookie(window.location.pathname).indexOf("|")!=-1;
			abalinks();
			if (tabobjlinks != null){
				initTabcolor=cascadedstyle(tabobjlinks[1], "backgroundColor", "background-color");
				initTabpostcolor=cascadedstyle(tabobjlinks[0], "backgroundColor", "background-color");
			
				if (typeof enablepersistence!="undefined" && enablepersistence && cookiecheck){
					var cookieparse=get_cookie(window.location.pathname).split("|");
					var whichtab=cookieparse[0];
					var tabcontentid=cookieparse[1];
					expandiaba(tabcontentid, tabobjlinks[whichtab]);
				} else 
					expandiaba(iniciaraba[1], tabobjlinks[iniciaraba[0]-1]);
				}
			}
			
			

			if (window.addEventListener)
				window.addEventListener("load", aba_onload, false);
			else if (window.attachEvent)
				window.attachEvent("onload", aba_onload);
			else if (document.getElementById)
				window.onload=aba_onload;
				
				