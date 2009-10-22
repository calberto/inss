package br.com.cadasilva.inss.action;

import java.util.ArrayList;
import java.util.ResourceBundle;

import org.apache.log4j.Logger;

import br.com.cadasilva.inss.dao.CidadesDAO;

public class NgcInss {
	
	private static NgcInss instancia = null;
	private static Logger logger = Logger.getLogger(NgcInss.class.toString());
	private ResourceBundle resources = ResourceBundle.getBundle("ApplicationResources");
	
	String dirAnexo = resources.getString("diretorio.anexo");
	
	// Construtor
	private NgcInss() {
		
	}
	
	// Recebe a instântica da classe
	public static NgcInss getInstancia() {
		
		if (instancia == null) {
			instancia = new NgcInss();
		}
		return instancia;
	}
	
	public ArrayList carregaComboCidades(Long id) throws Exception {
		ArrayList tabelaRespostas = null;
		CidadesDAO cidadesDAO = CidadesDAO.getInstancia();
		try {
			tabelaRespostas = cidadesDAO.carregaComboCidades(id);
		} catch (Exception e) {
			logger.error("Erro no método carregaComboCidades",e);
			throw e;
		} finally {
			
		}
		return tabelaRespostas;
	}


}
