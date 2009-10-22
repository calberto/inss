package br.com.cadasilva.inss.action;

import java.util.ArrayList;
import java.util.List;

import br.com.cadasilva.inss.dao.EmpresaDAO;
import br.com.cadasilva.inss.dao.EstadoDAO;
import br.com.cadasilva.inss.model.Empresa;

import com.opensymphony.xwork2.ActionSupport;
public class ActionEmpresa extends ActionSupport {
	private EstadoDAO estadoDAO;
	public EstadoDAO getEstadoDAO() {
		return estadoDAO;
	}

	public void setEstadoDAO(EstadoDAO estadoDAO) {
		this.estadoDAO = estadoDAO;
	}

	private EmpresaDAO empresaDAO;
	private Empresa empresa;
	List<Empresa> listEmpresas;
	private List myList;
	private static EmpresaDAO instancia;
	private List listUf;
	
	public List getListUf() {
		return listUf;
	}

	public void setListUf(List listUf) {
		this.listUf = listUf;
	}

	public static EmpresaDAO getInstancia() {
		return instancia;
	}

	public static void setInstancia(EmpresaDAO instancia) {
		ActionEmpresa.instancia = instancia;
	}
   
	
	public String findAll() throws Exception {
		listEmpresas = empresaDAO.findAll(empresa, Empresa.class);
		return SUCCESS;
	}
	
	public String save() throws Exception {
		empresaDAO.save(empresa);
		return SUCCESS;
	}
	
	public String update() throws Exception {
		empresaDAO.update(empresa);
		return SUCCESS;
	}
	
	public String delete() throws Exception {
		empresaDAO.delete(empresa);
		return SUCCESS;
	}
	
	public String findById() throws Throwable {
		empresa = empresaDAO.findById(empresa.getId(),Empresa.class);
		listUf = estadoDAO.selectAllEstado();
		return SUCCESS;
	}

	
	
	public EmpresaDAO getEmpresaDAO() {
		return empresaDAO;
	}

	public void setEmpresaDAO(EmpresaDAO empresaDAO) {
		this.empresaDAO = empresaDAO;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public List<Empresa> getListEmpresas() {
		return listEmpresas;
	}

	public void setListEmpresas(List<Empresa> listEmpresas) {
		this.listEmpresas = listEmpresas;
	}
	
	@SuppressWarnings("unchecked")
	public String execute() throws Exception {
		
		myList = new ArrayList();
		myList.add("Sunday");
		myList.add("Monday");
		myList.add("Tuesday");
		myList.add("Wenesday");
		myList.add("Thursday");
		myList.add("Friday");
		myList.add("Saturday");
		
		return SUCCESS;
	
	}
	
	public List<String> getMyList() {
		return myList;
	}
	
	
	

}
