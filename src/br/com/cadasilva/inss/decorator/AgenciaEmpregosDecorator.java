package br.com.cadasilva.inss.decorator;

import org.displaytag.decorator.TableDecorator;

import br.com.cadasilva.inss.model.AgenciaEmpregos;
public class AgenciaEmpregosDecorator extends TableDecorator {
	
	public String getLink() {
		AgenciaEmpregos agenciaEmpregos = (AgenciaEmpregos) getCurrentRowObject();
		Long id = agenciaEmpregos.getId();
		
		return "<a href = 'prepareUpdateAgenciaEmpregos.do?agenciaEmpregos.id="+id+"'>Alterar</a>"
		+ "<a href='deleteAgenciaEmpregos.do?agenciaEmpregos.id="+id+"'>Deletar</a>";
	}

}
