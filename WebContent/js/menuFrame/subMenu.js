
window.document.write('<disable_script src="'+"js/regrasItens.js"+'" language="JavaScript" type="text/javascript"> <!-- //--></disable_script>')


/**
	Funções utilitárias do objeto String
*/
String.prototype.startsWith=function(a){
	return this.substr(0,a.length)===a
}
String.prototype.trim=function(){
	return this.replace(/^\s+|\s+$/g,"")
}

function mostraSubMenu(nmFrame, nmMenu){

parent.topFrame.document.forms[0].flMostraMenu.value = 'S';
divSubMenu = parent.menuFrame.document.getElementById(nmMenu); 

var i=0;
for (i=0;i<parent.topFrame.document.forms[0].ListaMenu.value.split(",").length;i++)
{
nome = parent.topFrame.document.forms[0].ListaMenu.value.split(",")[i];
   eval('$("#'+nome+'").remove();');
}

$("body").append("<div id='"+nmMenu+"'>"+divSubMenu.innerHTML+"</div>");


var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {imgRight:"images/sulamerica/SpryMenuBarRightHover.gif"});
var MenuBar2 = new Spry.Widget.MenuBar("MenuBar2", {imgRight:"images/sulamerica/SpryMenuBarRightHover.gif"});
var MenuBar3 = new Spry.Widget.MenuBar("MenuBar3", {imgRight:"images/sulamerica/SpryMenuBarRightHover.gif"});
var MenuBar4 = new Spry.Widget.MenuBar("MenuBar4", {imgRight:"images/sulamerica/SpryMenuBarRightHover.gif"});
}

























function escondeMenu(nmMenu) {

parent.topFrame.document.forms[0].flMostraMenu.value = 'N';
setTimeout('escondeSubMenu("'+nmMenu+'");', 50);

}

function escondeSubMenu(nmMenu) {

if(parent.topFrame.document.forms[0].flMostraMenu.value != 'S'){
eval('$("#'+nmMenu+'").remove();');
}

}

//Chamada para manter ou não o sub menu a direita
function MostraSubMenuSub(display, nmMenu) {

	if( display == 'block'){
		parent.topFrame.document.forms[0].flMostraMenu.value = 'S';
	}else {
		parent.topFrame.document.forms[0].flMostraMenu.value = 'N';
		setTimeout('escondeSubMenu("'+nmMenu+'");', 200);
	}

}






//********************************************************************
//********************************************************************
//********************************************************************
//********************************************************************
//********************************************************************

