package br.com.cadasilva.inss.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.opensymphony.xwork2.ActionSupport;

import br.com.cadasilva.inss.model.Funcionario;
import br.com.cadasilva.inss.dao.FuncionarioDAO;
import br.com.cadasilva.inss.util.Util;
public class GerarFuncionarioAction extends ActionSupport {

	private Funcionario funcionario;
	private FuncionarioDAO funcionarioDAO;
	private List<Funcionario> list;
	
	public String generateTXTFile() throws Exception {

		try {
			list = funcionarioDAO.findAll(funcionario, Funcionario.class);

			Util.generateTXTFileFuncionario(list, "/Users/carlosalbertodasilva/Documents/funcionario.txt");

			addActionMessage("Arquivo TXT gerado com sucesso!");

			return SUCCESS;

		} catch (IOException e) {

			addActionMessage("Erro ao gerar arquivo TXT: " + e.getMessage());

			return ERROR;

		}

	}
}
