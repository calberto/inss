package br.com.cadasilva.inss.decorator;

import org.displaytag.decorator.TableDecorator;

import br.com.cadasilva.inss.model.Estado;
public class EstadoDecorator extends TableDecorator {

	public String getLink() {
		Estado estado = (Estado) getCurrentRowObject();
		Long id = estado.getId();
		
		return "<a href = 'prepareUpdateEstado.do?estado.id="+id+"'>Alterar</a>"
		+ "<a href='deleteEstado.do?estado.id="+id+"'>Deletar</a>";
	}
}
