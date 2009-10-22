function logOut(){
	FacadeSessionAjax.logOut();
	var myWindow = window.open('logout.jsp','LogOut','width=1,height=1,location=no,status=no,toolbar=no,directories=no,menubar=no,scrollbars=no,resizable=no');
	myWindow.blur();
}


function verificaJanelaFechada(){
	if(window.opener.closed){ 
	 logOutTotal();
	 // window.location = "logout_invalidate.jsp";
	}else{
	 window.close();
	}
	
}

function logOutTotal(){
	FacadeSessionAjax.logOutTotal();
	window.close();
}