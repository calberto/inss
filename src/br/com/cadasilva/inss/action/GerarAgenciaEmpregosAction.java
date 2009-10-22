package br.com.cadasilva.inss.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import com.opensymphony.xwork2.ActionSupport;

import br.com.cadasilva.inss.model.AgenciaEmpregos;
import br.com.cadasilva.inss.model.Empresa;
import br.com.cadasilva.inss.dao.AgenciaEmpregosDAO;
import br.com.cadasilva.inss.util.Conexao;
import br.com.cadasilva.inss.util.Util;
public class GerarAgenciaEmpregosAction extends ActionSupport {

	private AgenciaEmpregos agenciaEmpregos;
	private AgenciaEmpregosDAO agenciaEmpregosDAO;
	private List<AgenciaEmpregos> list;
	
	public String generateTXTFile() throws Exception {

		try {
			list = agenciaEmpregosDAO.findAll(agenciaEmpregos, AgenciaEmpregos.class);

			Util.generateTXTFileAgenciaEmpregos(list, "/Users/carlosalbertodasilva/Documents/agenciaEmpregos.txt");

			addActionMessage("Arquivo TXT gerado com sucesso!");

			return SUCCESS;

		} catch (IOException e) {

			addActionMessage("Erro ao gerar arquivo TXT: " + e.getMessage());

			return ERROR;

		}
		
	}	
}
