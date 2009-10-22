var Teste = {
		
		contador = 0,
		init : function() {
			$("#numero").val(this.contador);
			$("#aumenta").click(Teste.aumenta);
			$("#diminui").click(Teste.diminui);
		},
		
		atualiza:function() {
			$("#numero").val(this.contador);
		},
		aumenta:function() {
			this.contador++;
			Teste.atualiza();
		},
		diminui:function() {
			Teste.contador--;
			Teste.atualiza();
		}
		
}

$(function(){
	Teste.init();
});