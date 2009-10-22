var minhaJanela
var meuComentario
var comprimento
var barraScroll
var altura

function abrirJanela(meuComentario,altura,comprimento, barraScroll){
	if (minhaJanela){
		if (minhaJanela.closed){
			minhaJanela=window.open(meuComentario,"TRAB","HEIGHT="+altura+",WIDTH="+comprimento+",TOP=10,LEFT=10,scrollbars="+barraScroll)
		}
		else{
			minhaJanela.resizeTo(comprimento,altura)
			minhaJanela.location=meuComentario
		}
	}
	else{
		minhaJanela=window.open(meuComentario,"TRAB","HEIGHT="+altura+",WIDTH="+comprimento+",TOP=10,LEFT=10,scrollbars="+barraScroll)
	}
	minhaJanela.focus()
}