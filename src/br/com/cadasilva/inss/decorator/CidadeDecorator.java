package br.com.cadasilva.inss.decorator;

import org.displaytag.decorator.TableDecorator;

import br.com.cadasilva.inss.model.Cidades;
public class CidadeDecorator extends TableDecorator {

	public String getLink() {
		Cidades cidades = (Cidades) getCurrentRowObject();
		Long id = cidades.getId();
		
		return "<a href = 'prepareUpdateCidades.do?cidades.id="+id+"'>Alterar</a>"
		+ "<a href='deleteCidades.do?cidades.id="+id+"'>Deletar</a>";
	}
}
