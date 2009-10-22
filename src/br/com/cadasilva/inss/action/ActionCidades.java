package br.com.cadasilva.inss.action;

import java.util.ArrayList;
import java.util.List;

import br.com.cadasilva.inss.dao.CidadesDAO;
import br.com.cadasilva.inss.model.Cidades;
import br.com.cadasilva.inss.model.Estado;
import br.com.cadasilva.inss.model.TOCombo;

import com.opensymphony.xwork2.ActionSupport;
public class ActionCidades extends ActionSupport {

	private Cidades cidades;
	private Estado estado;
	private static CidadesDAO cidadesDAO;
	private List<Cidades> listCidade;
	
	public String findAll() throws Exception {
		listCidade = cidadesDAO.findAll(cidades, Cidades.class);
		return SUCCESS;
	}
	
	public String getListaEstado(String strUf) throws Exception {
		listCidade = cidadesDAO.getListaEstado(strUf);
		return SUCCESS;
	}
	
	public String save() throws Exception {
		cidadesDAO.save(cidades);
		return SUCCESS;
	}
	
	public String update() throws Exception {
		cidadesDAO.update(cidades);
		return SUCCESS;
	}
	
	public String delete() throws Exception {
		cidadesDAO.delete(cidades);
		return SUCCESS;
	}
	
	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public String findById() throws Exception {
		cidades = cidadesDAO.findById(cidades.getId(), Cidades.class);
		return SUCCESS;
	}
	
	public String listaTudo() throws Exception {
		listCidade = cidadesDAO.listaTudo(Cidades.class);
		return SUCCESS;
	}

	public Cidades getCidades() {
		return cidades;
	}

	public void setCidades(Cidades cidades) {
		this.cidades = cidades;
	}

	public CidadesDAO getCidadesDAO() {
		return cidadesDAO;
	}

	public void setCidadesDAO(CidadesDAO cidadesDAO) {
		this.cidadesDAO = cidadesDAO;
	}

	public List<Cidades> getListCidade() {
		return listCidade;
	}

	public void setListCidade(List<Cidades> listCidade) {
		this.listCidade = listCidade;
	}
	
	
	public static List carregaComboCidades(Long id) throws Exception {
		List listaDadosCombo = new ArrayList();
		
		if (id != null && !id.equals(0)) {
			listaDadosCombo = cidadesDAO.getInstancia().carregaComboCidades(id);
		}
		return listParaListBean(listaDadosCombo);
	}
	
	public static List listParaListBean(List dadosCombo) {
		List listaDadosCombo = new ArrayList();
		TOCombo primeiroDado = new TOCombo();
		primeiroDado.setValorOption("");
		primeiroDado.setNomeOption("--selecione opção--");
		listaDadosCombo.add(primeiroDado);
		
		for (int i=0;i<dadosCombo.size();i++) {
			List dados = (List)dadosCombo.get(i);
			TOCombo combo = new TOCombo();
			combo.setValorOption(dados.get(0).toString());
			combo.setNomeOption(dados.get(1).toString());
			listaDadosCombo.add(combo);
		}
		return listaDadosCombo;
		
	}
}
