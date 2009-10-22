package br.com.cadasilva.inss.action;

import java.util.ArrayList;
import java.util.List;

import br.com.cadasilva.inss.dao.FuncionarioDAO;
import br.com.cadasilva.inss.model.Funcionario;

import com.opensymphony.xwork2.ActionSupport;
public class ActionFuncionario extends ActionSupport {

	private FuncionarioDAO funcionarioDAO;
	private Funcionario funcionario;
	List<Funcionario> listFuncionarios;
	
	private List tagRadio;
	
	public String execute() throws Exception {
		tagRadio = new ArrayList();
		tagRadio.add("Cep:");
		tagRadio.add("Endereço:");
		return SUCCESS;
		
	}
	
	public List getTagRadio() {
		return tagRadio;
	}

	public String findAll() throws Exception {
		listFuncionarios = funcionarioDAO.findAll(funcionario, Funcionario.class);
		return SUCCESS;
	}
	
	public FuncionarioDAO getFuncionarioDAO() {
		return funcionarioDAO;
	}

	public void setFuncionarioDAO(FuncionarioDAO funcionarioDAO) {
		this.funcionarioDAO = funcionarioDAO;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

	public List<Funcionario> getListFuncionarios() {
		return listFuncionarios;
	}

	public void setListFuncionarios(List<Funcionario> listFuncionarios) {
		this.listFuncionarios = listFuncionarios;
	}

	public String save() throws Exception {
		funcionarioDAO.save(funcionario);
		return SUCCESS;
	}
	
	public String update() throws Exception {
		funcionarioDAO.update(funcionario);
		return SUCCESS;
	}
	
	public String delete() throws Exception {
		funcionarioDAO.delete(funcionario);
		return SUCCESS;
	}
	
	public String findById() throws Exception {
		funcionario = funcionarioDAO.findById(funcionario.getId(), Funcionario.class);
		return SUCCESS;
	}
}
