package br.com.cadasilva.inss.action;

import java.util.List;

import br.com.cadasilva.inss.dao.AgenciaEmpregosDAO;
import br.com.cadasilva.inss.model.AgenciaEmpregos;
import br.com.cadasilva.inss.model.Cidades;
import br.com.cadasilva.inss.model.Estado;

import com.opensymphony.xwork2.ActionSupport;
public class ActionAgenciaEmpregos extends ActionSupport {
	
	private AgenciaEmpregos agenciaEmpregos;
	private static AgenciaEmpregosDAO agenciaEmpregosDAO;
	private static List<Estado> listUnidades;
	private List<Cidades> listCityAgenda;
	private List<AgenciaEmpregos> listAgenciaEmpregos;
	
	private Long idEstado;

	public Long getIdEstado() {
		return idEstado;
	}

	public void setIdEstado(Long idEstado) {
		this.idEstado = idEstado;
	}

	public static String getListaCidades() throws Exception {
		listUnidades = agenciaEmpregosDAO.getListaUnidades();
		return SUCCESS;
	}
	
	public String popularCity() throws Exception {
		listCityAgenda = agenciaEmpregosDAO.popularCity(idEstado);
		return SUCCESS;
	}
	
	
	public List<Cidades> getListCityAgenda() {
		return listCityAgenda;
	}

	public void setListCityAgenda(List<Cidades> listCityAgenda) {
		this.listCityAgenda = listCityAgenda;
	}

	public List<Estado> getListUnidades() {
		return listUnidades;
	}

	public void setListUnidades(List<Estado> listUnidades) {
		this.listUnidades = listUnidades;
	}

	public String findAll() throws Exception {
		listAgenciaEmpregos = agenciaEmpregosDAO.findAll(agenciaEmpregos, AgenciaEmpregos.class);
		return SUCCESS;
	}
	
	public String save() throws Exception {
		agenciaEmpregosDAO.save(agenciaEmpregos);
		return SUCCESS;
	}
	
	public String update() throws Exception {
		agenciaEmpregosDAO.update(agenciaEmpregos);
		return SUCCESS;
	}
	
	public String delete() throws Exception {
		agenciaEmpregosDAO.delete(agenciaEmpregos);
		return SUCCESS;
	}
	
	public String findById() throws Exception {
		agenciaEmpregos = agenciaEmpregosDAO.findById(agenciaEmpregos.getId(), AgenciaEmpregos.class);
		return SUCCESS;
	}

	public AgenciaEmpregos getAgenciaEmpregos() {
		return agenciaEmpregos;
	}

	public void setAgenciaEmpregos(AgenciaEmpregos agenciaEmpregos) {
		this.agenciaEmpregos = agenciaEmpregos;
	}

	public AgenciaEmpregosDAO getAgenciaEmpregosDAO() {
		return agenciaEmpregosDAO;
	}

	public void setAgenciaEmpregosDAO(AgenciaEmpregosDAO agenciaEmpregosDAO) {
		this.agenciaEmpregosDAO = agenciaEmpregosDAO;
	}

	public List<AgenciaEmpregos> getListAgenciaEmpregos() {
		return listAgenciaEmpregos;
	}

	public void setListAgenciaEmpregos(List<AgenciaEmpregos> listAgenciaEmpregos) {
		this.listAgenciaEmpregos = listAgenciaEmpregos;
	}
	
	
}
