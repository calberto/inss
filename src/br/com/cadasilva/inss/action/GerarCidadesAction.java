package br.com.cadasilva.inss.action;

import java.io.IOException;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;

import br.com.cadasilva.inss.model.Cidades;
import br.com.cadasilva.inss.model.Funcionario;
import br.com.cadasilva.inss.dao.CidadesDAO;
import br.com.cadasilva.inss.util.Util;
public class GerarCidadesAction extends ActionSupport {

	private Cidades cidades;
	private CidadesDAO cidadesDAO;
	private List<Cidades> list;
	
	public String generateTXTFile() throws Exception {

		try {
			list = cidadesDAO.findAll(cidades, Cidades.class);

			Util.generateTXTFileCidades(list, "/Users/carlosalbertodasilva/Documents/cidades.txt");

			addActionMessage("Arquivo TXT gerado com sucesso!");

			return SUCCESS;

		} catch (IOException e) {

			addActionMessage("Erro ao gerar arquivo TXT: " + e.getMessage());

			return ERROR;

		}

	}
}
