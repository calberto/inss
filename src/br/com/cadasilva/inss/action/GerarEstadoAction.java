package br.com.cadasilva.inss.action;

import java.io.IOException;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;

import br.com.cadasilva.inss.model.Estado;
import br.com.cadasilva.inss.model.Funcionario;
import br.com.cadasilva.inss.dao.EstadoDAO;
import br.com.cadasilva.inss.util.Util;

public class GerarEstadoAction extends ActionSupport {
	
	private Estado estado;
	private EstadoDAO estadoDAO;
	private List<Estado> list;
	
	public String generateTXTFile() throws Exception {

		try {
			list = estadoDAO.findAll(estado, Estado.class);

			Util.generateTXTFileEstados(list, "/Users/carlosalbertodasilva/Documents/estado.txt");

			addActionMessage("Arquivo TXT gerado com sucesso!");

			return SUCCESS;

		} catch (IOException e) {

			addActionMessage("Erro ao gerar arquivo TXT: " + e.getMessage());

			return ERROR;

		}

	}


}
