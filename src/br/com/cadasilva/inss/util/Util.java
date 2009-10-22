package br.com.cadasilva.inss.util;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.List;

import br.com.cadasilva.inss.model.AgenciaEmpregos;
import br.com.cadasilva.inss.model.Cidades;
import br.com.cadasilva.inss.model.Empresa;
import br.com.cadasilva.inss.model.Estado;
import br.com.cadasilva.inss.model.Funcionario;
public class Util {

	public static void generateTXTFileEmpresa(List<Empresa> list,String path) throws Exception {
		BufferedWriter out = new BufferedWriter(new FileWriter(path));
		for (Empresa empresa : list) {
			// empresa
			out.write(empresa.getNome());
			out.write(" - ");
			
			out.write(empresa.getCnpj());
			out.write(" - ");
			
			out.newLine();
		}
		out.close();
	}
	
	public static void generateTXTFileFuncionario(List<Funcionario> list,String path) throws Exception {
		BufferedWriter out = new BufferedWriter(new FileWriter(path));
		for (Funcionario funcionario : list) {
			// funcion‡rio
			out.write(funcionario.getNome());
			out.write(" - ");
			
			out.write(funcionario.getCpf());
			out.write(" - ");
			
			out.newLine();
		}
		out.close();
	}
	
	public static void generateTXTFileEstados(List<Estado> list,String path) throws Exception {
		BufferedWriter out = new BufferedWriter(new FileWriter(path));
		for (Estado estado : list) {
			// Estados
			out.write(estado.getSigla());
			out.write(" - ");
			
			out.write(estado.getDescricao());
			out.write(" - ");
			
			out.newLine();
		}
		out.close();
	}
	
	
	public static void generateTXTFileCidades(List<Cidades> list,String path) throws Exception {
		BufferedWriter out = new BufferedWriter(new FileWriter(path));
		for (Cidades cidades : list) {
			// cidades
			out.write(cidades.getCidade());
			out.write(" - ");
			
			out.write(cidades.getEstado());
			out.write(" - ");
			
			out.newLine();
		}
		out.close();
	}
	
	public static void generateTXTFileAgenciaEmpregos(List<AgenciaEmpregos> list,String path) throws Exception {
		BufferedWriter out = new BufferedWriter(new FileWriter(path));
		for (AgenciaEmpregos agenciaEmpregos : list) {
			// cidades
			out.write(agenciaEmpregos.getAgencia());
			out.write(" - ");
			
			out.write(agenciaEmpregos.getEmail());
			out.write(" - ");
			
			out.newLine();
		}
		out.close();
	}
	
	
}
