package br.com.cadasilva.inss.action;

import java.util.List;

import br.com.cadasilva.inss.dao.CidadesDAO;
import br.com.cadasilva.inss.dao.EstadoDAO;
import br.com.cadasilva.inss.model.Cidades;
import br.com.cadasilva.inss.model.Estado;

import com.opensymphony.xwork2.ActionSupport;
public class ActionEstado extends ActionSupport {

	private Estado estado;
	private EstadoDAO estadoDAO;
	private CidadesDAO cidadesDAO;
	private List<Cidades> listEstado;
	private List<Cidades> listCidades;
	public List<Cidades> getListCidades() {
		return listCidades;
	}


	public void setListCidades(List<Cidades> listCidades) {
		this.listCidades = listCidades;
	}


	public CidadesDAO getCidadesDAO() {
		return cidadesDAO;
	}

	private List<Estado> listUf;
	
	private Long idEstado;

	public String popularCidades() throws Exception {
		listCidades = cidadesDAO.popularCidades(idEstado);
		return SUCCESS;
	}

	
	public void setCidadesDAO(CidadesDAO cidadesDAO) {
		this.cidadesDAO = cidadesDAO;
	}

	public Long getIdEstado() {
		return idEstado;
	}

	public void setIdEstado(Long idEstado) {
		this.idEstado = idEstado;
	}

	public String findAll() throws Exception {
		listUf = estadoDAO.findAll(estado, Estado.class);
		return SUCCESS;
	}
	
	
	
	public String getListaCidades() throws Exception {
		listUf = estadoDAO.findAll(Estado.class);
		return SUCCESS;
	}
	
	public String listaTudo() throws Exception {
		listUf = estadoDAO.listaTudo(Estado.class);
		return SUCCESS;
	}

	
	public List<Estado> getListUf() {
		return listUf;
	}

	public void setListUf(List<Estado> listUf) {
		this.listUf = listUf;
	}

	

	public String save() throws Exception {
		estadoDAO.save(estado);
		return SUCCESS;
	}
	
	public String update() throws Exception {
		estadoDAO.update(estado);
		return SUCCESS;
	}
	
	public String delete() throws Exception {
		estadoDAO.delete(estado);
		return SUCCESS;
	}
	
	public String findById() throws Exception {
		estado = estadoDAO.findById(estado.getId(), Estado.class);
		return SUCCESS;
	}
	
	
	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public EstadoDAO getEstadoDAO() {
		return estadoDAO;
	}

	public void setEstadoDAO(EstadoDAO estadoDAO) {
		this.estadoDAO = estadoDAO;
	}

	public List<Cidades> getListEstado() {
		return listEstado;
	}

	public void setListEstado(List<Cidades> listEstado) {
		this.listEstado = listEstado;
	}

	
	
}
