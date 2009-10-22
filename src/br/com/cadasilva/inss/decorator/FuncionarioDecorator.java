package br.com.cadasilva.inss.decorator;

import org.displaytag.decorator.TableDecorator;

import br.com.cadasilva.inss.model.Funcionario;

public class FuncionarioDecorator extends TableDecorator {

	public String getLink() {
		Funcionario funcionario = (Funcionario) getCurrentRowObject();
		Long id = funcionario.getId();
		
		return "<a href = 'prepareUpdateFuncionario.do?funcionario.id="+id+"'>Alterar</a>"
		+ "<a href='deleteFuncionario.do?funcionario.id="+id+"'>Deletar</a>";
	}
}
