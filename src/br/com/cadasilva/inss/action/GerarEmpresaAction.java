package br.com.cadasilva.inss.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import com.opensymphony.xwork2.ActionSupport;

import br.com.cadasilva.inss.model.Empresa;
import br.com.cadasilva.inss.dao.EmpresaDAO;
import br.com.cadasilva.inss.util.Util;

public class GerarEmpresaAction extends ActionSupport {

	private Empresa empresa;
	private EmpresaDAO empresaDAO;
	private List<Empresa> list;
	
	public String generateTXTFile() throws Exception {

		try {
			list = empresaDAO.findAll(empresa, Empresa.class);

			Util.generateTXTFileEmpresa(list, "/Users/carlosalbertodasilva/Documents/empresa.txt");

			addActionMessage("Arquivo TXT gerado com sucesso!");

			return SUCCESS;

		} catch (IOException e) {

			addActionMessage("Erro ao gerar arquivo TXT: " + e.getMessage());

			return ERROR;

		}

	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public EmpresaDAO getEmpresaDAO() {
		return empresaDAO;
	}

	public void setEmpresaDAO(EmpresaDAO empresaDAO) {
		this.empresaDAO = empresaDAO;
	}

	public List<Empresa> getList() {
		return list;
	}

	public void setList(List<Empresa> list) {
		this.list = list;
	}

	
}
