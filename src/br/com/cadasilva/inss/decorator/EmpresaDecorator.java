package br.com.cadasilva.inss.decorator;

import org.displaytag.decorator.TableDecorator;

import br.com.cadasilva.inss.model.Empresa;

public class EmpresaDecorator extends TableDecorator {

	public String getLink() {
		Empresa empresa = (Empresa) getCurrentRowObject();
		Long id = empresa.getId();
		
		return "<a href = 'prepareUpdateEmpresa.do?empresa.id="+id+"'>Alterar</a>"
		+ "<a href='deleteEmpresa.do?empresa.id="+id+"'>Deletar</a>";
	}
}
